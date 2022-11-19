import styled from "styled-components";

export const StyledEmptyPage = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.4s ease;

  h4 {
    color: var(--main-white);
    font-size: 3.2rem;
    padding: 3.2rem 0;
    text-align: center;

    @media screen and (max-width: 670px) {
      font-size: 2rem;
      padding: 2.2rem 0;
    }
  }

  p {
    color: var(--main-white);
    font-size: 1.8rem;
    @media screen and (max-width: 670px) {
      font-size: 1.4rem;
    }
  }
`;
