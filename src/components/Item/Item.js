import React from "react";

const Item = ( {product} ) => {
    return (
        <div className="item card text-center">
        <img  src={product.image} alt="product image"/>
            <div>
                <h3>{product.title}</h3>
                <a  className="btn btn-outline-secondary border-1 rounded-0">COMPRAR </a>
        </div>
            </div>
    )
}

export default Item;