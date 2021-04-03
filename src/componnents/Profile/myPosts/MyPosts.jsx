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
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  );
};
export default MyPosts;
