import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

// Pages
import ShopPage from './pages/ShopPage';
import CollectionsPage from './pages/CollectionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import ProductDetail from './pages/ProductDetail';

import './App.css';

function HomePage({ cartItems, addToCart }) {
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <Hero />
      <FeaturedProducts addToCart={addToCart} />
      <AboutSection />
      <ReviewsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('veloreCart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        setCartItems([]);
      }
    }
  }, []);

  useEffect(() => {
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

  const sharedProps = { cartItems, addToCart, removeFromCart, updateQuantity };

  return (
    <Router>
      <div className="min-h-screen bg-[#050505]">
        <Routes>
          <Route path="/" element={<HomePage {...sharedProps} />} />
          <Route path="/shop" element={<ShopPage {...sharedProps} />} />
          <Route path="/collections" element={<CollectionsPage {...sharedProps} />} />
          <Route path="/about" element={<AboutPage {...sharedProps} />} />
          <Route path="/contact" element={<ContactPage {...sharedProps} />} />
          <Route path="/cart" element={<CartPage {...sharedProps} />} />
          <Route path="/product/:id" element={<ProductDetail {...sharedProps} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
