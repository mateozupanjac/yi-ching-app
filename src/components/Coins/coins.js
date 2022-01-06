import React, { Fragment, useState } from "react";
import classes from "./coins.module.css";

import TossCoins from "./tossCoins";
import Coin from "../../UI/Coin";

const Coins = (props) => {
  const [tossedCoins, setCoins] = useState([1, 0, 1]);
  const [isSubmited, setIsSubmited] = useState(false);
  const [coinRotation, setCoinRotation] = useState(false);

  // Starts coin animation
  const didSubmitHandler = () => {
    setIsSubmited((prevState) => (prevState = true));
    setCoinRotation((prevState) => (prevState = true));

    const rotation = setTimeout(() => {
      console.log("COIN ROTATION STOPPED");
      setCoinRotation((prevState) => (prevState = false));
    }, 2000);
    console.log("STOP TIMEOUT");
  };

  const coins = tossedCoins.map((value) => (
    <Coin key={`coin${Math.random(10)}`} val={value} rotation={coinRotation} />
  ));

  return (
    <Fragment>
      <div className={classes["coins-frame"]}>{coins}</div>
      <TossCoins didSubmit={didSubmitHandler} />
    </Fragment>
  );
};

export default Coins;
