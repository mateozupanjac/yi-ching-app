import React from "react";
import classes from "./ErrorMsg.module.css";

export const ErrorMsg = (props) => {
  return <div className={classes.error}>{props.message}</div>;
};
