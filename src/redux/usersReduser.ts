import {updateObjectInArray} from "../utilits/ojectHelpers";
import {usersAPI} from "../api/api";
import {PhotosType, usersType} from "../types/types";

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
  users: [] as Array<usersType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users ids
};
type initialStateType = typeof initialState;

const usersReduser = (state = initialState, action: ActionTypes): initialStateType => {
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
          ? [...state.followingInProgress, action.id]
          : [...state.followingInProgress.filter((Id) => Id !== action.id)],
      };
    case SET_PAGE_SIZE:
      return {...state, pageSize: action.size}
    case LOAD_MORE:
      return {...state, pageSize: state.pageSize + 10}
    default:
      return state;
  }
};
type ActionTypes =
  loadMoreType
  | followAcceptType
  | unFollowAcceptType
  | setUsersType
  | setCurrentPageType
  | setTotalUsersCountType
  | toggleIsFetchingType
  | toggleFollowingInProgressType
  | currentPageSizeType


type loadMoreType = {
  type: typeof LOAD_MORE,
}
export const loadMore = (): loadMoreType => {
  return {type: LOAD_MORE}
}
type followAcceptType = {
  type: typeof FOLLOW
  userId: number
}
export const followAccept = (userId: number): followAcceptType => {
  return {type: FOLLOW, userId};
};
type unFollowAcceptType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unFollowAccept = (userId: number): unFollowAcceptType => {
  return {type: UNFOLLOW, userId};
};
type setUsersType = {
  type: typeof SET_USERS
  users: Array<usersType>
}
export const setUsers = (users: Array<usersType>): setUsersType => {
  return {type: SET_USERS, users};
};
type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageType => {
  return {type: SET_CURRENT_PAGE, currentPage};
};
type setTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalCount: number
}
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountType => {
  return {type: SET_TOTAL_USERS_COUNT, totalCount};
};
type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => {
  return {type: TOGGLE_IS_FETCHING, isFetching};
};
type toggleFollowingInProgressType = {
  type: typeof FOLLOWING_IN_PROGRESS
  isFetching: boolean
  id: number
}
export const toggleFollowingInProgress = (isFetching: boolean, id: number): toggleFollowingInProgressType => {
  return {type: FOLLOWING_IN_PROGRESS, isFetching, id};
};
type currentPageSizeType = {
  type: typeof SET_PAGE_SIZE
  size: number
}
export const currentPageSize = (size: number): currentPageSizeType => {
  return {type: SET_PAGE_SIZE, size}
}
export const getUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
  };
};
export const follow = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await usersAPI.follow(userId)
    if (response.resultCode === 0) {
      dispatch(followAccept(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
  };
};
export const unFollow = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let response = await usersAPI.unFollow(userId)
    if (response.resultCode === 0) {
      dispatch(unFollowAccept(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
  };
};
export const setPageSize = (size: number) => (dispatch: any) => {
  dispatch(currentPageSize(size));
}
export const loadMoreUsers = () => async (dispatch: any, getState: any) => {
  dispatch(loadMore())
  const pageSize = getState().usersPage.pageSize
  const currentPage = getState().usersPage.currentPage
  let response = await usersAPI.getUsers(currentPage, pageSize)
  await dispatch(setUsers(response.items));
}

export default usersReduser;
