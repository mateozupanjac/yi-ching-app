import { useState } from "react";

import LoginForm from "./LoginForm";
import classes from "./Login.module.css";

const Login = () => {
  const [userIsRegistered, setUserIsRegistered] = useState(true);

  console.log("[LOGIN] Rendered");

  const toggleLoginButton = () => {
    setUserIsRegistered((prevState) => !prevState);
  };

  return (
    <section className={classes["login-page"]}>
      <LoginForm
        isRegistered={userIsRegistered}
        toggleButton={toggleLoginButton}
      />
    </section>
  );
};

export default Login;
