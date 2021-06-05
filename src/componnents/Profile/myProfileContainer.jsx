import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getAuth} from "../../redux/authReduser";
import {toggleIsFetching} from "../../redux/usersReduser";
import {compose} from "redux";
import MyProfile from "./myProfile";
import Preloader from "../common/Preloader/Preloader";
import {getMyStatus, updateStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class MyProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
    }

    render = () => {
        return (
            <>
                <div>{this.props.isFetching ? <Preloader/> : null}</div>
                <MyProfile
                    {...this.props}
                    currentProfile={this.props.currentProfile}
                    myStatus={this.props.myStatus}
                    updateStatus={this.props.updateStatus}
                    getMyStatus={this.props.getMyStatus}

                />
            </>
        );
    };
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
    }),
    // withAuthRedirect,
    withRouter,
    withAuthRedirect
)(MyProfileContainer);
