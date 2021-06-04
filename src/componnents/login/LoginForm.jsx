import { reduxForm, Field } from "redux-form";
import React from "react";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} name={"login"} component={"input"}/>
      </div>
      <div>
        <Field
    placeholder={"password"}
    name={"password"}
    component={"input"}
    />
      </div>
      <div>
        <Field
    type={"checkbox"}
    component={"input"}
    name={"remember me"}
    />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
export const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
