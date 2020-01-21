import React from 'react';
import { connect } from 'react-redux';
import { getAll as getAllProducts } from '../../actions/ProductActions';
import { ProductButton } from '../ProductButton/ProductButton';
import { addToCart } from '../../actions/CartActions';

import './style.scss';

class ProductList extends React.Component {

	componentDidMount() {
		this.props.getProducts();
	}

	renderProductButton = (product) => (
		<ProductButton addToCart={() => this.props.addToCart(product)} product={product} key={product.id} />
	)

	render() {
		if(this.props.isLoading) {
			return (
				<div className="product-list--container">
					<span className="loading">Loading...</span>
				</div>
			);
		} else {
			const products = this.props.products;
			return (
				<div className="product-list--container">
					<div className="product-list">
						{products.map(product => this.renderProductButton(product))}
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => (
	{
		products: state.products.items,
		isLoading: state.products.isLoading
	}
)

const mapDispatchToProps = (dispatch) => (
	{
		getProducts: () => dispatch(getAllProducts()),
		addToCart: (product) => dispatch(addToCart(product))
	}
)

const connectedProductList = connect(mapStateToProps, mapDispatchToProps)(ProductList);
export { connectedProductList as ProductList };