import React, { useState } from "react";

import { GridCell } from "./GridCell";

export const Grid = ({ template, brush, eraser }) => {
  const [size, setSize] = useState(template.size);
  const [isPainting, setIsPainting] = useState(false);

  const [gridMem, setGridMem] = useState([]);

  console.log(gridMem);

  const searchArray = (array, value) => {
    let lower = 0;
    let upper = array.length - 1;
    while (lower <= upper) {
      const middle = lower + Math.floor((upper - lower) / 2);
      if (value == array[middle]) return true;
      if (value < array[middle]) {
        upper = middle - 1;
      } else {
        lower = middle + 1;
      }
    }
    return false;
  };

  return (
    <div id="grid" style={template.style}>
      {[...Array(size)].map((cell, index) => {
        let primaryCell = false;
        let secondaryCell = false;
        if (template.primaryCells) {
          primaryCell = searchArray(template.primaryCells, index);
        }
        if (template.secondaryCells) {
          secondaryCell = searchArray(template.secondaryCells, index);
        }
        return (
          <GridCell
            key={index}
            isPainting={isPainting}
            setIsPainting={setIsPainting}
            index={index}
            primaryCell={primaryCell}
            secondaryCell={secondaryCell}
            brush={brush}
            eraser={eraser}
            //
            gridMem={gridMem}
            setGridMem={setGridMem}
            //
          />
        );
      })}
    </div>
  );
};
