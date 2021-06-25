import {connect} from "react-redux";
import {
  follow,
  unFollow,
  setCurrentPage,
  toggleFollowingInProgress,
  getUsers, setPageSize, loadMoreUsers, setUsers
} from "../../redux/usersReduser";
import Users from "./Users";
import React from "react";
import {compose} from "redux";
import {
  getFetching,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUserPage, getUsersSuper
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {


  componentDidMount() {

    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    let pageSize = 10
    this.props.setPageSize(pageSize)
    this.props.getUsers(page, pageSize)



  };


  render = () => {

    return (
      <>
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
          isAuth={this.props.isAuth}
          setPageSize={this.props.setPageSize}
          getUsers={this.props.getUsers}
          isFetching={this.props.isFetching}
          loadMoreUsers={this.props.loadMoreUsers}

        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSuper(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getUserPage(state),
    isFetching: getFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAuth,


  }
}
export default compose(
  connect(mapStateToProps, {
    unFollow,
    follow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers,
    setPageSize,
    loadMoreUsers,
    setUsers

  }),
)(UsersContainer);
