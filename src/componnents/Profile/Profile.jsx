import React from "react";
import classes from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={classes.Profile}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZn-u40qeiGVoPT_EmZ6IJdK6-Sn0WXLjaNA&usqp=CAU" />
      </div>
      <div>ava+description</div>
      <div>My post</div>
      <div>New post</div>
      <div className={classes.posts}>
        <div className={classes.item}>post1</div>
        <div className={classes.item}>post2</div>
      </div>
    </div>
  );
};
export default Profile;
