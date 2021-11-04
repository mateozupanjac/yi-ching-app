import React from "react";

import Button from "../UI/Button";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  return (
    <form className={classes["form-control"]}>
      <div className={classes["form-input"]}>
        <label htmlFor="username">Username</label>
        <input type="text" required />
      </div>
      <div className={classes["form-input"]}>
        <label htmlFor="password">Password</label>
        <input type="text" required />
      </div>
      <Button btnType="enter">
        {props.isRegistered ? "Log in" : "Register"}
      </Button>
      <p className={classes["form-text"]} onClick={props.toggleButton}>
        {props.isRegistered
          ? "Don't have an account? Click here to register!"
          : " Already have an account? Click here to log in!"}
      </p>
      <Button btnType="demo">Demo</Button>
      <p>Enter without creating account.</p>
    </form>
  );
};

export default LoginForm;
