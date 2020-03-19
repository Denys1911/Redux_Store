import React from "react";
import {Link} from "react-router-dom";
import {HOME, CART} from "../../constants/routes";

import "./ShopHeader.css";

export const ShopHeader = ({itemsAmount, totalPrice}) => (
    <header className="shop-header">
        <Link to={HOME} className="logo text-dark">ReStore</Link>
        <Link to={CART} className="shopping-cart">
            <i className="cart-icon fa fa-shopping-cart"/>
            {itemsAmount} items (${totalPrice})
        </Link>
    </header>
);