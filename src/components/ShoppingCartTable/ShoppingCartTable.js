import React from "react";
import {connect} from "react-redux";

import "./ShoppingCartTable.css";

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, index) => {
        const {id, bookName, amount, totalPrice} = item;

        return (
            <tr key={id}>
                <td>{index + 1}</td>
                <td>{bookName}</td>
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
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({cartItems, orderTotalPrice}) => {
    return {
        items: cartItems,
        total: orderTotalPrice
    }
};

const mapDispatchToProps = () => {
    return {
        onIncrease: (id) => {
            console.log(`Increase ${id}`)
        },
        onDecrease: (id) => {
            console.log(`Decrease ${id}`)
        },
        onDelete: (id) => {
            console.log(`Delete ${id}`)
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCartTable);