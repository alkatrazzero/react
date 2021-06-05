import {usersAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";
const SET_FORM_DATA = "SET_FORM_DATA";
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
        default:
            return state;
    }
};
export const setAuthUserData = (email, id, login,isAuth) => {
    return {type: SET_USER_DATA, data: {email, id, login,isAuth}};
};
export const setCurrentProfile = (currentProfile) => {
    return {type: SET_CURRENT_PROFILE, currentProfile};
};

export const getAuth = () => {
    return (dispatch) => {
        usersAPI.getAuth().then((response) => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data;
                dispatch(setAuthUserData(email, id, login,true));
                usersAPI.getCurrentProfileId(response.data.data.id).then((response) => {
                    dispatch(setCurrentProfile(response.data));
                });
            }
        });
    };
};
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        usersAPI.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth())
            }
            // else if (response.data.resultCode===10){
            //     usersAPI.getCaptcha().then((response)=>{
            //         console.log(response.data)
            //     })
            // }
        });
    };
}
export const logout = () => {
    return (dispatch) => {
        usersAPI.logout().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null,false));

            }
        });
    };
}

export default authReduser;
