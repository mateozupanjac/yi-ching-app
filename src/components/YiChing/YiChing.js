import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import Loader from "../../UI/Loader.js";
import Coins from "../Coins/coins";
import classes from "./YiChing.module.css";
import Card from "../../UI/Card.js";

const YiChing = () => {
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.ui.isLoading);

  useEffect(() => {
    if (isAuth) {
      history.replace("/yi-ching");
    } else {
      history.replace("/login");
    }
  }, [isAuth, history]);

  return (
    <section className={classes.YiChingSection}>
      <h2 className={classes.banner}>Dobrodošli u Yi Ching</h2>
      {isLoading && <Loader />}
      <Coins />
      <div className={classes.cards}>
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default YiChing;
