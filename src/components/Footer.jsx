import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const customerSupport = [
    { name: 'Shipping Policy', path: '/shipping' },
    { name: 'Return Policy', path: '/returns' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'FAQs', path: '/faqs' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: '📷' },
    { name: 'Facebook', icon: '📘' },
    { name: 'Twitter', icon: '🐦' },
    { name: 'YouTube', icon: '📺' }
  ];

  return (
    <footer className="bg-velore-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-velore-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold">VELORÉ PARIS</h3>
                <p className="text-xs text-gray-400 italic">Wear the Scent of Confidence</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Luxury fragrances crafted with the finest ingredients for the discerning individual.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-velore-gold transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-velore-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-semibold mb-6">Customer Support</h4>
            <ul className="space-y-3">
              {customerSupport.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-velore-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-playfair font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-velore-gold">📧</span>
                <a href="mailto:support@veloreparis.com" className="text-gray-400 hover:text-velore-gold transition-colors duration-300">
                  support@veloreparis.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-velore-gold">📞</span>
                <span className="text-gray-400">+91 9640680142</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-velore-gold">📍</span>
                <span className="text-gray-400">Hyderabad, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
          >
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 VELORÉ PARIS. All rights reserved.
            </p>
            <p className="text-velore-gold font-playfair italic">
              VELORÉ PARIS — Crafted for Timeless Elegance.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
