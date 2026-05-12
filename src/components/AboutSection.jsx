import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Rare Ingredients',
    desc: 'We source aged oud from Assam, Grasse rose absolute, and Mysore sandalwood — the rarest botanicals on earth.',
    icon: (
      <svg style={{ width: 32, height: 32 }} fill="none" stroke="#D4AF37" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Artisan Crafted',
    desc: 'Each fragrance is cold-blended by hand in small batches, never mass-produced, preserving the integrity of every note.',
    icon: (
      <svg style={{ width: 32, height: 32 }} fill="none" stroke="#D4AF37" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Skin Safe Formula',
    desc: 'Hypoallergenic and dermatologically tested. Safe for all skin types — no parabens, no synthetics.',
    icon: (
      <svg style={{ width: 32, height: 32 }} fill="none" stroke="#D4AF37" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Express Delivery',
    desc: 'Secure luxury packaging with express delivery to 25+ cities. Free shipping on all orders above ₹999.',
    icon: (
      <svg style={{ width: 32, height: 32 }} fill="none" stroke="#D4AF37" strokeWidth="1.2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const AboutSection = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#080808', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="velore-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            <span>The VELORÉ Standard</span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 16,
          }}>Why VELORÉ PARIS?</h2>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 15,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: 520,
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Every bottle is a promise — of quality so rare it becomes legend, of a fragrance so unique it becomes yours.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 1,
        }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(212,175,55,0.1)',
                padding: '2.5rem 2rem',
                transition: 'border-color 0.4s ease',
                cursor: 'default',
              }}
              onHoverStart={e => {}}
            >
              <div style={{ marginBottom: 24 }}>{feature.icon}</div>
              <div style={{ width: 32, height: 1, backgroundColor: 'rgba(212,175,55,0.4)', marginBottom: 20, transition: 'width 0.4s ease' }} />
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 12,
              }}>{feature.title}</h3>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.8,
              }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            marginTop: '5rem',
            padding: '3.5rem',
            border: '1px solid rgba(212,175,55,0.15)',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Corner ornaments */}
          {[
            { top: 0, left: 0, borderWidth: '1px 0 0 1px' },
            { top: 0, right: 0, borderWidth: '1px 1px 0 0' },
            { bottom: 0, left: 0, borderWidth: '0 0 1px 1px' },
            { bottom: 0, right: 0, borderWidth: '0 1px 1px 0' },
          ].map((s, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: 20, height: 20,
              borderColor: '#D4AF37',
              borderStyle: 'solid',
              ...s,
            }} />
          ))}
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.6,
            maxWidth: 700,
            margin: '0 auto 20px',
          }}>
            "A perfume is the unseen, unforgettable, ultimate accessory of fashion that heralds your arrival and prolongs your departure."
          </p>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#D4AF37',
          }}>— VELORÉ PARIS</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
