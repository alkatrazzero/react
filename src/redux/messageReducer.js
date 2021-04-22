const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let initialState = {
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
};
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 9,
        message: state.newMessageText,
      };
      state.messageData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
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
export default messageReducer;
