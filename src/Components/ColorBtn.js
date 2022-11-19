import React, { useContext } from "react";
import NotesContext from "../Context/NotesAppContext";

function ColorBtn({ color, id, handleVisibleColorPalette }) {
  const { handleColorChange } = useContext(NotesContext);
  return (
    <button
      style={{ backgroundColor: `${color}` }}
      onClick={() => handleColorChange(color, id, handleVisibleColorPalette)}
    ></button>
  );
}

export default ColorBtn;
