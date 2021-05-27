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
      let text = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messageData: [...state.messageData, { id: 9, message: text }],
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.newText };

    // stateCopy.newMessageText = action.newText;

    default:
      return state;
  }
};
export let addMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export let updateNewMessageText = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};
export default messageReducer;
