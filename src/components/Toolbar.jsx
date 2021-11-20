import React from "react";
import { generatePalette } from "../palettes";

import { ToolbarButton } from "./index";

export const Toolbar = ({ setCanvas, setPalette, eraser, setEraser }) => {
  const eraserStyle = {
    backgroundColor: "rgb(236, 236, 236)",
    color: "rgb(17, 17, 17)",
  };

  const handleGenerateColors = () => {
    setPalette(generatePalette());
  };

  const handleToggleEraser = (e) => {
    e.preventDefault();
    setEraser(!eraser);
  };

  const handleDiscard = () => {
    setCanvas(null);
  };

  return (
    <div id="toolbar">
      <ToolbarButton action={handleGenerateColors}>NEW PALETTE</ToolbarButton>
      <ToolbarButton
        action={handleToggleEraser}
        style={eraser ? eraserStyle : {}}
      >
        ERASER
      </ToolbarButton>
      <ToolbarButton action={handleDiscard}>
        <span className="material-icons">delete</span>
      </ToolbarButton>
    </div>
  );
};
