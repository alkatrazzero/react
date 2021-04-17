import React from "react";
import s from "../Friends/Friends.module.css";
const OfflineFriends = (props) => {
  return (
    <div>
      <img
        className={s.dialogImg}
        src=" https://www.blast.hk/attachments/64805/"
      />
      {props.name}
    </div>
  );
};
export default OfflineFriends;
