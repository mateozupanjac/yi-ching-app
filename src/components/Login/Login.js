import { useState } from "react";

import LoginForm from "./LoginForm";
import classes from "./Login.module.css";

const Login = () => {
  const [userIsRegistered, setUserIsRegistered] = useState(true);

  const toggleLoginButton = () => {
    setUserIsRegistered((prevState) => !prevState);
  };

  return (
    <section className={classes["login-page"]}>
      <LoginForm
        isRegistered={userIsRegistered}
        toggleButton={toggleLoginButton}
      />
      <div>
        <p>Carousel</p>
      </div>
    </section>
  );
};

export default Login;
