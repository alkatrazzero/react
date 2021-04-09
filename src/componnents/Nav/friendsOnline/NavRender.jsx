import React from "react";
import classes from "../Nav.module.css";
import { NavLink } from "react-router-dom";
const NavRender = (props) => {
  return (
    <div className={classes.item}>
      <NavLink to={props.adress} activeClassName={classes.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};
export default NavRender;
