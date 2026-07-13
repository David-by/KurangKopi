import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [mapInView, setMapInView] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const contactInfo = [
    { 
      icon: <MapPin />, 
      label: 'Lokasi', 
      value: 'Garen, Pandeyan, Kec. Ngemplak, Kabupaten Boyolali, Jawa Tengah 57375'
    },
    { 
      icon: <Phone />, 
      label: 'WhatsApp', 
      value: '+62 821-3523-0971',
      link: 'https://wa.me/6282135230971'
    },
    { 
      icon: <Mail />, 
      label: 'Instagram', 
      value: 'kurangkopi__',
      link: 'https://www.instagram.com/kurangkopi__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    { 
      icon: <Clock />, 
      label: 'Jam Buka', 
      value: <>17:30 - 01:00 (Senin-Jumat)<br /> 17:00 - 01:00 (Sabtu-Minggu)</> 
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium uppercase tracking-widest mb-4 block">Hubungi Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text">Kunjungi <span className="text-primary">Kami</span></h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Info Side */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-5"
                >
                  <div className="p-4 bg-primary/5 text-primary rounded-2xl shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-text/40 text-sm font-bold uppercase tracking-wider mb-1">{info.label}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-text hover:text-primary transition-colors duration-300 font-medium text-lg leading-relaxed"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-text font-medium text-lg leading-relaxed">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Side */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white min-h-[400px] lg:min-h-[480px] bg-primary/5 flex items-center justify-center"
          >
            {mapInView ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.519333208931!2d110.7984484!3d-7.518190599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a138c137729c5%3A0x4520d174d7894339!2sKurang%20Kopi!5e0!3m2!1sid!2sid!4v1781243197479!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
                className="w-full h-full"
              ></iframe>
            ) : (
              <div className="flex flex-col items-center justify-center text-primary/40 gap-2 p-8">
                <MapPin className="w-8 h-8 animate-bounce text-primary/60" />
                <span className="text-sm font-medium tracking-wide">Memuat Peta...</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
