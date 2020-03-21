const booksRequested = () => ({type: 'FETCH_BOOKS_REQUEST'});

const booksLoaded = newBooks => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksError = error => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

export const fetchBooks = (dispatch, bookStoreService) => () => {
    dispatch(booksRequested());

    bookStoreService.getBooks()
        .then(books => dispatch(booksLoaded(books)))
        .catch(err => dispatch(booksError(err)));
};