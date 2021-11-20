import React from "react";

export const ToolbarButton = (props) => {
  return (
    <div style={props.style} onClick={props.action}>
      {props.children}
    </div>
  );
};
