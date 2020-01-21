import React from 'react';
import { connect } from 'react-redux';
import { CartActions } from '../../actions/CartActions';
import { CartListButton } from '../CartListButton/CartListButton';

import './style.scss';

class Cart extends React.Component {

    calculateTotal = () => {
        let total = 0;
        this.props.items.forEach(item => {
            total += item.product.price * item.quantity;
        });
        return total.toFixed(2);
    }

    renderListButton = (item) => {
        return (
            <CartListButton 
                product={item.product}
                quantity={item.quantity}
                onRemove={() => this.props.removeFromCart(item.product)}
                onQuantityChange={(quantity) => this.props.changeQuantity(item.product, quantity)}
            />
        )
    }

    render() {
        return (
            <div className="cart">
                <h1 className="cart--title">CART</h1>
                <div className="cart--list">
                    {
                        this.props.items.length ?
                        this.props.items.map((item) => this.renderListButton(item)) :
                        (<span>No products in cart...</span>)
                    }
                </div>
                <div className="cart--total">{'CHF ' + this.calculateTotal()}</div>
                <div className="cart--checkout" onClick={this.props.checkout}>Checkout</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        items: state.cart.items
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        removeFromCart: (product) => dispatch(CartActions.removeFromCart(product)),
        changeQuantity: (product, quantity) => dispatch(CartActions.changeQuantity(product, quantity)),
        checkout: () => dispatch(CartActions.emptyCart())
    }
)

const connectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);
export { connectedCart as Cart };