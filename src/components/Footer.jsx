import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Collections', path: '/collections' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const supportLinks = [
  { name: 'Shipping Policy', path: '#' },
  { name: 'Return Policy', path: '#' },
  { name: 'Privacy Policy', path: '#' },
  { name: 'FAQs', path: '#' },
];

const socials = [
  { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#050505', position: 'relative', overflow: 'hidden' }}>
      {/* Top divider */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)' }} />

      {/* Background glows */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 400, height: 400, background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)', transform: 'translate(-50%, 50%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)', transform: 'translate(50%, -50%)', pointerEvents: 'none' }} />

      <div className="velore-container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem', paddingBottom: '2rem' }}>
        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ gridColumn: 'span 1' }}
          >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 20 }}>
              <div style={{ width: 38, height: 38 }}><Logo /></div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: '0.15em' }}>VELORÉ</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 7, fontWeight: 600, color: '#D4AF37', letterSpacing: '0.45em', textTransform: 'uppercase', marginTop: 2 }}>PARIS</div>
              </div>
            </Link>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, marginBottom: 20 }}>
              Luxury fragrances crafted with the rarest ingredients for those who understand that true confidence begins with a signature scent.
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 12, color: 'rgba(212,175,55,0.7)', marginBottom: 20 }}>
              "Crafted for Timeless Elegance."
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {socials.map(s => (
                <a key={s.name} href="#" style={{
                  width: 34, height: 34,
                  border: '1px solid rgba(212,175,55,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.background = 'rgba(212,175,55,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <svg style={{ width: 14, height: 14, color: 'rgba(255,255,255,0.4)' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', marginBottom: 24 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    <span style={{ width: 12, height: 1, background: 'rgba(212,175,55,0.4)', display: 'inline-block' }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', marginBottom: 24 }}>Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {supportLinks.map(link => (
                <li key={link.name}>
                  <a href={link.path} style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13, fontWeight: 300,
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', marginBottom: 24 }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: '✉', label: 'support@veloreparis.com', href: 'mailto:support@veloreparis.com' },
                { icon: '☎', label: '+91 9640680142', href: 'tel:+919640680142' },
                { icon: '⌖', label: 'Hyderabad, India' },
                { icon: '🕐', label: 'Mon–Sat: 10AM – 7PM IST' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ color: '#D4AF37', fontSize: 13, marginTop: 1 }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.3s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                    >{item.label}</a>
                  ) : (
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(212,175,55,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}>
            © 2024 VELORÉ PARIS. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 13, color: 'rgba(212,175,55,0.5)' }}>
            VELORÉ PARIS — Wear the Scent of Confidence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
