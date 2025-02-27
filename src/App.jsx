import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductDetails from './pages/product-details';
import ProductListing from './pages/product-listing';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import OrderHistory from './pages/order-history';
import User from './pages/user';
import Wishlist from './pages/wishlist';
import Signup from './pages/signup';
import Login from './pages/login';
import NotFound from './pages/not-found';
import Categories from './pages/categories'
import ProductSearch from './pages/product-search';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/product-search" element={<ProductSearch />}/>
        {/* <Route path="/about-us" element={<AboutUs />}/> */}
        {/* <Route path="/career" element={<Career />}/> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/profile" element={<User />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;