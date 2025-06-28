import React from "react";
import { Handle } from "reactflow";
import BlockchainBlockCard from "./BlockchainBlockCard";

const BlockchainCustomBlockNode = ({ data }) => {
  return (
    <div
      style={{
        width: 300,
        position: "relative",
        pointerEvents: "all",
        zIndex: 10,
      }}
    >
      {/* 🔵 Incoming handle */}
      <Handle
        type="target"
        position="top"
        id="a"
        style={{ background: "#10B981", width: 12, height: 12 }}
      />

      {/* 🧱 Custom blockchain block content */}
      <BlockchainBlockCard
        id={data.id}
        sr={data.sr}
        title={data.title}
        message={data.message}
        hash={data.hash}
        previousHash={data.previousHash}
        gas={data.gas}
        timestamp={data.timestamp}
        isFlowMode={true}
      />

      {/* 🔴 Outgoing handle */}
      <Handle
        type="source"
        position="bottom"
        id="b"
        style={{ background: "#EF4444", width: 12, height: 12 }}
      />
    </div>
  );
};

export default BlockchainCustomBlockNode;
