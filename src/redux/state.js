const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 9,
        message: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messageData.push(newMessage);
      this._state.messagesPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.messagesPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export let addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export let updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export default store;
window.store = store;
