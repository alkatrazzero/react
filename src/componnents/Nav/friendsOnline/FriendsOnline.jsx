import React from "react";
import s from "../Nav.module.css";
const FriendsOnline = (props) => {
  return (
    <div>
      <a href="">{props.name} </a>
      <div>
        <img
          className={s.friendsOnline}
          src=" https://www.blast.hk/attachments/64805/"
        />
      </div>
    </div>
  );
};
export default FriendsOnline;
