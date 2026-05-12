import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const COLLECTIONS = [
  {
    name: 'Oriental Nights',
    description: 'Bold, warm and mysterious — for those who command attention.',
    icon: '🌙',
    gradient: 'from-amber-900/80 to-yellow-900/60',
    products: products.filter(p => p.category.includes('Oriental') || p.category.includes('Unisex')),
  },
  {
    name: 'Floral Dreams',
    description: 'Soft, romantic and elegant — femininity in every drop.',
    icon: '🌸',
    gradient: 'from-rose-800/80 to-pink-700/60',
    products: products.filter(p => p.category.includes('Floral')),
  },
  {
    name: 'Ocean Fresh',
    description: 'Clean, crisp and invigorating — the spirit of the coast.',
    icon: '🌊',
    gradient: 'from-blue-800/80 to-cyan-700/60',
    products: products.filter(p => p.category.includes('Aquatic')),
  },
];

const CollectionsPage = ({ cartItems, addToCart }) => {
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <main className="min-h-screen bg-[#050505]">
        {/* Hero */}
        <section className="relative bg-velore-dark text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-48 h-48 border-2 border-velore-gold rounded-full"></div>
            <div className="absolute bottom-0 right-20 w-72 h-72 border-2 border-velore-gold rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-velore-gold font-semibold uppercase tracking-widest text-sm mb-4">Curated for You</p>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">Our Collections</h1>
              <p className="text-gray-300 text-lg max-w-xl mx-auto">
                Each collection tells a unique story — explore the world of VELORÉ PARIS.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-20">
          <div className="container mx-auto px-4 space-y-24">
            {COLLECTIONS.map((collection, idx) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Collection Header */}
                <div className={`flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-end'} mb-10`}>
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-5xl">{collection.icon}</span>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-velore-dark">{collection.name}</h2>
                      <p className="text-gray-600 mt-1">{collection.description}</p>
                    </div>
                  </div>
                  <div className="w-20 h-1 bg-velore-gold"></div>
                </div>

                {/* Products in Collection */}
                {collection.products.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collection.products.map((product, pIdx) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="group"
                      >
                        <Link to={`/product/${product.id}`} className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                          <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${collection.gradient}`}>
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover mix-blend-luminosity group-hover:scale-110 group-hover:mix-blend-normal transition-all duration-700"
                            />
                            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                              <div className="text-white">
                                <p className="text-xs uppercase tracking-widest opacity-80 mb-1">{product.category}</p>
                                <h3 className="font-playfair text-xl font-bold">{product.name}</h3>
                              </div>
                            </div>
                          </div>
                          <div className="p-5 flex justify-between items-center">
                            <div>
                              <div className="flex text-yellow-400 text-sm mb-1">
                                {'★'.repeat(Math.floor(product.rating))}
                                <span className="text-gray-400 ml-1 text-xs">({product.reviews})</span>
                              </div>
                              <span className="text-xl font-bold text-velore-dark">₹{product.price.toLocaleString()}</span>
                            </div>
                            <button
                              onClick={(e) => { e.preventDefault(); addToCart(product); }}
                              className="bg-velore-gold text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition-all duration-300"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                    <p className="text-gray-500">Coming soon to this collection.</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-velore-dark text-white text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-playfair font-bold mb-4">Can't Decide?</h2>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">Browse our full collection and find the scent that speaks to you.</p>
            <Link to="/shop" className="btn-primary text-lg">Shop All Products</Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CollectionsPage;
