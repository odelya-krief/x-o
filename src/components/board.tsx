// prettier-ignore
'use client';
import { useState } from "react";
import CellComponent from "./cell";
import WinnerModal from "./winnerModal";
import NewGameButton from "./newGameButton";

class GameState {
  turn: string;
  board: string[];
  winner?: string;
  gameOver: boolean;
  constructor(turn: string, board: string[], gameOver: boolean) {
    this.turn = turn;
    this.board = board;
    this.gameOver = gameOver;
  }
}
const initialGameState: GameState = {
  turn: "X",
  board: ["", "", "", "", "", "", "", "", ""],
  gameOver: false,
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

const calculateGameOver = (board: string[]): boolean => {
  return board.every((cell) => cell != "");
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
    const gameOver = calculateGameOver(updatedBoard);
    setGameState({
      board: updatedBoard,
      turn: updatedTurn,
      winner: updatedWinner,
      gameOver: gameOver,
    });
  };

  const resetGame = () => {
    setGameState(initialGameState);
  };

  return (
    <>
      <WinnerModal
        onClose={resetGame}
        winner={gameState.winner}
        gameOver={gameState.gameOver}
      />
      <div className="flex flex-col w-3/4 xl:w-1/3 text-3xl sm:text-5xl font-bold gap-6">
        <div className="flex flex-row justify-between">
          <div>Turn: {gameState.turn}</div>
          <NewGameButton onClick={resetGame} />
        </div>
        <div className="grid grid-cols-3 grid-rows aspect-square gap-2">
          {gameState.board.map((cellState, index) => {
            return (
              <CellComponent
                key={index}
                value={cellState}
                index={index}
                onClick={onCellClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BoardComponent;
