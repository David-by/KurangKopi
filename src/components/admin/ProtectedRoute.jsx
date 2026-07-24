import React from 'react';
import { useCMS } from '../../context/CMSContext';

const ProtectedRoute = ({ children, onNavigateToLogin }) => {
  const { isAdminLoggedIn } = useCMS();

  if (!isAdminLoggedIn) {
    if (onNavigateToLogin) {
      onNavigateToLogin();
    }
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 max-w-md w-full text-center shadow-2xl">
          <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            🔒
          </div>
          <h2 className="text-2xl font-bold mb-2">Akses Terbatas Admin</h2>
          <p className="text-slate-400 text-sm mb-6">
            Anda harus login terlebih dahulu untuk mengakses Dashboard Admin CMS Kurang Kopi.
          </p>
          <button
            onClick={() => window.location.hash = '#admin-login'}
            className="w-full bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-amber-600/30 cursor-pointer"
          >
            Buka Halaman Login Admin
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
