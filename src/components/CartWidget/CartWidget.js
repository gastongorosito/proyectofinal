import React from "react";
import { FiShoppingCart } from "react-icons/fi";
const CartWidget = ({}) => {

    return ( 
        <div className="cart-icon">
    <button> <FiShoppingCart/>
    0
    </button>
        </div>
    )
    }

    export default CartWidget;