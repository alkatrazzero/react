import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
  getProfile,
  getStatus,
  setUsersProfile,
} from "../../redux/profileReducer";
import Profile from "./Profile";
import {withRouter} from "react-router";
import {toggleIsFetching} from "../../redux/usersReduser";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";


const ProfileContainer = (props) => {
  const refreshProfile = () => {
   props.toggleIsFetching(true);
    let userId = props.match.params.userId;
    props.getProfile(userId);
    props.getStatus(userId);
  }
  useEffect(() => {
   refreshProfile()
  }, []);

    return (
      <>
        <div>{props.isFetching ? <Preloader/> : null}</div>
        <Profile profile={props.profile} status={props.status}/>;
      </>
    );
  };


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
});
export default compose(
  connect(mapStateToProps, {
    setUsersProfile,
    toggleIsFetching,
    getProfile,
    getStatus,
  }),
  withRouter,
)(ProfileContainer);
