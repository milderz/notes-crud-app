import styled from "styled-components";

export const StyledNavLinks = styled.ul`
  margin-top: 6.4rem;
  height: 100%;

  li {
    a {
      position: relative;
      padding-left: 3.2rem;
      display: flex;
      align-items: center;
      height: 6.4rem;
      font-size: 1.4rem;

      svg {
        height: 2.2rem;
        color: var(--light-gray);
        width: 2.4rem;
        transition: all 0.4s ease;
      }

      p {
        font-size: 1.4rem;
        padding-left: 1.4rem;
        color: var(--light-gray);
        opacity: 1;
      }

      ::after {
        content: "";
        position: absolute;
        background-color: var(--main-white);
        right: 0;
        top: 0;
        width: 0.6rem;
        height: 100%;
        opacity: 0;
        transition: opacity 0.4s ease;
        @media screen and (max-width: 500px) {
          width: 100%;
          height: 0.6rem;
        }
      }

      :hover::after {
        opacity: 1;
      }

      :hover {
        background-color: var(--purple);
        transition: all 0.4s ease;

        svg {
          color: var(--main-white);
        }

        p {
          color: var(--main-white);
        }
      }

      @media screen and (max-width: 500px) {
        height: 100%;
      }
    }

    @media screen and (max-width: 500px) {
      height: 100%;
      width: 100%;
    }
  }

  .active {
    background-color: var(--purple);

    & p {
      color: var(--main-white);
    }

    svg {
      color: var(--main-white);
    }
    ::before {
      content: "";
      position: absolute;
      background-color: var(--main-white);
      right: 0;
      top: 0;
      width: 0.6rem;
      height: 100%;
      transition: opacity 0.4s ease;
      @media screen and (max-width: 500px) {
        width: 100%;
        height: 0.6rem;
      }
    }
  }

  @media screen and (max-width: 732px) {
    li {
      a {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          display: none;
          opacity: 0;
          transition: opacity 0.4s ease 1s;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: space-around;
    margin: 0;
  }
`;
