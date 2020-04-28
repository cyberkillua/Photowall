import React from "react";
import ReactDom from "react-dom";
import "./style/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducers from "./redux/reducer";
import { Provider } from "react-redux";
import App from "./Components/App";
const store = createStore(rootReducers);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
