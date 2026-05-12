import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      <main className="min-h-screen bg-[#050505]">
        {/* Hero */}
        <section className="bg-velore-dark text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-1/4 w-40 h-40 border-2 border-velore-gold rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-56 h-56 border-2 border-velore-gold rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-velore-gold font-semibold uppercase tracking-widest text-sm mb-4">We're Here for You</p>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">Contact Us</h1>
              <p className="text-gray-300 text-lg max-w-lg mx-auto">
                Have a question, a compliment, or a special request? We'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-playfair font-bold text-velore-dark mb-8">Get in Touch</h2>
                <div className="space-y-6 mb-10">
                  {[
                    { icon: '📧', label: 'Email', value: 'support@veloreparis.com', href: 'mailto:support@veloreparis.com' },
                    { icon: '📞', label: 'Phone', value: '+91 9640680142', href: 'tel:+919640680142' },
                    { icon: '📍', label: 'Location', value: 'Hyderabad, Telangana, India' },
                    { icon: '🕒', label: 'Working Hours', value: 'Mon–Sat: 10:00 AM – 7:00 PM IST' },
                  ].map(item => (
                    <div key={item.label} className="flex items-start space-x-4 bg-white rounded-xl p-5 shadow-sm">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-velore-dark font-medium hover:text-velore-gold transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-velore-dark font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <p className="font-semibold text-velore-dark mb-4">Follow Us</p>
                  <div className="flex space-x-3">
                    {[
                      { name: 'Instagram', icon: '📷', color: 'hover:bg-pink-500' },
                      { name: 'Facebook', icon: '📘', color: 'hover:bg-blue-600' },
                      { name: 'Twitter', icon: '🐦', color: 'hover:bg-sky-500' },
                      { name: 'YouTube', icon: '📺', color: 'hover:bg-red-600' },
                    ].map(social => (
                      <a
                        key={social.name}
                        href="#"
                        className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                      >
                        <span className="text-xl">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-playfair font-bold text-velore-dark mb-6">Send a Message</h2>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="text-6xl mb-4">✉️</div>
                      <h3 className="text-2xl font-playfair font-bold text-velore-dark mb-2">Message Sent!</h3>
                      <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            required
                            placeholder="Ravi Kumar"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-velore-gold transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            required
                            placeholder="ravi@email.com"
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-velore-gold transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                        <select
                          value={form.subject}
                          onChange={e => setForm({ ...form, subject: e.target.value })}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-velore-gold transition-colors bg-white"
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
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                        <textarea
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          required
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-velore-gold transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-velore-gold text-white py-4 rounded-xl font-semibold text-lg hover:bg-yellow-600 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                      >
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-playfair font-bold text-velore-dark mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-velore-gold mx-auto"></div>
            </motion.div>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#050505] rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-velore-dark">{item.q}</span>
                    <span className={`text-velore-gold text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-700 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
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
