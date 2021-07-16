import {ResultCodesEnum, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
const SET_USER_DATA = "SET_USER_DATA";
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";
const SET_FORM_DATA = "SET_FORM_DATA";
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'
export type InitialStateType = {
  id: number | null,
  email: string | null,
  login: string | null,
  isFetching: boolean,
  isAuth: boolean,
  currentProfile: object | null,
  captchaUrl: string | null

}
let initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  currentProfile: null,
  captchaUrl: null
};
const authReduser = (state = initialState, action: any): InitialStateType => {
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
        // formData: action.formData,
      };
    case GET_CAPTCHA_URL :
      return {
        ...state, captchaUrl: action.URL
      }
    case SAVE_PHOTO_SUCCESS: {
      debugger
      return {
        ...state,
        currentProfile: {...state.currentProfile, photos: action.file}
      }
    }
    default:
      return state;
  }
};
export const savePhotoSuccess = (file: any) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    file: file,
  }
}
type SetAuthUserDataActionDataType = {
  email: string | null, id: number | null, login: string | null, isAuth: boolean
}
type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  data: SetAuthUserDataActionDataType
}
export const setAuthUserData = (email: string | null, id: number | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => {
  return {type: SET_USER_DATA, data: {email, id, login, isAuth}};
};
export const setCurrentProfile = (currentProfile: object) => {
  return {type: SET_CURRENT_PROFILE, currentProfile};
};
type getCaptchaUrlActionType = {
  type: typeof GET_CAPTCHA_URL
  URL: any
}
export const getCaptchaUrl = (URL: any): getCaptchaUrlActionType => {
  return {type: GET_CAPTCHA_URL, URL}
}

export const getAuth = () => {
  return async (dispatch: any) => {
    let meData = await usersAPI.getAuth()
    if (meData.resultCode === ResultCodesEnum.success) {
      let {email, id, login} = meData.data;
      dispatch(setAuthUserData(email, id, login, true));
      usersAPI.getCurrentProfileId(meData.data.id).then((response) => {
        dispatch(setCurrentProfile(response.data));
      })
    }
  };
};
export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
  return async (dispatch: any) => {
    let loginData = await usersAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodesEnum.success) {
      dispatch(getAuth())
      dispatch(getCaptchaUrl(null))
    } else {
      if (loginData.resultCode === ResultCodesEnum.CaptchaIsRequired) {
        usersAPI.getCaptcha().then((response) => {
          dispatch(getCaptchaUrl(response.data))
        })
      }
      let message = loginData.messages.length > 0 ? loginData.messages[0] : "some error"
      dispatch(stopSubmit("login", {_error: message}));
    }
  };
}
export const logout = () => {
  return (dispatch: any) => {
    usersAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));

      }
    });
  };
}
export const savePhoto = (file: any) => {
  return async (dispatch: any) => {
    let response = await usersAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
  };
};

export default authReduser;
