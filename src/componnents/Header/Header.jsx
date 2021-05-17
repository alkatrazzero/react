import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader";
import "./Header.module.css";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://cdn.worldvectorlogo.com/logos/tiktok-logo-2--1.svg" />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
      {!props.currentProfile ? (
        <Preloader />
      ) : (
        <div>{props.currentProfile.userId}</div>
      )}
    </header>
  );
};
export default Header;
