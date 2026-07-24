import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import { Coffee, Lock, User, AlertCircle, ArrowLeft } from 'lucide-react';

const AdminLogin = ({ onLoginSuccess, onBackToPublic }) => {
  const { loginAdmin } = useCMS();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      const res = loginAdmin(username, password);
      setLoading(false);

      if (res.success) {
        onLoginSuccess();
      } else {
        setErrorMsg(res.message);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-primary text-secondary flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Back Button */}
      <button
        onClick={onBackToPublic}
        className="absolute top-6 left-6 flex items-center gap-2 text-sm text-secondary/90 hover:text-white transition-colors bg-white/10 border border-white/20 px-4 py-2 rounded-xl backdrop-blur-md cursor-pointer"
      >
        <ArrowLeft size={16} />
        Kembali ke Website Utama
      </button>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white/95 border border-primary/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl text-text relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary text-secondary rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
            <Coffee size={32} className="stroke-[2.5]" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-primary tracking-tight">Login Portal Admin</h1>
          <p className="text-xs text-text/70 mt-1">CMS Pengelolaan Content Kurang Kopi</p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-700 text-xs flex items-center gap-3">
            <AlertCircle size={18} className="shrink-0 text-red-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-text/80 mb-2">Username</label>
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username admin"
                className="w-full bg-background border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-text placeholder-text/40 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-text/80 mb-2">Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password admin"
                className="w-full bg-background border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-text placeholder-text/40 outline-none transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-accent text-secondary py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg shadow-primary/25 active:scale-[0.98] cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Memproses Login...' : 'Masuk ke Dashboard'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-primary/10 text-center">
          <p className="text-[11px] text-text/60">
            Kredensial Demo Default: <strong className="text-primary font-bold">admin</strong> / <strong className="text-primary font-bold">admin123</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
