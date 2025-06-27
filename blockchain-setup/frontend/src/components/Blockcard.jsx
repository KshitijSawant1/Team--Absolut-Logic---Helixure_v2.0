import React from "react";
import getBlockColor from "../utils/getBlockColor";
import getTextColorFromBg from "../utils/getTextColorFromBg";

const BlockCard = ({
  id,
  sr = id,
  title,
  message,
  hash,
  previousHash,
  gas = "N/A",
  timestamp,
}) => {
  const { label, color } = getBlockColor();
  const textColor = getTextColorFromBg(color);

  return (
    <div
      className="w-72 max-w-full bg-white border-2 rounded-lg shadow-md hover:shadow-lg transition-all"
      style={{ borderColor: color }}
    >
      <div
        className="w-full h-5 rounded-t-md"
        style={{ backgroundColor: color }}
      ></div>
      <div className="p-4 pt-3">
        <h2 className="text-lg font-bold mb-1">Block {sr}</h2>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-xs text-gray-600 mb-2 break-words">{message}</p>

        <div className="text-xs mb-1">
          <strong>Hash:</strong>{" "}
          <span className="font-mono">
            {hash.slice(0, 20)}...{hash.slice(-5)}
          </span>
        </div>
        <div className="text-xs mb-1">
          <strong>Prev:</strong>{" "}
          <span className="font-mono">
            {previousHash.slice(0, 20)}...{previousHash.slice(-5)}
          </span>
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

        <div className="text-xs bg-gray-50 text-gray-800 p-2 rounded border border-gray-200 mt-2">
          <strong>Data:</strong> Empty
        </div>
      </div>
    </div>
  );
};

export default BlockCard;
