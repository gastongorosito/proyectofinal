import React from "react";



    function Card ({title,imageSource,text}) {
        return (
            <div className="card text-center bg-dark" >
             <img className="img-fluid" src={imageSource}/>
             <div className= "card-body text-light">
                <h4 className="card-title"> {title}</h4>
                <p className="card-text">  {text ? text:"Merch Oficial de GT United"}</p>
                <a  className="btn btn-outline-secondary border-1 rounded-0">COMPRAR </a>
            </div>
        </div>
  )
 }

export default Card