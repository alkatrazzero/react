import { compose } from "redux";
import { connect } from "react-redux";
import Login from "./Login";
import { addLoginData } from "../../redux/authReduser";
let mapStateToProps = (state) => {
  return {};
};

// let AuthRedirectComponent = withAuthRedirect(Messages);
// const MessagesContainer = connect(mapStateToProps, {
//   updateNewMessageText,
//   addMessage,
// })(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, {
    addLoginData,
  })
)(Login);
