import React from "react";
import "./App.css";
import MessagesContainer from "./componnents/Messages/MessagesContainer";
import Music from "./componnents/Music/Music";
import Nav from "./componnents/Nav/Nav";
import News from "./componnents/News/News";
import Settings from "./componnents/Settings/Settings";
import {Route} from "react-router-dom";
import Friends from "./componnents/Friends/Friends";
import UsersContainer from "./componnents/users/UsersContainer";
import ProfileContainer from "./componnents/Profile/ProfileContainer";
import HeaderContainer from "./componnents/Header/HeaderContainet";
import MyProfileContainer from "./componnents/Profile/myProfileContainer";
import LoginContainer from "./componnents/login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./componnents/common/Preloader/Preloader";
import FriendsContainer from "./componnents/Friends/FriendsContainer";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(this.props.initialized===false){
        return <Preloader/>}
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav state={this.props.state.friends} sitebar={this.props.state.sitebar}/>
                <div className="all-wrapper-content">
                    <Route path="/Messages" render={() => <MessagesContainer/>}/>
                    <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>

                    <Route path="/Music" render={() => <Music/>}/>
                    <Route path="/News" render={() => <News/>}/>

                    <Route
                        path="/Friends"
                        render={() => <FriendsContainer />}
                    />
                    <Route path="/Users" render={() => <UsersContainer/>}/>
                    <Route path={"/MyProfile/"} render={() => <MyProfileContainer/>}/>
                    <Route path={"/Login"} render={() => <LoginContainer/>}/>

                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        // userId:state.auth.currentProfile.userId
    }

};
export default compose(
    withRouter,
    connect
    (mapStateToProps, {initializeApp}))(App);
