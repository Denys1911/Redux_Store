import React from "react";
import {BooksList} from "../BooksList";
import {ShoppingCartTable} from "../ShoppingCartTable";

export const HomePage = () => {
    return (
        <div className="home-page">
            <BooksList/>
            <ShoppingCartTable/>
        </div>
    )
};