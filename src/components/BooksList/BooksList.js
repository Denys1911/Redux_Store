import React, {useContext, useEffect} from "react";
import {BooksListItem} from "../BooksListItem";
import {connect} from "react-redux";
import {booksLoaded} from "../../actions";
import {BookStoreServiceContext} from "../BookStoreServiceContext";
import {Spinner} from "../Spinner";

import "./BooksList.css";

const BooksList = ({books, booksLoaded, loading}) => {
    const bookStoreService = useContext(BookStoreServiceContext);

    useEffect(() => {
        bookStoreService.getBooks()
            .then(books => booksLoaded(books));
    }, []);

    return loading ? <Spinner/> : (
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

const mapStateToProps = ({books, loading}) => ({books, loading});

const mapDispatchToProps = {
    booksLoaded
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksList);
