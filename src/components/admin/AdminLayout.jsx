import React, { useState } from 'react';
import ProtectedRoute from './ProtectedRoute';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import AdminDashboard from '../../pages/admin/AdminDashboard';
import AdminMenu from '../../pages/admin/AdminMenu';
import AdminUlasan from '../../pages/admin/AdminUlasan';
import AdminPengaturan from '../../pages/admin/AdminPengaturan';

const AdminLayout = ({ onBackToPublic, onNavigateToLogin }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const pageTitles = {
    dashboard: { title: 'Dashboard Ringkasan', subtitle: 'Overview performa dan aktivitas toko kopi' },
    menu: { title: 'Manajemen Menu Kopi & Makanan', subtitle: 'Kelola item menu, harga, kategori, dan deskripsi' },
    reviews: { title: 'Manajemen Ulasan Pelanggan', subtitle: 'Moderasi dan atur testimoni yang tampil di website' },
    settings: { title: 'Pengaturan Informasi Kedai', subtitle: 'Ubah informasi kontak, alamat, dan jam operasional' }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard setActiveTab={setActiveTab} />;
      case 'menu':
        return <AdminMenu />;
      case 'reviews':
        return <AdminUlasan />;
      case 'settings':
        return <AdminPengaturan />;
      default:
        return <AdminDashboard setActiveTab={setActiveTab} />;
    }
  };

  return (
    <ProtectedRoute onNavigateToLogin={onNavigateToLogin}>
      <div className="min-h-screen bg-background text-text flex font-sans antialiased">
        {/* Sidebar Navigation */}
        <AdminSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onBackToPublic={onBackToPublic}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <AdminHeader
            title={pageTitles[activeTab]?.title || 'Dashboard Admin'}
            subtitle={pageTitles[activeTab]?.subtitle}
          />
          <main className="p-8 flex-1">
            {renderContent()}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
