import { useSelector } from "react-redux";

import Loader from "../components/UI/Loader.js";
import Coins from "../components/Coins/coins";
import classes from "./YiChing.module.css";

const YiChingPage = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <section className={classes.YiChingSection}>
      {isLoading && <Loader />}
      <Coins />
    </section>
  );
};

export default YiChingPage;
