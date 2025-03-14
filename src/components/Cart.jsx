import React, {useState, useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../utils/constants";
import Card from "./Card";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [search, setSearch] = useState('');
    const [sortCriteria, setSortCriteria] = useState('price');
    const currentUser = useSelector((state) => state.auth.currentUser);
    const userToken = localStorage.getItem("user");
    const navigate = useNavigate();
    console.log(currentUser, userToken);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`${apiUrl}/carts/${currentUser}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        console.log(response);
        setCartItems(response.data);
      }
      fetchData();
  }, [currentUser]);

    const moveToWishList = async (id) => {
        const response = await axios.post(`${apiUrl}/wishlists/${currentUser}`, {productId: id}, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        console.log(response);
        if(response.status === 201){
            const response = await axios.delete(`${apiUrl}/carts/${currentUser}/${id}`, {
                headers: {
                  Authorization: `Bearer ${userToken}`,
                },
              });
              console.log(response);
              if(response.status === 204){
                alert('Product moved to wishlist');
                  setCartItems(cartItems.filter((product) => product.id !== id));
              } else {
                alert('Error moving product to wishlist');
              }
            alert('Product moved to wishlist');
        } else {
            alert('Error moving product to wishlist');
        }
    };
    const removeFromCart = async (id) => {
        const response = await axios.delete(`${apiUrl}/carts/${currentUser}/${id}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        console.log(response);
        if(response.status === 204){
            alert('Product removed from cart');
            setCartItems(cartItems.filter((product) => product.id !== id));
        } else {
            alert('Error removing product from cart');
        }
    }

    const filteredCart = search ? cartItems.filter(product =>product.name.toLowerCase().includes(search.toLowerCase())) : cartItems;
  
    const sortProducts = (products) => {
        switch (sortCriteria) {
          case 'price':
            return [...products].sort((a, b) => a.price - b.price);
          case 'rating':
            return [...products].sort((a, b) => b.rating - a.rating);
          case 'new':
            return [...products].sort((a, b) => new Date(b.date) - new Date(a.date));
          default:
            return products;
        }
      };
      const sortedCart = sortProducts(filteredCart);
      const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
      };
      return (
        <div className="p-4 bg-gradient-to-r from-green-100 to-blue-200">
          <div className="text-center mb-4"><h2>Cart</h2></div>
          <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 mb-4 mr-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex justify-between items-center mb-4">
            <label htmlFor="sort" className="mx-2">Sort by:</label>
            <select
              id="sort"
              value={sortCriteria}
              onChange={handleSortChange}
              className="p-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="new">New Arrivals</option>
            </select>
          </div>
    
          </div>
          <div className="grid grid-cols-4 gap-4">
            {sortedCart.map((product) => (
              <Card key={product.id} className="bg-white p-4 rounded-2xl shadow-md">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h2 className="text-lg font-bold mt-2">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
                <p className="text-yellow-500">Rating: {product.rating}</p>
                <p>Added: {product.date}</p>
                <p>Quantity: {product.quantity}</p>
                <a href="#" className="text-blue-500 hover:underline">View Details</a>
                <div className="flex justify-between">
                  <button onClick={() => moveToWishList(product.productId)} className="bg-blue-500 border-none text-white p-2 rounded-lg mr-1">Move to wishlist</button>
                  <button onClick={() => removeFromCart(product.id)} className="bg-red-500 text-white p-2 rounded-lg">Remove from Cart</button> 
                  </div>
              </Card>
            ))}
          </div>
          <button onClick={() => navigate('/checkout')} className="bg-blue-500 border-none text-white p-2 rounded-lg mr-1">Proceed to checkout</button>
                  
        </div>
      );
};

export default Cart;
