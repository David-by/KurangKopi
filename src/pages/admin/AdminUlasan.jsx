import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import { Plus, Trash2, Star, X } from 'lucide-react';

const AdminUlasan = () => {
  const { reviews, addReview, deleteReview } = useCMS();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 5
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(formData);
    setFormData({ name: '', review: '', rating: 5 });
    setIsModalOpen(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Hapus ulasan dari "${name}"?`)) {
      deleteReview(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-primary/10 p-6 rounded-3xl shadow-md">
        <div>
          <h3 className="text-lg font-serif font-bold text-primary">Kelola Ulasan & Testimoni</h3>
          <p className="text-xs text-text/60">Ulasan ini ditampilkan pada bagian Testimonial di Halaman Utama</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-accent text-secondary px-5 py-2.5 rounded-2xl font-bold text-xs flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          <Plus size={16} /> Tambah Ulasan Manual
        </button>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-white border border-primary/10 p-6 rounded-3xl space-y-4 flex flex-col justify-between shadow-md hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star size={14} key={i} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-text/50 font-medium">{rev.date || 'Terbaru'}</span>
              </div>
              <p className="text-xs text-text/80 italic leading-relaxed">"{rev.review}"</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-primary/10">
              <span className="text-xs font-bold text-primary">{rev.name}</span>
              <button
                onClick={() => handleDelete(rev.id, rev.name)}
                className="p-2 bg-red-50 hover:bg-red-500 text-red-600 hover:text-white rounded-xl transition-all cursor-pointer"
                title="Hapus Ulasan"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Add Review */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-primary/20 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-6 text-text">
            <div className="flex justify-between items-center border-b border-primary/10 pb-4">
              <h3 className="text-lg font-serif font-bold text-primary">Tambah Ulasan Pelanggan</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-text/50 hover:text-primary">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-text/80 font-semibold mb-1.5">Nama Pelanggan</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Misal: Budi Santoso"
                  className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
                />
              </div>

              <div>
                <label className="block text-text/80 font-semibold mb-1.5">Isi Ulasan / Testimoni</label>
                <textarea
                  required
                  rows="3"
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  placeholder="Komentar pelanggan mengenai kopi atau tempat..."
                  className="w-full bg-background border border-primary/20 focus:border-primary rounded-xl p-3 text-text outline-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-primary/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-primary/20 text-text/70 font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-primary text-secondary font-bold hover:bg-accent"
                >
                  Simpan Ulasan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUlasan;
