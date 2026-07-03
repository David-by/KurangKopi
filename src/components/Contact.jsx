import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: <MapPin />, label: 'Lokasi', value: 'Garen, Pandeyan, Kec. Ngemplak, Kabupaten Boyolali, Jawa Tengah 57375' },
    { icon: <Phone />, label: 'WhatsApp', value: '+62 882-2470-4682' },
    { icon: <Mail />, label: 'Instagram', value: 'kurangkopi__' },
    { icon: <Clock />, label: 'Jam Buka', value: <>17:30 - 01:00 (Senin-Jumat)<br /> 16:30 - 01:00 (Sabtu-Minggu)</> },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-widest mb-4 block">Hubungi Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text">Kunjungi <span className="text-primary">Kami</span></h2>
        </div>

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
                    <p className="text-text font-medium text-lg leading-relaxed">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white min-h-[400px] lg:min-h-[480px]"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
