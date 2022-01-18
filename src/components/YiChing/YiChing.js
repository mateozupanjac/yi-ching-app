import { useSelector } from "react-redux";
import { useState } from "react";

import Loader from "../../UI/Loader.js";
import Coins from "../Coins/coins";
import classes from "./YiChing.module.css";
import Card from "../../UI/Card.js";

const YiChing = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const [hexagramPrediction, setHexagramPrediction] = useState([]);
  console.log("[YI CHING] Rendered");

  const hexagramPredictionHandler = (lowerTrigram, higherTrigram) => {
    setHexagramPrediction((prevState) => (prevState = lowerTrigram));
  };

  return (
    <section className={classes.YiChingSection}>
      <h2 className={classes.banner}>Dobrodošli u Yi Ching</h2>
      {isLoading && <Loader />}
      <Coins predictionHandler={hexagramPredictionHandler} />
      <div className={classes.cards}>
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default YiChing;
