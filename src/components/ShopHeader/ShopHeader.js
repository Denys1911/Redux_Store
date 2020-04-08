import React from "react";
import {Link} from "react-router-dom";
import {HOME, CART} from "../../constants/routes";
import {connect} from "react-redux";

import "./ShopHeader.css";

const ShopHeader = ({cartItemsAmount, orderTotalPrice}) => (
    <header className="shop-header">
        <Link to={HOME} className="logo text-dark">ReStore</Link>
        <Link to={CART} className="shopping-cart">
            <i className="cart-icon fa fa-shopping-cart">
                <div className="cart-items-score">{cartItemsAmount}</div>
            </i>
            Total: ${orderTotalPrice}
        </Link>
    </header>
);

const mapStateToProps = ({shoppingCart: {orderTotalPrice, cartItemsAmount}}) => ({orderTotalPrice, cartItemsAmount});

export default connect(mapStateToProps)(ShopHeader);