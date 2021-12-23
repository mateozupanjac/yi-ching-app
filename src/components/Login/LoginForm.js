import React, { useCallback } from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { uiActions } from "../../store/ui-slice";
import { useHistory } from "react-router-dom";

import { sendHttp } from "../../store/auth-slice";
import Button from "../../UI/Button";
import Loader from "../../UI/Loader";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ui.isLoading);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loginHandler = (event) => {
    console.log(event.nativeEvent.submitter.innerText);
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (event.nativeEvent.submitter.innerText === "Prijava") {
      // Log in user
      dispatch(
        sendHttp({
          url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
          method: "POST",
          body: {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          },
        })
      );
      history.replace("/yi-ching");
    } else if (event.nativeEvent.submitter.innerText === "Demo") {
      // Log in user without email and password
      dispatch(
        sendHttp({
          url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
          method: "POST",
        })
      );
      history.push("/yi-ching");
    } else {
      // Register user
      dispatch(
        sendHttp({
          url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
          method: "POST",
          body: {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          },
        })
      );
      history.push("/yi-ching");
    }
  };

  return (
    <form onSubmit={loginHandler} className={classes["form-control"]}>
      {isLoading && <Loader />}
      <div className={classes["form-input"]}>
        <label htmlFor="username">E-mail</label>
        <input
          type="email"
          required
          ref={emailInputRef}
          placeholder="Type your email"
        />
      </div>
      <div className={classes["form-input"]}>
        <label htmlFor="password">Lozinka</label>
        <input
          type="password"
          required
          ref={passwordInputRef}
          placeholder="Type your password"
        />
      </div>

      <Button btnType="submit" btnClass="enter">
        {props.isRegistered ? "Prijava" : "Registracija"}
      </Button>
      <p className={classes["form-text"]} onClick={props.toggleButton}>
        {props.isRegistered
          ? "Nemaš račun? Klikni ovdje za registraciju!"
          : "Imaš račun? Klikni ovdje za prijavu!"}
      </p>
      <Button btnType="submit" btnClass="demo">
        Demo
      </Button>
      <p className={classes["form-text"]}>Prijavi se bez računa.</p>
    </form>
  );
};

export default LoginForm;
