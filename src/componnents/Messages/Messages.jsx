import React from "react";
import s from "../Messages/Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Messages = (props) => {
  debugger;
  let dialogElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = props.state.messageData.map((message) => (
    <Message message={message.message} />
  ));
  let newMessage = React.createRef();
  let sendMessage = () => {
    let message = newMessage.current.value;
    props.addMessage(message);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
      <div className={s.textButton}>
        <div>
          <textarea ref={newMessage}></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>send message</button>
        </div>
      </div>
    </div>
  );
};
export default Messages;
