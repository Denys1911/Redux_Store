const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            bookName: 'Hello',
            amount: 2,
            totalPrice: 2045
        },
        {
            id: 324,
            bookName: 'Fucking',
            amount: 2,
            totalPrice: 2045
        },
        {
            id: 12,
            bookName: 'World',
            amount: 2,
            totalPrice: 2045
        }
    ],
    orderTotalPrice: 30201
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};