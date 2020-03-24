const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotalPrice: 30201
};

const createCartItem = (selectedBook, bookInCart = {}) => {
    const {
        id = selectedBook.id,
        title = selectedBook.title,
        amount = 0,
        totalPrice = 0
    } = bookInCart;

    return {
        id,
        title,
        amount: amount + 1,
        totalPrice: totalPrice + selectedBook.price
    }
};

const createCartItems = (selectedBookInCart, cartItems, newCartItem, selectedBookId) => {
    return selectedBookInCart ?
        cartItems.map(item => item.id === selectedBookId ? newCartItem : item) :
        [...cartItems, newCartItem];
};

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
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
                books: payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: payload
            };
        case 'ADD_BOOK_TO_CART':
            const selectedBook = state.books.find(book => book.id === payload);
            const selectedBookInCart = state.cartItems.find(item => item.id === payload);
            const newCartItem = createCartItem(selectedBook, selectedBookInCart);
            const cartItems = createCartItems(selectedBookInCart, state.cartItems, newCartItem, payload);

            return {
                ...state,
                cartItems
            };
        default:
            return state;
    }
};