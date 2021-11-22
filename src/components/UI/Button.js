import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  let buttonClass;

  switch (true) {
    case props.btnClass === "success":
      buttonClass = classes.success;
      break;
    case props.btnClass === "danger":
      buttonClass = classes.danger;
      break;
    case props.btnClass === "demo":
      buttonClass = classes.demo;
      break;
    case props.btnClass === "enter":
      buttonClass = classes.enter;
      break;
    case props.btnClass === "toss":
      buttonClass = classes.toss;
      break;
    case props.btnClass === "details":
      buttonClass = classes.details;
      break;
    default:
      return;
  }

  return (
    <button
      className={`${classes.button} ${buttonClass}`}
      onClick={props.onClick}
      type={props.btnType}
    >
      {props.children}
    </button>
  );
};

export default Button;
