import React, { useContext } from "react";
import NotesContext from "../Context/NotesAppContext";
import { StyledAddNoteBtn } from "./Styles/AddNoteBtn.styled";

function AddNoteBtn() {
  const { handleNoteAddFormActive } = useContext(NotesContext);
  return (
    <StyledAddNoteBtn onClick={handleNoteAddFormActive}></StyledAddNoteBtn>
  );
}

export default AddNoteBtn;
