import React, { Component } from 'react';

export default class Cart extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			address: '',
		};
		this.handleInput = this.handleInput.bind(this);
	}
	handleInput(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	handleSubmit(event) {
		event.preventDefault();
		const order = {
			name: this.state.name,
			email: this.state.email,
			address: this.state.address,
		};
	}
	render() {
		return (
			<div className="ui grid container">
				<h1>Checkout</h1>
				<form onSubmit={() => null}>
					<ul className="form-container">
						<li>
							<label>Email</label>
							<input
								name="email"
								type="email"
								required
								onChange={this.handleInput}></input>
						</li>
						<li>
							<label>Name</label>
							<input
								name="name"
								type="text"
								required
								onChange={this.handleInput}></input>
						</li>
						<li>
							<label>Address</label>
							<input
								name="address"
								type="text"
								required
								onChange={this.handleInput}></input>
						</li>
                        <main>
						<li>
							<button type="submit" onSubmit={this.handleSubmit}>
								Submit
							</button>
						</li>
                        </main>
					</ul>
				</form>
			</div>
		);
	}
}
