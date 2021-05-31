import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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

// let AuthRedirectComponent = withAuthRedirect(Messages);
// const MessagesContainer = connect(mapStateToProps, {
//   updateNewMessageText,
//   addMessage,
// })(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, {
    updateNewMessageText,
    addMessage,
  }),
  withAuthRedirect
)(Messages);
