import React from "react";
import Preloader from "../common/Preloader";
const MyProfile = (props) => {
  return (
    <div>
      {!props.currentProfile ? (
        <Preloader />
      ) : (
        <div>{props.currentProfile.userId}</div>
      )}
    </div>
  );
};

export default MyProfile;
