import styled from "styled-components";

export const StyledToastNotifications = styled.div`
  padding: 1.2rem 1.2rem;
  margin-top: 1.2rem;
  background-color: ${({ color }) => color && color};
  font-size: 1.6rem;
  color: var(--main-white);
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: start;
  animation: notificationAnimation 5s ease;
  transition: trasnform 0.4s ease;
  /* max-width: max-content; */
  width: 28.3rem;

  @media screen and (max-width: 500px) {
    margin: 1.2rem auto 0 auto;
  }

  svg {
    margin-right: 1.2rem;
  }

  @keyframes notificationAnimation {
    0% {
      opacity: 0;
      transform: translateY(25px);
    }
    10% {
      opacity: 1;
      transform: translateY(0);
    }

    90% {
      opacity: 1;
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      transform: translateY(25px);
    }
  }
`;

export const ToastContainer = styled.div`
  position: absolute;
  bottom: 2.2rem;
  right: 3.2rem;

  @media screen and (max-width: 500px) {
    width: 100%;
    bottom: 10.2rem;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
  }
`;
