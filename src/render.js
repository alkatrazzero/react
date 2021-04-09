import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import { addMessage } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import { updateNewPostText } from "./redux/state";
import { updateNewMessageText } from "./redux/state";
export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          addMessage={addMessage}
          updateNewPostText={updateNewPostText}
          uupdateNewMessageText={updateNewMessageText}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
