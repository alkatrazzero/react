const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
let initialState = {
  posts: [],
  newPostText: " ",
  profile: null,
  page: 1,
  isFetching: false,
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
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
export default profileReducer;
