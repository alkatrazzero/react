import {getAuth} from "./authReduser";

const SET_INITIALIZED = "SET_INITIALIZED"
export type InitialStateType={
   initialized: boolean
}
let initialState:InitialStateType = {
    initialized: false,

};
const appReduser = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,

            };

        default:
            return state;
    }
};
type InitializedSuccessType={
  type: typeof SET_INITIALIZED
}
export const setInitialized = ():InitializedSuccessType => {
    return {type: SET_INITIALIZED}
}

export const initializeApp = () => (dispatch:any) => {

   let promise= dispatch(getAuth());
     Promise.all([promise]).then(()=>{
        dispatch(setInitialized())
     })

};


export default appReduser;
