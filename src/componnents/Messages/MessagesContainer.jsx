import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messageReducer";
import Messages from "./Messages";
// const MessagesContainer = (props) => {
//   let state = props.store.getState();
//   let sendMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };

//   let onMessageChange = (text) => {
//     props.store.dispatch(updateNewMessageTextActionCreator(text));
//   };
//   return (
//     <Messages
//       addMessage={sendMessage}
//       updateNewMessage={onMessageChange}
//       dialogsData={state.messagesPage.dialogsData}
//       messageData={state.messagesPage.messageData}
//       newMessageText={state.messagesPage.newMessageText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    messageData: state.messagesPage.messageData,
    dialogsData: state.messagesPage.dialogsData,
    newMessageText: state.messagesPage.newMessageText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessage: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
  };
};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer;
