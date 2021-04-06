import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Messages" activeClassName={classes.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/News" activeClassName={classes.activeLink}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Music" activeClassName={classes.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Settings" activeClassName={classes.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Nav;
