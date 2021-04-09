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
  },
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you", like: "15" },
      { id: 2, message: "It is my first message", like: "30" },
    ],
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
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    like: 0,
  };
  state.profilePage.posts.push(newPost);
};
export let addMessage = (postMessage) => {
  let newMessage = {
    id: 5,
    message: postMessage,
  };
  state.messagesPage.messageData.push(newMessage);
};

export default state;
