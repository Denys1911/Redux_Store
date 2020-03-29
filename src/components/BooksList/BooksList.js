import React, {PureComponent} from "react";
import {withBookStoreService} from "../hoc";
import {fetchBooks, addBookToCart} from "../../actions";
import {connect} from "react-redux";
import {compose} from "../../utils";
import {BooksListItem} from "../BooksListItem";
import {Spinner} from "../Spinner";
import {ErrorIndicator} from "../ErrorIndicator";

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

class BooksListContainer extends PureComponent {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, error, loading, onAddToCart} = this.props;

        if (error) {
            return <ErrorIndicator/>;
        }

        if (loading) {
            return <Spinner/>;
        }

        return (
            <BooksList books={books} onAddToCart={onAddToCart}/>
        );
    }
}

const mapStateToProps = ({booksList: {books, loading, error}}) => ({books, loading, error});

const mapDispatchToProps = (dispatch, {bookStoreService}) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookStoreService),
        onAddToCart: bookId => dispatch(addBookToCart(bookId))
    }
};

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer);
