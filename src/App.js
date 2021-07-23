import React from "react";
import "./App.css";
import MessagesContainer from "./componnents/Messages/MessagesContainer";
import Music from "./componnents/Music/Music";
import News from "./componnents/News/News";
import {Route, Switch} from "react-router-dom";
import {UsersPage} from "./componnents/users/UsersContainer";
import ProfileContainer from "./componnents/Profile/ProfileContainer";
import MyProfileContainer from "./componnents/Profile/myProfileContainer";
import LoginContainer from "./componnents/login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect, withRouter} from "react-router";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./componnents/common/Preloader/Preloader";
import FriendsContainer from "./componnents/Friends/FriendsContainer";
import 'antd/dist/antd.css'
import {Layout, Menu} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {AppHeader} from "./componnents/Header/Header";


const {SubMenu} = Menu;
const {Header, Content, Sider,Footer} = Layout;


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (this.props.initialized === false) {
      return <Preloader/>
    }
    return (
      <Layout>
<AppHeader/>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              // defaultOpenKeys={['sub1']}
              style={{height: '100%', borderRight: 0}}
            >
              <SubMenu key="sub1" icon={<UserOutlined/>} title="My Profile">

                <Menu.Item key="1"><Link to={"/MyProfile"}>
                  Мой профиль
                </Link></Menu.Item>
                <Menu.Item key="2"><Link to={"/Messages"}>
                  Сообщения
                </Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                <Menu.Item key="5"><Link to={"/Users"}>
                  Пользователи
                </Link></Menu.Item>

              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Настройки">
                <Menu.Item key="9"><Link to={"/Settings"}>
                  Настройки аккаунта
                </Link></Menu.Item>

              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{padding: '0 24px 24px'}}>

            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path={"/"} render={() => <Redirect to={"/MyProfile"}/>}/>
                <Route path="/Messages" render={() => <MessagesContainer/>}/>
                <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/Music" render={() => <Music/>}/>
                <Route path="/News" render={() => <News/>}/>
                <Route
                  path="/Friends"
                  render={() => <FriendsContainer/>}
                />
                <Route exact path={"/MyProfile"} render={() => <MyProfileContainer/>}/>
                <Route path="/Users" render={() => <UsersPage pageTitle={"samurai"}/>}/>
                <Route path={"/login"} render={() => <LoginContainer/>}/>
                <Route path="*" render={() => <div>404</div>}/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>My first site 21.07.2021</Footer>
      </Layout>

    );
    // <div className="app-wrapper">
    //   <HeaderContainer/>
    //
    //   <Nav state={this.props.state.friends} sitebar={this.props.state.sitebar}/>
    //   <div className="all-wrapper-content">
    //     <Switch>
    //       <Route exact path={"/"} render={() => <Redirect to={"/MyProfile"}/>}/>
    //       <Route path="/Messages" render={() => <MessagesContainer/>}/>
    //       <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
    //       <Route path="/Music" render={() => <Music/>}/>
    //       <Route path="/News" render={() => <News/>}/>
    //       <Route
    //         path="/Friends"
    //         render={() => <FriendsContainer/>}
    //       />
    //       <Route exact path={"/MyProfile"} render={() => <MyProfileContainer/>}/>
    //       <Route path="/Users" render={() => <UsersPage pageTitle={"samurai"}/>}/>
    //       <Route path={"/Login"} render={() => <LoginContainer/>}/>
    //       <Route path="*" render={() => <div>404</div>}/>
    {/*    </Switch>*/
    }
    {/*  </div>*/
    }
    {/*</div>*/
    }

  }

}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    sitebar: state.sitebar
    // userId:state.auth.currentProfile.userId
  }

};
export default compose(
  withRouter,
  connect
  (mapStateToProps, {initializeApp}))(App);
