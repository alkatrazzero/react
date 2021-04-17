import React from "react";
import s from "../Friends/Friends.module.css";
const OnlineFriends = (props) => {
  return (
    <div>
      <div>
        <img
          className={s.dialogImg}
          src="https://www.blast.hk/attachments/64805/"
        />
        {props.name}
      </div>
    </div>
  );
};
export default OnlineFriends;
