import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CATEGORIES = ['All', 'Luxury Unisex Perfume', 'Fresh Aquatic Perfume', 'Floral Luxury Perfume', 'Oriental Amber Perfume'];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Best Rated', value: 'rating' },
];

const ShopPage = ({ cartItems, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [addedIds, setAddedIds] = useState([]);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAddedIds(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== product.id));
    }, 1500);
  };

  const filtered = products
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <main style={{ minHeight: '100vh', backgroundColor: '#050505', paddingBottom: '6rem' }}>
        
        {/* Hero Banner */}
        <section style={{ position: 'relative', backgroundColor: '#0a0a0a', padding: '6rem 0', overflow: 'hidden', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: 40, right: 40, width: 250, height: 250, border: '1px solid #D4AF37', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: -40, left: -40, width: 400, height: 400, border: '1px solid #D4AF37', borderRadius: '50%' }} />
          </div>
          <div className="velore-container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: 16 }}>Explore Our Collection</p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: '#ffffff', marginBottom: 20 }}>Shop All Fragrances</h1>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.6)', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
                Discover our complete collection of luxury perfumes, crafted for every occasion and personality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters + Grid */}
        <section style={{ padding: '4rem 0' }}>
          <div className="velore-container">
            
            {/* Filters Row */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
              
              {/* Category Filters */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.6rem 1.2rem',
                      borderRadius: 20,
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      border: selectedCategory === cat ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.2)',
                      background: selectedCategory === cat ? 'rgba(212,175,55,0.1)' : 'transparent',
                      color: selectedCategory === cat ? '#D4AF37' : 'rgba(255,255,255,0.6)',
                      cursor: 'pointer'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="dark-select"
                style={{ width: 'auto', minWidth: 200, padding: '0.6rem 1.2rem', borderRadius: 20, fontSize: 12 }}
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: '2rem' }}>
              {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
            </p>

            {/* Products Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {filtered.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  style={{ background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                >
                  <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                    <div style={{ position: 'relative', height: 320, overflow: 'hidden', backgroundColor: '#050505' }}>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)', pointerEvents: 'none' }} />
                      
                      {product.rating >= 4.8 && (
                        <div style={{ position: 'absolute', top: 12, left: 12, background: '#D4AF37', color: '#000', fontFamily: "'Montserrat', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '4px 10px' }}>
                          Bestseller
                        </div>
                      )}
                    </div>
                  </Link>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: '#D4AF37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6 }}>{product.category}</p>
                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 10, transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'} onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}>
                        {product.name}
                      </h3>
                    </Link>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
                      <div style={{ display: 'flex', color: '#D4AF37', fontSize: 12 }}>{'★'.repeat(Math.floor(product.rating))}</div>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>({product.reviews})</span>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#ffffff' }}>₹{product.price.toLocaleString()}</span>
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.3)', textDecoration: 'line-through', marginLeft: 8 }}>₹{Math.floor(product.price * 1.3).toLocaleString()}</span>
                      </div>
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        style={{
                          padding: '8px 16px',
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                          border: `1px solid ${addedIds.includes(product.id) ? '#22c55e' : '#D4AF37'}`,
                          background: addedIds.includes(product.id) ? '#22c55e' : 'transparent',
                          color: addedIds.includes(product.id) ? '#fff' : '#D4AF37',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {addedIds.includes(product.id) ? '✓ Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ShopPage;
