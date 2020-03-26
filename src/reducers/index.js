const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotalPrice: 30201
};

const createCartItem = (selectedBook, bookInCart = {}, quantity) => {
    const {
        id = selectedBook.id,
        title = selectedBook.title,
        amount = 0,
        totalPrice = 0
    } = bookInCart;

    return {
        id,
        title,
        amount: amount + quantity,
        totalPrice: totalPrice + quantity * selectedBook.price
    }
};

const createCartItems = (selectedBookInCart, cartItems, newCartItem, selectedBookId) => {
    if (!newCartItem.amount) {
        return [
            ...cartItems.filter(item => item.id !== selectedBookId)
        ]
    }

    return selectedBookInCart ?
        cartItems.map(item => item.id === selectedBookId ? newCartItem : item) :
        [...cartItems, newCartItem];
};

const updateOrder = (state, bookId, quantity) => {
    const {books, cartItems} = state;
    const selectedBook = books.find(book => book.id === bookId);
    const selectedBookInCart = cartItems.find(item => item.id === bookId);
    const newCartItem = createCartItem(selectedBook, selectedBookInCart, quantity);
    const newCartItems = createCartItems(selectedBookInCart, cartItems, newCartItem, bookId);

    return {
        ...state,
        cartItems: newCartItems
    };
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
            return updateOrder(state, payload, 1);
        case 'REMOVE_BOOK_FROM_CART':
            return updateOrder(state, payload, -1);
        case 'REMOVE_ALL_BOOKS_FROM_CART':
            const selectedBookInCart = state.cartItems.find(item => item.id === payload);

            return updateOrder(state, payload, -selectedBookInCart.amount);
        default:
            return state;
    }
};