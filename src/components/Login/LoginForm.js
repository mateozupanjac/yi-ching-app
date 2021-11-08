import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { authActions } from "../../store/auth-reducer";
import Button from "../UI/Button";
import classes from "./LoginForm.module.css";

const API_KEY = "AIzaSyDkXWDyqrYCNg7Quixa5TnACLw4VjS-5jQ";

const LoginForm = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userNameRef = useRef();
  const passwordRef = useRef();

  const loginHandler = (e) => {
    e.preventDefault();
    const userData = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    if (props.isRegistered) {
      dispatch(authActions.login(userData));
      history.push("/yi-ching");
    } else {
      dispatch(authActions.registerNewUser());
      history.push("/yi-ching");
    }
  };

  return (
    <form onSubmit={loginHandler} className={classes["form-control"]}>
      <div className={classes["form-input"]}>
        <label htmlFor="username">E-mail</label>
        <input
          type="email"
          required
          ref={userNameRef}
          placeholder="Type your email"
        />
      </div>
      <div className={classes["form-input"]}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          required
          ref={passwordRef}
          placeholder="Type your password"
        />
      </div>
      <Button btnType="submit" btnClass="enter">
        {props.isRegistered ? "Log in" : "Register"}
      </Button>
      <p className={classes["form-text"]} onClick={props.toggleButton}>
        {props.isRegistered
          ? "Don't have an account? Click here to register!"
          : " Already have an account? Click here to log in!"}
      </p>
      <Button btnType="submit" btnClass="demo">
        Demo
      </Button>
      <p>Enter without creating account.</p>
    </form>
  );
};

export default LoginForm;
