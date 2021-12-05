import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./MainHeader.module.css";
import Navigation from "../Navigation/Navigation";
import ProfilePicture from "../UI/ProfilePicture";

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
      {isAuth && <ProfilePicture hasProfilePicture={hasOwnProfilePicture} />}
      {isAuth && (
        <Navigation onToggle={toggleMenuHandler} isToggled={toggleMenu} />
      )}
    </header>
  );
};

export default MainHeader;
