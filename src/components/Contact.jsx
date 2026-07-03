import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: <MapPin />, label: 'Lokasi', value: 'Garen, Pandeyan, Kec. Ngemplak, Kabupaten Boyolali, Jawa Tengah 57375' },
    { icon: <Phone />, label: 'Telepon', value: '+62 812-3456-7890' },
    { icon: <Mail />, label: 'Email', value: '@kurangkopi.com' },
    { icon: <Clock />, label: 'Jam Buka', value: '17:30 - 01:00 (Setiap Hari)' },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-widest mb-4 block">Hubungi Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text">Kunjungi <span className="text-primary">Kami</span></h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Info Side */}
          <div className="w-full lg:w-1/3">
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
                  <div className="p-4 bg-primary/5 text-primary rounded-2xl">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-text/40 text-sm font-bold uppercase tracking-wider mb-1">{info.label}</h4>
                    <p className="text-text font-medium text-lg">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder/Embed */}
            <div className="mt-12 rounded-3xl overflow-hidden h-[300px] shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.519333208931!2d110.7984484!3d-7.518190599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a138c137729c5%3A0x4520d174d7894339!2sKurang%20Kopi!5e0!3m2!1sid!2sid!4v1781243197479!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-primary/10"
          >
            <h3 className="text-3xl font-bold text-text mb-8">Kirim Pesan</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text/40 text-sm font-bold mb-2 ml-2">Nama Anda</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full px-6 py-4 bg-secondary/50 border-0 rounded-2xl focus:ring-2 focus:ring-coffee outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-text/40 text-sm font-bold mb-2 ml-2">Alamat Email</label>
                  <input
                    type="email"
                    placeholder="Masukkan email Anda"
                    className="w-full px-6 py-4 bg-secondary/50 border-0 rounded-2xl focus:ring-2 focus:ring-coffee outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-text/40 text-sm font-bold mb-2 ml-2">Topik Pesan</label>
                <select className="w-full px-6 py-4 bg-secondary/50 border-0 rounded-2xl focus:ring-2 focus:ring-coffee outline-none transition-all appearance-none">
                  <option>Pertanyaan Umum</option>
                  <option>Kemitraan</option>
                  <option>Umpan Balik</option>
                  <option>Reservasi</option>
                </select>
              </div>
              <div>
                <label className="block text-text/40 text-sm font-bold mb-2 ml-2">Pesan</label>
                <textarea
                  rows="5"
                  placeholder="Apa yang bisa kami bantu?"
                  className="w-full px-6 py-4 bg-secondary/50 border-0 rounded-2xl focus:ring-2 focus:ring-coffee outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full py-5 flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
              >
                Kirim Pesan
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
