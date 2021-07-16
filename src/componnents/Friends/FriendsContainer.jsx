import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import Friends from "./Friends";


class FriendsContainer extends React.Component {

  componentDidMount() {
  }
  render = () => {
    return (
      <>
        <Friends
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        />
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    users:state.usersPage.users,
    totalUsersCount:state.usersPage.totalUsersCount
  }
}
export default compose(
  connect(mapStateToProps, {

  }),
)(FriendsContainer);
