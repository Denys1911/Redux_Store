import React from "react";
import {BookstoreServiceConsumer} from "../BookStoreServiceContext";

export const withBookStoreService = () => Wrapped => {
    return props => (
        <BookstoreServiceConsumer>
            {
                bookStoreService => (
                    <Wrapped {...props} bookStoreService={bookStoreService}/>
                )
            }
        </BookstoreServiceConsumer>
    );
};