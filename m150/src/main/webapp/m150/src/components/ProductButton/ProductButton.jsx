import React from 'react';

import './style.scss';

export const ProductButton = (props) => (
	<div onClick={props.addToCart} className="product-button">
		<img className="product-button--image" src={props.product.picture} alt={props.product.name} />
		<div className="product-button--info--container">
			<div className="product-button--info">
				<div className="product-button--name">{props.product.name}</div>
				<div className="product-button--price">{'CHF ' + props.product.price.toFixed(2)}</div>
			</div>
		</div>
	</div>
)