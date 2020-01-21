import { CartConstants } from '../constants/CartConstants';
import concat from 'unique-concat';

export const cart = (state = {items: []}, action) => {
	switch (action.type) {
		case CartConstants.ADD_TO_CART:
			return {
				...state,
				items: concat(state.items, [{product: action.product, quantity: 1}], (item) => item.product.id)
			};
		case CartConstants.REMOVE_FROM_CART:
			const items = [];
			state.items.forEach(item => {
				if (item.product.id !== action.product.id) {
					items.push(item);
				}
			});
			return {
				...state,
				items
			};
		case CartConstants.CHANGE_QUANTITY:
			return {
				...state,
				items: state.items.map(item => 
					item.product.id === action.product.id ?
					{product: action.product, quantity: action.quantity} :
					item
				)
			};
		case CartConstants.EMPTY_CART:
			return{
				...state,
				items: []
			};

		default:
			return state;
	}
}