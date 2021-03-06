import React from "react";
import PropTypes from "prop-types";

import "./BooksListItem.css";

export const BooksListItem = ({book, onAddToCart}) => {
    const {title, author, price, coverImage} = book;

    return (
        <div className="card book-list-item">
            <img src={coverImage} alt="cover"/>
            <div className="card-body book-details">
                <h3 className="card-title">{title}</h3>
                <div className="book-author">{author}</div>
                <strong className="book-price">${price}</strong>
                <button className="btn btn-info add-to-cart"
                        onClick={onAddToCart}>
                    Add to cart
                </button>
            </div>
        </div>
    )
};

BooksListItem.propTypes = {
    book: PropTypes.exact({
        title: PropTypes.string,
        author: PropTypes.string,
        price: PropTypes.number,
        coverImage: PropTypes.string
    }),
    onAddToCart: PropTypes.func
};
