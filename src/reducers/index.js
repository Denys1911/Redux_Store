const initialState = {
    books: [],
    loading: true,
    error: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_REQUESTED':
            return {
                books: [],
                loading: true,
                error: null
            };
        case 'BOOKS_ERROR':
            return {
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOKS_LOADED':
            return {
                books: action.payload,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};