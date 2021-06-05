import React from "react";
import { connect } from "react-redux";
import {
  getAuth, logout,
  setAuthUserData,
  setCurrentProfile,
} from "../../redux/authReduser";

import Header from "./Header";
import "./Header.module.css";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
    // this.props.setMyProfile(this.props.currentProfile.userId);
  }
  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
  currentProfile: state.auth.currentProfile,
});

export default connect(mapStateToProps, {
  setAuthUserData,
  setCurrentProfile,
  getAuth,
  logout
})(HeaderContainer);
