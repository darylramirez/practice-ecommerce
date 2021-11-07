import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
	constructor() {
		super();
		this.removeFromCart = this.removeFromCart.bind(this);
	}
	removeFromCart() {
		localStorage.setItem('cartItems', JSON.stringify());
	}

	render() {
		return (
			<div className="ui grid container">
				<div className="middle aligned row">
					<div className="column lp">
						<div className="column rp">
							<button onClick={(productId) => this.removeFromCart(productId)}>
								Remove
							</button>
                            <Link exact to={'/product/cart/checkout'}>
							<button>Checkout</button>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
