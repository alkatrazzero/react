import React from "react";
import { LoginReduxForm } from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/authReduser";
import {Redirect} from "react-router";
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login,formData.password,formData.rememberMe);
    console.log(formData)
  };
  if(props.isAuth){
    return <Redirect to ="/MyProfile"/>

  }
  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
export default connect(null,{login})(Login);
