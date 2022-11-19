import React from "react";
import { StyledToastNotifications } from "./Styles/ToastNotifications.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ToastNotifications({ message, color, icon }) {
  return (
    <StyledToastNotifications color={color}>
      <FontAwesomeIcon icon={icon} />
      <p>{message}</p>
    </StyledToastNotifications>
  );
}

export default ToastNotifications;
