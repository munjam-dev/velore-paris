import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Rahul K.',
    location: 'Mumbai',
    rating: 5,
    comment: 'Midnight Oud is everything I wanted in a perfume. The sillage is extraordinary — people ask about it hours later. Truly world-class.',
    product: 'Midnight Oud',
  },
  {
    name: 'Sneha P.',
    location: 'Hyderabad',
    rating: 5,
    comment: 'Velvet Rose is my signature now. Delicate yet powerful — the kind of fragrance that makes a room remember you long after you leave.',
    product: 'Velvet Rose',
  },
  {
    name: 'Arjun M.',
    location: 'Bangalore',
    rating: 5,
    comment: "I've worn designer fragrances for years. Royal Amber from VELORÉ PARIS stands above them all. Exceptional depth, incredible longevity.",
    product: 'Royal Amber',
  },
];

const StarIcon = () => (
  <svg style={{ width: 14, height: 14, color: '#D4AF37' }} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewsSection = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#050505', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative vertical lines */}
      <div style={{ position: 'absolute', left: '25%', top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.08), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: '25%', top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.08), transparent)', pointerEvents: 'none' }} />

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
            <span>Client Testimonials</span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 16,
          }}>Words of Our Patrons</h2>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 15,
            fontWeight: 300,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            The highest compliment is when our fragrances become part of someone's identity.
          </p>
        </motion.div>

        {/* Review cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 1,
        }}>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              style={{
                background: '#0f0f0f',
                border: '1px solid rgba(212,175,55,0.1)',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.4s ease',
              }}
            >
              {/* Large quote mark */}
              <div style={{
                position: 'absolute',
                top: 12,
                right: 20,
                fontFamily: "'Playfair Display', serif",
                fontSize: 80,
                color: 'rgba(212,175,55,0.06)',
                lineHeight: 1,
                userSelect: 'none',
              }}>"</div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                {[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}
              </div>

              {/* Comment */}
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 14,
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.8,
                marginBottom: 28,
                position: 'relative',
                zIndex: 1,
              }}>
                "{review.comment}"
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(212,175,55,0.12)', marginBottom: 20 }} />

              {/* Reviewer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 38, height: 38,
                    background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#D4AF37',
                  }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 600, color: '#ffffff' }}>{review.name}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{review.location}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontStyle: 'italic', color: '#D4AF37' }}>{review.product}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>✓ Verified</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 1,
            marginTop: '3rem',
          }}
        >
          {[
            { value: '10,000+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '25+', label: 'Cities Served' },
            { value: '100%', label: 'Authentic Luxury' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: '#0f0f0f',
              border: '1px solid rgba(212,175,55,0.1)',
              padding: '2rem',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28,
                fontWeight: 700,
                color: '#D4AF37',
                marginBottom: 8,
              }}>{stat.value}</div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
              }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
