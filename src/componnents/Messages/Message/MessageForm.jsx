import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "../../Messages/Messages.module.css";
const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.textButton}>
      <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Enter your message"
        ></Field>
      </div>
        <div>dsd</div>
      <div>
        <button>send message</button>
      </div>
    </form>
  );
};
export const MessageFormRedux = reduxForm({ form: "addMessageForm" })(
  MessageForm
);
