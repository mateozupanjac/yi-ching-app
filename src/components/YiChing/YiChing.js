import { useSelector } from "react-redux";
import { useReducer } from "react";

import Loader from "../../UI/Loader.js";
import Coins from "../Coins/coins";
import classes from "./YiChing.module.css";
import Card from "../../UI/Card.js";

const createLine = (coinsArr) => {
  let coins = coinsArr.forEach;
};
const tossCoins = () => {
  const coins = [];
  for (let i = 0; i < 3; i++) {
    coins.push(Math.round(Math.random()));
  }
  return coins;
};

const initialState = {
  coins: [1, 1, 0],
  rotation: false,
};

const coinsReducer = (state, action) => {
  switch (action.type) {
    case "set-coins":
      return { ...state, coins: action.payload };
    case "start-rotation":
      return { ...state, rotation: true };
    case "stop-rotation":
      return { ...state, rotation: false };
    default:
      throw new Error();
  }
};

const YiChing = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const [state, dispatch] = useReducer(coinsReducer, initialState);
  console.log("[YI CHING] Rendered");

  const hexagramPredictionHandler = (event, tossedCoins) => {
    event.preventDefault();
    console.log("Prediction started!");
    dispatch({ type: "start-rotation" });

    // STARTS COIN ANIMATION AND CONSTRUCTS ONE LINE
    const rotation = setTimeout(() => {
      const tossedCoins = tossCoins();
      dispatch({ type: "set-coins", payload: tossedCoins });
      dispatch({ type: "stop-rotation" });
    }, 2000);
  };

  return (
    <section className={classes.YiChingSection}>
      <h2 className={classes.banner}>Dobrodošli u Yi Ching</h2>
      {isLoading && <Loader />}
      <Coins
        predictionHandler={hexagramPredictionHandler}
        coinsArr={state.coins}
        rotation={state.rotation}
      />
      <div className={classes.cards}>
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default YiChing;
