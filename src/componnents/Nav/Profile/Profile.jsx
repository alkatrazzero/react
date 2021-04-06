import React from "react";
import MyPosts from "./myPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts></MyPosts>
    </div>
  );
};
export default Profile;
