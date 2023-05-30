import React from "react";
import { FiShoppingCart } from "react-icons/fi";
const CartWidget = ({itemCount}) => {

    return ( 
        <div className="cart-icon">
    <button> <FiShoppingCart/>
    {itemCount}
    </button>
        </div>
    )
    }

    export default CartWidget;