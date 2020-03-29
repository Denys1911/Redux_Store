import React from "react";
import {connect} from "react-redux";
import {addBookToCart, removeBookFromCart, removeAllBooksFromCart} from "../../actions";

import "./ShoppingCartTable.css";

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, index) => {
        const {id, title, amount, totalPrice} = item;

        return (
            <tr key={id}>
                <th>{index + 1}</th>
                <td>{title}</td>
                <td>{amount}</td>
                <td>${totalPrice}</td>
                <td>
                    <div className="book-controls">
                        <button className="btn btn-outline-warning btn-sm"
                                onClick={() => onDecrease(id)}>
                            <i className="fa fa-minus-circle"/>
                        </button>
                        <button className="btn btn-outline-success btn-sm"
                                onClick={() => onIncrease(id)}>
                            <i className="fa fa-plus-circle"/>
                        </button>
                        <button className="btn btn-outline-danger btn-sm"
                                onClick={() => onDelete(id)}>
                            <i className="fa fa-trash-o"/>
                        </button>
                    </div>
                </td>
            </tr>
        )
    };

    const cartFooterInfo = items.length ? {
            align : 'right',
            text: `Total: ${total}`
        } : {
            align : 'center',
            text: 'No books in cart yet'
        };

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table table-striped table-responsive-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Count</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(renderRow)}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan = '100%' align={cartFooterInfo.align}>
                            {cartFooterInfo.text}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotalPrice}}) => {
    return {
        items: cartItems,
        total: orderTotalPrice
    }
};

const mapDispatchToProps = {
    onIncrease: addBookToCart,
    onDecrease: removeBookFromCart,
    onDelete: removeAllBooksFromCart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCartTable);