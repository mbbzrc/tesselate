import React from "react";

import { PaletteColor } from "./index";

export const Palette = ({ palette, setBrush, eraser }) => {
  const handleSetColor = (e) => {
    e.preventDefault();
    setBrush(e.target.value);
  };

  return (
    <div id="palette">
      {palette.map((color) => {
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
