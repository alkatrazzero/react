import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="Profile">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZn-u40qeiGVoPT_EmZ6IJdK6-Sn0WXLjaNA&usqp=CAU" />
      </div>
      <div>ava+description</div>
      <div>My post</div>
      <div>New post</div>
      <div className="posts">
        <div className="item">post1</div>
        <div className="item">post2</div>
      </div>
    </div>
  );
};
export default Profile;
