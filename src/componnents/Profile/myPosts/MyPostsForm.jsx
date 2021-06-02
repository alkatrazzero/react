import { reduxForm, Field } from "redux-form";
import React from "react";

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPost"></Field>
      </div>
      <div>
        <button> add post</button>
      </div>
    </form>
  );
};
export const MyPostsReduxForm = reduxForm({
  form: "myPosts",
})(MyPostsForm);
