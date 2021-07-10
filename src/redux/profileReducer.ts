import {usersAPI} from "../api/api";
import {getAuth} from "./authReduser";
import {PostType, ProfileType} from "../types/types";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_STATUS = "SET_STATUS";
const SET_MY_STATUS = "SET_MY_STATUS";
const SAVE_PROFILE = "SAVE_PROFILE"

let initialState = {
  posts: [] as Array<PostType>,
  newPostText: " ",
  profile: null as ProfileType | null,
  page: 1,
  isFetching: false,
  status: " ",
  myStatus: " ",
};
export type initialStateType= typeof initialState


const profileReducer = (state = initialState, action:any):initialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 1, message: action.newPost, likeCount: 0}],
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

    default:
      return state;
  }
};
type setUserProfileType={
  type:typeof SET_USERS_PROFILE
  profile:ProfileType
}
export const setUsersProfile = (profile:ProfileType):setUserProfileType => {
  return {
    type: SET_USERS_PROFILE,
    profile: profile,
  };
};
type addPostType={
  type:typeof ADD_POST
  newPost:string
}
export const addPost = (newPost:string):addPostType => {
  return {type: ADD_POST, newPost};
};
type toggleIsFetching={
  type:typeof TOGGLE_IS_FETCHING
  isFetching:boolean
}
const toggleIsFetching = (isFetching:boolean):toggleIsFetching => {
  return {type: TOGGLE_IS_FETCHING, isFetching};
};
type setStatusType={
  type:typeof SET_STATUS
  status:string
}
const setStatus = (status:string):setStatusType => {
  return {type: SET_STATUS, status};
};
type setMyStatusType={
  type:typeof SET_MY_STATUS
  status:string
}
const setMyStatus = (status:string):setMyStatusType => {
  return {type: SET_MY_STATUS, status};
};

export const getProfile = (userId:number) => {
  return (dispatch:any) => {
    usersAPI.getProfile(userId).then((response) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsersProfile(response.data));
    });
  };
};
export const getStatus = (id:number) => {
  return (dispatch:any) => {
    usersAPI.getStatus(id).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const getMyStatus = (id:number) => {
  return (dispatch:any) => {
    usersAPI.getStatus(id).then((response) => {
      dispatch(setMyStatus(response.data));
    });
  };
};
export const updateStatus = (status:string) => {
  return (dispatch:any) => {
    usersAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setMyStatus(status));
      }
    });
  };
};
export const saveProfile = (profile:ProfileType ) => {
  return async (dispatch:any, getState:any) => {
    const userId = getState().auth.currentProfile.userId
    let response = await usersAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
      dispatch(getAuth())
    }

  };
};
export default profileReducer;
