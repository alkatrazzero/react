import React from "react";
import s from "../Messages/Messages.module.css";
import { NavLink } from "react-router-dom";
const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/messages/" + props.id} activeClassName={s.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}> {props.message}</div>;
};

const Messages = (props) => {
  let dialogsData = [
    { id: 1, name: "igor" },
    { id: 2, name: "mark" },
    { id: 3, name: "lana" },
    { id: 4, name: "alex" },
    { id: 5, name: "vitya" },
    { id: 6, name: "oleg" },
    { id: 7, name: "Dead_inside" },
    { id: 8, name: "kriskostyle" },
  ];
  let dialogElements = dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let messageData = [
    { id: 1, message: "hi" },
    { id: 2, message: "hi,hi" },
    { id: 3, message: "how are you?" },
    { id: 4, message: "i'm fine ,and you?" },
  ];
  let messageElements = messageData.map((message) => (
    <Message message={message.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};
export default Messages;
