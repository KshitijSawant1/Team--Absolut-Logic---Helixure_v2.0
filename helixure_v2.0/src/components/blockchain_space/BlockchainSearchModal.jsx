import React, { useState } from "react";
import BlockchainBlockCardPreview from "./BlockchainBlockCardPreview";
import { supabase } from "../../supabaseClient";

const colorMap = {
  blue: { light: "#76A9FA", medium: "#3F83F8", dark: "#1A56DB" },
  green: { light: "#31C48D", medium: "#0E9F6E", dark: "#046C4E" },
  red: { light: "#F98080", medium: "#F05252", dark: "#C81E1E" },
  purple: { light: "#AC94FA", medium: "#9061F9", dark: "#6C2BD9" },
  orange: { light: "#FDBA74", medium: "#FB923C", dark: "#EA580C" },
  indigo: { light: "#8DA2FB", medium: "#6875F5", dark: "#5145CD" },
  pink: { light: "#F17EB8", medium: "#E74694", dark: "#BF125D" },
};

const BlockchainSearchModal = ({ isOpen, onClose, blocks = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [filteredBlocks, setFilteredBlocks] = useState([]);

  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    let filtered = [...blocks]; // ✅ correct, this uses the passed-in prop

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (block) =>
          block.title?.toLowerCase().includes(query) ||
          block.message?.toLowerCase().includes(query) ||
          block.hash?.toLowerCase().includes(query)
      );
    }

    if (startDate) {
      const start = new Date(startDate).getTime();
      filtered = filtered.filter((block) => block.timestamp >= start);
    }

    if (endDate) {
      const end = new Date(`${endDate}T23:59:59`).getTime();
      filtered = filtered.filter((block) => block.timestamp <= end);
    }

    if (!filtered.length) {
      setBlocks([]);
      setShowPreview(false);
      setLoading(false);
      return alert("No matching blocks found.");
    }

    setFilteredBlocks(filtered);

    setShowPreview(true);
    setLoading(false);
  };

  const totalGas = filteredBlocks.reduce(
    (sum, block) => sum + parseFloat(block.gas || 0),
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/30">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md shadow-lg p-6 relative max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Search Blockchain Blocks
          </h2>
          <button
            onClick={() => {
              setSearchQuery("");
              setShowPreview(false);
              setStartDate("");
              setEndDate("");
              onClose(); // ✅ this will now execute
            }}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white text-lg"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
              Block Title / Hash / Description
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-600 dark:text-white dark:border-gray-500"
              placeholder="Search block title, description, or hash"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-600 dark:text-white dark:border-gray-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-600 dark:text-white dark:border-gray-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg text-sm font-medium"
          >
            Search Block
          </button>
        </form>

        {loading && (
          <div className="text-center text-sm text-gray-500 dark:text-gray-300 mt-4">
            Searching...
          </div>
        )}

        <div className="mt-3 text-sm text-center text-gray-800 dark:text-white bg-green-100 dark:bg-green-900 p-2 rounded">
          <strong>Total Gas:</strong> {totalGas.toFixed(6)}
        </div>

        {showPreview && filteredBlocks.length > 0 && (
          <div className="mt-6">
            <h3 className="text-md font-semibold mb-4 text-gray-800 dark:text-white">
              Matching Blocks
            </h3>
            <div className="flex flex-wrap gap-4 justify-center max-h-[70vh] overflow-y-auto pr-2">
              {filteredBlocks.map((block, index) => {
                console.log("👉 BlockCard Data:", block);

                return (
                  <BlockchainBlockCardPreview
                    key={block.id}
                    sr={block.sr || index + 1}
                    title={block.title}
                    message={block.message}
                    hash={block.hash}
                    previousHash={block.previousHash}
                    gas={parseFloat(block.gas)?.toFixed(6) || "0.000000"} // clean 'ETH' suffix
                    timestamp={block.timestamp}
                    hue_color={block.hue_color}
                    data={block.block_files?.[0]?.name || "Empty"}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlockchainSearchModal;
