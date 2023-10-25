// prettier-ignore
'use client';
import { useState } from "react";
import CellComponent from "./cell";
import WinnerModal from "./winnerModal";

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

  const resetGame = () => {
    setGameState(initialGameState);
  };

  return (
    <div className="flex flex-col w-3/4 xl:w-1/3 font-sans text-black text-xl font-bold gap-4">
      <div className="flex flex-row justify-between">
        <div>Turn: {gameState.turn}</div>
        <button
          className="border-4 border-black p-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black hover:border-4"
          onClick={resetGame}
        >
          New Game
        </button>
      </div>
      <WinnerModal onClose={resetGame} winner={gameState.winner}></WinnerModal>
      <div
        className="grid grid-cols-3 grid-rows aspect-square 
          gap-1
        border-black border-4
        bg-black rounded-sm"
      >
        {gameState.board.map((cellState, index) => {
          return (
            <CellComponent
              key={index}
              value={cellState}
              index={index}
              onClick={onCellClick}
            ></CellComponent>
          );
        })}
      </div>
    </div>
  );
};

export default BoardComponent;
