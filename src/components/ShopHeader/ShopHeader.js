import React from "react";

import "./ShopHeader.css";

export const ShopHeader = ({itemsAmount, totalPrice}) => {
    return (
        <header className="shop-header">
            <a className="logo text-dark" href="/#">
                ReStore
            </a>
            <a className="shopping-cart" href="/#">
                <i className="cart-icon fa fa-shopping-cart"/>
                {itemsAmount} items (${totalPrice})
            </a>
        </header>
    )
};