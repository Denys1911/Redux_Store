import React, {useContext, useEffect} from "react";
import {BooksListItem} from "../BooksListItem";
import {connect} from "react-redux";
import {booksLoaded} from "../../actions";
import {BookStoreServiceContext} from "../BookStoreServiceContext";

import "./BooksList.css";

const BooksList = ({books, booksLoaded}) => {
    const bookStoreService = useContext(BookStoreServiceContext);

    useEffect(() => {
        const books = bookStoreService.getBooks();

        booksLoaded(books);
    }, []);

    return (
        <ul className="list-group books-list">
            {
                books.map(({id, ...bookInfo}) => (
                    <li key={id} className="list-group-item">
                        <BooksListItem book={bookInfo}/>
                    </li>
                ))
            }
        </ul>
    )
};

const mapStateToProps = ({books}) => ({books});

const mapDispatchToProps = {
    booksLoaded
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksList);
