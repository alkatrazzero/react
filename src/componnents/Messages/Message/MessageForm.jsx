import React from "react";
import {Field, reduxForm} from "redux-form";
import s from "../../Messages/Messages.module.css";
import {maxLengthCreator, minLengthCreator, required} from "../../../utilits/validators/Validators";
import {Textarea} from "../../common/FormsControl/FormsControl";

const maxLength=maxLengthCreator(20)
const minLength= minLengthCreator(3)
function MessageForm(props) {
    return (
        <form onSubmit={props.handleSubmit} className={s.textButton}>
            <div>
                <Field
                    validate={[required,maxLength,minLength]}
                    component={Textarea}
                    name="newMessageBody"
                    placeholder="Enter your message"
                />
            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    );
}

export const MessageFormRedux = reduxForm({form: "addMessageForm"})(
    MessageForm
);
