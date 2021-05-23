import { usersAPI } from "../api/api";
const SET_USER_DATA = "SET_USER_DATA";
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";
let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  currentProfile: null,
};
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.currentProfile,
      };
    default:
      return state;
  }
};
export const setAuthUserData = (email, id, login) => {
  return { type: SET_USER_DATA, data: { email, id, login } };
};
export const setCurrentProfile = (currentProfile) => {
  return { type: SET_CURRENT_PROFILE, currentProfile };
};

export const getAuth = () => {
  return (dispatch) => {
    usersAPI.getAuth().then((response) => {
      if (response.data.resultCode === 0) {
        let { email, id, login } = response.data.data;
        dispatch(setAuthUserData(email, id, login));
        usersAPI.getCurrentProfileId(response.data.data.id).then((response) => {
          dispatch(setCurrentProfile(response.data));
        });
      }
    });
  };
};

export default authReduser;
