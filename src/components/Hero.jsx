import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 8,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 2.5 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.35 + 0.05,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
  }));

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: '#030303',
    }}>
      {/* BG Image with parallax */}
      <motion.div
        style={{ position: 'absolute', inset: 0 }}
        animate={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
        transition={{ type: 'spring', stiffness: 40, damping: 25 }}
      >
        <img
          src="/images/hero_banner.png"
          alt="VELORÉ PARIS"
          style={{ width: '110%', height: '110%', objectFit: 'cover', marginLeft: '-5%', marginTop: '-5%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.4) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)' }} />
      </motion.div>

      {/* Gold particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {particles.map(p => (
          <motion.div
            key={p.id}
            style={{
              position: 'absolute',
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              backgroundColor: '#D4AF37',
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.opacity,
            }}
            animate={{ y: [0, -25, 0], opacity: [p.opacity, p.opacity * 3, p.opacity] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Vertical side lines */}
      <div style={{ position: 'absolute', left: 48, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.25), transparent)' }} />
      <div style={{ position: 'absolute', right: 48, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.25), transparent)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 3rem', width: '100%' }}>
        <div style={{ maxWidth: 620 }}>
          {/* Pre-label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}
          >
            <div style={{ height: 1, width: 40, backgroundColor: '#D4AF37' }} />
            <span style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#D4AF37',
            }}>Maison de Parfum</span>
            <div style={{ height: 1, width: 40, backgroundColor: '#D4AF37' }} />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            Wear the<br />
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #F5E27B 40%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Scent of</span>
            <br />
            <span style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.88)' }}>Confidence.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.65)',
              marginBottom: 40,
              maxWidth: 480,
            }}
          >
            Crafted from the world's rarest ingredients — aged oud, Grasse rose, and Mysore sandalwood —
            VELORÉ PARIS is luxury redefined for the modern connoisseur.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <Link to="/shop" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 10px 35px rgba(212,175,55,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold"
              >
                Explore Collection
              </motion.button>
            </Link>
            <Link to="/collections" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline-gold"
              >
                Our Collections
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 56,
              paddingTop: 28,
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {[
              { value: '4', label: 'Signature Scents' },
              { value: '10K+', label: 'Happy Customers' },
              { value: '4.9★', label: 'Average Rating' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#D4AF37',
                  lineHeight: 1,
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 9,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginTop: 6,
                }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 9,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(212,175,55,0.5)',
        }}>Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
