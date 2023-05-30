import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";



const Item = ({ title, image, price, stock, categoryid, description }) => {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart({ title, image, price });
  };
  console.log(handleAddToCart)
  return (
    <div className="card d-flex justify-content-center text-center align-items-center col-lg-4">
      <div className="card-header">{title}</div>
      <img src={image} alt="imagendelproducto" className="card-img-top img-fluid w-50" />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Categoria: {categoryid}</li>
        <li className="list-group-item">Stock Disponible: {stock}</li>
        <li className="list-group-item">Precio: ${price}</li>
      </ul>
      <button
        className="btn btn-primary"
        onClick={handleAddToCart}
      >
        Agregar al Carrito
      </button>
      <div className="card-body"></div>
    </div>
  );
};

export default Item;
