import React from "react";
import Preloader from "../../common/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/2.png";
import MyProfileStatus from "./MyProfileStatus";
const MyProfileInfo = (props) => {
  if (!props.currentProfile) {
    return <Preloader />;
  }

  props.getStatus(props.currentProfile.userId);
  return (
    <div>
      <div>{props.currentProfile.fullName}</div>
      <div>{props.status}</div>
      <div>
        <img src={!props.currentProfile.photos.small ? userPhoto : null}></img>
      </div>
      <MyProfileStatus
        status={props.status}
        updateStatus={props.updateStatus}
      />

      <div className={s.descriptionBlock}>{props.currentProfile.aboutMe}</div>
      <ul>
        contacts
        <li>Facebook - {props.currentProfile.contacts.facebook}</li>
        <li>website - {props.currentProfile.contacts.website}</li>
        <li>VK - {props.currentProfile.contacts.vk}</li>
        <li>twitter - {props.currentProfile.contacts.twitter}</li>
        <li>instagram - {props.currentProfile.contacts.instagram}</li>
      </ul>
    </div>
  );
};
export default MyProfileInfo;