import { createStore, combineReducers, applyMiddleware } from "redux";
import authReduser from "./authReduser";
import friendsReducer from "./friendsReduser";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sitebarReducer from "./sitebarReducer";
import usersReduser from "./usersReduser";
import thunkMiddleware from "redux-thunk";
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  friends: friendsReducer,
  sitebar: sitebarReducer,
  usersPage: usersReduser,
  auth: authReduser,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
