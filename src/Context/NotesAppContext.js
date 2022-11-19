import { v4 as uuidv4 } from "uuid";
import { createContext, useEffect, useState } from "react";

import {
  faCheckCircle,
  faTimesCircle,
  faStar,
  faTrashCanArrowUp,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { db } from "../Firebase/Firebase";
import {
  collection,
  setDoc,
  doc,
  updateDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

import { UserAuth } from "../Context/AuthContext";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(null);
  const [addNoteFormActive, setAddNoteFormActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventQueue, setEventQueu] = useState([]);

  const { user } = UserAuth();

  const getData = async (user) => {
    const colRef = collection(db, "Notes");

    getDocs(colRef).then((snapshot) => {
      const userNotes = [];
      snapshot.docs.forEach((doc) => {
        if (doc.data().author === user) {
          userNotes.push({ ...doc.data() });
        }

        setNotes(userNotes);
      });
    });
  };

  useEffect(() => {
    getData(user?.email);
  }, [user]);

  // Note delete

  const handleNoteDelete = async (id) => {
    const noteRef = doc(db, "Notes", id);
    const updateFirebase = async () => {
      notes.map(async (note) => {
        if (note.id === id) {
          await updateDoc(noteRef, {
            active: false,
          });
        }
      });
    };
    const deletedNote = notes.map((note) => {
      if (note.id === id) {
        const message = {
          message: "Note deleted",
          color: "#8C271E",
          icon: faTimesCircle,
        };

        message.id = uuidv4();
        updateFirebase();
        handleNotifications(message);

        return { ...note, active: false };
      }

      return note;
    });

    setNotes(deletedNote);
  };

  const handlePermanentlyDelete = async (id) => {
    // const noteRef = doc(db, "Notes", id);
    const updateFirebase = async () => {
      await deleteDoc(doc(db, "Notes", id));
    };
    const permanentDeletedNote = notes.filter((note) => note.id !== id);
    updateFirebase();
    setNotes(permanentDeletedNote);
  };

  const handleNoteRestore = async (id) => {
    const noteRef = doc(db, "Notes", id);
    const updateFirebase = async () => {
      notes.map(async (note) => {
        if (note.id === id) {
          await updateDoc(noteRef, {
            active: true,
          });
        }
      });
    };

    const restoredNote = notes.map((note) => {
      if (note.id === id) {
        const message = {
          message: "Note restored",
          color: "#119DA4",
          icon: faTrashCanArrowUp,
        };

        message.id = uuidv4();
        updateFirebase();
        handleNotifications(message);
        return { ...note, active: true };
      }

      return note;
    });

    setNotes(restoredNote);
  };

  const handleNoteAddToPending = async (id) => {
    const noteRef = doc(db, "Notes", id);
    const updateFirebase = async () => {
      notes.map(async (note) => {
        if (note.id === id) {
          if (note.pending) {
            await updateDoc(noteRef, {
              pending: false,
            });
          } else {
            await updateDoc(noteRef, {
              pending: true,
            });
          }
        }
      });
    };
    const pendingNote = notes.map((note) => {
      if (note.id === id) {
        if (note.pending) {
          const message = {
            message: "Note removed from pending",
            color: "#119DA4",
            icon: faClock,
          };

          message.id = uuidv4();
          updateFirebase();
          handleNotifications(message);

          return { ...note, pending: false };
        } else if (!note.pending) {
          const message = {
            message: "Note added to pending",
            color: "#119DA4",
            icon: faClock,
          };

          message.id = uuidv4();
          updateFirebase();
          handleNotifications(message);

          return { ...note, pending: true };
        }
      }

      return note;
    });

    setNotes(pendingNote);
  };

  const handleNoteAddToFavorites = async (id) => {
    const noteRef = doc(db, "Notes", id);
    const updateFirebase = async () => {
      notes.map(async (note) => {
        if (note.id === id) {
          if (note.favorite) {
            await updateDoc(noteRef, {
              favorite: false,
            });
          } else {
            await updateDoc(noteRef, {
              favorite: true,
            });
          }
        }
      });
    };

    const favoriteNote = notes.map((note) => {
      if (note.id === id) {
        if (note.favorite) {
          const message = {
            message: "Note removed from favorites",
            color: "#FF8600",
            icon: faStar,
          };

          message.id = uuidv4();
          handleNotifications(message);
          updateFirebase();
          return { ...note, favorite: false };
        } else if (!note.favorite) {
          const message = {
            message: "Note added to favorites",
            color: "#FF8600",
            icon: faStar,
          };

          message.id = uuidv4();
          handleNotifications(message);
          updateFirebase();
          return { ...note, favorite: true };
        }
      }

      return note;
    });

    setNotes(favoriteNote);
  };

  const handleColorChange = (color, id, handleVisibleColorPalette) => {
    const noteRef = doc(db, "Notes", id);
    const updateFirebase = async () => {
      notes.map(async (note) => {
        if (note.id === id) {
          await updateDoc(noteRef, {
            color: inputColor,
          });
        }
      });
    };
    const inputColor = color;

    const updatedColor = notes.map((note) => {
      if (note.id === id) {
        updateFirebase();

        return { ...note, color: inputColor };
      }

      return note;
    });

    setNotes(updatedColor);
    handleVisibleColorPalette();
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTitleOnBlur = (event, id) => {
    const title = event.target.value;
    const noteRef = doc(db, "Notes", id);
    const updateFirebase = async () => {
      notes.map(async (note) => {
        if (note.id === id) {
          await updateDoc(noteRef, {
            title: title,
          });
        }
      });
    };

    const updatedTitle = notes.map((note) => {
      if (note.id === id) {
        updateFirebase();
        return { ...note, title: title };
      }
      return note;
    });

    setNotes(updatedTitle);
  };

  const handleTextOnBlur = (event, id) => {
    const text = event.target.value;
    const noteRef = doc(db, "Notes", id);
    const updateFirebase = async () => {
      notes.map(async (note) => {
        if (note.id === id) {
          await updateDoc(noteRef, {
            text: text,
          });
        }
      });
    };

    const updatedText = notes.map((note) => {
      if (note.id === id) {
        updateFirebase();
        return { ...note, text: text };
      }
      return note;
    });

    setNotes(updatedText);
    console.log(notes);
  };

  const handleNoteAddFormActive = () => {
    console.log("added");
    setAddNoteFormActive(!addNoteFormActive);
  };

  const handleNoteAdd = async (title, text) => {
    const newNote = {
      title,
      text,
      color: "#303136",
      active: true,
      favorite: false,
      pending: false,
      author: user?.email,
    };
    newNote.id = uuidv4();

    if (text !== "") {
      // const docRef = doc(collection(db, "Notes", newNote.id));

      await setDoc(doc(db, "Notes", newNote.id), newNote);

      setAddNoteFormActive(!addNoteFormActive);
      setNotes([...notes, newNote]);

      const message = {
        message: "Note added",
        color: "#119DA4",
        icon: faCheckCircle,
      };

      message.id = uuidv4();

      handleNotifications(message);
    } else {
      setAddNoteFormActive(!addNoteFormActive);
    }
  };

  const handleNotifications = (message) => {
    setEventQueu([...eventQueue, message]);

    setTimeout(() => {
      setEventQueu((prev) => prev.slice(1));
    }, 5000);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        handleNoteRestore,
        handleNoteAddToPending,
        handleNoteAddToFavorites,
        handleNoteDelete,
        handlePermanentlyDelete,
        handleSearch,
        handleTitleOnBlur,
        handleTextOnBlur,
        handleColorChange,
        handleNoteAddFormActive,
        handleNoteAdd,
        addNoteFormActive,
        searchTerm,
        eventQueue,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
