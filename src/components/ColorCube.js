import React from "react";

const ColorCube = props => {
  const colorStyle = {
    width: "0.875rem",
    height: "0.875rem",
    borderRadius: "2px",
    background: `${props.color.hex}`,
    margin: "10px",
  };
  return <div style={colorStyle}></div>;
};

export default ColorCube;
