import React from "react";
import classes from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <div className={classes.item}>
        <a href="/profile"> Profile</a>
      </div>
      <div className={`${classes.item} ${classes.message}`}>
        <a href="/dialogs"> Messages</a>
      </div>
      <div className={classes.item}>
        <a href="/News"> News </a>
      </div>
      <div className={classes.item}>
        <a href="/Music"> Music </a>
      </div>
      <div className={classes.item}>
        <a href="/Settings">Settings</a>
      </div>
    </nav>
  );
};
export default Nav;
