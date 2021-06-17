import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import "./Header.module.css";
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import s from "./Header.module.css";

const Header = (props) => {
  let loadings= useState([])


    return (
        <header className={s.header}>
            <img src="https://cdn.worldvectorlogo.com/logos/tiktok-logo-2--1.svg"/>

            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login}{"   "}
                   <Button type="primary"
          icon={<PoweroffOutlined />} onClick={props.logout}>LogOut</Button>
                </div> : <NavLink to="/login">
                 <Button
          type="primary"
          icon={<PoweroffOutlined />}
        >Login</Button>
                </NavLink>}
            </div>

            {!props.currentProfile ? (
                <Preloader/>
            ) : (
                <div>{props.currentProfile.userId}</div>
            )}
        </header>
    );
};
export default Header;
