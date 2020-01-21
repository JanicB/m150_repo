import { ProductConstants } from '../constants/ProductConstants';
import concat from 'unique-concat';

export const products = (state = {items: [], isLoading: true, error: false}, action) => {
	switch (action.type) {
		case ProductConstants.GET_ALL_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case ProductConstants.GET_ALL_SUCCESS:
			return {
				...state,
				items: action.products,
				isLoading: false
			};
		case ProductConstants.GET_ALL_FAILURE:
			return {
				...state,
				error: action.error,
				isLoading: false
			};
		
		case ProductConstants.GET_BY_ID_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case ProductConstants.GET_BY_ID_SUCCESS:
			return {
				...state,
				items: concat(state.items, [action.product], product => product.id),
				isLoading: false
			};

		case ProductConstants.GET_BY_ID_FAILURE:
			return {
				...state,
				error: action.error,
				isLoading: false
			};
		
		default:
			return state;
	}
}