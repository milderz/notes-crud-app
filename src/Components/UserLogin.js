import { StyledUserLogin } from "./Styles/UserLogin.styled";
import { useEffect } from "react";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function UserLogin() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <StyledUserLogin>
      <img
        src={user?.photoURL}
        alt="user-profile-avatar"
        className="user-avatar"
      />

      <p className="user-name">{user?.email}</p>
      <button className="log-out-btn" onClick={handleSignOut}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </StyledUserLogin>
  );
}

export default UserLogin;
