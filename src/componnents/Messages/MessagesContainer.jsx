import { connect } from "react-redux";
import { addMessage, updateNewMessageText } from "../../redux/messageReducer";
import Messages from "./Messages";
let mapStateToProps = (state) => {
  return {
    messageData: state.messagesPage.messageData,
    dialogsData: state.messagesPage.dialogsData,
    newMessageText: state.messagesPage.newMessageText,
    isAuth: state.auth.isAuth,
  };
};

const MessagesContainer = connect(mapStateToProps, {
  updateNewMessageText,
  addMessage,
})(Messages);

export default MessagesContainer;
