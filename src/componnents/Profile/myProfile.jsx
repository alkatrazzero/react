import React from "react";
import Preloader from "../common/Preloader";
import userPhoto from "../../assets/images/2.png";
import { Redirect } from "react-router";
const MyProfile = (props) => {
  return (
    <div>
      <div>
        {!props.currentProfile ? (
          <Preloader />
        ) : (
          <div>
            <div>
              <img
                src={!props.currentProfile.photos.small ? userPhoto : null}
              ></img>
            </div>
            <div>{props.currentProfile.userId}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
