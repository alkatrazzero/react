import axios from "axios";
import React from "react";
import { setUsersProfile } from "../../redux/profileReducer";
import { connect } from "react-redux";

import Profile from "./Profile";

class profileContainer extends React.Component {
  componentDidMount() {
    // this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        // this.props.toggleIsFetching(false);
        this.props.setUsersProfile(response.data);
        // this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
export default connect(mapStateToProps, {
  setUsersProfile,
})(profileContainer);
