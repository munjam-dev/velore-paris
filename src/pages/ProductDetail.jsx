import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = ({ cartItems, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (!product) {
    return (
      <>
        <Header cartItemsCount={cartItemsCount} />
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 20 }}>Product Not Found</h1>
            <Link to="/shop" style={{ textDecoration: 'none' }}><button className="btn-gold">Back to Shop</button></Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <main style={{ minHeight: '100vh', backgroundColor: '#050505', paddingTop: '2rem' }}>
        
        {/* Breadcrumb */}
        <div className="velore-container" style={{ marginBottom: '2rem' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Home</Link>
            <span>/</span>
            <Link to="/shop" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Shop</Link>
            <span>/</span>
            <span style={{ color: '#D4AF37', fontWeight: 500 }}>{product.name}</span>
          </nav>
        </div>

        <div className="velore-container" style={{ paddingBottom: '5rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            
            {/* Image Gallery */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              {/* Main Image */}
              <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a', border: '1px solid rgba(212,175,55,0.1)', marginBottom: '1rem', height: 500 }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={product.images[currentImage]}
                    alt={product.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </AnimatePresence>
                {/* Gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)', pointerEvents: 'none' }} />
                
                {product.rating >= 4.8 && (
                  <div style={{ position: 'absolute', top: 16, left: 16, background: '#D4AF37', color: '#000', fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '6px 14px' }}>
                    Bestseller
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: 70,
                      width: 70,
                      cursor: 'pointer',
                      border: currentImage === index ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.1)',
                      opacity: currentImage === index ? 1 : 0.6,
                      transition: 'all 0.3s ease',
                      backgroundColor: '#0a0a0a',
                    }}
                    onMouseEnter={e => { if (currentImage !== index) e.currentTarget.style.opacity = 1; }}
                    onMouseLeave={e => { if (currentImage !== index) e.currentTarget.style.opacity = 0.6; }}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ display: 'flex', flexDirection: 'column' }}>
              
              <span style={{ color: '#D4AF37', fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '0.5rem' }}>
                {product.category}
              </span>
              
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, marginBottom: '1rem' }}>
                {product.name}
              </h1>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', gap: 4 }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < Math.floor(product.rating) ? '#D4AF37' : 'rgba(255,255,255,0.2)', fontSize: 18 }}>★</span>
                  ))}
                </div>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>{product.rating}/5</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, paddingBottom: '1.5rem', borderBottom: '1px solid rgba(212,175,55,0.15)', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', lineHeight: 1 }}>₹{product.price.toLocaleString()}</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.3)', textDecoration: 'line-through', marginBottom: 4 }}>₹{Math.floor(product.price * 1.3).toLocaleString()}</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, color: '#D4AF37', border: '1px solid #D4AF37', padding: '2px 8px', marginBottom: 4 }}>
                  Save {Math.round(((product.price * 1.3 - product.price) / (product.price * 1.3)) * 100)}%
                </span>
              </div>

              {/* Short Description */}
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '2rem' }}>
                {product.shortDescription}
              </p>

              {/* Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: '2rem' }}>
                {product.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#D4AF37', fontSize: 14 }}>✓</span>
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{h}</span>
                  </div>
                ))}
              </div>

              {/* Quantity + Add to Cart */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                
                {/* Quantity selector */}
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(212,175,55,0.3)', background: '#0a0a0a' }}>
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} style={{ padding: '0.8rem 1.2rem', background: 'transparent', border: 'none', color: '#D4AF37', fontSize: 18, cursor: 'pointer', transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.1)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>−</button>
                  <span style={{ padding: '0 1rem', fontFamily: "'Montserrat', sans-serif", fontSize: 16, color: '#fff', borderLeft: '1px solid rgba(212,175,55,0.3)', borderRight: '1px solid rgba(212,175,55,0.3)', minWidth: 40, textAlign: 'center' }}>{quantity}</span>
                  <button onClick={() => setQuantity(q => q + 1)} style={{ padding: '0.8rem 1.2rem', background: 'transparent', border: 'none', color: '#D4AF37', fontSize: 18, cursor: 'pointer', transition: 'background 0.3s' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.1)'} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>+</button>
                </div>

                <motion.button
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    flex: 1,
                    minWidth: 200,
                    padding: '1.1rem 2rem',
                    background: addedToCart ? '#22c55e' : 'linear-gradient(135deg, #D4AF37, #F5E27B, #D4AF37)',
                    backgroundSize: '200% 100%',
                    color: addedToCart ? '#fff' : '#000',
                    border: 'none',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => { if (!addedToCart) e.currentTarget.style.backgroundPosition = 'right center'; }}
                  onMouseLeave={e => { if (!addedToCart) e.currentTarget.style.backgroundPosition = 'left center'; }}
                >
                  {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                </motion.button>
              </div>

              {/* In Stock */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Montserrat', sans-serif", fontSize: 12 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: product.inStock ? '#22c55e' : '#ef4444' }} />
                <span style={{ color: product.inStock ? '#22c55e' : '#ef4444' }}>{product.inStock ? 'In Stock — Ready to Ship' : 'Out of Stock'}</span>
              </div>

            </motion.div>
          </div>

          {/* Tabs: Description / Notes / Reviews */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ marginTop: '5rem' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(212,175,55,0.15)', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {['description', 'notes', 'reviews'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '1rem 2rem',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: activeTab === tab ? '2px solid #D4AF37' : '2px solid transparent',
                    color: activeTab === tab ? '#D4AF37' : 'rgba(255,255,255,0.5)',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginBottom: '-1px',
                  }}
                  onMouseEnter={e => { if (activeTab !== tab) e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
                  onMouseLeave={e => { if (activeTab !== tab) e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {tab === 'notes' ? 'Fragrance Notes' : tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                {activeTab === 'description' && (
                  <div style={{ maxWidth: 800 }}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.9 }}>{product.fullDescription}</p>
                  </div>
                )}
                {activeTab === 'notes' && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {[
                      { label: 'Top Notes', notes: product.fragranceNotes.top, desc: 'First impression — 15 minutes' },
                      { label: 'Heart Notes', notes: product.fragranceNotes.middle, desc: 'The core — 2–4 hours' },
                      { label: 'Base Notes', notes: product.fragranceNotes.base, desc: 'The lasting memory — 6+ hours' },
                    ].map(({ label, notes, desc }) => (
                      <div key={label} style={{ background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.15)', padding: '2rem', textAlign: 'center' }}>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#D4AF37', marginBottom: 8 }}>{label}</h3>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>{desc}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                          {notes.map(note => (
                            <span key={note} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div style={{ maxWidth: 800 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', padding: '2rem', background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.15)', marginBottom: '2rem', flexWrap: 'wrap' }}>
                      <div style={{ textAlign: 'center', paddingRight: '2rem', borderRight: '1px solid rgba(212,175,55,0.15)' }}>
                        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>{product.rating}</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 2, margin: '8px 0', color: '#D4AF37' }}>
                          {'★'.repeat(Math.floor(product.rating))}
                        </div>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{product.reviews} reviews</p>
                      </div>
                      <p style={{ flex: 1, fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                        "Exceptional fragrance crafted for those who appreciate true luxury. The longevity and sillage of {product.name} are unparalleled."
                      </p>
                    </div>
                    <p style={{ textAlign: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                      All {product.reviews} verified reviews confirm the premium quality of {product.name}.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Related Products */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ marginTop: '6rem' }}>
            <div className="section-label"><span>Discover More</span></div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#ffffff', textAlign: 'center', marginBottom: '3rem' }}>You May Also Like</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} style={{ textDecoration: 'none' }}>
                  <motion.div whileHover={{ y: -8 }} style={{ background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.1)', overflow: 'hidden', transition: 'border-color 0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.1)'}>
                    <div style={{ height: 280, overflow: 'hidden', position: 'relative' }}>
                      <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                    </div>
                    <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: '#D4AF37', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>{p.category}</p>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{p.name}</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>₹{p.price.toLocaleString()}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
          
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
