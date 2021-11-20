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
  const [active, setActive] = useState(false);
  const [color, setColor] = useState("");

  const handleStartPaint = (e) => {
    if (e.target.style.backgroundColor == brush) return;
    //
    setGridMem([...gridMem, e.target.attributes.data.value]);
    //
    if (eraser) {
      setActive(false);
    } else {
      setActive(true);
      setColor(brush);
    }
    setIsPainting(true);
  };

  const handleKeepPainting = (e) => {
    if (!isPainting || e.target.style.backgroundColor == brush) return;
    if (eraser) {
      setActive(false);
    } else {
      setActive(true);
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
      style={active ? { backgroundColor: color } : null}
      onMouseDown={handleStartPaint}
      onMouseOver={handleKeepPainting}
      onMouseUp={handleEndPaint}
    ></div>
  );
};
