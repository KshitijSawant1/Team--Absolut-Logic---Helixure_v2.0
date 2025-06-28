import React, { useState } from "react";

const BlockchainCreateBlockDrawer = ({
  isOpen,
  onClose,
  onAddBlock,
  loading,
}) => {
  const [form, setForm] = useState({ title: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.message) {
      alert("❌ Title and message are required.");
      return;
    }
    await onAddBlock(e, form);
  };

  const resetForm = () => {
    setForm({ title: "", message: "" });
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-end">
        <div className="w-[24rem] h-screen bg-white dark:bg-gray-900 shadow-lg overflow-y-auto p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-100">
              ADD BLOCKCHAIN BLOCK
            </h2>
            <button
              onClick={resetForm}
              className="text-gray-400 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="block-title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Block Title
              </label>
              <input
                type="text"
                id="block-title"
                value={form.title}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Enter block title"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="block-message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Block Message
              </label>
              <textarea
                id="block-message"
                value={form.message}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, message: e.target.value }))
                }
                rows="4"
                required
                placeholder="Enter block message..."
                className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white ${
                loading ? "bg-blue-300" : "bg-blue-700 hover:bg-blue-800"
              } font-medium rounded-lg text-sm px-5 py-2.5`}
            >
              {loading ? "Creating Block..." : "Create Block"}
            </button>
          </form>
        </div>
        
      </div>
    )
  );
};

export default BlockchainCreateBlockDrawer;
