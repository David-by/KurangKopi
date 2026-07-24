import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { Coffee, MessageSquareQuote, Store, Plus, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const AdminDashboard = ({ setActiveTab }) => {
  const { menus, reviews, settings, updateSettings } = useCMS();

  const totalMenus = menus.length;
  const totalReviews = reviews.length;
  const kopiCategoryCount = menus.filter(m => m.category === 'Kopi').length;

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-primary rounded-3xl p-8 text-secondary relative overflow-hidden shadow-xl border border-primary/20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 blur-[90px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold backdrop-blur-md mb-4 border border-secondary/30">
            <ShieldCheck size={14} /> System Administrator
          </span>
          <h2 className="text-3xl font-serif font-bold tracking-tight mb-2 text-secondary">Selamat Datang di CMS Kurang Kopi!</h2>
          <p className="text-secondary/80 text-sm leading-relaxed mb-6">
            Kelola menu, ulasan pelanggan, serta informasi operasional kedai kopi Anda dengan mudah secara real-time.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('menu')}
              className="bg-secondary text-primary hover:bg-white px-5 py-2.5 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <Plus size={16} /> Kelola Menu Kopi
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className="bg-primary/80 hover:bg-primary border border-secondary/30 text-secondary px-5 py-2.5 rounded-2xl font-bold text-xs flex items-center gap-2 backdrop-blur-md transition-all cursor-pointer"
            >
              <Store size={16} /> Pengaturan Toko
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Total Menu */}
        <div className="bg-white border border-primary/10 p-6 rounded-3xl flex items-center justify-between shadow-md hover:shadow-lg transition-all">
          <div>
            <span className="text-text/60 text-xs font-semibold block mb-1">Total Item Menu</span>
            <span className="text-3xl font-bold text-primary">{totalMenus}</span>
            <span className="text-[11px] text-accent font-medium block mt-1">{kopiCategoryCount} varian Kopi</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
            <Coffee size={24} />
          </div>
        </div>

        {/* Card 2: Total Ulasan */}
        <div className="bg-white border border-primary/10 p-6 rounded-3xl flex items-center justify-between shadow-md hover:shadow-lg transition-all">
          <div>
            <span className="text-text/60 text-xs font-semibold block mb-1">Ulasan Pelanggan</span>
            <span className="text-3xl font-bold text-primary">{totalReviews}</span>
            <span className="text-[11px] text-emerald-700 font-medium block mt-1">Rating rata-rata: 5.0 ⭐</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
            <MessageSquareQuote size={24} />
          </div>
        </div>

        {/* Card 3: Status Toko */}
        <div className="bg-white border border-primary/10 p-6 rounded-3xl flex items-center justify-between shadow-md hover:shadow-lg transition-all">
          <div>
            <span className="text-text/60 text-xs font-semibold block mb-1">Status Toko Saat Ini</span>
            <div className="flex items-center gap-2 mt-1">
              <span className={`w-2.5 h-2.5 rounded-full ${settings.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`}></span>
              <span className="text-lg font-bold text-primary">{settings.isOpen ? 'BUKA' : 'TUTUP'}</span>
            </div>
            <button
              onClick={() => updateSettings({ isOpen: !settings.isOpen })}
              className="text-[11px] text-accent hover:underline font-semibold block mt-1 cursor-pointer"
            >
              Ubah ke {settings.isOpen ? 'Tutup' : 'Buka'}
            </button>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-secondary text-primary border border-primary/15 flex items-center justify-center">
            <Store size={24} />
          </div>
        </div>

        {/* Card 4: Backend Mode */}
        <div className="bg-white border border-primary/10 p-6 rounded-3xl flex items-center justify-between shadow-md hover:shadow-lg transition-all">
          <div>
            <span className="text-text/60 text-xs font-semibold block mb-1">API Backend</span>
            <span className="text-sm font-bold text-primary block mt-1">Laravel REST API</span>
            <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1 mt-1">
              <CheckCircle2 size={12} /> Ready Connect
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-800 border border-purple-200 flex items-center justify-center font-mono font-bold text-xs">
            API
          </div>
        </div>
      </div>

      {/* Quick Menu List Preview */}
      <div className="bg-white border border-primary/10 rounded-3xl p-6 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-serif font-bold text-primary">Daftar Menu Terbaru</h3>
            <p className="text-xs text-text/60">Ringkasan item menu yang aktif di website publik</p>
          </div>
          <button
            onClick={() => setActiveTab('menu')}
            className="text-xs font-semibold text-accent hover:text-primary flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            Lihat Semua Menu <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menus.slice(0, 6).map((item) => (
            <div key={item.id} className="bg-background border border-primary/10 p-4 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-secondary shrink-0 border border-primary/10">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md inline-block mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-text truncate">{item.name}</h4>
                <span className="text-xs font-semibold text-accent">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
