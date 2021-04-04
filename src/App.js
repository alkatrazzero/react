import React from "react";
import "./App.css";
import Header from "./componnents/Header/Header";
import Messages from "./componnents/Nav/Messages/Messages";
import Music from "./componnents/Nav/Music/Music";
import Nav from "./componnents/Nav/Nav";
import News from "./componnents/Nav/News/News";
import Profile from "./componnents/Nav/Profile/Profile";
import Settings from "./componnents/Nav/Settings/Settings";

const App = () => {
  return (
    // <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div class="all-wrapper-content">
        <Messages />
        {/* <Route path="/Profile" component={Profile} />
        <Route path="/Messages" component={Messages} />
        <Route path="/Music" component={Music} />
        <Route path="/News" component={News} />
        <Route path="/Setting" component={Settings} /> */}
      </div>
    </div>
    /* </BrowserRouter> */
  );
};
export default App;
