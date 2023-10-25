const CellComponent = ({ value, index, onClick }) => {
  const valueWasNotSetYet = value == "";
  const disabledCell = (
    <button
      className="text-gray-800 content-center bg-white text-5xl aspect-square"
      onClick={() => onClick(index)}
      disabled
    >
      {value}
    </button>
  );
  const enabledCell = (
    <button
      className="text-gray-800 content-center bg-white text-5xl aspect-square
       transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black hover:border-4"
      onClick={() => onClick(index)}
    >
      {value}
    </button>
  );
  return valueWasNotSetYet ? enabledCell : disabledCell;
};

export default CellComponent;
