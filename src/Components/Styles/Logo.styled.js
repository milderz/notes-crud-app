import styled from "styled-components";

export const StyledLogo = styled.div`
  display: flex;

  padding: 3.2rem 0 0 3.2rem;
  img {
    height: 2.4rem;
  }

  p {
    color: var(--main-white);
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.2;
    padding-left: 1.6rem;
  }

  @media screen and (max-width: 732px) {
    p {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    /* width: 5rem;

    height: 7.2vh;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center; */
    display: none;
  }
`;
