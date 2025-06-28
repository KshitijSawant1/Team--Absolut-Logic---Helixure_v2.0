import React, { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import BlockChain from "../../artifacts/contracts/BlockChain.sol/BlockChain.json";
import BlockchainBlockCard from "./BlockchainBlockCard";
import BlockchainBlockFlow from "./BlockchainBlockFlow";
import BlockchainCreateBlockDrawer from "./BlockchainCreateBlockDrawer";
import BlockchainInstructionDrawer from "./BlockchainInstructionalDrawer";
import BlockchainInstructionPrompt from "./BlockchainInstructionalPrompt";
import BlockchainSearchModal from "./BlockchainSearchModal";

import { ReactFlowProvider } from "reactflow";
import { supabase } from "../../supabaseClient";

export default function BlockchainWhiteboard() {
  const defaultAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  const [contractAddress] = useState(defaultAddress || "");
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [viewMode, setViewMode] = useState("cards");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [txLoading, setTxLoading] = useState(false);
  const [totalGasUsed, setTotalGasUsed] = useState("0.000000");
  const [showInstructionDrawer, setShowInstructionDrawer] = useState(false);
  const [showInstructionPrompt, setShowInstructionPrompt] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visitedWhiteboard");
    if (!hasVisited) {
      setShowInstructionPrompt(true);
      localStorage.setItem("visitedWhiteboard", "true");
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }
    try {
      const providerInstance = new ethers.BrowserProvider(window.ethereum);
      setProvider(providerInstance);
      await providerInstance.send("eth_requestAccounts", []);
      const signer = await providerInstance.getSigner();
      const userAccount = await signer.getAddress();
      setAccount(userAccount);

      const contractInstance = new ethers.Contract(
        contractAddress,
        BlockChain.abi,
        signer
      );
      setContract(contractInstance);
    } catch (err) {
      console.error("❌ Wallet connection failed", err);
      alert("Wallet connection failed");
    }
  };

  const fetchAllBlocks = async () => {
    if (!contract) return;
    try {
      const length = Number(await contract.getLength());
      if (!length) {
        setBlocks([]);
        setTotalGasUsed("0.000000");
        console.log("ℹ️ No blocks found");
        return;
      }

      const { data: gasData } = await supabase
        .from("block_gas_data")
        .select("id, gas");

      const gasMap = {};
      (gasData || []).forEach((row) => {
        gasMap[row.id] = row.gas;
      });

      const temp = [];
      let totalGas = 0;
      for (let i = 0; i < length; i++) {
        const block = await contract.getBlock(i);
        const gas = parseFloat(gasMap[i]) || 0;
        totalGas += gas;

        temp.push({
          id: Number(block[0]),
          sr: Number(block[0]),
          title: block[1],
          message: block[2],
          previousHash: block[3],
          hash: block[4],
          timestamp: Number(block[5]) * 1000,
          gas: gasMap[i] || "N/A",
        });
      }
      setBlocks(temp);
      setTotalGasUsed(totalGas.toFixed(6));
    } catch (err) {
      console.error("❌ Fetch failed", err);
    }
  };

  const addNewBlock = async (e, form) => {
    e.preventDefault();
    if (!contract || !provider) {
      alert("❌ Contract or provider not connected");
      return;
    }

    try {
      setTxLoading(true);
      const prevHash = blocks.length ? blocks[blocks.length - 1].hash : "0";

      const tx = await contract.addBlock(form.title, form.message, prevHash);
      console.log("➡ MetaMask tx submitted:", tx.hash);

      const receipt = await tx.wait();
      console.log("✅ Tx mined:", receipt);

      const gasUsed = receipt.gasUsed;
      const txDetails = await provider.getTransaction(receipt.hash);
      const gasPrice = txDetails.gasPrice;
      const gasCostWei = gasUsed * gasPrice;
      const gasCostEth = parseFloat(
        ethers.formatEther(gasCostWei.toString())
      ).toFixed(6);

      const length = Number(await contract.getLength());
      const newId = length - 1;

      await supabase.from("block_gas_data").insert([
        {
          id: newId,
          user_address: account,
          title: form.title,
          message: form.message,
          prev_hash: prevHash,
          hash: txDetails.hash,
          timestamp: new Date().toISOString(),
          gas: gasCostEth,
        },
      ]);

      console.log(`✅ Block ${newId} saved with gas ${gasCostEth}`);
      await fetchAllBlocks();
      setDrawerOpen(false);
    } catch (err) {
      console.error("❌ Transaction failed or rejected", err);
      alert(
        `Transaction failed: ${err?.reason || err?.message || "Unknown error"}`
      );
    } finally {
      setTxLoading(false);
    }
  };

  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const updatePosition = (id, x, y) => {
    const cardWidth = 288;
    const cardHeight = 160;
    const clampedX = Math.max(0, Math.min(containerSize.width - cardWidth, x));
    const clampedY = Math.max(
      0,
      Math.min(containerSize.height - cardHeight, y)
    );

    setBlocks((prev) =>
      prev.map((block) =>
        block.id === id ? { ...block, x: clampedX, y: clampedY } : block
      )
    );
  };

  useEffect(() => {
    if (contract) fetchAllBlocks();
  }, [contract]);
  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen bg-gray-100 overflow-hidden"
    >
      {/* MetaMask Connect / Status */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50">
        <div
          className="relative inline-block shadow-md"
          style={{
            background: account
              ? "white"
              : "linear-gradient(90deg, #3b82f6, #9333ea)",
            clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
            padding: "0.5rem 1.5rem",
            width: "250px",
          }}
        >
          {account ? (
            <p
              onClick={() => {
                navigator.clipboard.writeText(account);
                alert("Address copied to clipboard!");
              }}
              title={account}
              className="text-sm font-medium text-black flex items-center gap-1 justify-center cursor-pointer hover:text-blue-500"
            >
              Connected: {`${account.slice(0, 6)}...${account.slice(-4)}`}
            </p>
          ) : (
            <button
              onClick={connectWallet}
              className="w-full font-semibold text-white rounded-lg transition"
            >
              Connect MetaMask
            </button>
          )}
        </div>
      </div>

      {/* MAIN VIEW */}
      {viewMode === "cards" ? (
        <div className="absolute inset-0">
          {blocks.length === 0 ? (
            <p className="text-center mt-10 text-gray-500">
              No blocks found. Create a new block to get started!
            </p>
          ) : (
            blocks.map((block, idx) => (
              <div
                key={block.id}
                style={{
                  position: "absolute",
                  left: `${
                    block.x !== undefined ? block.x : (idx % 5) * 300 + 20
                  }px`,
                  top: `${
                    block.y !== undefined
                      ? block.y
                      : Math.floor(idx / 5) * 320 + 60
                  }px`,
                }}
              >
                <BlockchainBlockCard
                  {...block}
                  updatePosition={updatePosition}
                  blocks={blocks}
                />
              </div>
            ))
          )}
        </div>
      ) : (
        <ReactFlowProvider>
          <BlockchainBlockFlow blocks={blocks} />
        </ReactFlowProvider>
      )}
      {/* Gas Meter */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50">
        <div
          className="bg-white text-gray-800 font-mono px-6 py-2 text-sm shadow-md"
          style={{
            clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
            WebkitClipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          }}
        >
          Gas Used:{" "}
          <span className="font-bold text-blue-600">{totalGasUsed} ETH</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <button
            data-tooltip-target="tooltip-info"
            onClick={() => setShowInstructionDrawer(true)}
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="sr-only">info</span>
          </button>
          <div
            id="tooltip-info"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
          >
            Info
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <button
            data-tooltip-target="tooltip-search"
            type="button"
            disabled={!account}
            onClick={() => setShowSearchModal(true)}
            className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group
              ${!account ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z" />
              <path
                fillRule="evenodd"
                d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="sr-only">Search</span>
          </button>
          <div
            id="tooltip-search"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
          >
            Search
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={() => setDrawerOpen(true)}
              data-tooltip-target="tooltip-new"
              type="button"
              disabled={!account}
              className={`inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800
                                   ${
                                     !account
                                       ? "opacity-50 cursor-not-allowed"
                                       : ""
                                   }`}
            >
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
              <span className="sr-only">New item</span>
            </button>
          </div>
          <div
            id="tooltip-new"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
          >
            Create New Block
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <button
            onClick={() => setViewMode(viewMode === "cards" ? "flow" : "cards")}
            type="button"
            data-tooltip-target="tooltip-view"
            disabled={!account}
            className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group
                       ${!account ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {viewMode === "cards" ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 3a3 3 0 0 0-1 5.83v6.34a3.001 3.001 0 1 0 2 0V15a2 2 0 0 1 2-2h1a5.002 5.002 0 0 0 4.927-4.146A3.001 3.001 0 0 0 16 3a3 3 0 0 0-1.105 5.79A3.001 3.001 0 0 1 12 11h-1c-.729 0-1.412.195-2 .535V8.83A3.001 3.001 0 0 0 8 3Z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.414A2 2 0 0 0 20.414 6L18 3.586A2 2 0 0 0 16.586 3H5Zm10 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7V5h8v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="sr-only">Switch View</span>
          </button>

          <div
            id="tooltip-view"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700"
          >
            {viewMode === "cards" ? "To Flow View" : "To Cards View"}
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <button
            type="button"
            data-tooltip-target="tooltip-Assistaint"
            onClick={() => alert("Future Aspect Assitant Integration")}
            className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className={`w-6 h-6 dark:text-white`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.8638 3.49613C12.6846 3.18891 12.3557 3 12 3s-.6846.18891-.8638.49613l-3.49998 6c-.18042.30929-.1817.69147-.00336 1.00197S8.14193 11 8.5 11h7c.3581 0 .6888-.1914.8671-.5019.1784-.3105.1771-.69268-.0033-1.00197l-3.5-6ZM4 13c-.55228 0-1 .4477-1 1v6c0 .5523.44772 1 1 1h6c.5523 0 1-.4477 1-1v-6c0-.5523-.4477-1-1-1H4Zm12.5-1c-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5 4.5-2.0147 4.5-4.5-2.0147-4.5-4.5-4.5Z" />
            </svg>

            <span className="sr-only">Assistaint</span>
          </button>
          <div
            id="tooltip-Assistaint"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Assistaint
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
      <BlockchainCreateBlockDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onAddBlock={addNewBlock}
        loading={txLoading}
      />
      <BlockchainInstructionDrawer
        isOpen={showInstructionDrawer}
        onClose={() => setShowInstructionDrawer(false)}
      />
      {showInstructionPrompt && (
        <BlockchainInstructionPrompt
          onClose={() => setShowInstructionPrompt(false)}
        />
      )}
      {showSearchModal && (
        <BlockchainSearchModal
          isOpen={showSearchModal}
          onClose={() => setShowSearchModal(false)}
          blocks={blocks} // 👈 from your useState holding all fetched blocks
        />
      )}
    </div>
  );
}
