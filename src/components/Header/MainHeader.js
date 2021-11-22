import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./MainHeader.module.css";
import Navigation from "../Navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainHeader = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [hasOwnProfilePicture, setHasOwnProfilePicture] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <header className={classes["main-header"]}>
      <div className={classes.logo}>Yi Ching</div>
      {isAuth && (
        <div className={classes.userProfileImg}>
          {hasOwnProfilePicture ? (
            <img alt="user-img" src="/" />
          ) : (
            <FontAwesomeIcon icon="user" size="lg" color="gray" />
          )}
        </div>
      )}
      {isAuth && (
        <Navigation onToggle={toggleMenuHandler} isToggled={toggleMenu} />
      )}
    </header>
  );
};

export default MainHeader;
