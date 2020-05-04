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
      id: Number(new Date()),
      description: description,
      imageLink: imageLink,
    };
    if (description && imageLink) {
      this.props.startAddingPost(post)
      this.props.history.push('/')
    }
  }
  render() {
    return (
      <div>
        
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
