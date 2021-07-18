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
export const getCurrentPage = (state:appStateType) => {
  return state.usersPage.currentPage
}
export const getFetching = (state:appStateType) => {
  return state.usersPage.isFetching
}
export const getFollowingInProgress = (state:appStateType) => {
  return state.usersPage.followingInProgress
}
export const getUsersFilter =(state:appStateType)=>{
  return state.usersPage.filter
}
export const getIsAuthData = (state:appStateType)=>{
  return state.auth.isAuth
}
