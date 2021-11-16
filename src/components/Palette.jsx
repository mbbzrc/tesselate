import React, { useState } from "react";

import { PaletteColor } from "./index";

export const Palette = ({ setBrush, eraser }) => {
  const [colors, setColors] = useState([
    "rgb(255, 255, 255)",
    "rgb(192, 192, 192)",
    "rgb(0, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 128, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
  ]);

  const handleSetColor = (e) => {
    e.preventDefault();
    setBrush(e.target.value);
  };

  return (
    <div id="palette">
      {colors.map((color) => {
        return (
          <PaletteColor
            key={color}
            color={color}
            handleSetColor={handleSetColor}
            eraser={eraser}
          />
        );
      })}
    </div>
  );
};
