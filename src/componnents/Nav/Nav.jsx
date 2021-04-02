import React from "react";
import classes from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <div className={classes.item}>
        <a> Profile</a>
      </div>
      <div className={`${classes.item} ${classes.message}`}>
        <a> Messages</a>
      </div>
      <div className={classes.item}>
        <a> News </a>
      </div>
      <div className={classes.item}>
        <a> Music </a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};
export default Nav;
