import React, { Fragment, useEffect, useCallback, useReducer } from "react";
import classes from "./coins.module.css";

import TossCoins from "../../UI/tossCoins";
import Coin from "../../UI/Coin";

const initialState = {
  coins: [1, 1, 0],
  rotation: false,
};

const coinsReducer = (state, action) => {
  switch (action.type) {
    case "set-coins":
      console.log(action.payload);
      return { ...state, coins: action.payload };
    case "start-rotation":
      return { ...state, rotation: true };
    case "stop-rotation":
      return { ...state, rotation: false };
    default:
      throw new Error();
  }
};

// Creates a line based on tossed coins
const tossCoins = () => {
  const coins = [];
  for (let i = 0; i < 3; i++) {
    coins.push(Math.round(Math.random()));
  }
  return coins;
};

const Coins = (props) => {
  const [state, dispatch] = useReducer(coinsReducer, initialState);

  console.log("[COINS] Rendered", state);

  // Starts coin animation
  const didSubmitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: "start-rotation" });

    // STARTS COIN ANIMATION AND CONSTRUCTS ONE LINE
    const rotation = setTimeout(() => {
      const tossedCoins = tossCoins();
      dispatch({ type: "set-coins", payload: tossedCoins });

      console.log(tossedCoins, "COIN ROTATION STOPPED");
      dispatch({ type: "stop-rotation" });
    }, 2000);
  };

  const coins = state.coins.map((value) => {
    return (
      <Coin
        key={`coin${Math.random(10)}`}
        val={value}
        rotation={state.rotation}
      />
    );
  });

  return (
    <Fragment>
      <div className={classes["coins-frame"]}>{coins}</div>
      <TossCoins didSubmit={didSubmitHandler} />
    </Fragment>
  );
};

export default Coins;
