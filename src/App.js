import React from "react";
import List from "./components/List";
import Cards from "./components/Cards";
import imgYerevan from "./img/yerevan.jpg";
import imgTbilisi from "./img/tbilisi.jpg";
import imgParis from "./img/paris.jpg";
import Product from "./components/Product";
import nikeImg from "../src/img/1.PNG";
import nikeImg2 from "../src/img/2.PNG";
import nikeImg3 from "../src/img/3.png";
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
      <Product
        name="Nike Air Max"
        price="$130"
        description="You are beautiful, unique and strong. They are too. And them. Pass it on
        in the Nike Air Max Verona"
        img={nikeImg}
      />
      <Product
        name="Air Max 2090"
        price="$150"
        description="It combines a Nike Worldwide crest with a galactic design of swirling, no-sew skins that have transparent finishes for added depth."
        img={nikeImg2}
      />
      <Product
        name="Air Max 270 React"
        price="$100"
        description=" The design draws inspiration from the Air Max pantheon while celebrating the unity of sport."
        img={nikeImg3}
      />
    </div>
  );
}

export default App;
