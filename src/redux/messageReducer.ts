const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
type DialogType={
    id:number,
    name:string
  }
  type MessageType={
    id:number,
    message:string
  }
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
  ] as Array<DialogType>,
  messageData: [
    { id: 1, message: "hi" },
    { id: 2, message: "hi,hi" },
    { id: 3, message: "how are you?" },
    { id: 4, message: "i'm fine ,and you?" },
  ] as Array<MessageType>,
}
type InitialStateType=typeof initialState
const messageReducer = (state = initialState, action:any):InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      let text = action.newMessageBody;
      return {
        ...state,

        messageData: [...state.messageData, { id: 9, message: text }],
      };

    default:
      return state;
  }
}
type addMessageType={
  type:typeof ADD_MESSAGE,
  newMessageBody:string
}
export let addMessage = (newMessageBody:string):addMessageType => {
  return {
    type: ADD_MESSAGE,
    newMessageBody,
  };
};

export default messageReducer;
