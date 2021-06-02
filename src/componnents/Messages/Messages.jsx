import React from "react";
import s from "../Messages/Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { MessageFormRedux } from "./Message/MessageForm";
const Messages = (props) => {
  let dialogElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messageElements = props.messageData.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  const onSubmit = (values) => {
    props.addMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
      <MessageFormRedux onSubmit={onSubmit} />
    </div>
  );
};
export default Messages;
