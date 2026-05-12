import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    {
      title: "Premium Quality",
      description: "Imported fragrance oils with long-lasting performance.",
      icon: "✨"
    },
    {
      title: "Luxury Packaging",
      description: "Elegant designer bottles crafted for a premium experience.",
      icon: "🎁"
    },
    {
      title: "Skin Safe",
      description: "Dermatologically tested and skin-friendly formulas.",
      icon: "🌿"
    },
    {
      title: "Fast Delivery",
      description: "Secure packaging with nationwide shipping.",
      icon: "🚚"
    }
  ];

  return (
    <section className="py-20 bg-velore-cream">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-velore-dark mb-6">
            About VELORÉ PARIS
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              VELORÉ PARIS is a luxury fragrance brand dedicated to crafting premium perfumes that 
              combine artistry, elegance, and emotion. Every fragrance is carefully designed using 
              high-quality ingredients sourced from around the world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe perfume is more than a scent — it is identity, confidence, and unforgettable presence.
            </p>
          </div>
          <div className="w-24 h-1 bg-velore-gold mx-auto mt-8"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-velore-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
