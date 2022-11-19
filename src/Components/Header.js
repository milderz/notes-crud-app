import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { StyledHeader } from "./Styles/Header.styled";
import UserLogin from "./UserLogin";

import { useContext, useState } from "react";
import NotesContext from "../Context/NotesAppContext";

function Header() {
  const { handleSearch, searchTerm } = useContext(NotesContext);
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchActive = () => {
    setSearchActive(!searchActive);
  };

  const handleSearchOnBlur = () => {
    setSearchActive(!searchActive);
  };
  return (
    <StyledHeader searchActive={searchActive}>
      <label>
        <input
          onChange={handleSearch}
          onBlur={handleSearchOnBlur}
          value={searchTerm}
          type="text"
          placeholder="Search in your notes"
        />
        <button onClick={handleSearchActive}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </label>

      <div className="header-functions">
        <UserLogin />
      </div>
    </StyledHeader>
  );
}

export default Header;
