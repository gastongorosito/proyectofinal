import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartDetails = () => {
  const { cartItems } = useContext(CartContext);

    return (
    <div>
    <h2>Detalles del Carrito</h2>
    {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
    ) : (
    <ul>
    {cartItems.map((item) => (
            <li key={item.id}>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            </li>
        ))}
        </ul>
    )}
    </div>
);
};

export default CartDetails;
