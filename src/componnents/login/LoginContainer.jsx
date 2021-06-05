import { compose } from "redux";
import { connect } from "react-redux";
import Login from "./Login";
import { login} from "../../redux/authReduser";
let mapStateToProps = (state) => {
  return {isAuth:state.auth.isAuth};
};

// let AuthRedirectComponent = withAuthRedirect(Messages);
// const MessagesContainer = connect(mapStateToProps, {
//   updateNewMessageText,
//   addMessage,
// })(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, {

      login
  })
)(Login);
