import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const buttonClass = [classes.button];

  switch (true) {
    case props.btnType === "success":
      buttonClass.push(classes.success);
      break;
    case props.btnType === "danger":
      buttonClass.push(classes.danger);
      break;
    case props.btnType === "demo":
      buttonClass.push(classes.demo);
      break;
    default:
      return buttonClass;
  }

  return <button className={buttonClass.join(" ")}>{props.children}</button>;
};

export default Button;
