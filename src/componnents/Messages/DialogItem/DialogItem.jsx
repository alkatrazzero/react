import React from "react";
import s from "../../Messages/Messages.module.css";
import { NavLink } from "react-router-dom";
const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/messages/" + props.id} activeClassName={s.activeLink}>
        <img
          className={s.dialogImg}
          src="http://sun9-39.userapi.com/s/v1/ig2/8aqATIMGN_0ucbrpPT2w9-Od9s4_R-28vuF1rs263b_AnT8lBidXi9Tp1qazfob7TONkocJPt4t4cK1Z6ZOpdx3e.jpg?size=200x0&quality=96&crop=35,35,1002,1009&ava=1"
        />{" "}
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
