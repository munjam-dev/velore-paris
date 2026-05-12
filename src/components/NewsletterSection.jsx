import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-velore-dark to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-velore-gold rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-velore-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-velore-gold rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Get exclusive fragrance launches, luxury offers, and premium member discounts 
            directly in your inbox.
          </p>
          <div className="w-24 h-1 bg-velore-gold mx-auto mb-8"></div>
          
          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-velore-gold transition-colors duration-300"
              required
            />
            <button
              type="submit"
              className="bg-velore-gold text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
          
          {/* Success Message */}
          {isSubscribed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-lg"
            >
              <p className="text-green-400">Thank you for subscribing! Check your email for confirmation.</p>
            </motion.div>
          )}
          
          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl mb-2">🎁</div>
              <p className="text-sm text-gray-300">Exclusive Offers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <p className="text-sm text-gray-300">New Arrivals</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💎</div>
              <p className="text-sm text-gray-300">VIP Access</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
