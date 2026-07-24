import React, { useState, useEffect } from 'react';
import { CMSProvider } from './context/CMSContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';

function MainAppContent() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Admin Login View
  if (currentHash === '#admin-login') {
    return (
      <AdminLogin
        onLoginSuccess={() => {
          window.location.hash = '#admin';
        }}
        onBackToPublic={() => {
          window.location.hash = '';
        }}
      />
    );
  }

  // Admin Dashboard View
  if (currentHash === '#admin') {
    return (
      <AdminLayout
        onBackToPublic={() => {
          window.location.hash = '';
        }}
        onNavigateToLogin={() => {
          window.location.hash = '#admin-login';
        }}
      />
    );
  }

  // Public Customer View
  return (
    <div className="bg-secondary selection:bg-primary selection:text-secondary min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CMSProvider>
      <MainAppContent />
    </CMSProvider>
  );
}

export default App;
