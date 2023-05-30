import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = ({itemCount}) => {

    const {cartItems} = useContext(CartContext)

    return ( 
        <Link to = "/Cart">
        <div className="cart-icon">
    <button> <FiShoppingCart/>
    {itemCount}
    </button>
        </div>
        </Link>
    )
    }

    export default CartWidget;