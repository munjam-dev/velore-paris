import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

const TEAM = [
  { name: 'Rohan Sharma', role: 'Founder & Master Perfumer', initial: 'R', bio: 'With 15 years in luxury fragrance, Rohan founded VELORÉ PARIS to bring world-class scents to discerning customers.' },
  { name: 'Priya Nair', role: 'Creative Director', initial: 'P', bio: 'Priya crafts each product experience from bottle design to the final scent story.' },
  { name: 'Aditya Reddy', role: 'Head of Sourcing', initial: 'A', bio: 'Aditya travels the world to source the rarest and finest fragrance ingredients.' },
];

const MILESTONES = [
  { year: '2019', title: 'The Beginning', desc: 'VELORÉ PARIS was born in a small atelier in Hyderabad with a vision to democratize luxury.' },
  { year: '2021', title: 'First Collection', desc: 'Our signature Midnight Oud collection launched to critical acclaim and sold out within weeks.' },
  { year: '2023', title: 'National Expansion', desc: 'Now shipping to 25+ cities across India with 10,000+ happy customers.' },
  { year: '2024', title: 'Global Vision', desc: 'Preparing to launch internationally with new ultra-luxury offerings.' },
];

const AboutPage = ({ cartItems }) => {
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header cartItemsCount={cartItemsCount} />
      <main className="min-h-screen bg-[#050505]">
        {/* Hero */}
        <section className="relative bg-velore-dark text-white py-28 overflow-hidden">
          <div className="absolute inset-0 luxury-gradient opacity-20"></div>
          <div className="absolute inset-0 opacity-5">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-velore-gold rounded-full"
                style={{
                  width: `${(i + 1) * 100}px`,
                  height: `${(i + 1) * 100}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              ></div>
            ))}
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-velore-gold font-semibold uppercase tracking-widest text-sm mb-4">Our Story</p>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
                About<br /><span className="text-velore-gold">VELORÉ PARIS</span>
              </h1>
              <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                We believe fragrance is an art — a language that speaks without words, a memory that lasts forever.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-[#050505]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-velore-gold font-semibold uppercase tracking-widest text-sm mb-3">Our Mission</p>
                <h2 className="text-4xl font-playfair font-bold text-velore-dark mb-6">
                  Crafting Scents That<br />Define Moments
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  VELORÉ PARIS was founded on the belief that luxury shouldn't be a privilege — it should be an experience available to anyone who appreciates true quality.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Every perfume we create is a collaboration between master perfumers, rare ingredients from around the world, and a deep understanding of what makes a fragrance timeless.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: '10,000+', label: 'Happy Customers' },
                    { number: '25+', label: 'Cities Served' },
                    { number: '4.9/5', label: 'Avg. Rating' },
                  ].map(stat => (
                    <div key={stat.label} className="text-center bg-white rounded-xl p-5 shadow-sm">
                      <p className="text-2xl font-bold text-velore-gold font-playfair">{stat.number}</p>
                      <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-velore-dark rounded-2xl p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-velore-gold opacity-10 rounded-full -translate-y-24 translate-x-24"></div>
                  <p className="font-playfair text-3xl italic text-velore-gold mb-6">"</p>
                  <p className="text-xl leading-relaxed text-gray-200 font-playfair italic mb-6">
                    We don't just sell perfumes. We sell confidence, identity, and the feeling of walking into a room and making it yours.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-velore-gold rounded-full flex items-center justify-center font-bold text-white text-lg">R</div>
                    <div>
                      <p className="font-semibold">Rohan Sharma</p>
                      <p className="text-gray-400 text-sm">Founder, VELORÉ PARIS</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <AboutSection />

        {/* Timeline */}
        <section className="py-20 bg-[#050505]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-playfair font-bold text-velore-dark mb-4">Our Journey</h2>
              <div className="w-24 h-1 bg-velore-gold mx-auto"></div>
            </motion.div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-velore-gold opacity-30 hidden md:block"></div>
              <div className="space-y-12">
                {MILESTONES.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-md inline-block w-full md:max-w-sm">
                        <span className="text-velore-gold font-bold text-lg">{milestone.year}</span>
                        <h3 className="font-playfair font-bold text-velore-dark text-xl mt-1 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.desc}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-velore-gold rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-playfair font-bold text-velore-dark mb-4">Meet the Team</h2>
              <p className="text-gray-600 max-w-xl mx-auto">The passionate people behind every bottle of VELORÉ PARIS.</p>
              <div className="w-24 h-1 bg-velore-gold mx-auto mt-6"></div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {TEAM.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-[#050505] rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-500"
                >
                  <div className="w-20 h-20 bg-velore-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-3xl font-playfair shadow-lg">
                    {member.initial}
                  </div>
                  <h3 className="font-playfair font-bold text-velore-dark text-xl mb-1">{member.name}</h3>
                  <p className="text-velore-gold text-sm font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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

export default AboutPage;
