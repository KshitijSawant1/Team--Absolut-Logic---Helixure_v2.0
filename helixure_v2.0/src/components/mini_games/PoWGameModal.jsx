import React, { useState, useEffect } from "react";
import SliderGame from "./SlideBlockGame";
import MathCaptcha from "./IconMatchCaptcha";
import PinMatch from "./PinUnlockGame";
import SortGame from "./DragSortGame";

const gameMap = {
  SlideBlockGame: SliderGame,
  IconMatchCaptcha: MathCaptcha,
  PinUnlockGame: PinMatch,
  DragSortGame: SortGame,
};

const gameNames = Object.keys(gameMap);
const games = Object.values(gameMap);

const PoWGameModal = ({ isOpen, onSuccess, onClose }) => {
  const [GameComponent, setGameComponent] = useState(null);
  const [selectedGameName, setSelectedGameName] = useState("");

  useEffect(() => {
    if (isOpen) {
      const randomIndex = Math.floor(Math.random() * games.length);
      setGameComponent(() => games[randomIndex]);
      setSelectedGameName(gameNames[randomIndex]);
    }
  }, [isOpen]);

  if (!isOpen || !GameComponent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <div className="bg-transparent p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4 text-center">
          Complete the PoW Challenge
        </h2>

        <GameComponent
          onComplete={(gas) => onSuccess(gas, selectedGameName)}
          onSuccess={(gas) => onSuccess(gas, selectedGameName)}
          onDone={(gas) => onSuccess(gas, selectedGameName)}
        />

        <button
          onClick={onClose}
          className="mt-4 block mx-auto text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PoWGameModal;
