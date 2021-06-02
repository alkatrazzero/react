import { connect } from "react-redux";
import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};
const MyPostsConteiner = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsConteiner;
