import React from "react";
import Button from "./Button";
import "../App.css";
function Cards(props) {
  return (
    <div className="Cards">
      <h3>Country: {props.name}</h3>
      <p>
        The capital of {props.name} is {props.capital}
      </p>
      <img src={props.img} width="300px" alt="yerevan"></img>
      <Button text="Book Now" />
    </div>
  );
}

export default Cards;
