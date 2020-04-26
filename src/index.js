import React, { Component } from "react";
import ReactDom from "react-dom";
import Main from "./Components/Main";
import "./style/stylesheet.css";
import {BrowserRouter} from "react-router-dom";


ReactDom.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById("root"));
