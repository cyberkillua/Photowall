import React, { Component } from "react";

class Addphoto extends Component {
  constructor() {
    super();
    this.getStuff = this.getStuff.bind(this);
  }
  getStuff(event) {
    event.preventDefault();
    const imageLink = event.target.elements.Link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: "0",
      description: description,
      imageLink: imageLink,
    };
    if (description && imageLink) {
      this.props.onAddPhoto(post);
    }
  }
  render() {
    return (
      <div>
        <h1>Photowall</h1>
        <div>
          <form className="form" onSubmit={this.getStuff}>
            <input type="text" placeholder="Link" name="Link" />
            <input type="text" placeholder="Description" name="description" />
            <button>post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Addphoto;
