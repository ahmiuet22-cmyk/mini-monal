import React, { useState } from 'react';
import { Sparkles, Eye, Image as ImageIcon, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/menuData';
import Lightbox from '../components/Lightbox';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['All', 'Food', 'BBQ', 'Karahi', 'Family Dining', 'Restaurant'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="gallery-page-wrapper" style={{ paddingTop: '5.5rem', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 2rem', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 70%)' }}>
        <div className="container">
          <span className="section-tag">
            <Camera size={14} /> Visual Showcase
          </span>
          <h1 className="section-title">
            Photo <span className="text-gold-gradient">Gallery</span>
          </h1>
          <p className="section-desc" style={{ maxWidth: '680px', margin: '0 auto 1.5rem' }}>
            A glimpse into the authentic atmosphere, sizzling live charcoal grills, steaming iron woks, and memorable family dining moments at Mini Monal Restaurant.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery-item card-hover-lift reveal-up delay-${((index % 3) + 1) * 100}`}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy" 
              />
              <div className="gallery-overlay">
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--gold-gradient)',
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                }}>
                  <Eye size={20} />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, fontFamily: 'var(--font-serif)' }}>
                  {item.title}
                </h4>
                <span className="badge-gold" style={{ fontSize: '0.7rem' }}>
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Component */}
      <Lightbox 
        isOpen={lightboxOpen}
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
