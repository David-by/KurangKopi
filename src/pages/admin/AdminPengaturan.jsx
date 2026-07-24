import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import { Save, Store, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const AdminPengaturan = () => {
  const { settings, updateSettings } = useCMS();
  const [formData, setFormData] = useState({ ...settings });
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="bg-white border border-primary/10 p-6 rounded-3xl shadow-md flex items-center justify-between">
        <div>
          <h3 className="text-lg font-serif font-bold text-primary">Pengaturan Informasi Kedai Kopi</h3>
          <p className="text-xs text-text/60">Informasi ini akan terintegrasi langsung pada Footer & Kontak di website utama</p>
        </div>
        {isSaved && (
          <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 border border-emerald-300 px-4 py-2 rounded-2xl text-xs font-bold animate-fade-in">
            <CheckCircle size={16} /> Berhasil Disimpan!
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-primary/10 p-8 rounded-3xl shadow-md space-y-6 text-xs text-text">
        {/* Status Operasional */}
        <div className="p-4 rounded-2xl bg-background border border-primary/15 flex items-center justify-between">
          <div>
            <span className="font-bold text-primary text-sm block">Status Buka Kedai</span>
            <span className="text-text/60 text-xs">Tampilkan apakah kedai sedang menerima pesanan / buka</span>
          </div>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, isOpen: !formData.isOpen })}
            className={`px-5 py-2.5 rounded-xl font-bold transition-all cursor-pointer ${
              formData.isOpen
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-red-100 text-red-700 border border-red-200'
            }`}
          >
            {formData.isOpen ? 'BUKA ✅' : 'TUTUP ❌'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-text/80 font-semibold mb-2 flex items-center gap-2">
              <Store size={15} className="text-accent" /> Nama Kedai
            </label>
            <input
              type="text"
              required
              value={formData.shopName}
              onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
              className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
            />
          </div>

          <div>
            <label className="block text-text/80 font-semibold mb-2 flex items-center gap-2">
              <Phone size={15} className="text-accent" /> Nomor Telepon / WA
            </label>
            <input
              type="text"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
            />
          </div>

          <div>
            <label className="block text-text/80 font-semibold mb-2 flex items-center gap-2">
              <Mail size={15} className="text-accent" /> Email Kontak
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
            />
          </div>

          <div>
            <label className="block text-text/80 font-semibold mb-2 flex items-center gap-2">
              <Clock size={15} className="text-accent" /> Jam Operasional
            </label>
            <input
              type="text"
              required
              value={formData.openHours}
              onChange={(e) => setFormData({ ...formData, openHours: e.target.value })}
              className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-text/80 font-semibold mb-2 flex items-center gap-2">
            <MapPin size={15} className="text-accent" /> Alamat Kedai
          </label>
          <input
            type="text"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
          />
        </div>

        <div>
          <label className="block text-text/80 font-semibold mb-2">Tagline Kedai Kopi</label>
          <input
            type="text"
            required
            value={formData.tagline}
            onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
            className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
          />
        </div>

        <div className="pt-4 border-t border-primary/10 flex justify-end">
          <button
            type="submit"
            className="bg-primary hover:bg-accent text-secondary px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
          >
            <Save size={16} /> Simpan Pengaturan
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPengaturan;
