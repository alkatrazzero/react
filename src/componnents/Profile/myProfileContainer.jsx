import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getAuth } from "../../redux/authReduser";
import { toggleIsFetching } from "../../redux/usersReduser";

import MyProfile from "./myProfile";
class MyProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }
  render = () => {
    return (
      <>
        <MyProfile {...this.props} currentProfile={this.props.currentProfile} />
      </>
    );
  };
}

let mapStateToProps = (state) => ({
  currentProfile: state.auth.currentProfile,
  isAuth: state.auth.isAuth,
});
let AuthRedirectComponent = withAuthRedirect(MyProfileContainer);
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {
  getAuth,
  toggleIsFetching,
})(WithUrlDataContainerComponent);
