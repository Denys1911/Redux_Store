import React, {useEffect} from "react";
import {withBookStoreService} from "../hoc";
import {fetchBooks, addBookToCart} from "../../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {compose} from "../../utils";
import {BooksListItem} from "../BooksListItem";
import {Spinner} from "../Spinner";
import {ErrorIndicator} from "../ErrorIndicator";
import PropTypes from "prop-types";

import "./BooksList.css";

const BooksList = ({books, onAddToCart}) => (
    <ul className="books-list">
        {
            books.map(({id, ...bookInfo}) => (
                <li key={id}>
                    <BooksListItem book={bookInfo}
                                   onAddToCart={() => onAddToCart(id)}/>
                </li>
            ))
        }
    </ul>
);

const BooksListContainer = ({books, error, loading, onAddToCart, fetchBooks}) => {
    useEffect(fetchBooks, []);

    if (error) {
        return <ErrorIndicator/>;
    }

    if (loading) {
        return <Spinner/>;
    }

    return (
        <BooksList books={books} onAddToCart={onAddToCart}/>
    );
};

BooksListContainer.propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    fetchBooks: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func
};

const mapStateToProps = ({booksList: {books, loading, error}}) => ({books, loading, error});

const mapDispatchToProps = (dispatch, {bookStoreService}) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookStoreService),
        onAddToCart: addBookToCart
    }, dispatch);
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer);
