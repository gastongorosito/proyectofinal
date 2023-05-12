import React from "react"
import './App.css';
import Navbar from "./components/NavBar/index";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Card from "./components/Card/Card"
import { BrowserRouter, Route, Routes } from "react-router-dom";





function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/Card" element={<Card/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  ); 
}

export default App;
