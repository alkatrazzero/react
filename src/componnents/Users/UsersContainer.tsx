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
  getUserPage,getUsersState
} from "../../redux/usersSelectors";
import {appStateType} from "../../redux/reduxStore";
import {usersType} from "../../types/types";

type mapDispatchPropsType = {
  loadMoreUsers: () => void
  toggleFollowingInProgress: Array<number>
  follow: (userId:number) => void
  unFollow: () => void
  setPageSize: (pageSize: number) => void
  getUsers: (currentPage:number,pageSize:number)=>void
}
type mapStatePropsType = {
  currentPage: number
  pageSize: number
  totalUsersCount: number
  users: Array<usersType>
  isFetching: boolean
  isAuth: boolean
  followingInProgress: Array<number>
}
type ownProps = {
  pageTitle: string
}
type PropsType = ownProps & mapStatePropsType & mapDispatchPropsType


class UsersContainer extends React.Component<PropsType> {


  componentDidMount() {

    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page: number) => {
    let pageSize = 10
    this.props.setPageSize(pageSize)
    this.props.getUsers(page, pageSize)


  };


  render = () => {

    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
          isAuth={this.props.isAuth}
          setPageSize={this.props.setPageSize}
          isFetching={this.props.isFetching}
          loadMoreUsers={this.props.loadMoreUsers}

        />
      </>
    );
  }
}

const mapStateToProps = (state: appStateType): mapStatePropsType => {
  return {
    users: getUsersState(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getUserPage(state),
    isFetching: getFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAuth,


  }
}


export default compose(
  connect<mapStatePropsType,mapDispatchPropsType,ownProps,appStateType>(mapStateToProps, {

//@ts-ignore
    unFollow,
    follow,
    toggleFollowingInProgress,
    getUsers,
    setPageSize,
    loadMoreUsers,
    setUsers

  }),

)(UsersContainer);
