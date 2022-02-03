import React from "react";
import Button from "./Button";
import classes from "./tossCoins.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Postavi pitanje i baci kovanice x6 puta
const TossCoins = (props) => {
  return (
    <form onSubmit={props.didSubmit} className={classes.tossCoins}>
      <span className={classes.icon}>
        <FontAwesomeIcon icon="yin-yang" size="lg" />
      </span>
      <input type="text" placeholder="Postavi svoje pitanje..." />
      <Button
        btnClass="toss"
        btnType="submit"
        isDisabled={props.isButtonDisabled}
      >
        Baci kovanice
      </Button>
    </form>
  );
};

export default TossCoins;
