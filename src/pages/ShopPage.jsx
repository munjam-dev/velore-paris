import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CATEGORIES = ['All', 'Luxury Unisex Perfume', 'Fresh Aquatic Perfume', 'Floral Luxury Perfume', 'Oriental Amber Perfume'];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Best Rated', value: 'rating' },
];

const ShopPage = ({ cartItems, addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [addedIds, setAddedIds] = useState([]);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedIds(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds(prev => prev.filter(id => id !== product.id));
    }, 1500);
  };

  const filtered = products
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <main className="min-h-screen bg-[#050505]">
        {/* Hero Banner */}
        <section className="relative bg-velore-dark text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 border-2 border-velore-gold rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-96 h-96 border-2 border-velore-gold rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-velore-gold font-semibold uppercase tracking-widest text-sm mb-4">Explore Our Collection</p>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">Shop All Fragrances</h1>
              <p className="text-gray-300 text-lg max-w-xl mx-auto">
                Discover our complete collection of luxury perfumes, crafted for every occasion and personality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Filters Row */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-10">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === cat
                        ? 'bg-velore-gold text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:border-velore-gold border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-white border border-gray-200 text-gray-700 rounded-lg px-4 py-2.5 focus:outline-none focus:border-velore-gold transition-colors cursor-pointer text-sm font-medium"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <p className="text-sm text-gray-500 mb-6">{filtered.length} product{filtered.length !== 1 ? 's' : ''} found</p>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filtered.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="product-card group"
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative h-72 overflow-hidden bg-gray-50">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {product.rating >= 4.8 && (
                        <div className="absolute top-3 left-3 bg-velore-gold text-white px-3 py-1 rounded-full text-xs font-bold">
                          Bestseller
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pb-4 justify-center">
                        <span className="text-white text-sm font-semibold tracking-wide">Quick View →</span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-5">
                    <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-playfair font-semibold text-velore-dark text-lg mb-2 group-hover:text-velore-gold transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex text-yellow-400 text-sm mb-3">
                      {'★'.repeat(Math.floor(product.rating))}
                      <span className="text-gray-400 ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold text-velore-dark">₹{product.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-400 line-through ml-2">₹{Math.floor(product.price * 1.3).toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          addedIds.includes(product.id)
                            ? 'bg-green-500 text-white'
                            : 'bg-velore-gold text-white hover:bg-yellow-600'
                        }`}
                      >
                        {addedIds.includes(product.id) ? '✓ Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
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

export default ShopPage;
