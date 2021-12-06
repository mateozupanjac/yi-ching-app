import React from "react";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { uiActions } from "../../store/ui-slice";
import { useHistory } from "react-router-dom";

import Button from "../../UI/Button";
import Loader from "../../UI/Loader";
import classes from "./LoginForm.module.css";

const API_KEY = "AIzaSyDkXWDyqrYCNg7Quixa5TnACLw4VjS-5jQ";

const LoginForm = (props) => {
  const [isDemo, setIsDemo] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ui.isLoading);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const loginHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    dispatch(uiActions.startLoading());
    // optional: add validation

    // when demo button is clicked
    if (isDemo) {
      //send http
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            console.log(data);
            dispatch(authActions.login());
            dispatch(uiActions.stopLoading());
            history.replace("/yi-ching");
          });
        } else {
          return res.json().then((data) => {
            dispatch(uiActions.stopLoading());
            history.replace("/login");

            console.log(data, "RESPONSE DATA");
          });
        }
      });
    }

    // login if registeres sign up if not
    if (props.isRegistered) {
      //USER LOGIN
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          "Content-Type": "application/json",
        }
      ).then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            dispatch(authActions.login());
            dispatch(uiActions.stopLoading());
            emailInputRef.current.value = "";
            passwordInputRef.current.value = "";
            history.replace("/yi-ching");
          });
        } else {
          return res.json().then((data) => {
            emailInputRef.current.value = "";
            passwordInputRef.current.value = "";
            dispatch(uiActions.stopLoading());
            history.replace("/login");
            console.log(data);
          });
        }
      });
    } else {
      // USER SIGN UP
      fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          "Content-Type": "application/json",
        }
      ).then((res) => {
        if (res.ok) {
          return res.json().then((data) => {
            dispatch(authActions.login());
            dispatch(uiActions.stopLoading());
            emailInputRef.current.value = "";
            passwordInputRef.current.value = "";
            history.replace("/yi-ching");
          });
        } else {
          return res.json().then((data) => {
            emailInputRef.current.value = "";
            passwordInputRef.current.value = "";
            dispatch(uiActions.stopLoading());
            history.replace("/login");
            console.log(data);
          });
        }
      });
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
      <Button
        btnType="submit"
        btnClass="demo"
        onClick={() => setIsDemo((prevState) => (prevState = true))}
      >
        Demo
      </Button>
      <p className={classes["form-text"]}>Prijavi se bez računa.</p>
    </form>
  );
};

export default LoginForm;
