import { reduxForm, Field } from "redux-form";
import React from "react";
import {maxLengthCreator, minLengthCreator, required} from "../../../utilits/validators/Validators";
import {Element} from "../../common/FormsControl/FormsControl";
const Textarea =Element("textarea")
const maxLength=maxLengthCreator(20)
const minLength= minLengthCreator(3)
const MyPostsForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[required,maxLength ,minLength]} component={Textarea} name="newPost" placeholder={'Enter post'}/>
      </div>
      <div>
        <button> add post</button>
      </div>
    </form>
  )
}
export const MyPostsReduxForm = reduxForm({
  form: "myPosts",
})(MyPostsForm);
