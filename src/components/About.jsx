import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Biji Kopi Spesial', value: '15+' },
    { label: 'Barista Profesional', value: '8' },
    { label: 'Pelanggan Puas', value: '10k+' },
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
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80" 
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
              Dimulai dari Kerinduan akan <span className="text-primary">Kopi Sejati</span>
            </h2>
            <p className="text-text/70 text-lg mb-8 leading-relaxed">
              Kurang Kopi didirikan oleh sekelompok pecinta kopi yang percaya bahwa setiap seduhan 
              memiliki cerita tersendiri. Kami berkeliling nusantara untuk menemukan biji kopi 
              terbaik dan membawanya langsung ke meja Anda.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Biji Kopi Arabica & Robusta Pilihan', 'Teknik Roasting Tradisional', 'Suasana Kafe yang Tenang', 'Barista Bersertifikat'].map((item) => (
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
