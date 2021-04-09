import React from "react";
import s from "../myPosts/MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} like={post.like}></Post>
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };
  return (
    <div className={s.postsBlock}>
      <h3> My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}> add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
