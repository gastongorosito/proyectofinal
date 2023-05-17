import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products}) => {
  return (
    <>
    <div className="row">
    {products.map( (product) => <Item key={product.id} product ={product}/>)}
    <div/>
    </div>
    </>
  );
}

export default ItemList;

