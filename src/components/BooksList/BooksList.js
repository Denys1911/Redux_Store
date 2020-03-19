import React, {useContext, useEffect} from "react";
import {BooksListItem} from "../BooksListItem";
import {connect} from "react-redux";
import {booksLoaded, booksRequested, booksError} from "../../actions";
import {BookStoreServiceContext} from "../BookStoreServiceContext";
import {Spinner} from "../Spinner";
import {ErrorIndicator} from "../ErrorIndicator";

import "./BooksList.css";

const BooksList = ({books, booksLoaded, booksRequested, booksError, loading, error}) => {
    const bookStoreService = useContext(BookStoreServiceContext);

    useEffect(() => {
        booksRequested();

        bookStoreService.getBooks()
            .then(books => booksLoaded(books))
            .catch(err => booksError(err));
    }, []);

    if (error) {
        return <ErrorIndicator/>;
    }

    if (loading) {
        return <Spinner/>;
    }

    return (
        <ul className="books-list">
            {
                books.map(({id, ...bookInfo}) => (
                    <li key={id}>
                        <BooksListItem book={bookInfo}/>
                    </li>
                ))
            }
        </ul>
    );
};

const mapStateToProps = ({books, loading, error}) => ({books, loading, error});

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksList);
