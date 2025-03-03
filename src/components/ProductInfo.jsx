import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { apiUrl } from '../utils/constants';
import { useSelector } from 'react-redux';

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const currentUser = useSelector(state => state.auth.currentUser);
  const userToken = localStorage.getItem('user') || null;
  const addToCart = async () => {
    const response = await axios.post(`${apiUrl}/carts/${currentUser}`, {productId: id, quantity: 1}, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    console.log(response);
    if(response.status === 201){
        alert('Product added to cart');
    } else {
        alert('Error adding product to cart');
    }
};
const addToWishlist = async () => {
  const response = await axios.post(`${apiUrl}/wishlists/${currentUser}`, {productId: id}, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  console.log(response);
  if(response.status === 201){
      alert('Product added to wishlist');
  } else {
      alert('Error adding product to wishlist');
  }
};
  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await axios.get(`${apiUrl}/products/${id}`);
        console.log(value);
        if(value.data){
          setProduct(value.data);
        }
      }
      catch(e){
        console.error(e);
      }
    }
    fetchData();
  },[]);

  return product ? 
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <div className="flex justify-center items-center mb-4">
            <span className="text-lg text-gray-700">${product.price}</span>
            <span className="ml-4 text-yellow-500 flex items-center">
              {[...Array(product.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="ml-2 text-gray-600">({product.reviews_count} reviews)</span>
            </span>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {/* {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))} */}
            </ul>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => addToCart(product)}
              className="py-2 px-4 bg-blue-500 text-white rounded-lg flex items-center hover:bg-blue-600"
            >
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className="py-2 px-4 bg-pink-500 text-white rounded-lg flex items-center hover:bg-pink-600"
            >
              <FaHeart className="mr-2" /> Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Reviews</h2>
        {product.reviews && product.reviews.length > 0 ? (
          <ul className="space-y-6">
            {product.reviews.map((review, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">{review.user}</h4>
                <div className="flex items-center text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No reviews yet.</p>
        )}
      </div>
    </div> : <p className="my-12 text-lg font-[500]">Product not available.</p>;
};

export default ProductInfo;