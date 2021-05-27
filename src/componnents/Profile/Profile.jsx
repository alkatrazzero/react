import React from "react";
import { Redirect } from "react-router";
import MyPostsConteiner from "./myPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsConteiner />
    </div>
  );
};
export default Profile;
