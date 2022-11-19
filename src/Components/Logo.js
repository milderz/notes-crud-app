import React from "react";
import { StyledLogo } from "./Styles/Logo.styled";

function Logo() {
  return (
    <StyledLogo>
      <img src="/logo.png" alt="main-notes-logo" srcSet="" />
      <p>Notes</p>
    </StyledLogo>
  );
}

export default Logo;
