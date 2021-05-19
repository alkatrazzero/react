import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unFollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress,
} from "../../redux/usersReduser";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader";
import { usersAPI } from "../../api/api";
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.items);
        this.props.setTotalUsersCount(response.totalCount);
      });
  }
  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(page, this.props.pageSize).then((response) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.items);
    });
  };
  render = () => {
    return (
      <>
        <div>{this.props.isFetching ? <Preloader /> : null}</div>

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
        />
      </>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unFollow: (userId) => {
//       dispatch(unFollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };
export default connect(mapStateToProps, {
  unFollow,
  follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingInProgress,
})(UsersContainer);
