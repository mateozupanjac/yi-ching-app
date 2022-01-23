import { useSelector, useDispatch } from "react-redux";

import Loader from "../../UI/Loader.js";
import Coins from "../Coins/coins";
import classes from "./YiChing.module.css";
import Card from "../../UI/Card.js";
import { startPrediction } from "../../store/yiChing-slice.js";

const YiChing = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  const dispatch = useDispatch();
  console.log("[YI CHING] Rendered");

  const hexagramPredictionHandler = (event) => {
    event.preventDefault();
    dispatch(startPrediction());
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
