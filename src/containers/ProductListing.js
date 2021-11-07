import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { fetchProducts } from '../redux/actions/productActions';
import Filter from './Filters';
import Cart from './Cart';

const ProductListing = () => {
	const products = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
	return (
		<div>
			<div className="filter">
				<div>
					<Filter />
				</div>
			</div>
			<div className="ui grid container">
				<ProductComponent />
			</div>
		</div>
	);
};

export default ProductListing;
