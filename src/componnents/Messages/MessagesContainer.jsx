import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messageReducer";
import Messages from "./Messages";
const MessagesContainer = (props) => {
  let state = props.store.getState();
  let sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <Messages
      addMessage={sendMessage}
      updateNewMessage={onMessageChange}
      dialogsData={state.messagesPage.dialogsData}
      messageData={state.messagesPage.messageData}
      newMessageText={state.messagesPage.newMessageText}
    />
  );
};
export default MessagesContainer;
