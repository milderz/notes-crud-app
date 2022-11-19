import React, { useContext, useState } from "react";
import NotesContext from "../Context/NotesAppContext";
import { StyledAddNoteform } from "./Styles/AddNoteForm.styled";

function AddNoteForm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const { handleNoteAdd } = useContext(NotesContext);

  return (
    <StyledAddNoteform>
      <textarea
        className="note-textarea-title"
        name="add-note-form-title"
        id=""
        placeholder="Note title"
        onChange={(event) => setTitle(event.target.value)}
      ></textarea>
      <textarea
        className="note-textarea-body"
        name="add-note-form-text"
        id=""
        placeholder="Add a note"
        onBlur={() => handleNoteAdd(title, text)}
        onChange={(event) => setText(event.target.value)}
      ></textarea>
    </StyledAddNoteform>
  );
}

export default AddNoteForm;
