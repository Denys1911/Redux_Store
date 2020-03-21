import React from "react";
import {BooksListContainer} from "../BooksList";
import {ShoppingCartTable} from "../ShoppingCartTable";

export const HomePage = () => (
    <div className="home-page">
        <BooksListContainer/>
        <ShoppingCartTable/>
    </div>
);