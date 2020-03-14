import React from "react";
import {BooksList} from "../BooksList";

export const HomePage = () => {
    const books = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler'
        },
        {
            id: 2,
            title: 'Release it!',
            author: 'Michael T. Nygard'
        }
    ];

    return (
        <div className="home-page">
            <BooksList books={books}/>
        </div>
    )
};