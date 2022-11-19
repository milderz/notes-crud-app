import { useContext, useState } from "react";
import NotesContext from "../Context/NotesAppContext";

import CardFunctions from "./CardFunctions";
import ColorPalette from "./ColorPalette";
import { StyledNote } from "./Styles/Note.styled";

function Note({ id, title, text, color, favorite, deleted, pending }) {
  const { handleTitleOnBlur, handleTextOnBlur } = useContext(NotesContext);

  const [visibleColorPalette, setVisibleColorPalette] = useState(false);
  const handleVisibleColorPalette = () => {
    setVisibleColorPalette(!visibleColorPalette);
  };

  return (
    <StyledNote color={color}>
      <textarea
        className="note-textarea-title"
        name="note-textarea-title"
        id=""
        defaultValue={title}
        onBlur={(event) => handleTitleOnBlur(event, id)}
        placeholder="Add a title"
      ></textarea>
      <textarea
        className="note-textarea-body"
        name="note-textarea-body"
        id=""
        defaultValue={text}
        onBlur={(event) => handleTextOnBlur(event, id)}
        placeholder="Add a title"
      ></textarea>
      <CardFunctions
        handleVisibleColorPalette={handleVisibleColorPalette}
        id={id}
        favorite={favorite}
        deleted={deleted}
        pending={pending}
      />
      {visibleColorPalette && (
        <ColorPalette
          id={id}
          handleVisibleColorPalette={handleVisibleColorPalette}
        />
      )}
    </StyledNote>
  );
}

export default Note;
