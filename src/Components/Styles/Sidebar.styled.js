import styled from "styled-components";

export const StyledSidebar = styled.section`
  min-width: 23.5rem;
  height: 100vh;
  background-color: var(--main-black);
  transition: width 0.4s ease;

  @media screen and (max-width: 732px) {
    width: 8.4rem;
    min-width: 8.4rem;
  }
  @media screen and (max-width: 500px) {
    width: 5rem;
    min-width: 5rem;
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 8.4rem;
    transition: none;
  }

  @media screen and (max-width: 400px) {
    height: 5.4rem;
  }
`;
