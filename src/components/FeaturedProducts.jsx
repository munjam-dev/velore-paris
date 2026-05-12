import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const StarIcon = ({ filled }) => (
  <svg style={{ width: 13, height: 13, color: filled ? '#D4AF37' : '#333' }} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ProductCard = ({ product, addToCart, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: '#0f0f0f',
        border: `1px solid ${isHovered ? 'rgba(212,175,55,0.4)' : 'rgba(212,175,55,0.1)'}`,
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        boxShadow: isHovered ? '0 25px 60px rgba(0,0,0,0.6)' : 'none',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image area */}
      <Link to={`/product/${product.id}`} style={{ display: 'block', textDecoration: 'none' }}>
        <div style={{ position: 'relative', height: 300, overflow: 'hidden', backgroundColor: '#0a0a0a' }}>
          <motion.img
            src={product.images[0]}
            alt={product.name}
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.7 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />

          {/* Category badge */}
          <div style={{ position: 'absolute', top: 14, left: 14 }}>
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#D4AF37',
            }}>
              {product.category.split(' ')[0]}
            </span>
          </div>

          {/* Bestseller */}
          {product.rating >= 4.8 && (
            <div style={{
              position: 'absolute',
              top: 14,
              right: 14,
              background: '#D4AF37',
              color: '#000',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '4px 10px',
            }}>
              Bestseller
            </div>
          )}

          {/* Hover "View Details" */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.4)',
              padding: '10px 24px',
              backdropFilter: 'blur(4px)',
              background: 'rgba(255,255,255,0.05)',
            }}>
              View Details
            </span>
          </motion.div>

          {/* Product name on image */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem 1.25rem' }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
            }}>{product.name}</h3>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div style={{ padding: '1rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Rating + Wishlist */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            {[...Array(5)].map((_, i) => <StarIcon key={i} filled={i < Math.floor(product.rating)} />)}
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              color: 'rgba(255,255,255,0.35)',
              marginLeft: 5,
            }}>({product.reviews})</span>
          </div>
          <svg style={{ width: 16, height: 16, color: 'rgba(255,255,255,0.25)', cursor: 'pointer' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              fontWeight: 700,
              color: '#ffffff',
            }}>₹{product.price.toLocaleString()}</span>
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 12,
              color: 'rgba(255,255,255,0.3)',
              textDecoration: 'line-through',
              marginLeft: 8,
            }}>₹{Math.floor(product.price * 1.3).toLocaleString()}</span>
          </div>
          <button
            onClick={handleAddToCart}
            style={{
              padding: '8px 16px',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              border: `1px solid ${added ? '#22c55e' : '#D4AF37'}`,
              background: added ? '#22c55e' : 'transparent',
              color: added ? '#fff' : '#D4AF37',
              transition: 'all 0.3s ease',
            }}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Animated bottom line */}
      <motion.div
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: '#D4AF37',
          transformOrigin: 'left',
        }}
      />
    </motion.div>
  );
};

const FeaturedProducts = ({ addToCart }) => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#050505' }}>
      <div className="velore-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            <span>Handpicked for You</span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 16,
          }}>Featured Collection</h2>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 15,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Each bottle contains a world — crafted with the rarest ingredients for those who define their own presence.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 1,
        }}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} index={index} />
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <Link to="/shop" style={{ textDecoration: 'none' }}>
            <button className="btn-outline-gold">View All Fragrances</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
