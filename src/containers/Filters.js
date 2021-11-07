import React from 'react';
// import { renderMatches } from 'react-router';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Filter = () => {
	const [state, setState] = React.useState({ price: '', category: '' });
	const products = useSelector((state) => state);
	const product = useSelector((state) => state.product);
	const { price, category } = product;

	const filterProducts = (event) => {
		if (event.target.value === '') {
			setState({ ...state, category: products.allProducts.products.category });
		} else {
			setState({
				...state,
				products: products.allProducts.products.filter(
					(product) => product.category.indexOf(event.target.value) >= 0
				),
			});
		}
	};

	const sortProducts = (event) => {
		if (event.target.value === '') {
			console.log('in the if');
			setState({ ...state, price: products.allProducts.products.price });
		} else {
			let sort = event.target.value;
			setState({
				...state,
				products: products.allProducts.products
					.slice()
					.sort((a, b) =>
						sort === 'lowest'
							? a.price > b.price
								? 1
								: -1
							: sort === 'highest'
							? a.price < b.price
								? 1
								: -1
							: a.id > b.id
							? 1
							: -1
					),
			});
		}
	};

	return (
		<div className="filter">
			<div>{products.allProducts.products.length} Products</div>
			<div>
				<div>
					Order{' '}
					<select value={price} onChange={(event) => sortProducts(event)}>
						<option value="lowest">Lowest Price</option>
						<option value="highest">Highest Price</option>
					</select>
				</div>
			</div>
			<div>
				<div>
					Filter{' '}
					<select value={category} onChange={(event) => filterProducts(event)}>
						<option value="">ALL</option>
						<option value="men's clothing">Men's Clothing</option>
						<option value="women's clothing">Women's Clothing</option>
						<option value="jewelry">Jewelry</option>
						<option value="electronics">Electronics</option>
					</select>
				</div>
			</div>
			<div>
				<Link to={'/product/cart'}>
					<div>
						<i className="shop icon"></i>
					</div>
					<div className="visible content">Cart</div>
				</Link>
			</div>
		</div>
	);
};

export default Filter;
