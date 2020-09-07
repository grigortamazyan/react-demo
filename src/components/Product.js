import React, { Component } from "react";
import Button from "./Button";
import Name from "../components/Name";
import Price from "../components/Price";
import Description from "../components/Description";
class Product extends Component {
  render() {
    let {name, price, description} = this.props;
    return (
      <div className="Product">
        <Name data={name} />
        <img src={this.props.img} width="300px" alt="img" />
        <Price data={price} />
        <Description data={description} />
        <p></p>
        <Button text="buy now" />
      </div>
    );
  }
}

export default Product;
