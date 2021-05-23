import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
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
        <MyProfile currentProfile={this.props.currentProfile} />
      </>
    );
  };
}
let mapStateToProps = (state) => ({
  currentProfile: state.auth.currentProfile,
});
let WithUrlDataContainerComponent = withRouter(MyProfileContainer);
export default connect(mapStateToProps, {
  getAuth,
  toggleIsFetching,
})(MyProfileContainer);
