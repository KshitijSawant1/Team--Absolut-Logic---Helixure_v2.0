// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BlockChain {
    struct BlockStruct {
        uint id;
        string title;
        string message;
        string blockType; // 👈 added this
        string previousHash;
        string hash;
        uint timestamp;
    }

    BlockStruct[] private blocks;

constructor() {
    string memory genesisHash = toHex(keccak256(
        abi.encodePacked("Genesis", "Initial Block", "open", "0", block.timestamp, uint256(0))
    ));

    blocks.push(BlockStruct({
        id: 0,
        title: "Genesis",
        message: "Initial Block",
        blockType: "open",
        previousHash: "0",
        hash: genesisHash,
        timestamp: block.timestamp
    }));
}


    function addBlock(string memory title, string memory message, string memory blockType, string memory prevHash) public {
        string memory newHash = toHex(keccak256(
            abi.encodePacked(title, message, blockType, prevHash, block.timestamp, blocks.length)
        ));

        blocks.push(BlockStruct({
            id: blocks.length,
            title: title,
            message: message,
            blockType: blockType, // 👈 added this
            previousHash: prevHash,
            hash: newHash,
            timestamp: block.timestamp
        }));
    }

    function getBlock(uint i) public view returns (
        uint id,
        string memory title,
        string memory message,
        string memory blockType,
        string memory previousHash,
        string memory hash,
        uint timestamp
    ) {
        require(i < blocks.length, "Block index out of bounds");
        BlockStruct storage b = blocks[i];
        return (b.id, b.title, b.message, b.blockType, b.previousHash, b.hash, b.timestamp);
    }

    function getLength() public view returns (uint) {
        return blocks.length;
    }

    function toHex(bytes32 data) private pure returns (string memory) {
        bytes memory alphabet = "0123456789abcdef";
        bytes memory str = new bytes(64);
        for (uint i = 0; i < 32; i++) {
            str[i*2] = alphabet[uint(uint8(data[i] >> 4))];
            str[1 + i*2] = alphabet[uint(uint8(data[i] & 0x0f))];
        }
        return string(str);
    }
}
