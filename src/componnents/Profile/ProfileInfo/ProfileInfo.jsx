import React from "react";
import Preloader from "../../common/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/2.png";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src={!props.profile.photos.small ? userPhoto : null}></img>
      </div>
      <div className={s.status}>{props.status}</div>
      <div>{props.profile.fullName}</div>
      <img src={props.profile.photos.large} />
      <div className={s.descriptionBlock}>{props.profile.aboutMe}</div>
      <ul>
        contacts
        <li>Facebook - {props.profile.contacts.facebook}</li>
        <li>website - {props.profile.contacts.website}</li>
        <li>VK - {props.profile.contacts.vk}</li>
        <li>twitter - {props.profile.contacts.twitter}</li>
        <li>instagram - {props.profile.contacts.instagram}</li>
      </ul>
    </div>
  );
};
export default ProfileInfo;
