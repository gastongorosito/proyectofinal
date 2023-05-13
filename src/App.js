import React from "react"
import './App.css';
import Navbar from "./components/NavBar/index";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item from "./components/Item/Item";





function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/Item" element={<Item/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  ); 
}

export default App;
