import React from 'react';
import { Cart } from '../Cart/Cart';

import './style.scss';

export class CartButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				isExpanded: false
		}
	}

	onClick = () => {
		this.setState({isExpanded: !this.state.isExpanded});
	}

	render() {
		const isExpanded = this.state.isExpanded;
		return (
			<div className="cart--container">
				<div className="cart--button" onClick={this.onClick}>
					{
						!isExpanded ? 
						(<i className="fas fa-shopping-cart"></i>) :
						(<i className="fas fa-times"></i>)
				}
			</div>
			{
				isExpanded ?
				(<Cart />) :
				null
				}
			</div>
		)
	}
}