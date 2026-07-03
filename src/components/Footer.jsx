import React from 'react';
import { Coffee, ArrowUp } from 'lucide-react';
import { Instagram, Tiktok, Whatsapp } from './Icons';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] rounded-full -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex flex-col items-start gap-1 mb-8 group">
              <img 
                src="/logo.png" 
                alt="Kurang Kopi Logo" 
                className="h-28 md:h-32 w-auto max-w-full object-contain brightness-0 invert" 
              />
            </a>
            <p className="text-white/70 leading-relaxed mb-8">
              Tumbuh menjadi ruang pertama yang menyajikan kopi autentik, diiringi kehangatan suasana rumah, tempat di mana setiap tawa, percakapan, dan kisah.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/kurangkopi__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { Icon: Tiktok, href: "https://www.tiktok.com/@kurangkopi_?is_from_webapp=1&sender_device=pc" },
                { Icon: Whatsapp, href: "https://wa.me/" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#F5E6D3' }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white transition-colors"
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Tautan Cepat</h4>
            <ul className="space-y-4">
              {[
                { name: 'Beranda', id: 'home' },
                { name: 'Tentang Kami', id: 'about' },
                { name: 'Menu', id: 'menu' },
                { name: 'Galeri', id: 'gallery' },
                { name: 'Kontak', id: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={`#${link.id}`} className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-white transition-all duration-300 group-hover:w-4"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Layanan Kami</h4>
            <ul className="space-y-4">
              {['Pemanggang Kopi', 'Kursus Barista', 'Ruang Acara', 'Pesanan Massal', 'Merchandise'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-white transition-all duration-300 group-hover:w-4"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Bergabunglah</h4>
            <p className="text-white/70 text-sm mb-6">Subscribe untuk info promo dan event menarik lainnya.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Alamat email"
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white outline-none focus:border-white transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-primary px-6 rounded-xl hover:bg-white/90 font-bold transition-colors">
                Gabung
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/50 text-sm">
            © 2024 <span className="text-white/80 font-bold">Kurang Kopi</span>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all animate-bounce"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
