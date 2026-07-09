import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const stats = [
  ];

  return (
    <section id="about" className="section-padding bg-secondary overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/galeri/suasana.jpg?auto=format&fit=crop&q=80" 
                alt="Coffee Brewing" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
      
            
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full -z-0"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-accent font-medium uppercase tracking-widest mb-4 block">Kisah Kami</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
              Berawal dari <span className="text-primary">Kecintaan pada Kopi</span>
            </h2>
            <div className="text-text/70 text-lg mb-8 leading-relaxed">
              <p className="mb-4">
                Kurang Kopi didirikan pada tahun 2024 oleh dua pecinta kopi yang ingin menghadirkan pengalaman menikmati kopi berkualitas dengan harga terjangkau. Berlokasi di Pandean, dekat Kota Solo, kami menyajikan berbagai pilihan kopi, mulai dari Arabika spesial filter hingga kopi klasik yang cocok untuk berbagai kalangan.
              </p>
              
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isExpanded ? 'max-h-60 opacity-100 mb-4' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <p>
                  Kami percaya bahwa kopi tidak harus selalu pahit. Melalui sajian yang ramah di lambung dan mudah dinikmati, Kurang Kopi berkomitmen menghadirkan edukasi sekaligus pengalaman ngopi yang nyaman bagi remaja hingga dewasa.
                </p>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-accent hover:text-accent/80 font-semibold transition-colors duration-200 focus:outline-none flex items-center gap-1 mt-2 cursor-pointer"
              >
                <span>{isExpanded ? 'Lebih sedikit' : 'Lebih banyak'}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Arabika Spesial Pilihan', 'Rasa Nikmat, Tidak Terlalu Pahit', 'Tempat Santai untuk Berkumpul', 'Cocok untuk Remaja hingga Dewasa'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text/80">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-12 border-t border-primary/10 pt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h5 className="text-3xl font-bold text-primary mb-1">{stat.value}</h5>
                  <p className="text-text/50 text-sm font-medium uppercase tracking-tighter">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
