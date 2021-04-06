import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZn-u40qeiGVoPT_EmZ6IJdK6-Sn0WXLjaNA&usqp=CAU" />
      </div>
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
};
export default ProfileInfo;
