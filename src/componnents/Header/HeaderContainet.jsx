import React from "react";
import { connect } from "react-redux";
import {
 logout,
  setAuthUserData,
  setCurrentProfile,
} from "../../redux/authReduser"

import "./Header.module.css";
import {AppHeader} from "./Header";

class HeaderContainer extends React.Component {

  render() {
    return <AppHeader {...this.props} />;
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
  logout
})(HeaderContainer);
