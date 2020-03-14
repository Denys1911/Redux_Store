import React from "react";
import {BooksListItem} from "../BooksListItem";

import "./BooksList.css";

export const BooksList = ({books}) => {
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