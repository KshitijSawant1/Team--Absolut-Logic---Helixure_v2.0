import React, { useState } from "react";
import InstructionModal from "./private_space/InstructionModal";
import SharedInstructionModal from "./shared_space/SharedInstructionModal";
import BlockchainInstructionModal from "./blockchain_space/BlockchainInstructionalPrompt";
import BlockchainInstructionalDrawer from "./blockchain_space/BlockchainInstructionalDrawer";
import SlideBlockGame from "./mini_games/SlideBlockGame";
import DragDropSortGame from "./mini_games/DragSortGame";
import PinUnlockGame from "./mini_games/PinUnlockGame";
import IconMatchCaptcha from "./mini_games/IconMatchCaptcha";
import PageNotFound from "./PageNotFound";

const ResultPage = () => {
  const [showPrivateModal, setShowPrivateModal] = useState(false);
  const [showSharedModal, setShowSharedModal] = useState(false);
  const [showBlockchainModal, setShowBlockchainModal] = useState(false);
  const [showBlockchainDrawer, setShowBlockchainDrawer] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showSortGame, setShowSortGame] = useState(false);
  const [showPatternGame, setShowPatternGame] = useState(false);
  const [showEmojiGame, setShowEmojiGame] = useState(false);

  const isAnyGameActive =
    showGame || showSortGame || showPatternGame || showEmojiGame;

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">
        You're in the result zone!
      </h2>

      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => setShowPrivateModal(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Show Instructions
        </button>
        <button
          onClick={() => setShowSharedModal(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Show Shared Instructions
        </button>
        <button
          onClick={() => setShowBlockchainModal(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Show Blockchain Instructions
        </button>
        <button
          onClick={() => setShowBlockchainDrawer(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Show Blockchain Instructions Drawer
        </button>
      </div>

      {showPrivateModal && (
        <InstructionModal onClose={() => setShowPrivateModal(false)} />
      )}
      {showSharedModal && (
        <SharedInstructionModal onClose={() => setShowSharedModal(false)} />
      )}
      {showBlockchainModal && (
        <BlockchainInstructionModal
          onClose={() => setShowBlockchainModal(false)}
        />
      )}
      {showBlockchainDrawer && (
        <BlockchainInstructionalDrawer
          onClose={() => setShowBlockchainDrawer(false)}
        />
      )}
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => {
            setShowGame(true);
            setShowSortGame(false);
          }}
          disabled={isAnyGameActive}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Start Slide Block Game
        </button>
        <button
          onClick={() => {
            setShowSortGame(true);
            setShowGame(false);
          }}
          disabled={isAnyGameActive}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Launch Drag-and-Drop Sort Game
        </button>
        <button
          onClick={() => setShowPatternGame(true)}
          disabled={isAnyGameActive}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 disabled:opacity-50"
        >
          Launch Pin Unlock Game
        </button>
        <button
          onClick={() => setShowEmojiGame(true)}
          disabled={isAnyGameActive}
          className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700 disabled:opacity-50"
        >
          Launch Emoji Match CAPTCHA
        </button>
      </div>

      {showGame && (
        <SlideBlockGame
          onComplete={() => setShowGame(false)}
          onClose={() => setShowGame(false)}
        />
      )}
      {showSortGame && (
        <DragDropSortGame
          onComplete={() => setShowSortGame(false)}
          onClose={() => setShowSortGame(false)}
        />
      )}
      {showPatternGame && (
        <PinUnlockGame
          onComplete={() => {
            console.log("Pattern matched successfully!");
            setShowPatternGame(false);
          }}
          onClose={() => setShowPatternGame(false)}
        />
      )}
      {showEmojiGame && (
        <IconMatchCaptcha
          onComplete={() => {
            console.log("🎯 Correct emoji selected!");
            setShowEmojiGame(false);
          }}
          onClose={() => setShowEmojiGame(false)}
        />
      )}

      <PageNotFound />
    </div>
  );
};

export default ResultPage;
