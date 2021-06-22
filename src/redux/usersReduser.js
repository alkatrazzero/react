import {updateObjectInArray} from "../utilits/ojectHelpers";
import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";
const SET_PAGE_SIZE = "SET_PAGE_SIZE"
const LOAD_MORE = "LOAD_MORE"
let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};


const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, "id", action.userId, {followed: true})
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, "id", action.userId, {followed: false})
      };
    case SET_USERS:
      return {...state, users: [...action.users]};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalCount};
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.Id]
          : [...state.followingInProgress.filter((Id) => Id !== action.Id)],
      };
    case SET_PAGE_SIZE:
      return {...state, pageSize: action.size}
    case LOAD_MORE:
      return {...state, pageSize: state.pageSize + 10}
    default:
      return state;
  }
};
export const loadMore = () => {
  return {type: LOAD_MORE}
}
export const followAccept = (userId) => {
  return {type: FOLLOW, userId};
};
export const unFollowAccept = (userId) => {
  return {type: UNFOLLOW, userId};
};
export const setUsers = (users) => {
  return {type: SET_USERS, users};
};
export const setCurrentPage = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage};
};
export const setTotalUsersCount = (totalCount) => {
  return {type: SET_TOTAL_USERS_COUNT, totalCount};
};
export const toggleIsFetching = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching};
};
export const toggleFollowingInProgress = (isFetching, Id) => {
  return {type: FOLLOWING_IN_PROGRESS, isFetching, Id};
};
export const currentPageSize = (size) => {
  return {type: SET_PAGE_SIZE, size}
}
export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
  };
};
export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await usersAPI.follow(userId)
    if (response.resultCode === 0) {
      dispatch(followAccept(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
  };
};
export const unFollow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await usersAPI.unFollow(userId)
    if (response.resultCode === 0) {
      dispatch(unFollowAccept(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
  };
};
export const setPageSize = (size) => (dispatch) => {
  dispatch(currentPageSize(size));
}
export const loadMoreUsers = () => async (dispatch, getState) => {
  dispatch(loadMore())
  const pageSize = getState().usersPage.pageSize
  const currentPage = getState().usersPage.currentPage
  let response = await usersAPI.getUsers(currentPage, pageSize)
  await dispatch(setUsers(response.items));
}

export default usersReduser;
