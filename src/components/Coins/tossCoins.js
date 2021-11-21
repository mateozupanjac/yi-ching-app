import React from "react";
import Button from "../UI/Button";
import classes from "./tossCoins.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TossCoins = (props) => {
  const tossCoinsHandler = (event) => {
    event.preventDefault();
    props.didSubmit();
  };

  return (
    <form onSubmit={tossCoinsHandler} className={classes.tossCoins}>
      <span className={classes.icon}>
        <FontAwesomeIcon icon="yin-yang" size="lg" spin />
      </span>
      <input type="text" placeholder="Place your question here..." />
      <Button btnClass="toss" btnType="submit">
        Toss Coins
      </Button>
    </form>
  );
};

export default TossCoins;
