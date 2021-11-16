import React from "react";

import { ToolbarButton } from "./index";

export const Toolbar = ({ setCanvas, eraser, setEraser }) => {
  const eraserStyle = {
    backgroundColor: "rgb(236, 236, 236)",
    color: "rgb(17, 17, 17)",
  };

  const handleUndo = () => {
    console.log("UNDO");
  };

  const handleRedo = () => {
    console.log("REDO");
  };

  const handleToggleEraser = (e) => {
    e.preventDefault();
    setEraser(!eraser);
  };

  const handleCapture = () => {
    console.log("CAPTURING ARTWORK");
  };

  const handleDiscard = () => {
    setCanvas(null);
  };

  return (
    <div id="toolbar">
      <ToolbarButton action={handleUndo}>
        <span className="material-icons">undo</span>
      </ToolbarButton>
      <ToolbarButton action={handleRedo}>
        <span className="material-icons">redo</span>
      </ToolbarButton>
      <ToolbarButton
        id="eraser"
        action={handleToggleEraser}
        style={eraser ? eraserStyle : {}}
      >
        toggle eraser
      </ToolbarButton>
      <ToolbarButton action={handleCapture}>
        <span className="material-icons">save_as</span>
      </ToolbarButton>
      <ToolbarButton action={handleDiscard}>
        <span className="material-icons">delete</span>
      </ToolbarButton>
    </div>
  );
};
