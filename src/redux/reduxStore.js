import { createStore, combineReducers } from "redux";
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
});
let store = createStore(reducers);
export default store;
