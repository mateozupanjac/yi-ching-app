import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./coins.module.css";

import TossCoins from "../../UI/tossCoins";
import Coin from "../../UI/Coin";

const Coins = (props) => {
  console.log("[COINS] Rendered");
  const coinsArr = useSelector((state) => state.yiChing.coins);
  const rotation = useSelector((state) => state.yiChing.rotation);
  const lines = useSelector((state) => state.yiChing.lines);
  const isComplete = useSelector((state) => state.yiChing.isComplete);
  const buttonDisabled = useSelector((state) => state.yiChing.buttonDisabled);
  console.log(lines, isComplete);
  const coins = coinsArr.map((value) => {
    return (
      <Coin key={`coin${Math.random(10)}`} val={value} rotation={rotation} />
    );
  });

  return (
    <Fragment>
      <div className={classes["coins-frame"]}>{coins}</div>
      <TossCoins
        didSubmit={props.predictionHandler}
        isButtonDisabled={buttonDisabled}
      />
    </Fragment>
  );
};

export default Coins;
