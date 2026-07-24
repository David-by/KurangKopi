import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import { Plus, Search, Edit3, Trash2, X } from 'lucide-react';

const AdminMenu = () => {
  const { menus, addMenu, updateMenu, deleteMenu } = useCMS();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Kopi',
    price: '',
    description: '',
    image: '/images/kopi/kopi-susu.jpg',
    status: 'Available'
  });

  const categories = ['Semua', 'Kopi', 'Non-Kopi', 'Mocktail', 'Camilan'];

  const filteredMenus = menus.filter((item) => {
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      category: 'Kopi',
      price: 'Rp 20.000',
      description: '',
      image: '/images/kopi/kopi-susu.jpg',
      status: 'Available'
    });
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category,
      price: item.price,
      description: item.description,
      image: item.image,
      status: item.status || 'Available'
    });
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateMenu(editingItem.id, formData);
    } else {
      addMenu(formData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus menu "${name}"?`)) {
      deleteMenu(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-primary/10 p-6 rounded-3xl shadow-md">
        <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[280px]">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40" />
            <input
              type="text"
              placeholder="Cari nama menu atau deskripsi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-background border border-primary/20 focus:border-primary rounded-2xl pl-11 pr-4 py-2.5 text-xs text-text placeholder-text/40 outline-none transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary text-secondary shadow-md font-bold'
                    : 'bg-background text-text/70 border border-primary/15 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Add Menu Button */}
        <button
          onClick={openAddModal}
          className="bg-primary hover:bg-accent text-secondary px-5 py-2.5 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
        >
          <Plus size={16} /> Tambah Menu Baru
        </button>
      </div>

      {/* Menu Table / Grid */}
      <div className="bg-white border border-primary/10 rounded-3xl overflow-hidden shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-primary/5 text-primary uppercase text-[10px] tracking-wider border-b border-primary/10 font-bold">
              <tr>
                <th className="py-4 px-6">Gambar & Nama Menu</th>
                <th className="py-4 px-6">Kategori</th>
                <th className="py-4 px-6">Harga</th>
                <th className="py-4 px-6">Deskripsi</th>
                <th className="py-4 px-6 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10 text-text">
              {filteredMenus.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-text/50">
                    Tidak ada menu yang ditemukan.
                  </td>
                </tr>
              ) : (
                filteredMenus.map((item) => (
                  <tr key={item.id} className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-xl object-cover bg-secondary border border-primary/10"
                        />
                        <div>
                          <span className="font-bold text-primary block text-sm">{item.name}</span>
                          <span className="text-[10px] text-emerald-800 bg-emerald-100 font-semibold px-2 py-0.5 rounded-md inline-block mt-0.5">
                            {item.status || 'Available'}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-bold text-accent">
                      {item.category}
                    </td>
                    <td className="py-4 px-6 font-bold text-primary">
                      {item.price}
                    </td>
                    <td className="py-4 px-6 max-w-xs text-text/70 truncate">
                      {item.description}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => openEditModal(item)}
                          className="p-2 bg-secondary/80 hover:bg-primary hover:text-secondary text-primary rounded-xl transition-all cursor-pointer"
                          title="Edit Menu"
                        >
                          <Edit3 size={15} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id, item.name)}
                          className="p-2 bg-red-50 hover:bg-red-500 hover:text-white text-red-600 rounded-xl transition-all cursor-pointer"
                          title="Hapus Menu"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* CRUD Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-primary/20 rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-6 text-text">
            <div className="flex justify-between items-center border-b border-primary/10 pb-4">
              <h3 className="text-lg font-serif font-bold text-primary">
                {editingItem ? 'Edit Item Menu' : 'Tambah Menu Baru'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-text/50 hover:text-primary p-1 rounded-lg cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-text/80 font-semibold mb-1.5">Nama Menu</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Misal: Kopi Susu Aren"
                  className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-text/80 font-semibold mb-1.5">Kategori</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
                  >
                    <option value="Kopi">Kopi</option>
                    <option value="Non-Kopi">Non-Kopi</option>
                    <option value="Mocktail">Mocktail</option>
                    <option value="Camilan">Camilan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-text/80 font-semibold mb-1.5">Harga</label>
                  <input
                    type="text"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="Rp 22.000"
                    className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-text/80 font-semibold mb-1.5">Path / URL Gambar</label>
                <input
                  type="text"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="/images/kopi/kopi-susu.jpg"
                  className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none font-mono text-[11px]"
                />
              </div>

              <div>
                <label className="block text-text/80 font-semibold mb-1.5">Deskripsi</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Jelaskan cita rasa atau bahan dari menu ini..."
                  className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-primary/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-primary/20 text-text/70 hover:text-primary font-semibold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-primary hover:bg-accent text-secondary font-bold shadow-md cursor-pointer"
                >
                  Simpan Menu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMenu;
