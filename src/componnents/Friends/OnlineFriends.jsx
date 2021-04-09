import React from "react";
import s from "../Friends/Friends.module.css";
const OnlineFriends = (props) => {
  return (
    <div>
      <div>
          <img src = " sad"/>{props.name}
      </div>
    </div>
  );
};
export default OnlineFriends;
