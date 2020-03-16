import React from "react";

import "./ShoppingCartTable.css";

export const ShoppingCartTable = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Site Reliability Engineering</td>
                        <td>2</td>
                        <td>$40</td>
                        <td className="book-controls">
                            <button className="btn btn-outline-danger btn-sm">
                                <i className="fa fa-trash-o" />
                            </button>
                            <button className="btn btn-outline-success btn-sm">
                                <i className="fa fa-plus-circle" />
                            </button>
                            <button className="btn btn-outline-warning btn-sm">
                                <i className="fa fa-minus-circle" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="total">
                Total: $201
            </div>
        </div>
    );
};