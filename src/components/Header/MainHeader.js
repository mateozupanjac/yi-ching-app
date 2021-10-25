import { Link, NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <div className={classes.logo}>Yi Ching</div>
      <div className={classes.userProfileImg}>
        <img alt="user-img" src="/" />
      </div>
      <nav>
        <ul className={classes["list-items"]}>
          <li className={classes["list-item"]}>
            <NavLink activeClassName={classes.active} to="/yi-ching">
              Yi Ching
            </NavLink>
          </li>
          <li className={classes["list-item"]}>
            <NavLink activeClassName={classes.active} to="instructions">
              Instructions
            </NavLink>
          </li>
          <li className={classes["list-item"]}>
            <NavLink activeClassName={classes.active} to="user-saved-questions">
              My Questions
            </NavLink>
          </li>
          <li className={classes["list-item"]}>
            <Link>More</Link>
          </li>
          <li className={classes["list-item"]}>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
