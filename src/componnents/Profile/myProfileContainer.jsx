import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getAuth } from "../../redux/authReduser";
import { toggleIsFetching } from "../../redux/usersReduser";
import { compose } from "redux";
import MyProfile from "./myProfile";
import Preloader from "../common/Preloader";
import { getStatus, updateStatus } from "../../redux/profileReducer";

class MyProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }

  render = () => {
    return (
      <>
        <div>{this.props.isFetching ? <Preloader /> : null}</div>
        <MyProfile
          {...this.props}
          currentProfile={this.props.currentProfile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          getStatus={this.props.getStatus}
          currentProfile={this.props.currentProfile}
        />
      </>
    );
  };
}

let mapStateToProps = (state) => ({
  currentProfile: state.auth.currentProfile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
  id: state.auth.id,
});
// let AuthRedirectComponent = withAuthRedirect(MyProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default compose(
  connect(mapStateToProps, {
    getAuth,
    updateStatus,
    toggleIsFetching,
    getStatus,
  }),
  // withAuthRedirect,
  withRouter
)(MyProfileContainer);
