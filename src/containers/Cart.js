import React, { Component } from 'react';

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
						</div>
					</div>
				</div>
			</div>
		);
	}
}
