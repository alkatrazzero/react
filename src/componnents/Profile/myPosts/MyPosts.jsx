import React from "react";
import s from "../myPosts/MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} key={post.id} like={post.like}></Post>
  ));
  let newPostElement = React.createRef();
  let addPostNew = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.postsBlock}>
      <h3> My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPostNew}> add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
