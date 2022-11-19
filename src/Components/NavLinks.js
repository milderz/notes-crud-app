import { NavLink } from "react-router-dom";
import { StyledNavLinks } from "./Styles/NavLinks.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNoteSticky,
  faStar,
  faClock,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function NavLinks() {
  return (
    <StyledNavLinks>
      <li>
        <NavLink to="/" activeclassname="active">
          <FontAwesomeIcon icon={faNoteSticky} />
          <p>Notes</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorites" activeclassname="active">
          <FontAwesomeIcon icon={faStar} />
          <p>Favorites</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/pending" activeclassname="active">
          <FontAwesomeIcon icon={faClock} />
          <p>Pending</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/trash" activeclassname="active">
          <FontAwesomeIcon icon={faTrash} />
          <p>Trash</p>
        </NavLink>
      </li>
    </StyledNavLinks>
  );
}

export default NavLinks;
