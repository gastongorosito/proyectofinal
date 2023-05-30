import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../CartContext/CartContext";
const CartWidget = ({itemCount}) => {

    const {cartItems} = useContext(CartContext)

    return ( 
        <div className="cart-icon">
    <button> <FiShoppingCart/>
    {itemCount}
    </button>
        </div>
    )
    }

    export default CartWidget;