export const booksLoaded = newBooks => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    };
};

export const booksRequested = () => ({type: 'BOOKS_REQUESTED'});

export const booksError = error => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    }
};