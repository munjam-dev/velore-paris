import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = ({ cartItems, addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedToCart, setAddedToCart] = useState(false);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (!product) {
    return (
      <>
        <Header cartItemsCount={cartItemsCount} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold text-velore-dark mb-4">Product Not Found</h1>
            <Link to="/shop" className="btn-primary">Back to Shop</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <main className="min-h-screen bg-[#050505] pt-8">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-velore-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-velore-gold transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-velore-dark font-medium">{product.name}</span>
          </nav>
        </div>

        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white mb-4 h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={product.images[currentImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
                {product.rating >= 4.8 && (
                  <div className="absolute top-4 left-4 bg-velore-gold text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Bestseller
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative overflow-hidden rounded-lg h-16 transition-all duration-300 ${
                      currentImage === index
                        ? 'ring-2 ring-velore-gold ring-offset-2 shadow-lg'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-start"
            >
              <span className="text-velore-gold font-semibold text-sm uppercase tracking-widest mb-2">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-velore-dark mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                </div>
                <span className="text-gray-600 font-medium">{product.rating}/5</span>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-end space-x-4 mb-6 pb-6 border-b border-gray-200">
                <span className="text-4xl font-bold text-velore-dark">₹{product.price.toLocaleString()}</span>
                <span className="text-xl text-gray-400 line-through mb-1">₹{Math.floor(product.price * 1.3).toLocaleString()}</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-1">
                  Save {Math.round(((product.price * 1.3 - product.price) / (product.price * 1.3)) * 100)}%
                </span>
              </div>

              {/* Short Description */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Fragrance Notes Preview */}
              <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
                <h3 className="font-playfair font-semibold text-velore-dark mb-3 text-lg">Fragrance Notes</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Top', notes: product.fragranceNotes.top, color: 'bg-yellow-50 border-yellow-200' },
                    { label: 'Middle', notes: product.fragranceNotes.middle, color: 'bg-rose-50 border-rose-200' },
                    { label: 'Base', notes: product.fragranceNotes.base, color: 'bg-amber-50 border-amber-200' },
                  ].map(({ label, notes, color }) => (
                    <div key={label} className={`${color} border rounded-lg p-3 text-center`}>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{label}</p>
                      {notes.map(note => (
                        <p key={note} className="text-xs text-gray-700">{note}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2 mb-8">
                {product.highlights.map((h, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <span className="text-velore-gold">✓</span>
                    <span className="text-sm text-gray-700">{h}</span>
                  </div>
                ))}
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-4 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors"
                  >−</button>
                  <span className="px-6 py-3 font-semibold text-lg border-x-2 border-gray-200">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-4 py-3 text-lg font-semibold hover:bg-gray-100 transition-colors"
                  >+</button>
                </div>
                <motion.button
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.97 }}
                  className={`flex-1 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg ${
                    addedToCart
                      ? 'bg-green-500 text-white'
                      : 'bg-velore-gold text-white hover:bg-yellow-600 hover:shadow-xl'
                  }`}
                >
                  {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
                </motion.button>
              </div>

              {/* In Stock */}
              <div className={`flex items-center space-x-2 text-sm ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="font-medium">{product.inStock ? 'In Stock — Ready to Ship' : 'Out of Stock'}</span>
              </div>
            </motion.div>
          </div>

          {/* Tabs: Description / Notes / Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="flex border-b border-gray-200 mb-8">
              {['description', 'notes', 'reviews'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-4 font-semibold capitalize transition-all duration-300 border-b-2 -mb-px ${
                    activeTab === tab
                      ? 'border-velore-gold text-velore-gold'
                      : 'border-transparent text-gray-500 hover:text-velore-dark'
                  }`}
                >
                  {tab === 'notes' ? 'Fragrance Notes' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'description' && (
                  <div className="max-w-3xl">
                    <p className="text-lg text-gray-700 leading-relaxed">{product.fullDescription}</p>
                  </div>
                )}
                {activeTab === 'notes' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { label: 'Top Notes', notes: product.fragranceNotes.top, icon: '🌸', desc: 'First impression — 15 minutes' },
                      { label: 'Heart Notes', notes: product.fragranceNotes.middle, icon: '💐', desc: 'The core — 2–4 hours' },
                      { label: 'Base Notes', notes: product.fragranceNotes.base, icon: '🌳', desc: 'The lasting memory — 6+ hours' },
                    ].map(({ label, notes, icon, desc }) => (
                      <div key={label} className="bg-white rounded-xl p-8 shadow-sm text-center">
                        <div className="text-4xl mb-4">{icon}</div>
                        <h3 className="font-playfair font-bold text-velore-dark text-xl mb-1">{label}</h3>
                        <p className="text-xs text-gray-400 italic mb-4">{desc}</p>
                        <div className="space-y-2">
                          {notes.map(note => (
                            <span key={note} className="inline-block bg-velore-cream text-velore-dark px-3 py-1 rounded-full text-sm font-medium mx-1">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div className="space-y-6 max-w-3xl">
                    <div className="flex items-center space-x-6 mb-8 p-6 bg-white rounded-xl shadow-sm">
                      <div className="text-center">
                        <p className="text-5xl font-bold text-velore-dark">{product.rating}</p>
                        <div className="flex justify-center text-yellow-400 my-1">
                          {'★'.repeat(Math.floor(product.rating))}
                        </div>
                        <p className="text-sm text-gray-500">{product.reviews} reviews</p>
                      </div>
                      <div className="h-16 border-l border-gray-200"></div>
                      <p className="text-gray-600 italic">"Exceptional fragrance crafted for those who appreciate true luxury."</p>
                    </div>
                    <p className="text-gray-500 text-center py-8">All {product.reviews} verified reviews confirm the premium quality of {product.name}.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Related Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-playfair font-bold text-velore-dark mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                  >
                    <div className="h-56 overflow-hidden">
                      <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-gray-500 mb-1">{p.category}</p>
                      <h3 className="font-playfair font-semibold text-velore-dark text-lg mb-1">{p.name}</h3>
                      <p className="font-bold text-velore-dark">₹{p.price.toLocaleString()}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
