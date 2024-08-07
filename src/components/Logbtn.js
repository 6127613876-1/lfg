import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logbtn = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default Logbtn;
