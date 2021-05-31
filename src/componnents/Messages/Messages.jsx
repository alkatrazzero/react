import React from "react";
import { Redirect } from "react-router";
import s from "../Messages/Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Messages = (props) => {
  let dialogElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messageElements = props.messageData.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  let sendMessage = () => {
    props.addMessage();
  };
  let newMessage = React.createRef();
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
            value={props.newMessageText}
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
