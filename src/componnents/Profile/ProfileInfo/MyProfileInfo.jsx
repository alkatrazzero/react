import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/2.png";
import MyProfileStatusWithHooks from "./MyProfileStatusWithHooks";
import {Form, Input, InputNumber, Button} from 'antd';
import Checkbox from "antd/es/checkbox/Checkbox";
///////////////////////////PROFILE INFO//////////////////////////////////////////////////////PROFILE INFO///////////////////////////
///////////////////////////PROFILE INFO//////////////////////////////////////////////////////PROFILE INFO///////////////////////////
///////////////////////////PROFILE INFO//////////////////////////////////////////////////////PROFILE INFO///////////////////////////
const MyProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = (values) => {
    setEditMode(false)
    props.saveProfile(values);
    console.log(values)
  }
  if (!props.currentProfile) {
    return <Preloader/>;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  props.getMyStatus(props.currentProfile.userId);
  return (
    <div>
      <div className={s.myName}>{props.currentProfile.fullName}</div>
      <MyProfileStatusWithHooks
        className={s.myStatus}
        myStatus={props.myStatus}
        updateStatus={props.updateStatus}
      />
      <div>
        <img
          src={props.currentProfile.photos.large || props.currentProfile.photos.small ? props.currentProfile.photos.large || props.currentProfile.photos.small : userPhoto}/>
      </div>
      {props.currentProfile ? <input type={"file"} onChange={onMainPhotoSelected}/> : null}
      {editMode ? <ProfileDataForm currentProfile={props.currentProfile} deactivateEditMode={deactivateEditMode}/> :
        <ProfileData currentProfile={props.currentProfile}/>}
      {!editMode ? <button onClick={activateEditMode}>EditProfile</button> : null}


    </div>
  );
}
const Contact = ({contactTitle, contactValue}) => {
  return (
    <div className={s.contacts}><b>{contactTitle}</b>:<a href={contactValue}>{contactValue}</a></div>
  )
}
export default MyProfileInfo;


///////////////////////////PROFILE DATA//////////////////////////////////////////////////////////////PROFILE DATA///////////////////////////////////
///////////////////////////PROFILE DATA//////////////////////////////////////////////////////////////PROFILE DATA///////////////////////////////////
///////////////////////////PROFILE DATA//////////////////////////////////////////////////////////////PROFILE DATA///////////////////////////////////
const ProfileData = ({currentProfile}) => {

  return <div>
    <div>
      <div><b>Full name: </b>{currentProfile.fullName}</div>
      <b>Looking for a job:</b> {currentProfile.lookingForAJob ? "yes" : "no"
    }</div>
    <div><b>lookingForAJobDescription: </b>{currentProfile.lookingForAJobDescription} </div>
    <div><b>About me: </b>{currentProfile.aboutMe}</div>

    <div>
      <b>contacts: </b> {Object.keys(currentProfile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={currentProfile.contacts[key]}/>
    })}

    </div>
  </div>
}


///////////////////////////PROFILE FORM DATA/////////////////////////// ///////////////////////////PROFILE FORM DATA/////////////////////////////////////
///////////////////////////PROFILE FORM DATA/////////////////////////// ///////////////////////////PROFILE FORM DATA///////////////////////////
///////////////////////////PROFILE FORM DATA/////////////////////////// ///////////////////////////PROFILE FORM DATA///////////////////////////
const ProfileDataForm = (props) => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form className={s.form} name="nest-messages" onFinish={props.deactivateEditMode} layout={"vertical"}>
      <Form.Item name={'fullName'} label="Full Name" rules={[{required: true}]}
                 getFieldValue={props.currentProfile.fullName} initialValue={props.currentProfile.fullName}>
        <Input placeholder={"full Name"}/>
      </Form.Item>
      <Form.Item name={'AboutMe'} label="AboutMe" rules={[{required: true}]}
                 initialValue={props.currentProfile.aboutMe}>
        <Input placeholder={"AboutMe"}/>
      </Form.Item>
      <Form.Item name={"lookingForAJob"} valuePropName="checked" initialValue={props.currentProfile.lookingForAJob}>
        <Checkbox>looking For A Job</Checkbox>
      </Form.Item>
      <Form.Item name={'lookingForAJobDescription'} label="Job Descriptions" rules={[{required: true}]}
                 initialValue={props.currentProfile.lookingForAJobDescription}>
        <Input.TextArea placeholder={"Job Descriptions"}/>
      </Form.Item>

      <div>Contacts:</div>
      <Form.Item name={['contacts', 'vk']} label="vk" initialValue={props.currentProfile.contacts.vk}>
        <Input placeholder={"vkontakte"}/>
      </Form.Item>
      <Form.Item name={['contacts', 'instagram']} label="instagram"
                 initialValue={props.currentProfile.contacts.instagram}>
        <Input placeholder={"instagram"}/>
      </Form.Item>
      <Form.Item name={['contacts', 'website']} label="Website" rules={[{type: 'email'}]}
                 initialValue={props.currentProfile.contacts.website}>
        <Input placeholder={"your website"}/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
///////////////////////////PROFILE FORM DATA/////////////////////////// ///////////////////////////PROFILE FORM DATA///////////////////////////
///////////////////////////PROFILE FORM DATA/////////////////////////// ///////////////////////////PROFILE FORM DATA///////////////////////////
///////////////////////////PROFILE FORM DATA/////////////////////////// ///////////////////////////PROFILE FORM DATA///////////////////////////
