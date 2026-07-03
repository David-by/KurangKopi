import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from './Icons';

const Gallery = () => {
  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80', span: 'col-span-1 row-span-1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80', span: 'col-span-1 row-span-2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80', span: 'col-span-2 row-span-1' },
    { id: 4, url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80', span: 'col-span-1 row-span-1' },
    { id: 5, url: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-medium uppercase tracking-widest mb-4 block">Pengalaman Visual</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text">
              Momen di <span className="text-primary">Kurang Kopi</span>
            </h2>
          </div>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-1"
          >
            <Instagram size={20} />
            Ikuti Instagram kami
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[600px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl ${photo.span}`}
            >
              <img 
                src={photo.url} 
                alt="Gallery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-secondary text-center p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Coffee className="mx-auto mb-2" />
                  <p className="font-bold tracking-widest text-xs uppercase">Lihat Foto</p>
                </div>
              </div>
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
