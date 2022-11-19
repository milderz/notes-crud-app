import styled from "styled-components";

export const StyledUserLogin = styled.div`
  display: flex;
  align-items: center;
  .user-avatar {
    height: 3.4rem;
    width: 3.4rem;
    border-radius: 50%;
    background-color: var(--main-white);
  }

  .user-name {
    font-size: 1.6rem;
    color: var(--main-white);
    padding-left: 1.6rem;

    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .log-out-btn {
    background: none;
    border: none;
    padding-left: 1.8rem;
    cursor: pointer;

    svg {
      height: 1.8rem;
      color: rgba(255, 255, 255, 0.65);
      transition: color 0.2s ease;
    }

    :hover {
      svg {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
`;
