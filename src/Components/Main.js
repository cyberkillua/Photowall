import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./Photowall";
import Addphoto from "./Addphoto";
import { Route, Link } from "react-router-dom";
import Single from "./Single"

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1><Link to = '/'>Photowall </Link></h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              
              <Photowall  {...this.props} />
            </div>
          )}
        />

        <Route
          path="/Addphoto"
          render={({ history }) => (
            <Addphoto {...this.props} onHistory = {history}/>
              
          )}
          
        />
        <Route path = "/single/:id" render = {(params) => (
          <Single {...this.props} {...params}/>
        )}/>
      </div>
    );
  }
}

export default Main;
