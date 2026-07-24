import React from 'react';
import { LayoutDashboard, Coffee, MessageSquareQuote, Settings, ExternalLink, LogOut } from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

const AdminSidebar = ({ activeTab, setActiveTab, onBackToPublic }) => {
  const { logoutAdmin, settings } = useCMS();

  const navItems = [
    { id: 'dashboard', label: 'Ringkasan', icon: LayoutDashboard },
    { id: 'menu', label: 'Kelola Menu', icon: Coffee },
    { id: 'reviews', label: 'Ulasan Pelanggan', icon: MessageSquareQuote },
    { id: 'settings', label: 'Pengaturan Toko', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-primary text-secondary flex flex-col justify-between shrink-0 min-h-screen sticky top-0 shadow-2xl border-r border-primary/20">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-secondary text-primary flex items-center justify-center font-bold shadow-lg">
            <Coffee size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <h1 className="font-serif font-bold text-secondary text-lg leading-tight">{settings.shopName || 'Kurang Kopi'}</h1>
            <span className="text-[11px] font-medium tracking-wider uppercase text-accent bg-secondary/90 px-2 py-0.5 rounded-full inline-block mt-0.5 shadow-sm">
              CMS Admin
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2">
          <div className="px-3 pb-2 text-[11px] font-semibold text-secondary/60 uppercase tracking-widest">
            Menu Utama
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-secondary text-primary shadow-xl font-bold translate-x-1'
                    : 'text-secondary/80 hover:text-secondary hover:bg-white/10'
                }`}
              >
                <Icon size={19} className={isActive ? 'stroke-[2.5] text-primary' : 'text-secondary/70'} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer / Quick Actions */}
      <div className="p-4 border-t border-white/10 space-y-2">
        <button
          onClick={onBackToPublic}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-secondary/90 hover:text-secondary hover:bg-white/10 border border-white/15 transition-all cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <ExternalLink size={15} />
            Lihat Website Utama
          </span>
        </button>

        <button
          onClick={() => {
            logoutAdmin();
            onBackToPublic();
          }}
          className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-red-200 hover:bg-red-500/20 border border-transparent hover:border-red-400/30 transition-all cursor-pointer"
        >
          <LogOut size={15} />
          Keluar (Logout)
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
