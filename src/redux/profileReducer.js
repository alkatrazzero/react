import {usersAPI} from "../api/api";
import {getAuth} from "./authReduser";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_STATUS = "SET_STATUS";
const SET_MY_STATUS = "SET_MY_STATUS";
const SAVE_PROFILE = "SAVE_PROFILE"

let initialState = {
  posts: [],
  newPostText: " ",
  profile: null,
  page: 1,
  isFetching: false,
  status: " ",
  myStatus: " ",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 1, message: action.newPost, like: 0}],
      };

    case SET_USERS_PROFILE:
      return {...state, profile: action.profile};
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case SET_STATUS: {
      return {...state, status: action.status};
    }
    case SET_MY_STATUS: {
      return {...state, myStatus: action.status};
    }
    case SAVE_PROFILE:{
      return {}
    }

    default:
      return state;
  }
};

export const setUsersProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile: profile,
  };
};
export const addPost = (newPost) => {
  return {type: ADD_POST, newPost};
};

const toggleIsFetching = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching};
};
const setStatus = (status) => {
  return {type: SET_STATUS, status};
};
const setMyStatus = (status) => {
  return {type: SET_MY_STATUS, status};
};

export const getProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsersProfile(response.data));
    });
  };
};
export const getStatus = (id) => {
  return (dispatch) => {
    usersAPI.getStatus(id).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const getMyStatus = (id) => {
  return (dispatch) => {
    usersAPI.getStatus(id).then((response) => {
      dispatch(setMyStatus(response.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    usersAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setMyStatus(status));
      }
    });
  };
};
export const saveProfile = (profile) => {
  return async (dispatch,getState) => {
   const userId= getState().auth.currentProfile.userId
    let response = await usersAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
  dispatch(getAuth())}

  };
};
export default profileReducer;
