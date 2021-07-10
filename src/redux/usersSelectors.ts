import {createSelector} from "reselect";
import {appStateType} from "./reduxStore"

export const getUsersState = (state:appStateType) => {
  return state.usersPage.users
}

export const getPageSize = (state:appStateType) => {
  return state.usersPage.pageSize
}
export const getTotalUsersCount = (state:appStateType) => {
  return state.usersPage.totalUsersCount
}
export const getUserPage = (state:appStateType) => {
  return state.usersPage.currentPage
}
export const getFetching = (state:appStateType) => {
  return state.usersPage.isFetching
}
export const getFollowingInProgress = (state:appStateType) => {
  return state.usersPage.followingInProgress
}
