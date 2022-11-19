import styled from "styled-components";

export const StyledNote = styled.div`
  padding: 3.2rem 2.6rem 1.6rem 2.6rem;
  background-color: ${({ color }) => (color ? color : "#303136")};
  border-radius: 0.6rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  position: relative;
  transition: background-color 0.4s ease;
  display: flex;
  flex-direction: column;

  .note-textarea-title {
    width: 100%;
    height: 2.8rem;
    resize: none;
    background-color: ${({ color }) => (color ? color : "#303136")};
    border: none;
    color: ${({ textColor }) => (textColor ? "#000" : "#fff")};
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 700;
    outline: none;
    transition: background-color 0.4s ease;

    ::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .note-textarea-body {
    width: 100%;

    resize: none;
    background-color: ${({ color }) => (color ? color : "#303136")};
    border: none;
    color: ${({ textColor }) => (textColor ? "#000" : "#fff")};
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    outline: none;
    transition: background-color 0.4s ease;

    flex-grow: 1;
  }
`;
