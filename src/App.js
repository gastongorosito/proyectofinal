import React from "react"
import './App.css';
import Navbar from "./components/NavBar/index";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item from "./components/Item/Item";
import {db} from "./components/Firebasefdx-shop/database"
import {getDocs, collection} from "firebase/firestore"
import ItemList from "./components/ItemList/ItemList";

function App() {
  const getProducts = async () => {
 const productsCollection = collection (db, "products");
 const productsDocsRef = await getDocs (productsCollection);
 const productDocs = productsDocsRef.docs;
 const products = productDocs 
 .map((doc) => {
   return {...doc.data(), id: doc.id};
  })
  console.log(products);
  return products;
}
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/Item" element={<Item/>}/>
          <Route path="/ItemList" element={<ItemList/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  ); 
}

export default App;
