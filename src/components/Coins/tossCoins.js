import React from "react";
import Button from "../UI/Button";
import classes from "./tossCoins.module.css";

const TossCoins = (props) => {
  return (
    <form className={classes.tossCoins}>
      <input type="text" placeholder="Place your question here..." />
      <Button btnClass="toss" btnType="submit">
        Toss coins
      </Button>
    </form>
  );
};

export default TossCoins;
