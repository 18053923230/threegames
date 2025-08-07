// project/src/components/GamePiece.tsx
import React from 'react';
import { Tile } from '@/lib/game';
import { FaHeart } from 'react-icons/fa';

type GamePieceProps = {
  tile: Tile;
  onClick: () => void;
  selected: boolean;
};

const TILE_COLORS = [
  'text-red-500',
  'text-yellow-500',
  'text-green-500',
  'text-blue-500',
  'text-indigo-500',
  'text-purple-500',
];

const GamePiece: React.FC<GamePieceProps> = ({ tile, onClick, selected }) => {
  return (
    <div
      className={`w-16 h-16 flex items-center justify-center text-4xl cursor-pointer rounded-lg ${TILE_COLORS[tile.type]} ${selected ? 'border-4 border-white' : ''}`}
      onClick={onClick}
    >
      <FaHeart />
    </div>
  );
};

export default GamePiece;
