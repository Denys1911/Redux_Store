import {updateBooksList} from "./updateBooksList";
import {updateShoppingCart} from "./updateShoppingCart";

export const reducer = (state, action) => {
    return {
        booksList: updateBooksList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
};