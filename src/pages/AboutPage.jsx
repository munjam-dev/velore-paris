import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

const TEAM = [
  { name: 'Rohan Sharma', role: 'Founder & Master Perfumer', initial: 'R', bio: 'With 15 years in luxury fragrance, Rohan founded VELORÉ PARIS to bring world-class scents to discerning customers.' },
  { name: 'Priya Nair', role: 'Creative Director', initial: 'P', bio: 'Priya crafts each product experience from bottle design to the final scent story.' },
  { name: 'Aditya Reddy', role: 'Head of Sourcing', initial: 'A', bio: 'Aditya travels the world to source the rarest and finest fragrance ingredients.' },
];

const MILESTONES = [
  { year: '2019', title: 'The Beginning', desc: 'VELORÉ PARIS was born in a small atelier in Hyderabad with a vision to democratize luxury.' },
  { year: '2021', title: 'First Collection', desc: 'Our signature Midnight Oud collection launched to critical acclaim and sold out within weeks.' },
  { year: '2023', title: 'National Expansion', desc: 'Now shipping to 25+ cities across India with 10,000+ happy customers.' },
  { year: '2024', title: 'Global Vision', desc: 'Preparing to launch internationally with new ultra-luxury offerings.' },
];

const AboutPage = ({ cartItems }) => {
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <main style={{ minHeight: '100vh', backgroundColor: '#050505' }}>
        
        {/* Hero */}
        <section style={{ position: 'relative', backgroundColor: '#0a0a0a', padding: '8rem 0', overflow: 'hidden', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  border: '1px solid #D4AF37',
                  borderRadius: '50%',
                  width: `${(i + 1) * 150}px`,
                  height: `${(i + 1) * 150}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </div>
          <div className="velore-container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: 16 }}>Our Story</p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 700, color: '#ffffff', marginBottom: 24, lineHeight: 1.1 }}>
                About<br /><span style={{ color: '#D4AF37' }}>VELORÉ PARIS</span>
              </h1>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.7)', maxWidth: 650, margin: '0 auto', lineHeight: 1.8 }}>
                We believe fragrance is an art — a language that speaks without words, a memory that lasts forever.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section style={{ padding: '6rem 0' }}>
          <div className="velore-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: 16 }}>Our Mission</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', marginBottom: 24, lineHeight: 1.2 }}>
                  Crafting Scents That<br />Define Moments
                </h2>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
                  VELORÉ PARIS was founded on the belief that luxury shouldn't be a privilege — it should be an experience available to anyone who appreciates true quality.
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 32 }}>
                  Every perfume we create is a collaboration between master perfumers, rare ingredients from around the world, and a deep understanding of what makes a fragrance timeless.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                  {[
                    { number: '10,000+', label: 'Happy Customers' },
                    { number: '25+', label: 'Cities Served' },
                    { number: '4.9/5', label: 'Avg. Rating' },
                  ].map(stat => (
                    <div key={stat.label} style={{ textAlign: 'center', background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.1)', padding: '1.5rem', borderRadius: 8 }}>
                      <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#D4AF37' }}>{stat.number}</p>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.4)', marginTop: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ position: 'relative' }}>
                <div style={{ background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.2)', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, border: '1px solid rgba(212,175,55,0.2)', borderRadius: '50%' }} />
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 60, color: '#D4AF37', lineHeight: 0.5, marginBottom: 20 }}>"</p>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: 32 }}>
                    We don't just sell perfumes. We sell confidence, identity, and the feeling of walking into a room and making it yours.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 48, height: 48, background: 'rgba(212,175,55,0.1)', border: '1px solid #D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#D4AF37' }}>R</div>
                    <div>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 600, color: '#ffffff' }}>Rohan Sharma</p>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Founder, VELORÉ PARIS</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <AboutSection />

        {/* Timeline */}
        <section style={{ padding: '6rem 0', backgroundColor: '#0a0a0a' }}>
          <div className="velore-container">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="section-label"><span>Our Journey</span></div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#ffffff' }}>Milestones</h2>
            </motion.div>
            
            <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {MILESTONES.map((milestone, index) => (
                <motion.div key={milestone.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.1 }} viewport={{ once: true }} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 60, flexShrink: 0, textAlign: 'right' }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#D4AF37' }}>{milestone.year}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 6 }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#D4AF37' }} />
                    {index !== MILESTONES.length - 1 && <div style={{ width: 1, height: 100, background: 'rgba(212,175,55,0.2)' }} />}
                  </div>
                  <div style={{ background: '#050505', border: '1px solid rgba(212,175,55,0.1)', padding: '1.5rem', flex: 1 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>{milestone.title}</h3>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ padding: '6rem 0' }}>
          <div className="velore-container">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="section-label"><span>Meet the Team</span></div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>The Artisans Behind the Scents</h2>
            </motion.div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {TEAM.map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -8 }} style={{ background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.1)', padding: '2rem', textAlign: 'center', transition: 'border-color 0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.1)'}>
                  <div style={{ width: 80, height: 80, background: 'rgba(212,175,55,0.1)', border: '1px solid #D4AF37', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#D4AF37' }}>
                    {member.initial}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#ffffff', marginBottom: 4 }}>{member.name}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>{member.role}</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{member.bio}</p>
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

export default AboutPage;
