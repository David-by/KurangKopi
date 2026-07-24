import React from 'react';
import { ArrowUp, Lock } from 'lucide-react';
import { Instagram, Tiktok, Whatsapp } from './Icons';
import { motion } from 'framer-motion';
import { useCMS } from '../context/CMSContext';

const Footer = () => {
  const { settings, isAdminLoggedIn } = useCMS();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary py-10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-white/5 blur-[100px] rounded-full -z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start">
          
          {/* Brand Col */}
          <div className="flex flex-col items-start gap-3">
            <a href="#home" className="flex items-center gap-1 group">
              <img 
                src="/logo-footer.png" 
                alt="Kurang Kopi Logo" 
                className="h-16 md:h-20 w-auto max-w-full object-contain brightness-0 invert" 
              />
            </a>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              {settings.tagline || 'Tumbuh menjadi ruang pertama yang menyajikan kopi autentik, diiringi kehangatan suasana rumah.'}
            </p>
            <div className="flex gap-3 mt-2">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/kurangkopi__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { Icon: Tiktok, href: "https://www.tiktok.com/@kurangkopi_?is_from_webapp=1&sender_device=pc" },
                { Icon: Whatsapp, href: `https://wa.me/${(settings.phone || '').replace(/[^0-9]/g, '')}` }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: '#F5E6D3' }}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white transition-colors"
                >
                  <social.Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-end">
            <h4 className="text-white font-bold text-lg mb-4">Tautan Cepat</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm md:text-right">
              {[
                { name: 'Beranda', href: '#home' },
                { name: 'Tentang Kami', href: '#about' },
                { name: 'Menu', href: '#menu' },
                { name: 'Galeri', href: '#gallery' },
                { name: 'Kontak', href: '#contact' }
              ].map((link) => (
                <li key={link.name} className="md:col-span-2">
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group md:flex-row-reverse">
                    <span className="w-0 h-px bg-white transition-all duration-300 group-hover:w-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} <span className="text-white/80 font-bold">{settings.shopName || 'Kurang Kopi'}</span>. All rights reserved.
            </p>
            <a
              href={isAdminLoggedIn ? '#admin' : '#admin-login'}
              className="text-[11px] text-white/40 hover:text-accent flex items-center gap-1 transition-colors underline"
            >
              <Lock size={12} />
              {isAdminLoggedIn ? 'Dashboard Admin' : 'Admin Portal'}
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
