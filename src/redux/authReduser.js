import {usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";
const SET_FORM_DATA = "SET_FORM_DATA";
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'
let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  currentProfile: null,
  captchaUrl: null
};
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,

      };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: action.currentProfile,
      };
    case SET_FORM_DATA:
      return {
        ...state,
        formData: action.formData,
      };
    case GET_CAPTCHA_URL :
      return {
        ...state, captchaUrl: action.URL
      }
    default:
      return state;
  }
};
export const setAuthUserData = (email, id, login, isAuth) => {
  return {type: SET_USER_DATA, data: {email, id, login, isAuth}};
};
export const setCurrentProfile = (currentProfile) => {
  return {type: SET_CURRENT_PROFILE, currentProfile};
};
export const getCaptchaUrl = (URL) => {
  return {type: GET_CAPTCHA_URL, URL}
}

export const getAuth = () => {
  return async (dispatch) => {
    let response = await usersAPI.getAuth()

    if (response.data.resultCode === 0) {
      let {email, id, login} = response.data.data;
      dispatch(setAuthUserData(email, id, login, true));
      usersAPI.getCurrentProfileId(response.data.data.id).then((response) => {
        dispatch(setCurrentProfile(response.data));
      })
    }


  };

};
export const login = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    usersAPI.login(email, password, rememberMe, captcha).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuth())
      } else if (response.data.resultCode === 10) {
        usersAPI.getCaptcha().then((response) => {
          dispatch(getCaptchaUrl(response.data))
        })
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
        dispatch(stopSubmit("login", {_error: message}));
      }
    });
  };
}
export const logout = () => {
  return (dispatch) => {
    usersAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));

      }
    });
  };
}

export default authReduser;
