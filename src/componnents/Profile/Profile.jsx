import React from "react";
import MyPosts from "./myPosts/MyPosts";
import classes from "./Profile.module.css";
const Profile = () => {
  return (
    <div className={classes.Profile}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZn-u40qeiGVoPT_EmZ6IJdK6-Sn0WXLjaNA&usqp=CAU" />
      </div>
      <div>ava+description</div>
      <MyPosts></MyPosts>
    </div>
  );
};
export default Profile;
