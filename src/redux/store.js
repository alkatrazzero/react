import friendsReducer from "./friendsReduser";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sitebarReducer from "./sitebarReducer";

let store = {
  _state: {
    messagesPage: {
      dialogsData: [
        { id: 1, name: "igor" },
        { id: 2, name: "mark" },
        { id: 3, name: "lana" },
        { id: 4, name: "alex" },
        { id: 5, name: "vitya" },
        { id: 6, name: "oleg" },
        { id: 7, name: "Dead_inside" },
        { id: 8, name: "kriskostyle" },
      ],
      messageData: [
        { id: 1, message: "hi" },
        { id: 2, message: "hi,hi" },
        { id: 3, message: "how are you?" },
        { id: 4, message: "i'm fine ,and you?" },
      ],
      newMessageText: " ",
    },
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", like: 0 },
        { id: 2, message: "It is my first message", like: 0 },
      ],
      newPostText: " ",
    },
    sitebar: {
      mainSiteBar: [
        { id: 1, name: "Profile", adress: "/Profile" },
        { id: 2, name: "Messages", adress: "/Messages" },
        { id: 3, name: "News ", adress: "/News" },
        { id: 4, name: "Music", adress: "/Music" },
        { id: 5, name: "Settings", adress: "/Settings" },
      ],
      friendsSiteBar: [{ id: 1, name: "My friends", adress: "/Friends" }],
    },
    friends: {
      onlineFriends: [
        { id: 1, name: "igor" },
        { id: 2, name: "mark" },
        { id: 3, name: "lana" },
      ],

      offlineFriends: [
        { id: 4, name: "alex" },
        { id: 5, name: "vitya" },
        { id: 6, name: "oleg" },
        { id: 7, name: "Dead_inside" },
        { id: 8, name: "kriskostyle" },
      ],
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    messageReducer(this._state.messagesPage, action);
    sitebarReducer(this._state.sitebar, action);
    friendsReducer(this._state.friends, action);
    this._callSubscriber(this._state);
    // friendsReducer(this._state.friends, action);
    // sidebarReducer(this._state.sitebar, action);
  },
};

export default store;
window.store = store;
