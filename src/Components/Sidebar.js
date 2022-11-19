import React from "react";
import { StyledSidebar } from "./Styles/Sidebar.styled";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <NavLinks />
    </StyledSidebar>
  );
}

export default Sidebar;
