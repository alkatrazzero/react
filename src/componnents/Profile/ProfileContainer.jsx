import React from "react";
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


class ProfileContainer extends React.Component {
  refreshProfile(){    this.props.toggleIsFetching(true);
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
        this.props.getStatus(userId);}
    componentDidMount() {
       this.refreshProfile()
    }
componentDidUpdate(prevProps, prevState, snapshot) {
       this.refreshProfile()
}


    render = () => {
        return (
            <>
                <div>{this.props.isFetching ? <Preloader/> : null}</div>
                <Profile profile={this.props.profile} status={this.props.status}/>;
            </>
        );
    };
}

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
