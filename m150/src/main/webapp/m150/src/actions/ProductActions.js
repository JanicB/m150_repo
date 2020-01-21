import { ProductConstants } from '../constants/ProductConstants';
import axios from 'axios'

export const getAll = () => {
	return (dispatch) => {
		dispatch({type: ProductConstants.GET_ALL_REQUEST});
		axios.get('/api/products/')
			.then(response => {
				if(response.status !== 200) {
					return Promise.reject(response.statusText);
				}
				return response;
			})
			.then(
				response => {
					dispatch({type: ProductConstants.GET_ALL_SUCCESS, products: response.data})
				},
				error => {
					dispatch({type:ProductConstants.GET_ALL_FAILURE, error})
				}
			);
	}
}

export const getById = (id) => {
	return (dispatch) => {
		dispatch({type: ProductConstants.GET_BY_ID_REQUEST, id});
		axios.get('/api/products/' + id)
			.then(response => {
				if(response.status !== 200) {
					return Promise.reject(response.statusText);
				}
				return response;
			})
			.then(
				response => {
					dispatch({type: ProductConstants.GET_BY_ID_SUCCESS, product: response.data, id})
				},
				error => {
					dispatch({type:ProductConstants.GET_BY_ID_FAILURE, error, id})
				}
			);
	}
}

export const ProductActions = {
	getAll,
	getById
}