import React from "react";
import ColorBtn from "./ColorBtn";
import { StyledColorPalette } from "./Styles/ColorPalette.styled";

function ColorPalette({ id, handleVisibleColorPalette }) {
  const notesColors = [
    { id: 1, colorValue: "#e05263" },
    { id: 2, colorValue: "#612940" },
    { id: 3, colorValue: "#35524a" },
    { id: 4, colorValue: "#119DA4" },
    { id: 5, colorValue: "#D98158" },
    { id: 6, colorValue: "#303136" },
  ];

  return (
    <StyledColorPalette>
      {notesColors.map((color) => (
        <ColorBtn
          key={color.id}
          color={color.colorValue}
          id={id}
          handleVisibleColorPalette={handleVisibleColorPalette}
        ></ColorBtn>
      ))}
    </StyledColorPalette>
  );
}

export default ColorPalette;
