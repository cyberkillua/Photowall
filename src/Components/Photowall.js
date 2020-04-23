import React, { Component } from "react";
import Photo from "./Photo";
class Photowall extends Component {
  render() {
    return (
      <div className="photoGrid">
        {this.props.posts.map((post, index) => (
          <Photo
            key={index}
            post={post}
            onRemovedPhoto={this.props.onRemovedPhoto}
          />
        ))}
      </div>
    );
  }
}

export default Photowall;
