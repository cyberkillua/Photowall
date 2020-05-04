import React from "react";
import ReactDom from "react-dom";
import "./style/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducers from "./redux/reducer";
import { Provider } from "react-redux";
import App from "./Components/App";
import thunk from "redux-thunk";
import { database } from "./database/config";

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
