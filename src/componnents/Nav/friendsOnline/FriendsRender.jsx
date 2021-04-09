import React from "react";
import classes from "../Nav.module.css";
import { NavLink } from "react-router-dom";
const FriendsRender = (props) => {
  return (
    <div className={classes.friendsRender}>
      <NavLink to={props.adress} activeClassName={classes.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};
export default FriendsRender;
