import React from "react";
import { StyledEmptyPage } from "./Styles/EmptyPage.styled";

function EmptyPage({ resultMessage }) {
  return (
    <StyledEmptyPage>
      <img src="/notes-icon.svg" alt="empty-notes-icon" srcSet="" />
      <h4>{resultMessage.title}</h4>
      <p>{resultMessage.text}</p>
    </StyledEmptyPage>
  );
}

export default EmptyPage;
