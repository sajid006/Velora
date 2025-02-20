import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './velora-e-commerce/home';
import ProductDetails from './velora-e-commerce/product-details';
import ProductListing from './velora-e-commerce/product-listing';
import Cart from './velora-e-commerce/cart';
import Checkout from './velora-e-commerce/checkout';
import OrderHistory from './velora-e-commerce/order-history';
import User from './velora-e-commerce/user';
import Wishlist from './velora-e-commerce/wishlist';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/user" element={<User />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;