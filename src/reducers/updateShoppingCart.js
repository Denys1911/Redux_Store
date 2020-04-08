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

const calculateOrderTotalPrice = cartItems => {
    return cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.totalPrice, 0)
};

const updateOrder = (state, bookId, quantity) => {
    const {booksList: {books}, shoppingCart: {cartItems}} = state;
    const selectedBook = books.find(book => book.id === bookId);
    const selectedBookInCart = cartItems.find(item => item.id === bookId);
    const newCartItem = createCartItem(selectedBook, selectedBookInCart, quantity);
    const newCartItems = createCartItems(selectedBookInCart, cartItems, newCartItem, bookId);
    const orderTotalPrice = calculateOrderTotalPrice(newCartItems);

    return {
        cartItems: newCartItems,
        orderTotalPrice,
        cartItemsAmount: newCartItems.length
    };
};

export const updateShoppingCart = (state, {type, payload}) => {
    if (!state) {
        return {
            cartItems: [],
            orderTotalPrice: 0,
            cartItemsAmount: 0
        }
    }

    switch (type) {
        case 'ADD_BOOK_TO_CART':
            return updateOrder(state, payload, 1);
        case 'REMOVE_BOOK_FROM_CART':
            return updateOrder(state, payload, -1);
        case 'REMOVE_ALL_BOOKS_FROM_CART':
            const selectedBookInCart = state.shoppingCart.cartItems.find(item => item.id === payload);

            return updateOrder(state, payload, -selectedBookInCart.amount);
        default:
            return state.shoppingCart
    }
};