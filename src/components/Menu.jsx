import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const categories = ['Kopi', 'Non-Kopi', 'Mocktail', 'Camilan'];
  const [activeCategory, setActiveCategory] = useState('Kopi');

  const menuItems = [
    { id: 1, name: 'Kopi Susu', price: 'Rp 22.000', category: 'Kopi', image: '/images/kopi susu.jpg?auto=format&fit=crop&q=80' },
    { id: 2, name: 'Cappucino Hot', price: 'Rp 28.000', category: 'Kopi', image: '/images/cappucino hot.jpg?auto=format&fit=crop&q=80' },
    { id: 3, name: 'Kopi Tubruk', price: 'Rp 32.000', category: 'Kopi', image: '/images/kopi tubruk.jpg?auto=format&fit=crop&q=80' },
    { id: 4, name: 'Americano Ice', price: 'Rp 30.000', category: 'Kopi', image: '/images/americano ice.jpg?auto=format&fit=crop&q=80' },
    { id: 5, name: 'Americano Hot', price: 'Rp 25.000', category: 'Kopi', image: '/images/americano hot.jpg?auto=format&fit=crop&q=120' },
    { id: 7, name: 'Dirty Latte', price: 'Rp 18.000', category: 'Kopi', image: '/images/dirty latte.jpg?auto=format&fit=crop&q=80' },
    { id: 8, name: 'Moccachino Ice', price: 'Rp 18.000', category: 'Kopi', image: '/images/moccachino ice.jpg?auto=format&fit=crop&q=80' },
    { id: 9, name: 'Cappucino Ice', price: 'Rp 18.000', category: 'Kopi', image: '/images/cappucino ice.jpg?auto=format&fit=crop&q=80' },

    { id: 10, name: 'Chocolate Ice', price: 'Rp 18.000', category: 'Non-Kopi', image: '/images/chocolate ice.jpg?auto=format&fit=crop&q=80' },
    { id: 11, name: 'Matcha Ice', price: 'Rp 18.000', category: 'Non-Kopi', image: '/images/matche ice.jpg?auto=format&fit=crop&q=80' },
    { id: 12, name: 'Redvelvet', price: 'Rp 18.000', category: 'Non-Kopi', image: '/images/redvelvet.jpg?auto=format&fit=crop&q=80' },
    { id: 13, name: 'Matchaberry', price: 'Rp 18.000', category: 'Non-Kopi', image: '/images/matchaberry.jpg?auto=format&fit=crop&q=80' },

    { id: 14, name: 'Sruni', price: 'Rp 18.000', category: 'Mocktail', image: '/images/sruni.jpg?auto=format&fit=crop&q=80' },
    { id: 15, name: 'Lychee Tea', price: 'Rp 18.000', category: 'Mocktail', image: '/images/lychee tea.jpg?auto=format&fit=crop&q=80' },
    { id: 16, name: 'Samiran', price: 'Rp 18.000', category: 'Mocktail', image: '/images/samiran.jpg?auto=format&fit=crop&q=80' },
    { id: 17, name: 'Kurko Skyblue', price: 'Rp 18.000', category: 'Mocktail', image: '/images/kurko skyblue.jpg?auto=format&fit=crop&q=80' },
    { id: 18, name: 'Pressoberry', price: 'Rp 18.000', category: 'Mocktail', image: '/images/pressoberry.jpg?auto=format&fit=crop&q=80' },

    { id: 19, name: 'French Fries', price: 'Rp 18.000', category: 'Camilan', image: '/images/french fries.jpg?auto=format&fit=crop&q=80' },
    { id: 20, name: 'Mix Platter', price: 'Rp 18.000', category: 'Camilan', image: '/images/mix platter.jpg?auto=format&fit=crop&q=80' },
  ];

  const [showAll, setShowAll] = useState(false);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="menu" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] -z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-medium uppercase tracking-widest mb-4 block"
          >
            Menu Spesial
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Cicipi Keajaiban di <span className="text-accent italic">Setiap Tegukan</span>
          </motion.h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-8 py-2 rounded-full transition-all duration-300 border font-medium ${activeCategory === cat
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                  : 'border-primary/20 text-primary/60 hover:border-primary/40'
                  }`}
              >
                {cat}
              </button>
            ))}
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group glass p-4 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-2"
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
                    Dibuat dengan bahan-bahan segar berkualitas tinggi untuk menjamin cita rasa yang konsisten.
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
