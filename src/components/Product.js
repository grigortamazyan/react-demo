import React, { Component } from "react";
import Button from "./Button";

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <h2>{this.props.name}</h2>
        <img src={this.props.img} width="300px"/>
        <h3>{this.props.price}</h3>
        <p>{this.props.description}</p>
        <Button text="buy now" />
      </div>
    );
  }
}

export default Product;
