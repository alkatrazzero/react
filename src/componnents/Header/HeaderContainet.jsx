import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, setCurrentProfile } from "../../redux/authReduser";
import Header from "./Header";
import "./Header.module.css";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getAuth().then((response) => {
      if (response.data.resultCode === 0) {
        let { email, id, login } = response.data.data;
        this.props.setAuthUserData(email, id, login);

        axios
          .get(
            `https://social-network.samuraijs.com/api/1.0/profile/` +
              response.data.data.id
          )
          .then((response) => {
            this.props.setCurrentProfile(response.data);
          });
      }
    });
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

export default connect(mapStateToProps, { setAuthUserData, setCurrentProfile })(
  HeaderContainer
);
