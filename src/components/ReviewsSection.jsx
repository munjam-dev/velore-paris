import React from 'react';
import { motion } from 'framer-motion';

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Rahul K.",
      rating: 5,
      comment: "Midnight Oud smells incredibly luxurious and lasts all day.",
      product: "Midnight Oud"
    },
    {
      name: "Sneha P.",
      rating: 5,
      comment: "Velvet Rose is elegant and perfect for evening wear.",
      product: "Velvet Rose"
    },
    {
      name: "Arjun M.",
      rating: 5,
      comment: "Ocean Breeze gives a super fresh premium vibe.",
      product: "Ocean Breeze"
    }
  ];

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
            Customer Reviews
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our customers have to say about their VELORÉ PARIS experience.
          </p>
          <div className="w-24 h-1 bg-velore-gold mx-auto mt-6"></div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-velore-cream rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Rating Stars */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-2xl">★</span>
                ))}
              </div>
              
              {/* Review Comment */}
              <p className="text-gray-700 text-lg mb-6 italic">
                "{review.comment}"
              </p>
              
              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-velore-dark">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.product}</p>
                </div>
                <div className="w-12 h-12 bg-velore-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="text-3xl">🏆</div>
              <span className="text-gray-700 font-medium">Award Winning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-3xl">⭐</div>
              <span className="text-gray-700 font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-3xl">🚚</div>
              <span className="text-gray-700 font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-3xl">💎</div>
              <span className="text-gray-700 font-medium">Premium Quality</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
