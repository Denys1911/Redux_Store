import React from "react";

import "./BooksListItem.css";

export const BooksListItem = ({book}) => (
    <>
        <span>{book.title}</span>
        <span>{book.author}</span>
    </>
);
