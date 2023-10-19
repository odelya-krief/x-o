const CellComponent = ({ value, index, onClick }) => {
  return (
    <button
      className="text-gray-800 content-center bg-white text-5xl
       hover:bg-gray-200 disabled:bg-white"
      onClick={() => onClick(index)}
      disabled={value != ""}
    >
      {value}
    </button>
  );
};
export default CellComponent;
