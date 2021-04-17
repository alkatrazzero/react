let rerenderEntireTree = () => {};
let state = {
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
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    like: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
export const updateNewMessageText = (newText) => {
  state.messagesPage.newMessageText = newText;
  rerenderEntireTree(state);
};
export const addMessage = () => {
  let newMessage = {
    id: 9,
    message: state.messagesPage.newMessageText,
  };
  state.messagesPage.messageData.push(newMessage);
  state.messagesPage.newMessageText = "";
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};
export default state;
