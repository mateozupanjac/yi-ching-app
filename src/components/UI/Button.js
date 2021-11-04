import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  let buttonClass;

  switch (true) {
    case props.btnType === "success":
      buttonClass = classes.success;
      break;
    case props.btnType === "danger":
      buttonClass = classes.danger;
      break;
    case props.btnType === "demo":
      buttonClass = classes.demo;
      break;
    case props.btnType === "enter":
      buttonClass = classes.enter;
      break;
    default:
      return;
  }

  return (
    <button className={`${classes.button} ${buttonClass}`}>
      {props.children}
    </button>
  );
};

export default Button;
