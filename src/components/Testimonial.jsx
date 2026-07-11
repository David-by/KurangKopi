import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Andi Wijaya',
      role: 'Penggemar Kopi',
      text: 'Tempat paling nyaman untuk kerja atau sekadar ngobrol. Kopinya punya karakter yang kuat dan barista sangat ramah.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Siska Putri',
      role: 'Pembuat Konten',
      text: 'Interiornya sangat aesthetic! Setiap sudut Instagrammable. Matcha Zen-nya wajib dicoba, rasa autentik banget.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Pekerja Lepas',
      text: 'Wifi kencang, banyak colokan, dan kopinya bikin melek. Paket lengkap buat yang suka WFC. Sukses terus Kurang Kopi!',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative background icons */}
      <Quote className="absolute -top-10 -left-10 w-64 h-64 text-secondary/5 -rotate-12" />
      <Quote className="absolute -bottom-10 -right-10 w-64 h-64 text-secondary/5 rotate-180" />

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium uppercase tracking-widest mb-4 block">Testimoni</span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">Apa Kata <span className="text-accent">Mereka?</span></h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto relative px-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass p-10 md:p-16 rounded-[40px] text-center relative shadow-2xl"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 rounded-full border-4 border-accent p-1 bg-primary">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-1 mb-8 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < testimonials[currentIndex].rating ? "#D4AF37" : "none"} 
                    className={i < testimonials[currentIndex].rating ? "text-accent" : "text-white/20"}
                  />
                ))}
              </div>

              <p className="text-accent/90 text-xl md:text-2xl italic leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>

              <div>
                <h4 className="text-accent text-2xl font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-secondary/40 font-medium tracking-widest uppercase text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-secondary hover:bg-accent hover:border-accent transition-all duration-300"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-secondary hover:bg-accent hover:border-accent transition-all duration-300"
          >
            <ChevronRight />
          </button>
        </motion.div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                currentIndex === i ? 'w-12 bg-accent' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
