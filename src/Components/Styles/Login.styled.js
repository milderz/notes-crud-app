import styled from "styled-components";

export const StyledLogin = styled.section`
  height: 100vh;
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  .login-hero {
    flex: 1;
    height: 100%;

    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(77, 90, 207, 0.6)),
      url("/login-hero.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      color: var(--main-white);
      padding: 2.2rem 0;
      font-size: 3.2rem;
    }

    p {
      color: var(--main-white);
      text-align: center;
      font-size: 1.6rem;
      width: 60%;
    }
  }

  .login-form {
    flex: 1;
    background-color: var(--main-black);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .google-login-btn {
    background-color: var(--secondary-black);
    border: none;
    color: var(--main-white);
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    border-radius: 0.6rem;
    cursor: pointer;
    transition: all 0.4s ease;

    svg {
      padding-right: 1.6rem;
    }

    :hover {
      background-color: var(--purple);
    }
  }
`;
