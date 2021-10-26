import classes from "./MainHeader.module.css";
import Navigation from "../Navigation/Navigation";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <div className={classes.logo}>Yi Ching</div>
      <div className={classes.userProfileImg}>
        <img alt="user-img" src="/" />
      </div>
      <Navigation />
    </header>
  );
};

export default MainHeader;
