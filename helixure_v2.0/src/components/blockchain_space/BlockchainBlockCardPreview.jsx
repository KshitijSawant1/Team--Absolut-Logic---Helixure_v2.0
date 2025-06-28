import React from "react";
import getTextColorFromBg from "../../utils/getTextColorFromBg";
import getBlockColor from "../../utils/getBlockColorBlockchain";

const BlockCardPreview = ({
  sr = "-",
  title = "Untitled Block",
  message = "No message provided.",
  hash = "0x-hash-placeholder",
  previousHash = "0x-prevhash-placeholder",
  gas = "N/A",
  timestamp,
  hue_color,
  data = "No file uploaded",
}) => {
  const { label, color } = getBlockColor(timestamp);
  const hueLabel = label.replace("bg-", "");
  const textColor = getTextColorFromBg(color);

  return (
    <div
      className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md"
      style={{ border: `2px solid ${color}` }}
    >
      <div
        className="w-full h-5 rounded-t-md transition-all"
        style={{ backgroundColor: color }}
      />

      <div className="p-4 pt-3">
        <h2 className="text-md font-bold text-gray-800 mb-1">
          Block <span className="text-gray-500">{sr}</span>
        </h2>

        <div className="mb-2">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{message}</p>
        </div>

        <div className="text-xs mb-2 break-words">
          <div className="mb-1">
            <strong>Hash:</strong> <span className="text-gray-700">{hash}</span>
          </div>
          <div>
            <strong>Prev:</strong>{" "}
            <span className="text-gray-700">{previousHash}</span>
          </div>
        </div>

        <div className="text-sm text-gray-700 mb-2">
          <strong>Gas:</strong>{" "}
          <span className="text-green-500 font-mono">
            {gas !== undefined && gas !== null && !isNaN(gas)
              ? Number(gas).toFixed(6)
              : gas}
          </span>
        </div>

        {timestamp && (
          <div className="text-sm text-gray-700 mb-2">
            <strong>Timestamp:</strong>{" "}
            <span className="text-gray-600 ml-1">
              {new Date(timestamp).toLocaleString()}
            </span>
          </div>
        )}

        <span
          className="px-2 py-0.5 rounded text-xs font-mono"
          style={{
            backgroundColor: color,
            color: textColor,
          }}
        >
          {hueLabel}
        </span>

        <div className="text-sm bg-gray-50 text-gray-800 p-2 rounded border border-gray-200 mt-2">
          <strong>Data:</strong> <code>{data}</code>
        </div>
      </div>
    </div>
  );
};

export default BlockCardPreview;
