import React from 'react';
import { Link } from 'react-router-dom';
import NumericInput from 'react-numeric-input';

import './style.scss';

export const CartListButton = (props) => {
	return (
		<div className="cart--list-button">
			<div className="cart--list-button--img-container">
				<img className="cart--list-button--img" 
					src={props.product.picture} 
					alt={props.product.name} 
				/>
			</div>
			<div className="cart--list-button--right">
				<div className="cart--list-button--remove" onClick={props.onRemove}>
					<i className="fas fa-times"></i>
				</div>
				<div className="cart--list-button--bottom">
					<Link to={'/' + props.product.id} 
						className="cart--list-button--name"
					>
						{props.product.name}
					</Link>
					<NumericInput className="cart--list-button--quantity" min={1} max={99} value={props.quantity} onChange={props.onQuantityChange} />
					<span className="cart--list-button--price">
						{' CHF ' + props.product.price.toFixed(2)}
					</span>
				</div>
			</div>
		</div>
	)
}