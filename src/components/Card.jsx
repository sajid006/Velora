import React, { useState } from 'react';

const Card = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transition-transform duration-300 transform ${
        isHovered ? 'scale-105 shadow-2xl' : 'scale-100 shadow-md'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-lg p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;