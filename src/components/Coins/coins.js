import React, { Fragment, useState } from "react";
import classes from "./coins.module.css";

import TossCoins from "./tossCoins";
import Coin from "../UI/Coin";

const Coins = (props) => {
  const [tossedCoins, setCoins] = useState([1, 0, 1]);

  const coins = tossedCoins.map((value) => (
    <Coin key={`coin${Math.random(10)}`} val={value} />
  ));

  return (
    <Fragment>
      <div className={classes["coins-frame"]}>{coins}</div>
      <TossCoins />
    </Fragment>
  );
};

export default Coins;
