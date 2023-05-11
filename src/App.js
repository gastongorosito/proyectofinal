import React from "react"
import './App.css';
import Navbar from "./components/NavBar/index";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemList from "./components/Card/ItemList";





function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
  
    </div>
  ); 
}

export default App;
