import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";

const Login = () => {
  const { handleLogin } = useContext(AppContext);

  return (
    <div>
      Login
      <button onClick={(e) => handleLogin()}>Login here</button>
    </div>
  );
};

export default Login;
