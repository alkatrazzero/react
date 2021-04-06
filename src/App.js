import React from "react";
import "./App.css";
import Header from "./componnents/Header/Header";
import Messages from "./componnents/Messages/Messages";
import Music from "./componnents/Music/Music";
import Nav from "./componnents/Nav/Nav";
import News from "./componnents/News/News";
import Profile from "./componnents/Profile/Profile";
import Settings from "./componnents/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
   return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div class="all-wrapper-content">
          <Route
            path="/Messages"
            render={() => <Messages state={props.state.messagesPage} />}
          />
          <Route
            path="/Profile"
            render={() => <Profile state={props.state.profilePage} />}
          />

          <Route path="/Music" render={() => <Music />} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
