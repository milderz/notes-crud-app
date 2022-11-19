import styled from "styled-components";

export const StyledAddNoteform = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32.2rem;
  height: 43.4rem;
  transform: translate(-50%, -50%);
  padding: 3.2rem 2.6rem 2.6rem 2.6rem;
  background-color: #303136;
  border-radius: 0.6rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

  animation: noteAddFadeIn 0.4s ease;

  .note-textarea-title {
    width: 100%;
    height: 2.8rem;
    resize: none;
    background-color: #303136;
    border: none;
    color: #fff;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 700;
    outline: none;
  }
  .note-textarea-body {
    width: 100%;
    height: 80%;
    resize: none;
    background-color: #303136;
    border: none;
    color: #fff;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    outline: none;
  }

  @keyframes noteAddFadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
