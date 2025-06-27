import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import BlockChain from "../../artifacts/contracts/BlockChain.sol/BlockChain.json";
import BlockCard from "./components/Blockcard";

export default function App() {
  const defaultAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  const [contractAddress, setContractAddress] = useState(defaultAddress || "");
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [blockGasMap, setBlockGasMap] = useState({});
  const [form, setForm] = useState({
    title: "",
    message: "",
    blockType: "open",
  });

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask");
    try {
      const providerInstance = new ethers.BrowserProvider(window.ethereum);
      setProvider(providerInstance);
      await providerInstance.send("eth_requestAccounts", []);
      const signer = await providerInstance.getSigner();
      const userAccount = await signer.getAddress();
      setAccount(userAccount);

      if (!ethers.isAddress(contractAddress)) {
        alert("Invalid contract address");
        return;
      }

      const contractInstance = new ethers.Contract(
        contractAddress,
        BlockChain.abi,
        signer
      );
      setContract(contractInstance);
    } catch (err) {
      console.error("Wallet connection failed", err);
      alert("Wallet connection failed");
    }
  };

  const fetchBlocks = async () => {
    if (!contract) return;
    try {
      const length = Number(await contract.getLength());
      const temp = [];

      for (let i = 0; i < length; i++) {
        const block = await contract.getBlock(i);
        temp.push({
          id: Number(block[0]),
          title: block[1],
          message: block[2],
          blockType: block[3],
          previousHash: block[4],
          hash: block[5],
          timestamp: Number(block[6]) * 1000,
          gas: blockGasMap[i] || "N/A",
        });
      }

      setBlocks(temp);
    } catch (err) {
      console.error("Failed to fetch blocks", err);
    }
  };

  const addBlock = async (e) => {
    e.preventDefault();
    if (!contract || !provider)
      return alert("Contract or provider not connected");

    try {
      console.clear();
      console.log("🚀 addBlock called");

      const prevHash = blocks.length > 0 ? blocks[blocks.length - 1].hash : "0";
      const tx = await contract.addBlock(
        form.title,
        form.message,
        form.blockType,
        prevHash
      );

      const receipt = await tx.wait();
      const gasUsed = receipt.gasUsed;
      const txDetails = await provider.getTransaction(receipt.hash);
      const gasPrice = txDetails.gasPrice;
      const gasCostWei = gasUsed * gasPrice;
      const gasCostEth = ethers.formatEther(gasCostWei.toString());

      console.log("✅ Transaction hash:", receipt.hash);
      console.log("✅ Gas used:", gasUsed.toString());
      console.log("✅ Gas price (wei):", gasPrice.toString());
      console.log("✅ Gas cost (ETH):", gasCostEth);

      const length = Number(await contract.getLength());
      const newBlockId = length - 1;

      // Update gas map then fetch
      setBlockGasMap((prev) => ({
        ...prev,
        [newBlockId]: `${parseFloat(gasCostEth).toFixed(6)} ETH`,
      }));

      setTimeout(fetchBlocks, 100); // slight delay to ensure map sets
      setForm({ title: "", message: "", blockType: "open" });
    } catch (err) {
      console.error("Transaction failed", err);
      alert("Transaction failed");
    }
  };

  useEffect(() => {
    if (contract) fetchBlocks();
  }, [contract]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Helixure Blockchain V2</h1>
      <input
        type="text"
        placeholder="Enter contract address"
        value={contractAddress}
        onChange={(e) => setContractAddress(e.target.value)}
        className="w-full border rounded p-2 mb-4"
      />
      {!account ? (
        <button
          onClick={connectWallet}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Connect MetaMask
        </button>
      ) : (
        <>
          <p className="mb-4 text-sm text-gray-700">🔗 Connected: {account}</p>
          <form onSubmit={addBlock} className="space-y-2 mb-6">
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              className="w-full border rounded p-2"
            />
            <input
              type="text"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full border rounded p-2"
            />
            <div className="flex space-x-4">
              {["open", "private"].map((type) => (
                <label key={type} className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="blockType"
                    value={type}
                    checked={form.blockType === type}
                    onChange={() => setForm({ ...form, blockType: type })}
                  />
                  <span className="capitalize">{type}</span>
                </label>
              ))}
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add Block
            </button>
          </form>

          <div className="space-y-2">
            {blocks.map((block) => (
              <BlockCard key={block.id} {...block} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
