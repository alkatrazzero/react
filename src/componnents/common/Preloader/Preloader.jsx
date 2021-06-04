import React from "react";
import loader from "../../../assets/loader.gif";
import s from "../../users/Users.module.css";
let Preloader = (props) => {
  return (
    <div>
      <img src={loader} className={s.gif} />
    </div>
  );
};

export default Preloader;
