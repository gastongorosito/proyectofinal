import React from "react";


const ItemList = ({products}) => {
  return (
    <>
    <div className="row">
      <h1 className="d-flex justify-content-center mb-4">Productos</h1>
    {products.map( (product) => (<h3>{product.title}</h3>))}
    <div/>
    </div>
    </>
  );
}

export default ItemList;

