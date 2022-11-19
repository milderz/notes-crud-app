import AddNoteBtn from "./AddNoteBtn";
import Stats from "./Stats";
import { StyledNotesSection } from "./Styles/NotesSection.styled";
import Note from "./Note";
import EmptyPage from "./EmptyPage";
import { useContext } from "react";
import NotesContext from "../Context/NotesAppContext";

function NotesSection({ notes, title, addBtn, resultMessage }) {
  const { addNoteFormActive, searchTerm } = useContext(NotesContext);
  return (
    <StyledNotesSection addNoteFormActive={addNoteFormActive}>
      <header>
        <Stats notes={notes} title={title} />
        {addBtn && <AddNoteBtn />}
      </header>

      {notes.length > 0 ? (
        <>
          <div className="notes-wrapper">
            {notes
              .filter(
                (note) =>
                  note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  note.text.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((note) => (
                <Note
                  id={note.id}
                  key={note.id}
                  title={note.title}
                  text={note.text}
                  color={note.color}
                  favorite={note.favorite}
                  pending={note.pending}
                  deleted={note.active}
                />
              ))}
          </div>
        </>
      ) : (
        <EmptyPage resultMessage={resultMessage}></EmptyPage>
      )}
    </StyledNotesSection>
  );
}

export default NotesSection;
