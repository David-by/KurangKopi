import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { ShieldCheck, Server } from 'lucide-react';

const AdminHeader = ({ title, subtitle }) => {
  const { settings } = useCMS();
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-primary/10 px-8 py-4 sticky top-0 z-30 flex flex-wrap justify-between items-center gap-4 shadow-sm">
      <div>
        <h1 className="text-xl font-serif font-bold text-primary tracking-tight">{title}</h1>
        {subtitle && <p className="text-xs text-text/70 mt-0.5 font-sans">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        {/* Backend Indicator Badge */}
        <div className="hidden sm:flex items-center gap-2 bg-secondary/60 border border-primary/15 px-3 py-1.5 rounded-full text-xs text-primary font-medium">
          <Server size={14} className="text-accent" />
          <span>Backend Mode: <strong className="text-primary font-bold">Laravel Ready (Rest API)</strong></span>
        </div>

        {/* Date Badge */}
        <div className="hidden lg:block text-xs font-medium text-text/70 bg-background border border-primary/10 px-3 py-1.5 rounded-full">
          {today}
        </div>

        {/* Admin Profile */}
        <div className="flex items-center gap-3 bg-secondary/80 border border-primary/15 py-1.5 px-3 rounded-2xl">
          <div className="w-7 h-7 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-xs shadow-md">
            A
          </div>
          <div className="text-left leading-none">
            <span className="block text-xs font-bold text-primary">Admin Kopi</span>
            <span className="text-[10px] text-accent flex items-center gap-1 mt-0.5 font-semibold">
              <ShieldCheck size={10} /> Super Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
