import React from "react";
import "./App.css";
import Header from "./componnents/Header/Header";
import Nav from "./componnents/Nav/Nav";
import Profile from "./componnents/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
};
export default App;
