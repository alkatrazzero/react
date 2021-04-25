import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

// const MyPostsConteiner = (props) => {
//   let state = props.store.getState();
//   let addPostNew = () => {
//     props.store.dispatch(addPostActionCreator());
//   };
//   let onChangePost = (text) => {
//     props.store.dispatch(updateNewPostTextActionCreator(text));
//   };
//   return (
//     <MyPosts
//       updateNewPostText={onChangePost}
//       addPost={addPostNew}
//       posts={state.profilePage.posts}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// };
const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};
const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;
