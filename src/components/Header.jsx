import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-velore-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-velore-dark">VELORÉ PARIS</h1>
              <p className="text-xs text-gray-600 italic">Wear the Scent of Confidence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-velore-dark hover:text-velore-gold transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-velore-dark hover:text-velore-gold transition-colors duration-300 font-medium">
              Shop
            </Link>
            <Link to="/collections" className="text-velore-dark hover:text-velore-gold transition-colors duration-300 font-medium">
              Collections
            </Link>
            <Link to="/about" className="text-velore-dark hover:text-velore-gold transition-colors duration-300 font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-velore-dark hover:text-velore-gold transition-colors duration-300 font-medium">
              Contact
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-velore-dark hover:text-velore-gold transition-colors duration-300"
            >
              🔍
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative text-velore-dark hover:text-velore-gold transition-colors duration-300">
              🛒
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-velore-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-velore-dark hover:text-velore-gold transition-colors duration-300"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for fragrances..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-velore-gold"
              />
              <span className="absolute right-3 top-3 text-gray-400">🔍</span>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-velore-dark hover:text-velore-gold transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-velore-dark hover:text-velore-gold transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/collections" 
                className="text-velore-dark hover:text-velore-gold transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link 
                to="/about" 
                className="text-velore-dark hover:text-velore-gold transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-velore-dark hover:text-velore-gold transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
