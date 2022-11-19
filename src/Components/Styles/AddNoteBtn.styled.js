import styled from "styled-components";

export const StyledAddNoteBtn = styled.button`
  width: 13.6rem;
  height: 4.6rem;
  background-color: var(--purple);
  border: none;
  border-radius: 0.6rem;
  color: var(--main-white);
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;

  ::after {
    content: "Add note";
  }

  @media screen and (max-width: 670px) {
    width: 4.6rem;
    ::after {
      content: "+";
    }
  }

  @media screen and (max-width: 670px) {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
