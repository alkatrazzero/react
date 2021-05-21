import axios from "axios";
import React from "react";
import { setUsersProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";

import Profile from "./Profile";
import { withRouter } from "react-router";
import { toggleIsFetching } from "../../redux/usersReduser";
import Preloader from "../common/Preloader";
import { getProfile, usersAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let page = this.props.id;
    this.props.toggleIsFetching(true);
    // this.props.toggleIsFetching(true);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 12;
    }
    usersAPI.getProfile(userId).then((response) => {
      this.props.toggleIsFetching(false);
      this.props.setUsersProfile(response.data);
      // this.props.setTotalUsersCount(response.data.totalCount);
    });
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
  // id: state.auth.currentProfile.userId,
});
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
  setUsersProfile,
  toggleIsFetching,
})(WithUrlDataContainerComponent);
