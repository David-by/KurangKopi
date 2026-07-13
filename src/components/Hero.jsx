import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.jpg';


const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-scroll"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(245, 230, 211, 0.80), rgba(245, 230, 211, 0.70)), url(${heroBg})` }}
      ></div>
 
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-medium tracking-[0.3em] uppercase mb-4 block"
          >
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary font-bold mb-6 leading-tight">
            Kurang Kopi, <br />
            <span className="text-accent italic font-serif">Kurang Cerita</span>
          </h1>
          
          <p className="text-primary/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            Tempat menikmati kopi, berbagi cerita, dan menciptakan momen bersama.
          </p>
 
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Jelajahi Menu Kami
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Pelajari Kisah Kami
            </motion.a>
          </div>
        </motion.div>
      </div>



      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Hero;
