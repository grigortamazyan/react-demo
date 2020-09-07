import React from "react";
import "../App.css";

export default function Button(props) {
  return <button className="buttonStyle">{props.text}</button>;
}
