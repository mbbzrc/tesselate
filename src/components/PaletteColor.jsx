import React, { useState } from "react";

export const PaletteColor = ({ color, handleSetColor, eraser }) => {
  return (
    <button
      value={color}
      style={{
        backgroundColor: color,
        filter: `${eraser ? "grayscale(100%)" : "none"}`,
        transition: "filter ease 1s",
      }}
      onClick={handleSetColor}
    ></button>
  );
};
