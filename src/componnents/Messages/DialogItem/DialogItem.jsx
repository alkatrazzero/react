import React from "react";
import s from "../../Messages/Messages.module.css";
import { NavLink } from "react-router-dom";
const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/messages/" + props.id} activeClassName={s.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
