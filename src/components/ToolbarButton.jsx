import React from "react";

export const ToolbarButton = (props) => {
  return (
    <div id={props.id} style={props.style} onClick={props.action}>
      {props.children}
    </div>
  );
};
