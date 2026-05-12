import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and luxury effect */}
      <div className="absolute inset-0 luxury-gradient opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-velore-cream via-white to-velore-cream"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-velore-gold rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-velore-gold rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-velore-gold rounded-full opacity-5 animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-velore-dark mb-6 leading-tight">
            Discover Signature
            <span className="block text-velore-gold">Luxury Fragrances</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafted with rare ingredients, timeless elegance, and modern sophistication — 
          explore premium perfumes designed to leave a lasting impression.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link 
            to="/shop" 
            className="btn-primary text-lg px-10 py-5 shadow-2xl hover:shadow-3xl"
          >
            Shop Collection
          </Link>
          <Link 
            to="/collections" 
            className="btn-secondary text-lg px-10 py-5"
          >
            Explore Best Sellers
          </Link>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-gray-500">
            <span className="text-sm mb-2">Discover More</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-velore-gold rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
