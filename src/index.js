import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import { addMessage } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import { updateNewPostText } from "./redux/state";
import { updateNewMessageText } from "./redux/state";
let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          addMessage={addMessage}
          updateNewPostText={updateNewPostText}
          updateNewMessageText={updateNewMessageText}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
