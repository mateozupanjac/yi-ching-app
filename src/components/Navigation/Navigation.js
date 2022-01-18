import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

import classes from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = (props) => {
  const dispatch = useDispatch();

  console.log("[NAVIGATION] Rendered");
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
            Upute
          </NavLink>
        </li>
        <li className={classes["list-item"]}>
          <NavLink activeClassName={classes.active} to="/user-saved-questions">
            Moja pitanja
          </NavLink>
        </li>
        <div className={classes["dropdown"]}>
          <div className={classes["dropdown-btn"]} onClick={props.onToggle}>
            Izbornik
            <span className={classes["menu-icon"]}>
              <FontAwesomeIcon icon="caret-down" />
            </span>
          </div>
          {props.isToggled && (
            <div className={classes["dropdown-content"]}>
              <Link to="/user-profile">Moj profil</Link>
              <Link to="/user-settings">Postavke</Link>
            </div>
          )}
        </div>
        <li
          className={classes["list-item"]}
          onClick={() => dispatch(authActions.logout())}
        >
          <Link to="/login">Odjava</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
