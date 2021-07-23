import React from "react";
import {Link} from "react-router-dom";

import s from "./Header.module.css";
import {Button, Col, Menu, Row} from 'antd';
import {Header} from "antd/es/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/authReduser";
import Avatar from "antd/es/avatar/avatar";
import {UserOutlined} from "@ant-design/icons";


export const AppHeader = (props) => {

  const isAuth = useSelector(state => state.auth.isAuth)
  const currentProfile = useSelector(state => state.auth.currentProfile)
  const login = useSelector(state => state.auth.login)
  const logoutDispatch = () => dispatch(logout())
  const dispatch = useDispatch()
  return (
    <Header className="header">

      <div className="logo"/>
      <Row gutter={24}>
        <Col span={20}><Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><Link to={"/Users"}>Developers</Link> </Menu.Item>

        </Menu></Col>
        <Col span={4}>
          {isAuth ? <div style={{ color: "white"}}>
              <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
               {login} <Button type="primary" onClick={logoutDispatch}>LogOut</Button></div> :
            <Button type ="primary"><Link  to="/login">login </Link></Button>}

        </Col>

      </Row>

    </Header>
  )

}


