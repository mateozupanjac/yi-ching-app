import React from "react";

import classes from "../UI/Coin.module.css";
import head from "../images/head.jpg";
import tail from "../images/tail.jpg";

const Coin = (props) => {
  return (
    <div
      className={`${classes.coin} ${
        props.rotation ? classes.coinRotation : null
      }`}
    >
      {props.val === "1" ? (
        <img src={head} alt="Head of a coin" width="100%" height="100%" />
      ) : (
        <img src={tail} alt="Tail of a coin" width="100%" height="100%" />
      )}
    </div>
  );
};

export default Coin;
