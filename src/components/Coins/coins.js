import React, { Fragment } from "react";
import classes from "./coins.module.css";

import TossCoins from "../../UI/tossCoins";
import Coin from "../../UI/Coin";

const Coins = (props) => {
  console.log("[COINS] Rendered");

  const coins = props.coinsArr.map((value) => {
    return (
      <Coin
        key={`coin${Math.random(10)}`}
        val={value}
        rotation={props.rotation}
      />
    );
  });

  return (
    <Fragment>
      <div className={classes["coins-frame"]}>{coins}</div>
      <TossCoins didSubmit={props.predictionHandler} />
    </Fragment>
  );
};

export default Coins;
