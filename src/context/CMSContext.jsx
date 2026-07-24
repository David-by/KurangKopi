import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiService } from '../services/api';

const CMSContext = createContext();

const fullInitialMenuItems = [
  { id: '1', name: 'Kopi Susu', price: 'Rp 22.000', numericPrice: 22000, category: 'Kopi', image: '/images/kopi/kopi-susu.jpg', status: 'Available', description: 'Perpaduan seimbang espresso premium dengan susu segar manis yang lembut.' },
  { id: '2', name: 'Cappucino Hot', price: 'Rp 28.000', numericPrice: 28000, category: 'Kopi', image: '/images/kopi/cappucino-hot.jpg', status: 'Available', description: 'Espresso pekat dengan foam susu tebal dan taburan bubuk cokelat.' },
  { id: '3', name: 'Kopi Tubruk', price: 'Rp 32.000', numericPrice: 32000, category: 'Kopi', image: '/images/kopi/kopi-tubruk.jpg', status: 'Available', description: 'Kopi hitam tradisional Nusantara yang diseduh langsung bersama ampasnya.' },
  { id: '4', name: 'Americano Ice', price: 'Rp 30.000', numericPrice: 30000, category: 'Kopi', image: '/images/kopi/americano-ice.jpg', status: 'Available', description: 'Espresso dingin yang segar dan ringan, cocok untuk menemani hari yang panas.' },
  { id: '5', name: 'Americano Hot', price: 'Rp 25.000', numericPrice: 25000, category: 'Kopi', image: '/images/kopi/americano-hot.jpg', status: 'Available', description: 'Espresso panas murni dengan tambahan air untuk cita rasa kopi hitam yang bersih.' },
  { id: '6', name: 'Dirty Latte', price: 'Rp 18.000', numericPrice: 18000, category: 'Kopi', image: '/images/kopi/dirty-latte.jpg', status: 'Available', description: 'Espresso yang dituang perlahan di atas susu dingin berlemak untuk sensasi rasa unik.' },
  { id: '7', name: 'Moccachino Ice', price: 'Rp 18.000', numericPrice: 18000, category: 'Kopi', image: '/images/kopi/moccachino-ice.jpg', status: 'Available', description: 'Kopi susu dingin dengan sentuhan rasa cokelat premium yang manis.' },
  { id: '8', name: 'Cappucino Ice', price: 'Rp 18.000', numericPrice: 18000, category: 'Kopi', image: '/images/kopi/cappucino-ice.jpg', status: 'Available', description: 'Espresso dingin dengan foam susu lembut yang menyegarkan.' },

  { id: '9', name: 'Chocolate Ice', price: 'Rp 18.000', numericPrice: 18000, category: 'Non-Kopi', image: '/images/nonkopi/chocolate-ice.jpg', status: 'Available', description: 'Minuman cokelat dingin yang kental, manis, dan kaya rasa.' },
  { id: '10', name: 'Matcha Ice', price: 'Rp 18.000', numericPrice: 18000, category: 'Non-Kopi', image: '/images/nonkopi/matcha-ice.jpg', status: 'Available', description: 'Teh hijau matcha khas Jepang yang dipadu dengan susu segar dingin.' },
  { id: '11', name: 'Redvelvet', price: 'Rp 18.000', numericPrice: 18000, category: 'Non-Kopi', image: '/images/nonkopi/redvelvet.jpg', status: 'Available', description: 'Minuman red velvet manis lembut dengan rasa khas kue yang gurih.' },
  { id: '12', name: 'Matchaberry', price: 'Rp 18.000', numericPrice: 18000, category: 'Non-Kopi', image: '/images/nonkopi/matchaberry.jpg', status: 'Available', description: 'Perpaduan unik teh hijau matcha dengan rasa segar buah stroberi.' },

  { id: '13', name: 'Sruni', price: 'Rp 18.000', numericPrice: 18000, category: 'Mocktail', image: '/images/mocktail/sruni.jpg', status: 'Available', description: 'Mocktail segar khas Kurang Kopi dengan cita rasa asam manis yang unik.' },
  { id: '14', name: 'Lychee Tea', price: 'Rp 18.000', numericPrice: 18000, category: 'Mocktail', image: '/images/mocktail/lychee-tea.jpg', status: 'Available', description: 'Teh manis dingin yang dipadu dengan buah leci segar.' },
  { id: '15', name: 'Samiran', price: 'Rp 18.000', numericPrice: 18000, category: 'Mocktail', image: '/images/mocktail/samiran.jpg', status: 'Available', description: 'Mocktail kopi dengan rasa buah segar yang mendinginkan dahaga.' },
  { id: '16', name: 'Kurko Skyblue', price: 'Rp 18.000', numericPrice: 18000, category: 'Mocktail', image: '/images/mocktail/kurko-skyblue.jpg', status: 'Available', description: 'Mocktail berwarna biru langit yang segar dengan sensasi soda manis.' },
  { id: '17', name: 'Pressoberry', price: 'Rp 18.000', numericPrice: 18000, category: 'Mocktail', image: '/images/mocktail/pressoberry.jpg', status: 'Available', description: 'Kombinasi unik espresso dengan kesegaran sirup buah beri yang asam manis.' },

  { id: '18', name: 'French Fries', price: 'Rp 18.000', numericPrice: 18000, category: 'Camilan', image: '/images/camilan/french-fries.jpg', status: 'Available', description: 'Kentang goreng gurih dan renyah, disajikan hangat dengan saus pilihan.' },
  { id: '19', name: 'Mix Platter', price: 'Rp 18.000', numericPrice: 18000, category: 'Camilan', image: '/images/camilan/mix-platter.jpg', status: 'Available', description: 'Kombinasi berbagai camilan renyah yang cocok untuk dinikmati bersama teman.' }
];

const initialReviews = [
  { id: '1', name: 'Andi Wijaya', review: 'Tempat paling nyaman untuk kerja atau sekadar ngobrol. Kopinya punya karakter yang kuat dan barista sangat ramah.', rating: 5 },
  { id: '2', name: 'Siska Putri', review: 'Interiornya sangat aesthetic! Setiap sudut Instagrammable. Matcha Zen-nya wajib dicoba.', rating: 5 },
  { id: '3', name: 'Budi Santoso', review: 'Wifi kencang, banyak colokan, dan kopinya bikin melek. Sukses terus Kurang Kopi!', rating: 5 }
];

const initialSettings = {
  shopName: "Kurang Kopi",
  tagline: "Setiap Tegukan Punya Cerita",
  phone: "+62 812-3456-7890",
  email: "info@kurangkopi.my.id",
  address: "Jl. Kopi Harapan No. 45, Indonesia",
  openHours: "Senin - Minggu: 08.00 - 23.00 WIB",
  isOpen: true,
};

export const CMSProvider = ({ children }) => {
  const [menus, setMenus] = useState(() => {
    const saved = localStorage.getItem('kurangkopi_cms_menus');
    return saved ? JSON.parse(saved) : fullInitialMenuItems;
  });

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('kurangkopi_cms_reviews');
    return saved ? JSON.parse(saved) : initialReviews;
  });

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('kurangkopi_cms_settings');
    return saved ? JSON.parse(saved) : initialSettings;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return localStorage.getItem('kurangkopi_admin_session') === 'true';
  });

  // Fetch live API data from Laravel if server is online
  useEffect(() => {
    async function fetchApiData() {
      try {
        const res = await apiService.getMenus();
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          setMenus(res.data);
        }
      } catch (err) {
        console.log('Using local fallback state');
      }
    }
    fetchApiData();
  }, []);

  useEffect(() => {
    localStorage.setItem('kurangkopi_cms_menus', JSON.stringify(menus));
  }, [menus]);

  useEffect(() => {
    localStorage.setItem('kurangkopi_cms_reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('kurangkopi_cms_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('kurangkopi_admin_session', isAdminLoggedIn ? 'true' : 'false');
  }, [isAdminLoggedIn]);

  // Menu CRUD
  const addMenu = (newMenu) => {
    const item = {
      ...newMenu,
      id: Date.now().toString(),
      status: newMenu.status || 'Available',
      image: newMenu.image || '/images/kopi/kopi-susu.jpg'
    };
    setMenus(prev => [item, ...prev]);
    apiService.createMenu(item).catch(() => {});
  };

  const updateMenu = (id, updatedData) => {
    setMenus(prev => prev.map(item => item.id.toString() === id.toString() ? { ...item, ...updatedData } : item));
    apiService.updateMenu(id, updatedData).catch(() => {});
  };

  const deleteMenu = (id) => {
    setMenus(prev => prev.filter(item => item.id.toString() !== id.toString()));
    apiService.deleteMenu(id).catch(() => {});
  };

  // Review CRUD
  const addReview = (newReview) => {
    const item = {
      ...newReview,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0]
    };
    setReviews(prev => [item, ...prev]);
  };

  const deleteReview = (id) => {
    setReviews(prev => prev.filter(item => item.id.toString() !== id.toString()));
  };

  // Settings Update
  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Auth Functions
  const loginAdmin = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      setIsAdminLoggedIn(true);
      return { success: true };
    }
    return { success: false, message: 'Username atau password salah! (Kredensial: admin / admin123)' };
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <CMSContext.Provider value={{
      menus,
      addMenu,
      updateMenu,
      deleteMenu,
      reviews,
      addReview,
      deleteReview,
      settings,
      updateSettings,
      isAdminLoggedIn,
      loginAdmin,
      logoutAdmin
    }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => useContext(CMSContext);
