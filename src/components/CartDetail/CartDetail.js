import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartDetails = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== itemToRemove.id
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h2 className="d-flex justify-content-center">Detalles del Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <div className="d-flex justify-content-center" key={item.id}>
              <div className="card mb-1 col-lg-6">
                <li>
                  <h3>{item.title}</h3>
                  <img src={item.image} className="w-25" alt="producto" />
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => removeFromCart(item)}
                  >
                    Borrar
                  </button>
                </li>
              </div>
            </div>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="d-flex justify-content-center">
          <div className="card col-lg-6">
            <h5>Total: ${getTotalPrice()}</h5>
            <p>Cantidad de productos: {getTotalQuantity()}</p>
            <button className="btn btn-success">Comprar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
