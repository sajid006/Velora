import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { apiUrl } from '../utils/constants';

const Checkout = () => {
  const [cartItems, setCartItems] = useState(null);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const userToken = localStorage.getItem("user");
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

  const totalPrice = cartItems ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0) : 0;

  return (
    <div className="bg-gray-100 flex items-center justify-center mt-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <div className="space-y-4">
          {cartItems && cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="text-lg font-bold">${item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-4">
          <h3 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
        </div>

        <button
          className="mt-6 w-full bg-blue-500 border-none text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;