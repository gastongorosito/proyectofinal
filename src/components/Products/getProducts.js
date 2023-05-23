import React from "react";
import camisetatit from "../assets/camisetatit.png";
import hoodie from "../assets/hoodie.png";
import shortblanco from "../assets/shortblanco.png";

const products = [
    {
  id:1,
  title: "Camiseta Titular",
  image: camisetatit,
  text: "Camiseta Titular del primer equipo",
  price: "8000"
},
{
  id:2,
  title: "Short Blanco",
  image: shortblanco,
  text: "Short alternativo",
  price: "5000"
},
{
  id:3,
  title: "Hoodie",
  image: hoodie,
  text: "Nuevo buzo con bolsillos",
  price: "9000"
}
]
const getList = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve (products);
      }, 2000);
    })
  }

export default getList