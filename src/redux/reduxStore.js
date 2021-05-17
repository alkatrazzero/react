import { createStore, combineReducers } from "redux";
import authReduser from "./authReduser";
import friendsReducer from "./friendsReduser";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sitebarReducer from "./sitebarReducer";
import usersReduser from "./usersReduser";
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  friends: friendsReducer,
  sitebar: sitebarReducer,
  usersPage: usersReduser,
  auth: authReduser,
});
let store = createStore(reducers);
window.store = store;
export default store;
