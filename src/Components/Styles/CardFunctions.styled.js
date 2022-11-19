import styled from "styled-components";

export const StyledCardFunctions = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: ${({ deleted }) => (deleted ? "space-between" : "end")};
  align-items: center;

  button {
    position: relative;
    cursor: pointer;
    border: none;
    background: none;
    /* margin-left: 2.2rem; */
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    background-color: transparent;
    transition: background-color 0.2s ease;

    :hover {
      background-color: rgba(255, 255, 255, 0.2);

      svg {
        color: rgba(255, 255, 255, 1);
      }
    }
    svg {
      height: 2.2rem;
      color: rgba(255, 255, 255, 0.65);

      transition: color 0.4s ease;
    }

    ::before {
      /* content: ""; */
      position: absolute;
      top: 4.8rem;
      left: 50%;
      transform: translateX(-50%);
      color: var(--main-white);
      background-color: var(--purple);
      padding: 0.4rem 0.8rem;
      width: max-content;
      font-size: 1.2rem;
      border-radius: 0.5rem;
      opacity: 0;
      background-color: none;
      transition: all 0.4s ease 0.8s;
    }

    :nth-child(1) {
      :hover::before {
        content: "Add to favorites";
        opacity: 1;
      }
    }
    :nth-child(2) {
      :hover::before {
        content: "Set as pending";
        opacity: 1;
      }
    }

    :nth-child(3) {
      :hover::before {
        content: "Choose color";
        opacity: 1;
      }
    }
    :nth-child(4) {
      :hover::before {
        content: "Delete";
        opacity: 1;
      }
    }
  }

  .favorites-btn {
    svg {
      path {
        color: ${({ favorite }) =>
          favorite ? "#F2A541" : "color: rgba(255, 255, 255, 0.65)"};
        transition: color 0.4s ease;
      }
    }

    :hover {
      svg {
        path {
          color: #f2a541;
        }
      }
    }
  }

  .pending-btn {
    svg {
      path {
        color: ${({ pending }) =>
          pending ? "#96F550" : "color: rgba(255, 255, 255, 0.65)"};
        transition: color 0.4s ease;
      }
    }

    :hover {
      svg {
        path {
          color: #96f550;
        }
      }
    }
  }

  .restore-btn {
    :nth-child(1) {
      :hover::before {
        content: "Restore";
        opacity: 1;
      }
    }
  }
  .perm-delete-btn {
    :nth-child(2) {
      :hover::before {
        content: "Permanently delete";
        opacity: 1;
      }
    }
  }
`;
