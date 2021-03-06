import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Cart from './containers/Cart';
import Checkout from './containers/Checkout';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" exact element={<ProductListing />} />
					<Route path="/product/:productId" exact element={<ProductDetail />} />
					<Route path="/product/cart" exact element={<Cart />} />
					<Route path="/product/cart/checkout" exact element={<Checkout />} />
					<Route>404 Not Found!</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
