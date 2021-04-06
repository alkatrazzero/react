import React from "react";
import s from "../myPosts/MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {

  let postsElements = props.posts.map((post) => (
    <Post message={post.message} like={post.like}></Post>
  ));

  return (
    <div className={s.postsBlock}>
      <h3> My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
