const NewGameButton = ({ onClick }) => {
  return (
    <button
      className="border-4 border-black p-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black hover:border-4"
      onClick={onClick}
    >
      New Game
    </button>
  );
};

export default NewGameButton;
