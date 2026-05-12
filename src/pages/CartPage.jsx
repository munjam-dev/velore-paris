import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage = ({ cartItems, addToCart, removeFromCart, updateQuantity }) => {
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <main className="min-h-screen bg-[#050505]">
        {/* Header */}
        <section className="bg-velore-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-2">Shopping Cart</h1>
              <p className="text-gray-300">{cartItemsCount} item{cartItemsCount !== 1 ? 's' : ''} in your cart</p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {cartItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-24"
              >
                <div className="text-8xl mb-6">🛒</div>
                <h2 className="text-3xl font-playfair font-bold text-velore-dark mb-4">Your Cart is Empty</h2>
                <p className="text-gray-600 mb-8 text-lg">Discover our luxury fragrances and add your favourites.</p>
                <Link to="/shop" className="btn-primary text-lg">Browse Collection</Link>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  <AnimatePresence>
                    {cartItems.map(item => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-2xl p-5 shadow-sm flex gap-5"
                      >
                        {/* Image */}
                        <Link to={`/product/${item.id}`} className="shrink-0">
                          <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md">
                            <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                          </div>
                        </Link>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-xs text-gray-500 mb-0.5">{item.category}</p>
                              <Link to={`/product/${item.id}`}>
                                <h3 className="font-playfair font-semibold text-velore-dark text-lg hover:text-velore-gold transition-colors">
                                  {item.name}
                                </h3>
                              </Link>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors ml-4 text-xl leading-none"
                              title="Remove item"
                            >
                              ×
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-3">
                            {/* Quantity */}
                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1.5 hover:bg-gray-100 transition-colors font-semibold"
                              >−</button>
                              <span className="px-4 py-1.5 font-semibold border-x border-gray-200">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1.5 hover:bg-gray-100 transition-colors font-semibold"
                              >+</button>
                            </div>
                            {/* Price */}
                            <div className="text-right">
                              <p className="font-bold text-velore-dark text-lg">₹{(item.price * item.quantity).toLocaleString()}</p>
                              {item.quantity > 1 && (
                                <p className="text-xs text-gray-400">₹{item.price.toLocaleString()} each</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Continue Shopping */}
                  <Link to="/shop" className="flex items-center space-x-2 text-velore-gold font-semibold hover:underline mt-4 text-sm">
                    <span>←</span>
                    <span>Continue Shopping</span>
                  </Link>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl p-6 shadow-sm sticky top-24"
                  >
                    <h2 className="font-playfair font-bold text-velore-dark text-2xl mb-6">Order Summary</h2>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal ({cartItemsCount} items)</span>
                        <span>₹{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
                          {shipping === 0 ? 'FREE' : `₹${shipping}`}
                        </span>
                      </div>
                      {shipping > 0 && (
                        <p className="text-xs text-gray-400 italic">Add ₹{(999 - subtotal).toLocaleString()} more for free shipping</p>
                      )}
                      <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-bold text-velore-dark text-lg">
                        <span>Total</span>
                        <span>₹{total.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Promo Code */}
                    <div className="mt-5">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Promo code"
                          className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-velore-gold transition-colors"
                        />
                        <button className="px-4 py-2.5 border-2 border-velore-gold text-velore-gold rounded-xl text-sm font-semibold hover:bg-velore-gold hover:text-white transition-all duration-300">
                          Apply
                        </button>
                      </div>
                    </div>

                    <button className="w-full mt-6 bg-velore-gold text-white py-4 rounded-xl font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]">
                      Proceed to Checkout
                    </button>

                    {/* Trust Badges */}
                    <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-gray-500">
                      <div>
                        <div className="text-2xl mb-1">🔒</div>
                        <p>Secure Payment</p>
                      </div>
                      <div>
                        <div className="text-2xl mb-1">🚚</div>
                        <p>Fast Delivery</p>
                      </div>
                      <div>
                        <div className="text-2xl mb-1">↩️</div>
                        <p>Easy Returns</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
