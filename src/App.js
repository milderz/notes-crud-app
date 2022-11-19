import GlobalStyles from "./Components/Styles/GlobalStyles";

import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import { StyledWrapper } from "./Components/Styles/Wrapper.styled";
import Header from "./Components/Header";
import { StyledBodyWrapper } from "./Components/Styles/BodyWrapper.styled";
import NotesSection from "./Components/NotesSection";
import AddNoteForm from "./Components/AddNoteForm";
import ToastNotifications from "./Components/ToastNotifications";
import { ToastContainer } from "./Components/Styles/ToastNotifications.styled";

import NotesContext from "./Context/NotesAppContext";
import Login from "./Components/Login";
import ChooseUserName from "./Components/ChooseUserName";
import Loader from "./Components/Loader";

function App() {
  const { notes, addNoteFormActive, eventQueue } = useContext(NotesContext);

  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/choose-username" element={<ChooseUserName />} />
          <Route
            path="/"
            element={
              <StyledWrapper>
                <GlobalStyles />

                <Sidebar />
                <StyledBodyWrapper>
                  <Header />

                  <Outlet />

                  {addNoteFormActive && <AddNoteForm />}
                  <ToastContainer>
                    {eventQueue.map((notification) => (
                      <ToastNotifications
                        key={notification.id}
                        message={notification.message}
                        color={notification.color}
                        icon={notification.icon}
                      />
                    ))}
                  </ToastContainer>
                </StyledBodyWrapper>
              </StyledWrapper>
            }
          >
            <Route
              exact
              path="/"
              element={
                <>
                  {notes ? (
                    <NotesSection
                      notes={notes.filter((note) => note.active)}
                      title="My notes"
                      addBtn={true}
                      resultMessage={{
                        title: "Looks like there's no notes",
                        text: "Try adding a new note",
                      }}
                    />
                  ) : (
                    <Loader />
                  )}
                </>
              }
            />
            <Route
              path="/favorites"
              element={
                <>
                  {notes ? (
                    <NotesSection
                      notes={notes.filter(
                        (note) => note.favorite && note.active
                      )}
                      title="Favorite notes"
                      addBtn={false}
                      resultMessage={{
                        title: "Looks like there's no notes",
                        text: "Try setting a note to favorites",
                      }}
                    />
                  ) : (
                    <Loader />
                  )}
                </>
              }
            />
            <Route
              path="/pending"
              element={
                <>
                  {notes ? (
                    <NotesSection
                      notes={notes.filter(
                        (note) => note.pending && note.active
                      )}
                      title="Pending notes"
                      addBtn={false}
                      resultMessage={{
                        title: "Looks like there's no notes",
                        text: "Try setting a note to pending",
                      }}
                    />
                  ) : (
                    <Loader />
                  )}
                </>
              }
            />
            <Route
              path="/trash"
              element={
                <>
                  {notes ? (
                    <NotesSection
                      notes={notes.filter((note) => !note.active)}
                      title="Trash"
                      addBtn={false}
                      resultMessage={{
                        title: "Looks like there's no notes",
                        text: "Try deleting a note",
                      }}
                    />
                  ) : (
                    <Loader />
                  )}
                </>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
