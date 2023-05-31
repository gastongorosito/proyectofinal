import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";



const Navbar = () => {
  return  (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to= "/">
        <h3 className="text-black">FDX SHOP</h3>
        </Link>
        <Link to = "/">
        <a className="btn btn-outline-dark border-1 rounded-5 text-black">Inicio</a>
        </Link>
        <a className="btn btn-outline-dark border-1 rounded-5 text-black">Shop</a>
        <a className="btn btn-outline-dark border-1 rounded-5 text-black">Contacto</a>
      <CartWidget/>
      
      </div>
    </nav>
  
  )
}

export default Navbar;