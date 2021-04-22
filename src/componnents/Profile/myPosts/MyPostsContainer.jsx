import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsConteiner = (props) => {
  let state = props.store.getState();
  let addPostNew = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onChangePost = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      updateNewPostText={onChangePost}
      addPost={addPostNew}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};
export default MyPostsConteiner;
