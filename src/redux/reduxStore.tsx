import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import authReduser from "./authReduser";
import friendsReducer from "./friendsReduser";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sitebarReducer from "./sitebarReducer";
import usersReduser from "./usersReduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer"


let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  friends: friendsReducer,
  sitebar: sitebarReducer,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReducer,
  app: appReducer
})
type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
window.__store__ = store;
// @ts-ignore
export default store;
// @ts-ignore
