// project/src/components/GameBoard.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Board, Coords, createBoard, swapTiles, checkMatches, removeMatches, fillBoard, getScore } from '@/lib/game';
import GamePiece from './GamePiece';
import Score from './Score';

const GameBoard: React.FC = () => {
  const [board, setBoard] = useState<Board>([]);
  const [score, setScore] = useState(0);
  const [selectedTile, setSelectedTile] = useState<Coords | null>(null);

  useEffect(() => {
    setBoard(createBoard());
  }, []);

  const handleTileClick = (row: number, col: number) => {
    if (selectedTile) {
      // a tile is already selected, try to swap
      const newBoard = swapTiles(board, selectedTile, { row, col });
      const matches = checkMatches(newBoard);
      if (matches.length > 0) {
        setBoard(newBoard);
        // handle matches
        setTimeout(() => {
            const boardAfterRemove = removeMatches(newBoard, matches);
            setBoard(boardAfterRemove);
            const boardAfterFill = fillBoard(boardAfterRemove);
            setBoard(boardAfterFill);
            setScore(score + getScore(matches));
        }, 500)
      }
      setSelectedTile(null);
    } else {
      // no tile is selected, select this one
      setSelectedTile({ row, col });
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
        <h1 className="text-6xl font-lobster text-red-500 mb-4">Couple's Match</h1>
      <Score score={score} />
      <div className="grid grid-cols-8 gap-1 bg-pink-200 p-4 rounded-lg shadow-lg">
        {board.map((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <GamePiece
              key={`${rowIndex}-${colIndex}`}
              tile={tile!}
              onClick={() => handleTileClick(rowIndex, colIndex)}
              selected={selectedTile?.row === rowIndex && selectedTile?.col === colIndex}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameBoard;
