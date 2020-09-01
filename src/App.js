import React from 'react';
import List from './components/List'
import Cards from './components/Cards'
import imgYerevan from './img/yerevan.jpg'
import imgTbilisi from './img/tbilisi.jpg'
import imgParis from './img/paris.jpg'
function App() {
  return (
    <div>
    <List headline="List of countries"/>
    <Cards capital="Yerevan" name="Armenia" img={imgYerevan}/>
    <Cards capital="Tbilisi" name="Georgia" img={imgTbilisi}/>
    <Cards capital="Paris" name="France" img={imgParis}/>
    </div>
  );
}

export default App;
