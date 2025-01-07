/* eslint-disable react/prop-types */
import { isActive } from "../../helper";
import GridCell from "../Grid/GridCell";



function GridLayout({ gridSize = 10, activeCell, onCellClick }) {
  const gridBlocks = Array(gridSize).fill(Array.from({ length: gridSize }, (_, i) => i));

  return (
    <div>
      {gridBlocks.map((row, rowIndex) => (
        <div key={rowIndex} className="grid__row">
          {row.map((cell, cellIndex) => (
            <GridCell
              key={cellIndex}
              rowIndex={rowIndex}
              cellIndex={cellIndex}
              isActive={isActive(activeCell, rowIndex, cellIndex)}
              onCellClick={onCellClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default GridLayout