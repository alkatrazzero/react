import {reduxForm, Field} from "redux-form";
import React from "react";
import {Element} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, minLengthCreator, required} from "../../utilits/validators/Validators";
import s from  "../common/FormsControl/FormsControl.module.css"
import {Button} from "antd";
const minLength = minLengthCreator(3)
const maxLength = maxLengthCreator(35)
const Input = Element("input")
const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength, minLength]} type={"login"} name={"login"} component={Input}
                       placeholder={"Email"}/>
            </div>
            <div>
                <Field
                    validate={[required, maxLength, minLength]}
                    placeholder={"password"}
                    name={"password"}
                    component={Input}
                    type={"password"}
                />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    component={"input"}
                    name={"rememberMe"}
                />
                remember me
            </div>

            {props.error?<div className={s.formSummaryError}>{props.error}</div>:null}

            <div>
                <button>Login</button>
            </div>
            {props.captchaUrl ? <div>
                <img src={props.captchaUrl.url} alt=""/>
                <Field

                    type={"captcha"}
                    component={Input}
                    name={"captcha"}
                    placeholder={"captcha"}/></div> : null
            }
        </form>
    );
};
export const LoginReduxForm = reduxForm({
        form: "login",
    }
)(LoginForm);
