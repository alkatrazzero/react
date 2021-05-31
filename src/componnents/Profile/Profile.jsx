import React from "react";
import MyPostsConteiner from "./myPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} />
      <MyPostsConteiner />
    </div>
  );
};
export default Profile;
