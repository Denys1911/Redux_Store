const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
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
        case 'ADD_BOOK_TO_CART':
            const selectedBook = state.books.find(book => book.id === action.payload);
            const newItem = {
                id: selectedBook.id,
                bookName: selectedBook.title,
                amount: 1,
                totalPrice: selectedBook.price
            };

            return {
                ...state,
                cartItems: [...state.cartItems, newItem]
            };
        default:
            return state;
    }
};