const CellComponent = ({ value, index, onClick }) => {
  const valueWasNotSetYet = value == "";

  const oCell = (
    <button
      className="text-main-orange content-center text-5xl aspect-square
      transition ease-in-out duration-500  bg-main-gray"
      onClick={() => onClick(index)}
      disabled
    >
      {value}
    </button>
  );

  const xCell = (
    <button
      className="text-main-gray content-center text-5xl aspect-square
      transition ease-in-out duration-500  bg-main-orange"
      onClick={() => onClick(index)}
      disabled
    >
      {value}
    </button>
  );

  const emptyCell = (
    <button
      className="text-orange-100 content-center text-5xl aspect-square hover:cursor-pointer
       transition ease-in-out hover:bg-orange-50 duration-500 bg-white"
      onClick={() => onClick(index)}
    >
      {value}
    </button>
  );
  return valueWasNotSetYet ? emptyCell : value == "X" ? xCell : oCell;
};

export default CellComponent;
