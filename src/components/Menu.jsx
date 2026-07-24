import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';

const Menu = () => {
  const { menus } = useCMS();
  const categories = ['Kopi', 'Non-Kopi', 'Mocktail', 'Camilan'];
  const [activeCategory, setActiveCategory] = useState('Kopi');
  const [showAll, setShowAll] = useState(false);

  const filteredItems = menus.filter(item => item.category === activeCategory);
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="menu" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] -z-0 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-widest mb-4 block">
            Menu Spesial
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cicipi Keajaiban di <span className="text-accent italic">Setiap Tegukan</span>
          </h2>

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
                  className={`relative px-8 py-2.5 rounded-full border font-medium cursor-pointer transition-all duration-300 text-sm md:text-base focus:outline-none select-none overflow-hidden ${
                    isActive 
                      ? 'bg-primary text-secondary border-primary shadow-lg' 
                      : 'text-primary border-primary/20 hover:bg-primary/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        <div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedItems.length === 0 ? (
            <div className="col-span-full text-center py-12 text-primary/60 font-medium">
              Belum ada menu untuk kategori {activeCategory}. Tambahkan melalui Dashboard Admin CMS.
            </div>
          ) : (
            displayedItems.map((item, index) => (
              <div
                key={item.id}
                style={{ animationDelay: `${index * 50}ms` }}
                className="group glass p-4 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-menu-item"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 bg-primary/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/kopi/kopi-susu.jpg';
                    }}
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
              </div>
            ))
          )}
        </div>

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
