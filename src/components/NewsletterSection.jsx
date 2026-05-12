import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => { setIsSubscribed(false); setEmail(''); }, 4000);
    }
  };

  return (
    <section style={{ position: 'relative', padding: '7rem 0', backgroundColor: '#080808', overflow: 'hidden' }}>
      {/* BG image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src="/images/hero_banner.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #080808, rgba(8,8,8,0.8), #080808)' }} />
      </div>
      {/* Top/bottom gold lines */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)' }} />

      <div className="velore-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
            <div style={{ width: 60, height: 60, border: '1px solid rgba(212,175,55,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ width: 26, height: 26 }} fill="none" stroke="#D4AF37" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            <span>The Inner Circle</span>
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 16,
          }}>Join the Élite</h2>

          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 15,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 480,
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
          }}>
            Subscribe for exclusive launches, private member offers, and first access to limited editions — curated for those who live in luxury.
          </p>

          {/* Form / Success */}
          <AnimatePresence mode="wait">
            {isSubscribed ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  border: '1px solid rgba(212,175,55,0.3)',
                  padding: '2.5rem',
                  background: 'rgba(212,175,55,0.04)',
                  maxWidth: 420,
                  margin: '0 auto',
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>✨</div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#D4AF37', marginBottom: 8 }}>Welcome to the Inner Circle</p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
                  You'll receive your first exclusive offer within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', maxWidth: 440, margin: '0 auto' }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="dark-input"
                  style={{ flex: 1, borderRight: 'none' }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '0 2rem',
                    background: '#D4AF37',
                    color: '#000',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#F5E27B'}
                  onMouseLeave={e => e.currentTarget.style.background = '#D4AF37'}
                >
                  Subscribe
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Benefits */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 40, flexWrap: 'wrap' }}>
            {['Exclusive Offers', 'New Launches First', 'VIP Events Access'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#D4AF37', fontSize: 10 }}>◈</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
