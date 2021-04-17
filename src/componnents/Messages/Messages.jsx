import React from "react";
import s from "../Messages/Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Messages = (props) => {
  let dialogElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = props.state.messageData.map((message) => (
    <Message message={message.message} />
  ));
  let newMessage = React.createRef();
  let sendMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
      <div className={s.textButton}>
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessage}
            value={props.state.newMessageText}
          ></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>send message</button>
        </div>
      </div>
    </div>
  );
};
export default Messages;
