import useWindowSize from "@/hooks/useWindowSize";
import React from "react";

import Confetti from "react-confetti";
const WinnerModal = ({ onClose, winner, gameOver }) => {
  const { width, height } = useWindowSize();
  const gameOverDiv = (
    <>
      <div>Game Over</div>
      <div className="text-main-orange">Nobody won.</div>
    </>
  );

  const winnerDiv = (
    <>
      <div>Congrats</div>
      <div className="text-main-orange">{winner}</div>
      <div>won!</div>
    </>
  );
  return (
    <>
      {(winner || gameOver) && (
        <>
          <div
            className="fixed h-screen w-screen z-0 m-auto max-w-lg bg-gradient-to-tr from-[#3B2F52] via-white to-[#3B2F52] blur-[118px] hover:cursor-pointer"
            onClick={onClose}
          />
          <div
            className="text-3xl sm:text-5xl text-main-dark-purple fixed h-screen flex flex-col items-center justify-center space-y-3 z-1 hover:cursor-pointer"
            onClick={onClose}
          >
            {winner ? winnerDiv : gameOverDiv}
          </div>
          <Confetti
            tweenDuration={7000}
            width={width}
            height={height}
            colors={["#3B2F52", "#E59462", "#E1E5EB"]}
          />
        </>
      )}
    </>
  );
};

export default WinnerModal;
