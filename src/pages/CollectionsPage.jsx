import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const COLLECTIONS = [
  {
    name: 'Oriental Nights',
    description: 'Bold, warm and mysterious — for those who command attention.',
    icon: '🌙',
    products: products.filter(p => p.category.includes('Oriental') || p.category.includes('Unisex')),
  },
  {
    name: 'Floral Dreams',
    description: 'Soft, romantic and elegant — femininity in every drop.',
    icon: '🌸',
    products: products.filter(p => p.category.includes('Floral')),
  },
  {
    name: 'Ocean Fresh',
    description: 'Clean, crisp and invigorating — the spirit of the coast.',
    icon: '🌊',
    products: products.filter(p => p.category.includes('Aquatic')),
  },
];

const CollectionsPage = ({ cartItems, addToCart }) => {
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <main style={{ minHeight: '100vh', backgroundColor: '#050505', paddingBottom: '6rem' }}>
        
        {/* Hero */}
        <section style={{ position: 'relative', backgroundColor: '#0a0a0a', padding: '6rem 0', overflow: 'hidden', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: 40, left: 40, width: 200, height: 200, border: '1px solid #D4AF37', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: -40, right: -40, width: 350, height: 350, border: '1px solid #D4AF37', borderRadius: '50%' }} />
          </div>
          <div className="velore-container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: 16 }}>Curated for You</p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#ffffff', marginBottom: 20 }}>Our Collections</h1>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
                Each collection tells a unique story — explore the world of VELORÉ PARIS.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Collections */}
        <section style={{ padding: '6rem 0' }}>
          <div className="velore-container" style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {COLLECTIONS.map((collection, idx) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Collection Header */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: idx % 2 === 0 ? 'flex-start' : 'flex-end', marginBottom: '3rem', textAlign: idx % 2 === 0 ? 'left' : 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 12, flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}>
                    <span style={{ fontSize: 40 }}>{collection.icon}</span>
                    <div>
                      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#ffffff' }}>{collection.name}</h2>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{collection.description}</p>
                    </div>
                  </div>
                  <div style={{ width: 80, height: 1, backgroundColor: '#D4AF37' }} />
                </div>

                {/* Products in Collection */}
                {collection.products.length > 0 ? (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {collection.products.map((product, pIdx) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        style={{ background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.1)', overflow: 'hidden', transition: 'border-color 0.3s' }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.1)'}
                      >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                          <div style={{ position: 'relative', height: 280, overflow: 'hidden', backgroundColor: '#050505' }}>
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', pointerEvents: 'none' }} />
                            
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', zIndex: 1 }}>
                              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, color: '#D4AF37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6 }}>{product.category}</p>
                              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#ffffff' }}>{product.name}</h3>
                            </div>
                          </div>
                          
                          <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                              <div style={{ display: 'flex', color: '#D4AF37', fontSize: 12, marginBottom: 4 }}>
                                {'★'.repeat(Math.floor(product.rating))}
                                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.4)', marginLeft: 6 }}>({product.reviews})</span>
                              </div>
                              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#ffffff' }}>₹{product.price.toLocaleString()}</span>
                            </div>
                            <button
                              onClick={(e) => { e.preventDefault(); addToCart(product); }}
                              style={{
                                padding: '10px 20px',
                                background: 'transparent',
                                border: '1px solid #D4AF37',
                                color: '#D4AF37',
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 10,
                                fontWeight: 600,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                              }}
                              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)' }}
                              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div style={{ background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.1)', padding: '4rem', textAlign: 'center' }}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>Coming soon to this collection.</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '6rem 0', backgroundColor: '#0a0a0a', textAlign: 'center', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>Can't Decide?</h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto 2.5rem' }}>Browse our full collection and find the scent that speaks to you.</p>
            <Link to="/shop" style={{ textDecoration: 'none' }}>
              <button className="btn-gold">Shop All Products</button>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CollectionsPage;
