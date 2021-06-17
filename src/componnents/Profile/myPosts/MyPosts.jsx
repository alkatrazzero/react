import React from "react";
import {MyPostsReduxForm} from "./MyPostsForm";
import s from "../myPosts/MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = React.memo(props => {
  console.log("render")
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} key={post.id} like={post.like}></Post>
  ));

  const onSubmit = (newText) => {
    props.addPost(newText.newPost);
  };

  return (
    <div className={s.postsBlock}>
      <h3> My post</h3>
      <MyPostsReduxForm onSubmit={onSubmit}/>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
})


export default MyPosts;
