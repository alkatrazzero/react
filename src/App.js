import React from "react";
import "./App.css";
import Header from "./componnents/Header/Header";
import MessagesContainer from "./componnents/Messages/MessagesContainer";
import Music from "./componnents/Music/Music";
import Nav from "./componnents/Nav/Nav";
import News from "./componnents/News/News";
import Profile from "./componnents/Profile/Profile";
import Settings from "./componnents/Settings/Settings";
import { Route } from "react-router-dom";
import Friends from "./componnents/Friends/Friends";
import UsersContainer from "./componnents/users/UsersContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav state={props.state.friends} sitebar={props.state.sitebar} />
      <div className="all-wrapper-content">
        <Route path="/Messages" render={() => <MessagesContainer />} />
        <Route path="/Profile" render={() => <Profile />} />

        <Route path="/Music" render={() => <Music />} />
        <Route path="/News" render={() => <News />} />
        <Route path="/Settings" render={() => <Settings />} />
        <Route
          path="/Friends"
          render={() => <Friends state={props.state.friends} />}
        />
        <Route path="/Users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
