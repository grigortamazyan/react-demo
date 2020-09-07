import React from "react";
import List from "./components/List";
import Cards from "./components/Cards";
import imgYerevan from "./img/yerevan.jpg";
import imgTbilisi from "./img/tbilisi.jpg";
import imgParis from "./img/paris.jpg";
import Product from "./components/Product";
import "./App.css";
function App() {
  return (
    <div>
      <List headline="List of functional components" />
      <div className="Welcome">
        <Cards capital="Yerevan" name="Armenia" img={imgYerevan} />
        <Cards capital="Tbilisi" name="Georgia" img={imgTbilisi} />
        <Cards capital="Paris" name="France" img={imgParis} />
      </div>
      <List headline="List of class components" />
      <Product />
    </div>
  );
}

export default App;
