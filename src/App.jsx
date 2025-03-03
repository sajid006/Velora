import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductDetails from './pages/product-details';
import Products from './pages/products';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import OrderHistory from './pages/order-history';
import Profile from './pages/profile';
import Wishlist from './pages/wishlist';
import Signup from './pages/signup';
import Login from './pages/login';
import NotFound from './pages/not-found';
import Categories from './pages/categories'
import ProductSearch from './pages/product-search';
import OneCategory from './pages/one-category';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/product-search" element={<ProductSearch />}/>
        {/* <Route path="/about-us" element={<AboutUs />}/> */}
        {/* <Route path="/career" element={<Career />}/> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<OneCategory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;