// prettier-ignore
'use client';
const CellComponent = ({ value, index, onClick }) => {
  return (
    <button
      className="bg-cyan-300 h-5 w-5 text-gray-900 mb-2 content-center "
      onClick={() => onClick(index)}
      disabled={value != ""}
    >
      {value}
    </button>
  );
};
``;
export default CellComponent;
