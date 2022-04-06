import React, { useState, useContext } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import Button from "@mui/material/Button";
import DebtContext from "../DebtContext";

const ColorPicker = () => {
  const [displayColorPicker, displayColorPickerSet] = useState(false);
  const { color, colorSet } = useContext(DebtContext);

  const handleClick = () => {
    displayColorPickerSet(!displayColorPicker);
  };

  const handleClose = () => {
    displayColorPickerSet(false);
  };

  const handleChange = (color) => {
    colorSet(color);
  };

  const styles = reactCSS({
    default: {
      color: {
        width: "0.875rem",
        height: "0.875rem",
        borderRadius: "2px",
        background: `${color.hex}`,
        margin: "20px",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <div style={{ display: "flex" }}>
      <div style={styles.color} onClick={handleClick}></div>
      <Button sx={{ m: 1 }} variant="outlined" onClick={handleClick}>
        Pick a color
      </Button>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
