import React from "react";

const Item = ( {product} ) => {
    return (
        <div className="item card text-center">
        <img className="img-fluid"  src={product.image} alt="product image"/>
        <div className="card-body">
            <div>
                <h3 className="card-title">{product.title}</h3>
                <a  className="btn btn-outline-secondary border-1 rounded-0">COMPRAR </a>
                </div>
        </div>
            </div>
    )
}

export default Item;