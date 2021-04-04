import React from "react";
import classes from "../myPosts/MyPosts.module.css";
import Post from "../Post/Post";
const MyPosts = () => {
  return (
    <div className={classes.Profile}>
      <div>My post</div>
      <div>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <Post message="Hi, how are you?" like="15"></Post>
      <Post message="It is my first message " like="30"></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
};
export default MyPosts;
