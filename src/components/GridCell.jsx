import React, { useState } from "react";

export const GridCell = ({
  isPainting,
  setIsPainting,
  index,
  primaryCell,
  secondaryCell,
  brush,
  eraser,
  //
  gridMem,
  setGridMem,
  //
}) => {
  const [color, setColor] = useState("transparent");

  const handleStartPaint = (e) => {
    if (e.target.style.backgroundColor == brush) return;
    //
    setGridMem([...gridMem, e.target.attributes.data.value]);
    //
    if (eraser) {
      setColor("");
    } else {
      setColor(brush);
    }
    setIsPainting(true);
  };

  const handleKeepPainting = (e) => {
    if (!isPainting || e.target.style.backgroundColor == brush) return;
    if (eraser) {
      setColor("");
    } else {
      setColor(brush);
    }
  };

  const handleEndPaint = () => {
    setIsPainting(false);
  };

  return (
    <div
      data={index}
      className={`grid-cell${
        primaryCell ? " primary-cell" : secondaryCell ? " secondary-cell" : ""
      }`}
      style={color !== "transparent" ? { backgroundColor: color } : null}
      onMouseDown={handleStartPaint}
      onMouseOver={handleKeepPainting}
      onMouseUp={handleEndPaint}
    ></div>
  );
};
