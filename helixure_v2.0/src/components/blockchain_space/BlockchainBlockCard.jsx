import React, { useRef, useEffect, useState } from "react";
import getBlockColor from "../../utils/getBlockColorBlockchain";
import getTextColorFromBg from "../../utils/getTextColorFromBg";

const BlockchainBlockCard = ({
  id,
  sr = id,
  x = 0,
  y = 0,
  updatePosition = () => {},
  blocks = [],
  title = "Untitled Block",
  message = "No message provided.",
  hash = "0x-hash-placeholder",
  previousHash = "0x-prevhash-placeholder",
  gas = "N/A",
  timestamp,
  isFlowMode = false,
}) => {
  const cardRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const { label, color } = getBlockColor(timestamp);

  const textColor = getTextColorFromBg(color);

  const cardPositionStyle = isFlowMode
    ? {}
    : {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
      };

  const isOverlapping = (newX, newY) => {
    const width = 288;
    const height = 160;
    const padding = 2;
    return blocks.some((block) => {
      if (block.id === id) return false;
      return (
        newX < block.x + width + padding &&
        newX + width + padding > block.x &&
        newY < block.y + height + padding &&
        newY + height + padding > block.y
      );
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newX = e.clientX - offset.current.x;
      const newY = e.clientY - offset.current.y;
      if (!isOverlapping(newX, newY)) {
        updatePosition(id, newX, newY);
      }
    };

    const handleMouseUp = () => setIsDragging(false);

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const newX = touch.clientX - offset.current.x;
      const newY = touch.clientY - offset.current.y;
      if (!isOverlapping(newX, newY)) {
        updatePosition(id, newX, newY);
      }
    };

    const handleTouchEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, id, updatePosition, blocks]);

  const startDrag = (e) => {
    if (isFlowMode) return;
    setIsDragging(true);
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX || e.touches?.[0]?.clientX;
    const clientY = e.clientY || e.touches?.[0]?.clientY;
    offset.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  return (
    <div
      ref={cardRef}
      onMouseDown={!isFlowMode ? startDrag : undefined}
      onTouchStart={!isFlowMode ? startDrag : undefined}
      className={`w-72 max-w-full bg-white border-2 rounded-lg shadow-md hover:shadow-lg transition-all select-none ${
        isFlowMode ? "" : "cursor-move absolute"
      }`}
      style={{
        ...cardPositionStyle,
        borderColor: color,
        width: "18rem", // force 288px
        minWidth: "18rem",
        maxWidth: "18rem",
        height: "21rem",
      }}
    >
      <div
        className="w-full h-5 rounded-t"
        style={{ backgroundColor: color }}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">Block {sr}</h2>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">
          {message.length > 30 ? `${message.slice(0, 50)}...` : message}
        </p>

        <div className="text-xs mb-1">
          <strong className="mr-1">Hash:</strong>
          <div
            className="font-mono text-gray-900 truncate max-w-[210px]"
            title={hash}
          >
            {hash}
          </div>
        </div>

        <div className="text-xs mb-1">
          <strong className="mr-1">Prev:</strong>
          <div
            className="font-mono text-gray-900 truncate max-w-[210px]"
            title={previousHash}
          >
            {previousHash}
          </div>
        </div>

        <div className="text-xs mb-1">
          <strong>Gas:</strong>{" "}
          <span
            className={`font-mono px-2 py-0.5 rounded-full text-[10px] ${
              gas !== "N/A"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {gas}
          </span>
        </div>

        <div className="text-xs mb-1">
          <strong>Timestamp:</strong>{" "}
          <span className="text-gray-500">
            {timestamp ? new Date(timestamp).toLocaleString() : "N/A"}
          </span>
        </div>

        <div className="mt-2">
          <span
            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold"
            style={{
              backgroundColor: color,
              color: textColor,
            }}
          >
            {label}
          </span>
        </div>

        <div className="mt-2 text-xs bg-gray-50 text-gray-800 p-2 rounded border border-gray-200">
          <strong>Data:</strong> Empty
        </div>
      </div>
    </div>
  );
};

export default BlockchainBlockCard;
