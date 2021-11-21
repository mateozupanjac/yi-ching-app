import React, { Fragment, useState, useEffect, useCallback } from "react";
import classes from "./coins.module.css";

import TossCoins from "./tossCoins";
import Coin from "../UI/Coin";

const Coins = (props) => {
  const [tossedCoins, setCoins] = useState([1, 0, 1]);
  const [isSubmited, setIsSubmited] = useState(false);
  const [coinRotation, setCoinRotation] = useState(false);

  // useEffect(
  //   useCallback(() => {
  //     const startRotation = setTimeout(() => {
  //       console.log("START COIN ROTATION");
  //       setCoinRotation((prevState) => (prevState = true));
  //     }, 1000);

  //     return () => clearTimeout(startRotation);
  //   }),
  //   [isSubmited, setCoinRotation]
  // );

  const didSubmitHandler = () => {
    setIsSubmited((prevState) => (prevState = true));
    setCoinRotation((prevState) => (prevState = true));
    setTimeout(() => {
      console.log("COIN ROTATION STOPPED");
      setCoinRotation((prevState) => (prevState = false));
    }, 2000);
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
