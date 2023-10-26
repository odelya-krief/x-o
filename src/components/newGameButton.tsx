const NewGameButton = ({ onClick }) => {
  return (
    <button
      className="text-main-orange p-2 hover:text-main-gray"
      onClick={onClick}
    >
      New Game
    </button>
  );
};

export default NewGameButton;
