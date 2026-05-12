import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ_ITEMS = [
  { q: 'What is the shelf life of your perfumes?', a: 'Our perfumes have a shelf life of 3–5 years when stored properly away from direct sunlight and heat.' },
  { q: 'Do you offer free shipping?', a: 'Yes! We offer free shipping on all orders above ₹999. Orders below ₹999 have a flat ₹99 shipping fee.' },
  { q: 'How long does delivery take?', a: 'Standard delivery takes 3–5 business days. Express delivery (1–2 days) is available for major cities.' },
  { q: 'Can I return or exchange a product?', a: 'We accept returns within 7 days of delivery for unused, sealed products. Opened perfumes cannot be returned for hygiene reasons.' },
];

const ContactPage = ({ cartItems }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <main style={{ minHeight: '100vh', backgroundColor: '#050505' }}>
        
        {/* Hero */}
        <section style={{ position: 'relative', backgroundColor: '#0a0a0a', padding: '8rem 0', overflow: 'hidden', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: 40, left: '25%', width: 160, height: 160, border: '1px solid #D4AF37', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: -40, right: '25%', width: 220, height: 220, border: '1px solid #D4AF37', borderRadius: '50%' }} />
          </div>
          <div className="velore-container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#D4AF37', marginBottom: 16 }}>We're Here for You</p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 700, color: '#ffffff', marginBottom: 20 }}>Contact Us</h1>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto', lineHeight: 1.8 }}>
                Have a question, a compliment, or a special request? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section style={{ padding: '6rem 0' }}>
          <div className="velore-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
              
              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: '#ffffff', marginBottom: '2rem' }}>Get in Touch</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                  {[
                    { icon: '✉️', label: 'Email', value: 'support@veloreparis.com', href: 'mailto:support@veloreparis.com' },
                    { icon: '📞', label: 'Phone', value: '+91 9640680142', href: 'tel:+919640680142' },
                    { icon: '📍', label: 'Location', value: 'Hyderabad, Telangana, India' },
                    { icon: '🕒', label: 'Working Hours', value: 'Mon–Sat: 10:00 AM – 7:00 PM IST' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.1)', padding: '1.5rem', borderRadius: 8 }}>
                      <span style={{ fontSize: 24, lineHeight: 1 }}>{item.icon}</span>
                      <div>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 500, color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#D4AF37'} onMouseLeave={e => e.currentTarget.style.color = '#ffffff'}>
                            {item.value}
                          </a>
                        ) : (
                          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 500, color: '#ffffff' }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 600, color: '#ffffff', marginBottom: '1rem' }}>Follow Us</p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {[
                      { name: 'Instagram', icon: '📷' },
                      { name: 'Facebook', icon: '📘' },
                      { name: 'Twitter', icon: '🐦' },
                      { name: 'YouTube', icon: '📺' },
                    ].map(social => (
                      <a
                        key={social.name}
                        href="#"
                        style={{
                          width: 48, height: 48,
                          background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.2)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          borderRadius: '50%', textDecoration: 'none', fontSize: 20,
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)'; e.currentTarget.style.transform = 'scale(1)'; }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <div style={{ background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.15)', padding: '3rem', position: 'relative' }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: '#ffffff', marginBottom: '2rem' }}>Send a Message</h2>
                  
                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '3rem 0' }}>
                      <div style={{ fontSize: 48, marginBottom: 16 }}>✉️</div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#ffffff', marginBottom: 8 }}>Message Sent!</h3>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>We'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        <div>
                          <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>Your Name</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            required
                            placeholder="Ravi Kumar"
                            className="dark-input"
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>Email Address</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            required
                            placeholder="ravi@email.com"
                            className="dark-input"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>Subject</label>
                        <select
                          value={form.subject}
                          onChange={e => setForm({ ...form, subject: e.target.value })}
                          required
                          className="dark-select"
                        >
                          <option value="">Select a subject</option>
                          <option value="order">Order Inquiry</option>
                          <option value="product">Product Question</option>
                          <option value="return">Returns & Exchanges</option>
                          <option value="wholesale">Wholesale Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label style={{ display: 'block', fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>Message</label>
                        <textarea
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          required
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          className="dark-input"
                          style={{ resize: 'none' }}
                        />
                      </div>
                      
                      <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '0.5rem' }}>
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '6rem 0', backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
          <div className="velore-container" style={{ maxWidth: 800 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="section-label"><span>Questions?</span></div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: '#ffffff' }}>Frequently Asked Questions</h2>
            </motion.div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {FAQ_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ background: '#050505', border: '1px solid rgba(212,175,55,0.15)', overflow: 'hidden' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 2rem', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 15, fontWeight: 600, color: '#ffffff' }}>{item.q}</span>
                    <span style={{ color: '#D4AF37', fontSize: 24, transition: 'transform 0.3s', transform: openFaq === index ? 'rotate(45deg)' : 'none' }}>+</span>
                  </button>
                  
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 2rem 1.5rem', fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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

export default ContactPage;
