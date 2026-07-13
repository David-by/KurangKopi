import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from './Icons';

const Gallery = () => {
  const photos = [
    { id: 1, url: '/images/galeri/suasana1.jpg', span: 'col-span-1 row-span-1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80', span: 'col-span-1 row-span-2' },
    { id: 3, url: '/images/galeri/suasana.jpg', span: 'col-span-2 row-span-1' },
    { id: 4, url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80', span: 'col-span-1 row-span-1' },
    { id: 5, url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=600&q=80', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-accent font-medium uppercase tracking-widest mb-4 block">Pengalaman Visual</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text">
              Momen di <span className="text-primary">Kurang Kopi</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[600px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`relative group overflow-hidden rounded-3xl ${photo.span} will-change-[transform,opacity]`}
            >
              <img 
                src={photo.url} 
                alt="Gallery" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Fixed missing icon import in the prompt-generated component
import { Coffee } from 'lucide-react';

export default Gallery;
