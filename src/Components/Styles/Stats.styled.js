import styled from "styled-components";

export const StyledStats = styled.div`
  h3 {
    font-size: 2.2rem;
    color: var(--main-white);
    font-weight: 500;

    @media screen and (max-width: 670px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.6rem;
    color: var(--main-white);
    font-weight: 400;

    span {
      font-weight: 700;
    }

    @media screen and (max-width: 670px) {
      font-size: 1.4rem;
    }
  }
`;
