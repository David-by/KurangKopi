import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const categories = ['Kopi', 'Non-Kopi', 'Mocktail', 'Camilan'];
  const [activeCategory, setActiveCategory] = useState('Kopi');

  const menuItems = [
    { id: 1, name: 'Kopi Susu', price: 'Rp 22.000', category: 'Kopi', image: '/images/kopi/kopi-susu.jpg?auto=format&fit=crop&q=80', description: 'Perpaduan seimbang espresso premium dengan susu segar manis yang lembut.' },
    { id: 2, name: 'Cappucino Hot', price: 'Rp 28.000', category: 'Kopi', image: '/images/kopi/cappucino-hot.jpg?auto=format&fit=crop&q=80', description: 'Espresso pekat dengan foam susu tebal dan taburan bubuk cokelat.' },
    { id: 3, name: 'Kopi Tubruk', price: 'Rp 32.000', category: 'Kopi', image: '/images/kopi/kopi-tubruk.jpg?auto=format&fit=crop&q=80', description: 'Kopi hitam tradisional Nusantara yang diseduh langsung bersama ampasnya untuk rasa pekat maksimal.' },
    { id: 4, name: 'Americano Ice', price: 'Rp 30.000', category: 'Kopi', image: '/images/kopi/americano-ice.jpg?auto=format&fit=crop&q=80', description: 'Espresso dingin yang segar dan ringan, cocok untuk menemani hari yang panas.' },
    { id: 5, name: 'Americano Hot', price: 'Rp 25.000', category: 'Kopi', image: '/images/kopi/americano-hot.jpg?auto=format&fit=crop&q=120', description: 'Espresso panas murni dengan tambahan air untuk cita rasa kopi hitam yang bersih dan aromatik.' },
    { id: 7, name: 'Dirty Latte', price: 'Rp 18.000', category: 'Kopi', image: '/images/kopi/dirty-latte.jpg?auto=format&fit=crop&q=80', description: 'Espresso yang dituang perlahan di atas susu dingin berlemak untuk sensasi rasa yang unik.' },
    { id: 8, name: 'Moccachino Ice', price: 'Rp 18.000', category: 'Kopi', image: '/images/kopi/moccachino-ice.jpg?auto=format&fit=crop&q=80', description: 'Kopi susu dingin dengan sentuhan rasa cokelat premium yang manis dan lezat.' },
    { id: 9, name: 'Cappucino Ice', price: 'Rp 18.000', category: 'Kopi', image: '/images/kopi/cappucino-ice.jpg?auto=format&fit=crop&q=80', description: 'Espresso dingin dengan foam susu lembut yang menyegarkan.' },

    { id: 10, name: 'Chocolate Ice', price: 'Rp 18.000', category: 'Non-Kopi', image: '/images/nonkopi/chocolate-ice.jpg?auto=format&fit=crop&q=80', description: 'Minuman cokelat dingin yang kental, manis, dan kaya rasa.' },
    { id: 11, name: 'Matcha Ice', price: 'Rp 18.000', category: 'Non-Kopi', image: '/images/nonkopi/matcha-ice.jpg?auto=format&fit=crop&q=80', description: 'Teh hijau matcha khas Jepang yang dipadu dengan susu segar dingin yang creamy.' },
    { id: 12, name: 'Redvelvet', price: 'Rp 18.000', category: 'Non-Kopi', image: '/images/nonkopi/redvelvet.jpg?auto=format&fit=crop&q=80', description: 'Minuman red velvet manis lembut dengan rasa khas kue yang gurih.' },
    { id: 13, name: 'Matchaberry', price: 'Rp 18.000', category: 'Non-Kopi', image: '/images/nonkopi/matchaberry.jpg?auto=format&fit=crop&q=80', description: 'Perpaduan unik teh hijau matcha dengan rasa segar buah stroberi.' },

    { id: 14, name: 'Sruni', price: 'Rp 18.000', category: 'Mocktail', image: '/images/mocktail/sruni.jpg?auto=format&fit=crop&q=80', description: 'Mocktail segar khas Kurang Kopi dengan cita rasa asam manis yang unik.' },
    { id: 15, name: 'Lychee Tea', price: 'Rp 18.000', category: 'Mocktail', image: '/images/mocktail/lychee-tea.jpg?auto=format&fit=crop&q=80', description: 'Teh manis dingin yang dipadu dengan buah leci segar.' },
    { id: 16, name: 'Samiran', price: 'Rp 18.000', category: 'Mocktail', image: '/images/mocktail/samiran.jpg?auto=format&fit=crop&q=80', description: 'Mocktail kopi dengan rasa buah segar yang mendinginkan dahaga.' },
    { id: 17, name: 'Kurko Skyblue', price: 'Rp 18.000', category: 'Mocktail', image: '/images/mocktail/kurko-skyblue.jpg?auto=format&fit=crop&q=80', description: 'Mocktail berwarna biru langit yang segar dengan sensasi soda manis.' },
    { id: 18, name: 'Pressoberry', price: 'Rp 18.000', category: 'Mocktail', image: '/images/mocktail/pressoberry.jpg?auto=format&fit=crop&q=80', description: 'Kombinasi unik espresso dengan kesegaran sirup buah beri yang asam manis.' },

    { id: 19, name: 'French Fries', price: 'Rp 18.000', category: 'Camilan', image: '/images/camilan/french-fries.jpg?auto=format&fit=crop&q=80', description: 'Kentang goreng gurih dan renyah, disajikan hangat dengan saus pilihan.' },
    { id: 20, name: 'Mix Platter', price: 'Rp 18.000', category: 'Camilan', image: '/images/camilan/mix-platter.jpg?auto=format&fit=crop&q=80', description: 'Kombinasi berbagai camilan renyah yang cocok untuk dinikmati bersama teman.' },
  ];

  const [showAll, setShowAll] = useState(false);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="menu" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] -z-0 pointer-events-none will-change-transform"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium uppercase tracking-widest mb-4 block"
          >
            Menu Spesial
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Cicipi Keajaiban di <span className="text-accent italic">Setiap Tegukan</span>
          </motion.h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAll(false);
                  }}
                  className="relative px-8 py-2.5 rounded-full border border-primary/20 font-medium cursor-pointer transition-colors duration-300 text-sm md:text-base focus:outline-none select-none overflow-hidden"
                  style={{ color: isActive ? '#F5E6D3' : '#164E3B' }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-primary -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                transition={{ 
                  type: "spring", 
                  stiffness: 380, 
                  damping: 30,
                  mass: 0.8
                }}
                className="group glass p-4 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/40"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md text-secondary px-4 py-1 rounded-full text-sm font-bold">
                    {item.category}
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-accent font-bold">{item.price}</span>
                  </div>
                  <p className="text-primary/60 text-sm leading-relaxed mb-6">
                    {item.description || 'Dibuat dengan bahan-bahan segar berkualitas tinggi untuk menjamin cita rasa yang konsisten.'}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-primary"
            >
              {showAll ? 'Lebih Sedikit' : 'Lihat Lebih Banyak'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Menu;
