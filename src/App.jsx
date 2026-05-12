import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem('veloreCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('veloreCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-velore-cream">
        <Header cartItemsCount={cartItemsCount} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedProducts />
              <AboutSection />
              <ReviewsSection />
              <NewsletterSection />
              <Footer />
            </>
          } />
          
          {/* Add other routes as needed */}
          <Route path="/shop" element={
            <>
              <div className="py-20">
                <div className="container mx-auto px-4">
                  <h1 className="text-4xl font-playfair font-bold text-center mb-8">Shop All Products</h1>
                  <FeaturedProducts />
                </div>
              </div>
              <Footer />
            </>
          } />
          
          <Route path="/about" element={
            <>
              <div className="py-20">
                <div className="container mx-auto px-4">
                  <AboutSection />
                </div>
              </div>
              <Footer />
            </>
          } />
          
          <Route path="/collections" element={
            <>
              <div className="py-20">
                <div className="container mx-auto px-4">
                  <h1 className="text-4xl font-playfair font-bold text-center mb-8">Our Collections</h1>
                  <FeaturedProducts />
                </div>
              </div>
              <Footer />
            </>
          } />
          
          <Route path="/contact" element={
            <>
              <div className="py-20">
                <div className="container mx-auto px-4">
                  <h1 className="text-4xl font-playfair font-bold text-center mb-8">Contact Us</h1>
                  <div className="max-w-2xl mx-auto text-center">
                    <p className="text-lg mb-8">Get in touch with us for any inquiries about our luxury fragrances.</p>
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <p>Email: support@veloreparis.com</p>
                      <p>Phone: +91 9640680142</p>
                      <p>Location: Hyderabad, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </>
          } />
          
          <Route path="/cart" element={
            <>
              <div className="py-20">
                <div className="container mx-auto px-4">
                  <h1 className="text-4xl font-playfair font-bold text-center mb-8">Shopping Cart</h1>
                  {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-xl text-gray-600">Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="max-w-4xl mx-auto">
                      {cartItems.map(item => (
                        <div key={item.id} className="bg-white rounded-lg p-6 mb-4 shadow-md">
                          <h3>{item.name}</h3>
                          <p>₹{item.price} x {item.quantity}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App
