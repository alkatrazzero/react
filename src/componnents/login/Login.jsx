import React from "react";
import { LoginReduxForm } from "./LoginForm";
const Login = (props) => {
  const onSubmit = (formData) => {
    props.addLoginData(formData);
  };
  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
