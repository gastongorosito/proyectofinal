import React, { useState } from "react"
import './App.css';
import Navbar from "./components/NavBar/index";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item from "./components/Item/Item";
import CartWidget from "./components/CartWidget/CartWidget";

function App() {
  const [cartItems, setCartItems] = useState ([]);
  const addToCart = (products) => {
    setCartItems (...cartItems,products);
  };

  return (
    <div className="App">
      <CartWidget itemCount={cartItems.length}/>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/Item" element={<Item/>}/>
          <Route path="/Cart" element={<CartWidget/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  ); 
  }
export default App;
