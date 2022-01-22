import { useSelector, useDispatch } from "react-redux";

import Loader from "../../UI/Loader.js";
import Coins from "../Coins/coins";
import classes from "./YiChing.module.css";
import Card from "../../UI/Card.js";
import { yiChingActions } from "../../store/yiChing-slice.js";
import { startPrediction } from "../../store/yiChing-slice.js";

const tossCoins = () => {
  const coins = [];
  for (let i = 0; i < 3; i++) {
    coins.push(Math.round(Math.random()));
  }
  return coins;
};

const YiChing = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const rotation = useSelector((state) => state.yiChing.rotation);
  const coins = useSelector((state) => state.yiChing.coins);
  const dispatch = useDispatch();
  console.log("[YI CHING] Rendered");

  const hexagramPredictionHandler = (event, tossedCoins) => {
    event.preventDefault();
    dispatch(yiChingActions.startRotation());

    startPrediction();
  };

  return (
    <section className={classes.YiChingSection}>
      <h2 className={classes.banner}>Dobrodošli u Yi Ching</h2>
      {isLoading && <Loader />}
      <Coins
        predictionHandler={hexagramPredictionHandler}
        coinsArr={coins}
        rotation={rotation}
      />
      <div className={classes.cards}>
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default YiChing;
