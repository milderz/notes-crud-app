import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  background-color: var(--purple);
  min-height: 7.2vh;
  height: 6.5rem;
  padding: 0 5.6rem 0 5.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  label {
    width: 40%;
    height: 4rem;
    display: flex;
    justify-content: start;

    input {
      height: 100%;
      width: 100%;
      border-radius: 0.6rem;
      border: none;
      font-size: 1.4rem;
      padding-left: 1.6rem;
      font-weight: 500;

      ::placeholder {
        color: var(--light-gray);
      }

      :focus {
        outline: none;
      }

      @media screen and (max-width: 670px) {
        visibility: ${({ searchActive }) =>
          searchActive ? "visible" : "hidden"};
        opacity: ${({ searchActive }) => (searchActive ? "1" : "0")};
        position: absolute;
        top: 7.5rem;
        left: 50%;
        height: 4.4rem;
        width: 65%;
        transform: translateX(-50%);
        box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
        border: 0.2rem solid var(--purple);
        z-index: 1;
        transition: opacity 0.4s ease;
      }
    }

    button {
      display: none;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      background: none;

      svg {
        height: 1.8rem;
        color: var(--main-white);
      }

      @media screen and (max-width: 670px) {
        display: flex;
      }
    }
  }

  .header-functions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 670px) {
    padding: 0 2.4rem 0 2.4rem;
  }
`;
