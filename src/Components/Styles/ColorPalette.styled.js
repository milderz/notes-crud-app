import styled from "styled-components";

export const StyledColorPalette = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 99;
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translateX(-50%);

  height: 4.9rem;
  background-color: var(--secondary-black);
  border-radius: 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  button {
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    border: none;
    border-radius: 50%;
    margin: 0 1.2rem;
    border: 0.2rem solid transparent;
    transition: border 0.2s ease;
    position: relative;

    :hover {
      border: 0.2rem solid var(--main-white);
    }

    :last-child {
      border: 0.2rem solid rgba(255, 255, 255, 0.65);
      transition: border 0.2s ease;

      :hover {
        border: 0.2rem solid rgba(255, 255, 255, 1);
      }

      ::after {
        content: url("/droplet-slash-solid.svg");
        position: absolute;
        top: 50%;
        left: 50%;
        height: 1.6rem;
        width: 1.6rem;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
