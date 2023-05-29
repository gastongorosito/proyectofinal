import { useEffect, useState } from "react";
import { db } from "../Firebasefdx-shop/database";
import { collection, getDocs } from "firebase/firestore";



function ItemListContainer (){
  const [products, setProducts] = useState ([]);
  const productsRef = collection(db,"products")

const getProducts = async () => {
 const productsCollection = await getDocs (productsRef)
 const products = productsCollection.docs.map( (doc) => ({...doc.data(), id: doc.id}));
 setProducts(products);
}; 

useEffect (() => {
  getProducts();
}, [] );

console.log(products);

}

export default ItemListContainer;




