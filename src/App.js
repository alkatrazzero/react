import React from "react";
import "./App.css";
import MessagesContainer from "./componnents/Messages/MessagesContainer";
import Music from "./componnents/Music/Music";
import Nav from "./componnents/Nav/Nav";
import News from "./componnents/News/News";
import Settings from "./componnents/Settings/Settings";
import {  Route } from "react-router-dom";
import Friends from "./componnents/Friends/Friends";
import UsersContainer from "./componnents/users/UsersContainer";
import ProfileContainer from "./componnents/Profile/ProfileContainer";
import HeaderContainer from "./componnents/Header/HeaderContainet";
import MyProfileContainer from "./componnents/Profile/myProfileContainer";

import LoginContainer from "./componnents/login/LoginContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav state={props.state.friends} sitebar={props.state.sitebar} />
      <div className="all-wrapper-content">
        <Route path="/Messages" render={() => <MessagesContainer />} />
        <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />

        <Route path="/Music" render={() => <Music />} />
        <Route path="/News" render={() => <News />} />
        <Route path="/Settings" render={() => <Settings />} />
        <Route
          path="/Friends"
          render={() => <Friends state={props.state.friends} />}
        />
        <Route path="/Users" render={() => <UsersContainer />} />
        <Route path={"/MyProfile"} render={() => <MyProfileContainer />} />
        <Route path={"/Login"} render={() => <LoginContainer />} />
      </div>
    </div>
  );
};

export default App;
