import React from "react";

const WinnerModal = ({ onClose, winner }) => {
  return (
    <>
      {winner && (
        <>
          <div
            className="flex fixed justify-center items-center inset-0 z-50 "
            onClick={onClose}
          >
            <div className="bg-white w-1/3 h-1/3 flex flex-col items-center justify-center space-y-3">
              <div className="">Congrats</div>
              <div className="text-black text-5xl">{winner}</div>
              <div className="">won!</div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default WinnerModal;
