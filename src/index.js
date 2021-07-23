
import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App state={state} />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
  };
rerenderEntireTree(store.getState());

reportWebVitals();
