import NotesContext from "../Context/NotesAppContext";

import { StyledCardFunctions } from "./Styles/CardFunctions.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faStar,
  faClock,
  faTrash,
  faTrashCanArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

function CardFunctions({
  id,

  handleVisibleColorPalette,

  favorite,
  deleted,
  pending,
}) {
  const {
    handleNoteRestore,
    handleNoteAddToPending,
    handleNoteAddToFavorites,
    handleNoteDelete,
    handlePermanentlyDelete,
  } = useContext(NotesContext);
  return (
    <StyledCardFunctions
      favorite={favorite}
      pending={pending}
      deleted={deleted}
    >
      {deleted ? (
        <>
          <button
            className="favorites-btn"
            onClick={() => handleNoteAddToFavorites(id)}
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
          <button
            className="pending-btn"
            onClick={() => handleNoteAddToPending(id)}
          >
            <FontAwesomeIcon icon={faClock} />
          </button>
          <button onClick={handleVisibleColorPalette}>
            <FontAwesomeIcon icon={faPalette} />
          </button>
          <button className="delete" onClick={() => handleNoteDelete(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      ) : (
        <>
          <button className="restore-btn" onClick={() => handleNoteRestore(id)}>
            <FontAwesomeIcon icon={faTrashCanArrowUp} />
          </button>
          <button
            className="perm-delete-btn"
            onClick={() => handlePermanentlyDelete(id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
    </StyledCardFunctions>
  );
}

export default CardFunctions;
