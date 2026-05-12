import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-velore-dark mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our curated selection of premium fragrances, each crafted with the finest ingredients 
            and designed to leave a lasting impression.
          </p>
          <div className="w-24 h-1 bg-velore-gold mx-auto mt-6"></div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-secondary text-lg px-12 py-4">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
