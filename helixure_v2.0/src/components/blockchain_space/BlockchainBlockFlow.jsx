import React, { useMemo } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import CustomBlockNode from "./BlockchainCustomeBlockNode";

const BlockchainBlockFlow = ({ blocks }) => {
  const CARD_WIDTH = 300;
  const CARD_HEIGHT = 260;
  const CARDS_PER_ROW = 5;

  // ⚡ Nodes for ReactFlow
  const nodes = useMemo(() => {
    return blocks.map((block, index) => ({
      id: block.id.toString(),
      type: "custom",
      position: {
        x: (index % CARDS_PER_ROW) * CARD_WIDTH * 1.2,
        y: Math.floor(index / CARDS_PER_ROW) * CARD_HEIGHT * 1.5,
      },
      data: {
        id: block.id,
        sr: block.id,
        title: block.title,
        message: block.message,
        hash: block.hash,
        previousHash: block.previousHash,
        gas: block.gas,
        timestamp: block.timestamp,
      },
    }));
  }, [blocks]);

  // ⚡ Edges for hash links
  const edges = useMemo(() => {
    return blocks
      .map((block) => {
        const parent = blocks.find((b) => b.hash === block.previousHash);
        if (!parent) return null;

        return {
          id: `e${parent.id}-${block.id}`,
          source: parent.id.toString(),
          sourceHandle: "b",
          target: block.id.toString(),
          targetHandle: "a",
          type: "smoothstep",
          animated: true,
          markerEnd: { type: "arrowclosed" },
          style: { stroke: "#3B82F6", strokeWidth: 2 },
        };
      })
      .filter(Boolean);
  }, [blocks]);

  const nodeTypes = useMemo(() => ({ custom: CustomBlockNode }), []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        panOnDrag
        zoomOnScroll
        zoomOnPinch
        panOnScroll
        elementsSelectable
        selectNodesOnDrag
        nodesDraggable
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      >
        <Background gap={16} />
        <Controls position="top-left" />
        <MiniMap
          position="top-right"
          nodeColor={() => "#A0AEC0"}
          style={{
            backgroundColor: "#f5f5f5",
            border: "1px solid #D1D5DB",
            borderRadius: "2px",
          }}
        />
      </ReactFlow>
    </div>
  );
};

export default BlockchainBlockFlow;
