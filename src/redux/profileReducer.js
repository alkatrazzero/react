import { usersAPI } from "../api/api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_STATUS = "SET_STATUS";
const SET_MY_STATUS = "SET_MY_STATUS";

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
  let stateCopy = { ...state, posts: [...state.posts] };
  switch (action.type) {
    case ADD_POST:
      let text = state.newPostText;
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, { id: 5, message: text, like: 0 }],
      };

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case SET_USERS_PROFILE:
      return { ...state, profile: action.profile };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SET_MY_STATUS: {
      return { ...state, myStatus: action.status };
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
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
const setStatus = (status) => {
  return { type: SET_STATUS, status };
};
const setMyStatus = (status) => {
  return { type: SET_MY_STATUS, status };
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
export default profileReducer;
