/* eslint-disable react/prop-types */

function GridCell({ rowIndex, cellIndex, isActive, onCellClick }) {
  return (
    <div
      className="grid__cell"
      style={{ background: isActive ? "red" : "white" }}
      onClick={() => onCellClick(rowIndex, cellIndex)}
    >
    </div>
  );
}

export default GridCell;