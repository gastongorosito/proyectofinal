import React from "react"
import './App.css';
import Navbar from "./components/NavBar/index";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item from "./components/Item/Item";
import { CartProvider } from "./components/CartContext/CartContext";
import CartDetail from "./components/CartDetail/CartDetail";

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/Item" element={<Item/>}/>
          <Route path="/Cart" element={<CartDetail/>}/>
        </Routes>
        </BrowserRouter>
        </CartProvider>
    </div>
  ); 
  }
export default App;
