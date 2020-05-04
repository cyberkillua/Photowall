import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./Photowall";
import Addphoto from "./Addphoto";
import { Route, Link } from "react-router-dom";
import Single from "./Single"

class Main extends Component {
  state = { loading: true }
  componentDidMount() {
    this.props.startLoadingPost().then(() => {
    this.setState({loading: false})
    })
    this.props.startLoadingComment()
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
          <Single loading={this.state.loading} {...this.props} {...params}/>
        )}/>
      </div>
    );
  }
}

export default Main;
