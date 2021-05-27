import { createStore, combineReducers, applyMiddleware, compose } from "redux";
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
