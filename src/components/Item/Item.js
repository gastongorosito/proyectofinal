import React from "react";

const Item = ( {product} ) => {
    return (
        <div className="item card text-center d-flex align-items-center">
        <img className="d-flex justify-content-center"  src={product.image} width="25%" />
        <div className="card-body">
            <div>
                <h3 className="card-title">{product.title}</h3>
                <a  className="btn btn-outline-secondary">COMPRAR </a>
                </div>
        </div>
            </div>
    )
}

export default Item;