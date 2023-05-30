import React from "react";
import { useState } from "react";
import firebase from "firebase/firebase-app"

const Item = ( {title, image, price, stock, categoryid,description} ) => {
    
    const [cartItems, setCartItems] = useState([]);
    const addToCart = async (Item) => {
        try{
            const db = firebase.firestore();
            await db.collection ("cartItems").add(Item);
            console.log("producto agregado al carrito");
        } catch (error){
            console.error("error al agregar producto al carrito")
        }
        }
        setCartItems([...cartItems, Item]);
    return (
        <div className="card d-flex justify-content-center text-center align-items-center col-lg-4">
        <div className="card-header">
    {title}
        </div>
        <img src={image} alt="imagendelproducto" className="card-img-top img-fluid w-50" />
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Stock Disponible: {stock}</li>
        <li className="list-group-item">Precio: ${price}</li>
        <li className="list-group-item">{description}</li>
        <li className="list-group-item">Categoria: {categoryid}</li>
        </ul>
        <button className="btn btn-primary" onClick={() => addToCart(Item)}>Comprar</button>
        <div className="card-body">
        </div>
        </div>
        )
    };


export default Item;