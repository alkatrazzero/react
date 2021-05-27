import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { getAuth } from "../../redux/authReduser";
import { toggleIsFetching } from "../../redux/usersReduser";

import MyProfile from "./myProfile";
import ProfileContainer from "./ProfileContainer";
class MyProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }
  render = () => {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }
    return (
      <>
        <MyProfile currentProfile={this.props.currentProfile} />
      </>
    );
  };
}
let mapStateToProps = (state) => ({
  currentProfile: state.auth.currentProfile,
  isAuth: state.auth.isAuth,
});
let WithUrlDataContainerComponent = withRouter(MyProfileContainer);
export default connect(mapStateToProps, {
  getAuth,
  toggleIsFetching,
})(MyProfileContainer);
