import React, { Component } from "react";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: props.data,
    };
  }

  handleCurrencyChange = () => {
    let { price } = this.state;
    let { rate } = this.props;
    let sign = price[price.length - 1];

    if (sign === "$") {
      price = parseFloat(price) * rate + "֏";
    } else if (sign === "֏") {
      price = parseFloat(price) / rate + "$";
    }

    this.setState({
      price: price
    });

    //let calculate = this.state.rate * this.props.data;
  };
  render() {
    let { price } = this.state;
    return (
      <div >
        <h2 >{price}</h2>
        <button onClick={this.handleCurrencyChange} className="priceButton">change currency</button>
      </div>
    );
  }
}

export default Price;
