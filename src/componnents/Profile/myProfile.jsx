import React from "react";
import MyPostsConteiner from "./myPosts/MyPostsContainer";
import MyProfileInfo from "./ProfileInfo/MyProfileInfo";

const MyProfile = (props) => {
  return (
    <div>
      <MyProfileInfo
        currentProfile={props.currentProfile}
        updateStatus={props.updateStatus}
        status={props.status}
        getStatus={props.getStatus}
        currentProfile={props.currentProfile}
      />
      <MyPostsConteiner />
    </div>
  );
};

export default MyProfile;
