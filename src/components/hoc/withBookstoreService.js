import React from "react";
import {BookStoreServiceConsumer} from "../BookStoreServiceContext";

export const withBookStoreService = () => Wrapped => {
    return props => {
        return (
            <BookStoreServiceConsumer>
                {
                    bookStoreService => {
                        return (
                            <Wrapped {...props} bookStoreService={bookStoreService}/>
                        );
                    }
                }
            </BookStoreServiceConsumer>
        );
    }
};