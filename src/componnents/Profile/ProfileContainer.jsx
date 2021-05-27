import React from "react";
import { setUsersProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { withRouter } from "react-router";
import { toggleIsFetching } from "../../redux/usersReduser";
import Preloader from "../common/Preloader";
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 12;
    }
    this.props.getProfile(userId);
  }
  render = () => {
    return (
      <>
        <div>{this.props.isFetching ? <Preloader /> : null}</div>
        <Profile profile={this.props.profile} />;
      </>
    );
  };
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
  setUsersProfile,
  toggleIsFetching,
  getProfile,
})(WithUrlDataContainerComponent);
