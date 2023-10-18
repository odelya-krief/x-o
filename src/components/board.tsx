// prettier-ignore
'use client';
import { useState } from "react";

import CellComponent from "./cell";

class GameState {
  turn: string;
  board: string[];
  winner?: string;
  constructor(turn: string, board: string[]) {
    this.turn = turn;
    this.board = board;
  }
}
const initialGameState: GameState = {
  turn: "X",
  board: ["", "", "", "", "", "", "", "", ""],
};

const calculateWinner = (board: string[]): string => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return "";
};

const calculateUpdatedBoard = (
  gameState: GameState,
  index: number
): string[] => {
  console.log(`index ${index} was clicked`);
  const updatedBoard: string[] = gameState.board.map((cell, cellIndex) => {
    return cellIndex == index ? gameState.turn : cell;
  });
  return updatedBoard;
};

const calculateTurn = (turn: string): string => {
  return turn == "X" ? "O" : "X";
};

const BoardComponent = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const onCellClick = (index: number) => {
    const updatedBoard = calculateUpdatedBoard(gameState, index);
    const updatedWinner = calculateWinner(updatedBoard);
    const updatedTurn = calculateTurn(gameState.turn);
    setGameState({
      board: updatedBoard,
      turn: updatedTurn,
      winner: updatedWinner,
    });
  };

  return (
    <>
      <p className="text-gray-900 font-bold text-xl mb-2">Board</p>
      <div className="text-gray-900 font-bold text-xl mb-2">
        Winner
        <div className="text-gray-900 font-bold text-xl mb-2">
          {gameState.winner}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-0.5 gap-y-0.5 ">
        {gameState.board.map((cellState, index) => {
          return (
            <div key={index}>
              <CellComponent
                value={cellState}
                index={index}
                onClick={onCellClick}
              ></CellComponent>
              ;
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BoardComponent;
