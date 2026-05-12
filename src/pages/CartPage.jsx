import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage = ({ cartItems, addToCart, removeFromCart, updateQuantity }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 999 ? 0 : 150;
  const total = subtotal + shipping;
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <main style={{ minHeight: '100vh', backgroundColor: '#050505', paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="velore-container">
          
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>Your Shopping Bag</h1>
          
          {cartItems.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', padding: '6rem 0', background: '#0a0a0a', border: '1px dashed rgba(212,175,55,0.3)', marginTop: '2rem' }}>
              <div style={{ fontSize: 48, marginBottom: '1rem', opacity: 0.5 }}>🛍️</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: '#fff', marginBottom: '1rem' }}>Your bag is empty</h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>Discover our collection of rare and exclusive fragrances.</p>
              <Link to="/shop" style={{ textDecoration: 'none' }}>
                <button className="btn-gold">Explore Collection</button>
              </Link>
            </motion.div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginTop: '2rem' }}>
              {/* Wrapping grid to allow sidebar if screen is large, but using flex wrap is safer for inline */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'flex-start' }}>
                
                {/* Cart Items */}
                <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.15)', alignItems: 'center', flexWrap: 'wrap' }}
                      >
                        {/* Image */}
                        <Link to={`/product/${item.id}`} style={{ width: 100, height: 100, flexShrink: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <img src={item.images[0]} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Link>

                        {/* Info */}
                        <div style={{ flex: 1, minWidth: 200 }}>
                          <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{item.name}</h3>
                          </Link>
                          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{item.category}</p>
                          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, color: '#ffffff' }}>₹{item.price.toLocaleString()}</p>
                        </div>

                        {/* Controls */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(212,175,55,0.3)', background: '#050505' }}>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '0.5rem 0.8rem', background: 'transparent', border: 'none', color: '#D4AF37', cursor: 'pointer' }}>−</button>
                            <span style={{ padding: '0 0.8rem', fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#fff', borderLeft: '1px solid rgba(212,175,55,0.3)', borderRight: '1px solid rgba(212,175,55,0.3)', minWidth: 36, textAlign: 'center' }}>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '0.5rem 0.8rem', background: 'transparent', border: 'none', color: '#D4AF37', cursor: 'pointer' }}>+</button>
                          </div>
                          
                          <button onClick={() => removeFromCart(item.id)} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#ef4444'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                            <svg style={{ width: 20, height: 20 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Order Summary */}
                <div style={{ flex: '1 1 30%', minWidth: 300 }}>
                  <div style={{ background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.2)', padding: '2rem', position: 'sticky', top: '100px' }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: '2rem', borderBottom: '1px solid rgba(212,175,55,0.2)', paddingBottom: '1rem' }}>Order Summary</h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                        <span>Subtotal ({cartItemsCount} items)</span>
                        <span>₹{subtotal.toLocaleString()}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                        <span>Express Shipping</span>
                        <span style={{ color: shipping === 0 ? '#22c55e' : 'inherit' }}>
                          {shipping === 0 ? 'Free' : `₹${shipping}`}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(212,175,55,0.2)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#fff' }}>Total</span>
                      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#D4AF37' }}>₹{total.toLocaleString()}</span>
                    </div>

                    <button style={{ width: '100%', padding: '1.2rem', background: 'linear-gradient(135deg, #D4AF37, #F5E27B, #D4AF37)', backgroundSize: '200% 100%', color: '#000', border: 'none', fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.backgroundPosition = 'right center'} onMouseLeave={e => e.currentTarget.style.backgroundPosition = 'left center'}>
                      Proceed to Checkout
                    </button>

                    <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'rgba(255,255,255,0.4)', fontFamily: "'Montserrat', sans-serif", fontSize: 11 }}>
                      <svg style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      <span>Secure Checkout</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
