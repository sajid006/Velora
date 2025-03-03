import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen flex items-center justify-center my-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white p-12 rounded-2xl shadow-2xl max-w-4xl text-center mx-4"
      >
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Welcome to Velora</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          At <span className="text-purple-500 font-bold">Velora</span>, we believe shopping should be more than just a transaction — it should be an experience. 
          Our mission is to bring you the highest quality products with a seamless and joyful shopping journey. 
          We’re here to revolutionize e-commerce, one satisfied customer at a time.
        </p>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg cursor-pointer hover:bg-blue-600"
          onClick={() => navigate('/products')}
        >
          Explore Our Products
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">To become the world’s most customer-centric e-commerce platform, where quality meets convenience.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li>🌟 Excellence</li>
              <li>💡 Innovation</li>
              <li>❤️ Customer Commitment</li>
              <li>🌍 Sustainability</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600">Founded with passion and driven by purpose, Velora started as a dream to make shopping more meaningful. Today, we’re a growing community of creators, innovators, and dreamers.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;