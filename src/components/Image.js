import React, { Component } from "react";

class Image extends Component {
  render() {
    return <img src={this.props.img} alt="nikeImg" width="300px" />;
  }
}
export default Image;
