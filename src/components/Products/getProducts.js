import React from "react";
import camisetatit from "../assets/camisetatit.png";
import hoodie from "../assets/hoodie.png";
import shortblanco from "../assets/shortblanco.png";


const getList = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve (products);
      }, 2000);
    })
  }

export default getList