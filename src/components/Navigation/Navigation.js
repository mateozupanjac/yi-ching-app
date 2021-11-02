import { Link, NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav>
      <ul className={classes["list-items"]}>
        <li className={classes["list-item"]}>
          <NavLink activeClassName={classes.active} to="/yi-ching">
            Yi Ching
          </NavLink>
        </li>
        <li className={classes["list-item"]}>
          <NavLink activeClassName={classes.active} to="/instructions">
            Instructions
          </NavLink>
        </li>
        <li className={classes["list-item"]}>
          <NavLink activeClassName={classes.active} to="/user-saved-questions">
            My Questions
          </NavLink>
        </li>
        <div className={classes["dropdown"]}>
          <div className={classes["dropdown-btn"]} onClick={props.onToggle}>
            Menu
          </div>
          {props.isToggled && (
            <div className={classes["dropdown-content"]}>
              <Link to="/user-profile">My Profile</Link>
              <Link to="/user-settings">Settings</Link>
            </div>
          )}
        </div>
        <li className={classes["list-item"]}>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
