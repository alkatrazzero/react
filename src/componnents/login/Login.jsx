import React from "react";
import { getFormData } from "../../redux/authReduser";
import { LoginReduxForm } from "./LoginForm";
const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    getFormData(formData);
  };
  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default Login;
