import React from "react";
import Button from "../../UI/Button";
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
        <FontAwesomeIcon icon="yin-yang" size="lg" />
      </span>
      <input type="text" placeholder="Postavi svoje pitanje..." />
      <Button btnClass="toss" btnType="submit">
        Baci kovanice
      </Button>
    </form>
  );
};

export default TossCoins;
