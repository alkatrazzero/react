import React from "react";
import classes from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <div className={classes.item}>
        <a href=""> Profile</a>
      </div>
      <div className={`${classes.item} ${classes.message}`}>
        <a href=""> Messages</a>
      </div>
      <div className={classes.item}>
        <a href=""> News </a>
      </div>
      <div className={classes.item}>
        <a href=""> Music </a>
      </div>
      <div className={classes.item}>
        <a href="">Settings</a>
      </div>
    </nav>
  );
};
export default Nav;
