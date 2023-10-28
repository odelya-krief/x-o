const NewGameButton = ({ onClick }) => {
  return (
    <button className="text-main-orange hover:text-main-gray" onClick={onClick}>
      New Game
    </button>
  );
};

export default NewGameButton;
