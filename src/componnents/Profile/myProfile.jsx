import React from "react";
import MyPostsConteiner from "./myPosts/MyPostsContainer";
import MyProfileInfo from "./ProfileInfo/MyProfileInfo";

const MyProfile = (props) => {
  return (
    <div>
      <MyProfileInfo
        currentProfile={props.currentProfile}
        updateStatus={props.updateStatus}
        myStatus={props.myStatus}
        getMyStatus={props.getMyStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsConteiner />
    </div>
  );
};

export default MyProfile;
