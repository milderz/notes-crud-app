import React, { useEffect } from "react";

import { StyledLogin } from "./Styles/Login.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <StyledLogin>
      <div className="login-hero">
        <h2>Log In to Notes</h2>
        <p>
          Notes is a note taking app that helps you keep your information
          organized.
        </p>
      </div>
      <div className="login-form">
        <button onClick={handleGoogleSignIn} className="google-login-btn">
          <FontAwesomeIcon icon={faGoogle} />
          Continue with Google
        </button>
      </div>
    </StyledLogin>
  );
}

export default Login;
