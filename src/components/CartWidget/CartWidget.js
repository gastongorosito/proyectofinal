import React, { useContext, useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {cartItems} = useContext(CartContext)
    const [cartCount, setCartCount] = useState(cartItems.length);
    useEffect(() => {
        setCartCount(cartItems.length);
    }, [cartItems]);
    
    return ( 
        <Link to = "/Cart">
        <div className="cart-icon">
    <button> <FiShoppingCart/>
    {cartCount}
    </button>
        </div>
        </Link>
    )
    }

    export default CartWidget;