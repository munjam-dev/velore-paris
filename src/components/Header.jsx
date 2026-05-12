import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <circle cx="22" cy="22" r="21" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7"/>
    <circle cx="22" cy="22" r="17" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4"/>
    <rect x="21.3" y="3.5" width="1.4" height="1.4" fill="#D4AF37" transform="rotate(45 22 4.2)" opacity="0.9"/>
    <rect x="21.3" y="39.1" width="1.4" height="1.4" fill="#D4AF37" transform="rotate(45 22 39.8)" opacity="0.9"/>
    <rect x="3.5" y="21.3" width="1.4" height="1.4" fill="#D4AF37" transform="rotate(45 4.2 22)" opacity="0.9"/>
    <rect x="39.1" y="21.3" width="1.4" height="1.4" fill="#D4AF37" transform="rotate(45 39.8 22)" opacity="0.9"/>
    <path d="M13 13 L22 31 L31 13" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M17 13 L22 24 L27 13" stroke="#D4AF37" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
  </svg>
);

const SearchIcon = () => (
  <svg style={{ width: 18, height: 18 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const BagIcon = () => (
  <svg style={{ width: 18, height: 18 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const Header = ({ cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: scrolled ? 'rgba(10,10,10,0.96)' : '#0a0a0a',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: '1px solid rgba(212,175,55,0.15)',
    transition: 'all 0.4s ease',
  };

  return (
    <header style={headerStyle}>
      {/* Gold top line */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #D4AF37, transparent)', opacity: 0.5 }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{ width: 40, height: 40, flexShrink: 0 }}>
              <Logo />
            </div>
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.15em',
                lineHeight: 1,
              }}>VELORÉ</div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 8,
                fontWeight: 600,
                color: '#D4AF37',
                letterSpacing: '0.45em',
                textTransform: 'uppercase',
                marginTop: 3,
              }}>PARIS</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: isActive(link.path) ? '#D4AF37' : 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  paddingBottom: 2,
                  borderBottom: isActive(link.path) ? '1px solid #D4AF37' : '1px solid transparent',
                }}
                onMouseEnter={e => { if (!isActive(link.path)) e.target.style.color = '#D4AF37'; }}
                onMouseLeave={e => { if (!isActive(link.path)) e.target.style.color = 'rgba(255,255,255,0.65)'; }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', padding: 4, transition: 'color 0.3s', display: 'flex' }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              <SearchIcon />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              style={{ position: 'relative', color: 'rgba(255,255,255,0.5)', display: 'flex', transition: 'color 0.3s', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
            >
              <BagIcon />
              <AnimatePresence>
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    style={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                      background: '#D4AF37',
                      color: '#000',
                      fontSize: 9,
                      fontWeight: 700,
                      borderRadius: '50%',
                      width: 16,
                      height: 16,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', padding: 4, display: 'none' }}
              className="mobile-menu-btn"
            >
              <svg style={{ width: 22, height: 22 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: 'hidden', paddingBottom: 12 }}
            >
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search for fragrances..."
                  autoFocus
                  className="dark-input"
                  style={{ paddingRight: '3rem' }}
                />
                <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }}>
                  <SearchIcon />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ borderTop: '1px solid rgba(212,175,55,0.1)', backgroundColor: '#0a0a0a', overflow: 'hidden' }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem 1.5rem', gap: 16 }}>
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: isActive(link.path) ? '#D4AF37' : 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom gold line */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, #D4AF37, transparent)', opacity: 0.15 }} />

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
