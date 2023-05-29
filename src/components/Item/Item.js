import React from "react";

const Item = ( {title, image, price, stock, categoryid,description} ) => {
    return (
        <div className="card">
        <div className="card-header">
    {title}
        </div>
        <img src={image} className="card-img-top" />
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Stock Disponible: {stock}</li>
        <li className="list-group-item">Precio: ${price}</li>
        <li className="list-group-item">{description}</li>
        <li className="list-group-item">Categoria: {categoryid}</li>
        </ul>
        <div className="card-body">
        </div>
        /</div>
        )
    }


export default Item;