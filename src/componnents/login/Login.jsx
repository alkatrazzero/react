import React from "react";
import {LoginReduxForm} from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/authReduser";
import {Redirect} from "react-router";


export const Login = (props) => {
  const captchaUrl = useSelector(state => state.auth.captchaUrl)
  const isAuth = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()
  const onSubmit = (formData) => {
    dispatch(login(formData.login, formData.password, formData.rememberMe, formData.captcha));

  };
  if (isAuth) {
    return <Redirect to="/MyProfile"/>
  }
  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
    </div>
  );
};

