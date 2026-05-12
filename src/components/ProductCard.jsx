import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageHover = () => {
    if (!isHovered && product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleImageLeave = () => {
    setCurrentImageIndex(0);
    setIsHovered(false);
  };

  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
    console.log('Added to cart:', product.name);
  };

  const addToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to wishlist logic here
    console.log('Added to wishlist:', product.name);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="product-card group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          {/* Product Images */}
          <div 
            className="relative h-80 bg-gray-100"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageLeave}
            onMouseOver={() => setIsHovered(true)}
          >
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay with actions */}
            <div className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 flex items-center justify-center space-x-4">
                <button
                  onClick={addToCart}
                  className="bg-white text-velore-dark p-3 rounded-full hover:bg-velore-gold hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  🛒
                </button>
                <button
                  onClick={addToWishlist}
                  className="bg-white text-velore-dark p-3 rounded-full hover:bg-velore-gold hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  ❤️
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="bg-white text-velore-dark p-3 rounded-full hover:bg-velore-gold hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  👁️
                </Link>
              </div>
            </div>
            
            {/* Badge */}
            {product.rating >= 4.8 && (
              <div className="absolute top-4 left-4 bg-velore-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                Bestseller
              </div>
            )}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-6">
          <div className="mb-2">
            <span className="text-sm text-gray-600 font-medium">{product.category}</span>
          </div>
          
          <h3 className="text-xl font-playfair font-semibold text-velore-dark mb-3 group-hover:text-velore-gold transition-colors duration-300">
            {product.name}
          </h3>
          
          <p className="text-gray-700 text-sm mb-4 line-clamp-2">
            {product.shortDescription}
          </p>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
          </div>
          
          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-velore-dark">₹{product.price}</span>
              <span className="text-sm text-gray-500 line-through ml-2">₹{Math.floor(product.price * 1.3)}</span>
            </div>
            
            <button
              onClick={addToCart}
              className="bg-velore-gold text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
