import { CartConstants } from '../constants/CartConstants';

export const addToCart = (product) => (
    {
        type: CartConstants.ADD_TO_CART, 
        product
    }
)

export const removeFromCart = (product) => (
    {
        type: CartConstants.REMOVE_FROM_CART,
        product
    }
)

export const changeQuantity = (product, quantity) => {
    if (quantity >= 1) {
        return {
            type: CartConstants.CHANGE_QUANTITY,
            product,
            quantity
        }
    }
}

export const emptyCart = () => (
    {
        type: CartConstants.EMPTY_CART
    }
)

export const CartActions = {
    addToCart,
    removeFromCart,
    changeQuantity,
    emptyCart
}