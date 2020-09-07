import React, { Component } from "react";
import Price from "./Price";
import Name from "./Name";
import Image from "./Image";
import Description from "./Description";
import Button from "./Button";
import nikeImg from "../img/1.PNG";
class Product extends Component {
  render() {
    return (
      <div className="Product">
        <Name title="Nike Air Max Verona" />
        <Image img={nikeImg}/>
        <Price text="$130"/>
        <Description text="You are beautiful, unique and strong. They are too. And them. Pass it on
        in the Nike Air Max Verona"/>
        <Button text="buy now" />
      </div>
    );
  }
}

export default Product;
