import { useState } from "react";
import classes from "./MainHeader.module.css";
import Navigation from "../Navigation/Navigation";

const MainHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <header className={classes["main-header"]}>
      <div className={classes.logo}>Yi Ching</div>
      <div className={classes.userProfileImg}>
        <img alt="user-img" src="/" />
      </div>
      <Navigation onToggle={toggleMenuHandler} isToggled={toggleMenu} />
    </header>
  );
};

export default MainHeader;
