import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getAuth, savePhoto} from "../../redux/authReduser";
import {toggleIsFetching} from "../../redux/usersReduser";
import {compose} from "redux";
import {getMyStatus, saveProfile, updateStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Preloader from "../common/Preloader/Preloader";
import MyProfile from "./myProfile";

function MyProfileContainer(props) {
  return (
      <>
        <div>{props.isFetching ? <Preloader/> : null}</div>
        <MyProfile
          {...props}

          currentProfile={props.currentProfile}
          myStatus={props.myStatus}
          updateStatus={props.updateStatus}
          getMyStatus={props.getMyStatus}
          savePhoto={props.savePhoto}
        />
      </>
    );
}

let mapStateToProps = (state) => ({
  currentProfile: state.auth.currentProfile,
  isAuth: state.auth.isAuth,
  myStatus: state.profilePage.myStatus,
  id: state.auth.id,

});
// let AuthRedirectComponent = withAuthRedirect(MyProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default compose(
  connect(mapStateToProps, {
    getAuth,
    updateStatus,
    toggleIsFetching,
    getMyStatus,
    savePhoto,
    saveProfile

  }),
  // withAuthRedirect,
  withRouter,
  withAuthRedirect
)(MyProfileContainer);
