import { useSelector } from "react-redux";

import Loader from "../components/UI/Loader.js";
import Coins from "../components/Coins/coins";
import classes from "./YiChing.module.css";
import Card from "../components/UI/Card.js";

const YiChingPage = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <section className={classes.YiChingSection}>
      <h2 className={classes.banner}>Dobrodošli u Yi Ching</h2>
      {isLoading && <Loader />}
      <Coins />
      <Card />
    </section>
  );
};

export default YiChingPage;
