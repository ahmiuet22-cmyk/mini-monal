import React, { useState, useMemo } from 'react';
import {
  Search,
  Flame,
  Utensils,
  Sparkles,
  Crown,
  Plus,
  Check,
  Info,
  Filter,
  X,
  Share2
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_DATA, RESTAURANT_INFO } from '../data/menuData';

export default function MenuPage({ addToCart, openCart }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPortionMap, setSelectedPortionMap] = useState({}); // { dishId: 'Half' | 'Full' }
  const [selectedDishDetail, setSelectedDishDetail] = useState(null);
  const [addedToast, setAddedToast] = useState('');

  // Handle portion switch
  const handlePortionSelect = (dishId, portion) => {
    setSelectedPortionMap(prev => ({
      ...prev,
      [dishId]: portion
    }));
  };

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_DATA.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Group items by category if "all" is active, or show filtered
  const groupedCategories = useMemo(() => {
    if (activeCategory !== 'all') {
      const catObj = MENU_CATEGORIES.find(c => c.id === activeCategory);
      return [{
        category: catObj || { id: activeCategory, name: 'Filtered Items' },
        items: filteredItems
      }];
    }

    return MENU_CATEGORIES.map(cat => {
      const catItems = filteredItems.filter(item => item.category === cat.id);
      return {
        category: cat,
        items: catItems
      };
    }).filter(group => group.items.length > 0);
  }, [activeCategory, filteredItems]);

  const handleAddItem = (dish) => {
    let price = dish.price;
    let portion = null;

    if (dish.halfPrice && dish.fullPrice) {
      const currentPortion = selectedPortionMap[dish.id] || 'Full';
      portion = currentPortion;
      price = currentPortion === 'Half' ? dish.halfPrice : dish.fullPrice;
    } else if (dish.halfPrice && !dish.fullPrice) {
      const currentPortion = selectedPortionMap[dish.id] || 'Half';
      portion = currentPortion;
      price = dish.halfPrice;
    } else if (!dish.halfPrice && dish.fullPrice) {
      portion = 'Full';
      price = dish.fullPrice;
    }

    addToCart({
      id: dish.id,
      name: dish.name,
      price: price || 0,
      portion: portion,
      quantity: 1
    });

    setAddedToast(`Added ${dish.name} ${portion ? `(${portion})` : ''} to tray!`);
    setTimeout(() => setAddedToast(''), 2500);
  };

  return (
    <div className="menu-page-wrapper" style={{ paddingTop: '5.5rem', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Toast Notification */}
      {addedToast && (
        <div style={{
          position: 'fixed',
          top: '90px',
          right: '24px',
          zIndex: 1000,
          background: 'var(--gold-gradient)',
          color: '#000',
          padding: '0.75rem 1.4rem',
          borderRadius: 'var(--radius-full)',
          fontWeight: 700,
          fontSize: '0.9rem',
          boxShadow: '0 8px 30px rgba(212,175,55,0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          animation: 'fadeUp 0.3s ease'
        }}>
          <Check size={18} /> {addedToast}
        </div>
      )}

      {/* Menu Header Banner */}
      <section style={{ padding: '3.5rem 0 2rem', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 70%)' }}>
        <div className="container">

          <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>
            Mini Monal <span className="text-gold-gradient">Grand Menu</span>
          </h1>


        </div>
      </section>

      {/* STICKY MENU CONTROLS & SEARCH */}
      <div className="menu-controls">
        <div className="container">
          {/* Enhanced Search Box with Quick Suggestions */}
          <div className="menu-search-wrapper">
            <div className="menu-search-box">
              <Search className="menu-search-icon" size={20} />
              <input
                type="text"
                placeholder="Search by dish name, tag, or ingredient (e.g. Mutton Karahi, Malai Boti, Naan)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="menu-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                  aria-label="Clear Search"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Quick Search Tags */}

          </div>

          {/* Category Pill Navigation with Left/Right smooth scroll buttons */}
          <div className="menu-category-scroll-container">
            <button
              className="scroll-arrow-btn"
              onClick={() => {
                const el = document.getElementById('category-scroll-bar');
                if (el) el.scrollBy({ left: -220, behavior: 'smooth' });
              }}
              aria-label="Scroll left"
            >
              ‹
            </button>

            <div className="menu-category-scroll" id="category-scroll-bar">
              <button
                className={`category-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                <span>👑 All Categories</span>
                <span style={{ opacity: 0.75, fontSize: '0.78rem' }}>({MENU_DATA.length})</span>
              </button>

              {MENU_CATEGORIES.map((cat) => {
                const count = MENU_DATA.filter(i => i.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    className={`category-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearchQuery('');
                    }}
                  >
                    <span>{cat.name}</span>
                    <span style={{ opacity: 0.75, fontSize: '0.78rem' }}>({count})</span>
                  </button>
                );
              })}
            </div>

            <button
              className="scroll-arrow-btn"
              onClick={() => {
                const el = document.getElementById('category-scroll-bar');
                if (el) el.scrollBy({ left: 220, behavior: 'smooth' });
              }}
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* MENU ITEMS BY CATEGORY */}
      <div className="container" style={{ paddingBottom: '6rem' }}>
        {groupedCategories.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
            <Utensils size={48} style={{ opacity: 0.3, margin: '0 auto 1rem' }} />
            <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: '0.5rem' }}>No dishes found matching "{searchQuery}"</h3>
            <p>Try searching for Karahi, BBQ, Rice, Chowmein, or Naan</p>
            <button
              className="btn-outline-gold"
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          groupedCategories.map((group) => (
            <div key={group.category.id} style={{ marginBottom: '4rem' }} id={group.category.id}>
              {/* Category Section Title */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Flame size={22} color="var(--gold-primary)" />
                  <h2 style={{ fontSize: '1.85rem', color: '#ffffff', fontFamily: 'var(--font-serif)' }}>
                    {group.category.name}
                  </h2>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {group.items.length} items
                </span>
              </div>

              {/* Dishes Grid */}
              <div className="dishes-grid">
                {group.items.map((dish) => {
                  const hasHalfFull = Boolean(dish.halfPrice && dish.fullPrice);
                  const selectedPortion = selectedPortionMap[dish.id] || (dish.fullPrice ? 'Full' : (dish.halfPrice ? 'Half' : 'Standard'));

                  let currentDisplayPrice = dish.price;
                  if (dish.halfPrice && dish.fullPrice) {
                    currentDisplayPrice = selectedPortion === 'Half' ? dish.halfPrice : dish.fullPrice;
                  } else if (dish.halfPrice && !dish.fullPrice) {
                    currentDisplayPrice = dish.halfPrice;
                  } else if (!dish.halfPrice && dish.fullPrice) {
                    currentDisplayPrice = dish.fullPrice;
                  }

                  return (
                    <div key={dish.id} className="dish-card card-hover-lift">
                      <div className="dish-img-container">
                        <img
                          src={dish.image || '/images/karahi.jpg'}
                          alt={dish.name}
                          className="dish-img"
                          loading="lazy"
                        />
                        {dish.tag && (
                          <div className="dish-tag-badge">
                            <span className="badge-gold">{dish.tag}</span>
                          </div>
                        )}
                      </div>

                      <div className="dish-content">
                        <div>
                          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                            <h3 className="dish-title">{dish.name}</h3>
                            <button
                              onClick={() => setSelectedDishDetail(dish)}
                              style={{ color: 'var(--text-muted)', padding: '0.2rem' }}
                              title="Dish details"
                            >
                              <Info size={16} />
                            </button>
                          </div>
                          <p className="dish-desc">{dish.description}</p>
                          {dish.serves && (
                            <span style={{ display: 'inline-block', fontSize: '0.78rem', color: 'var(--gold-light)', marginBottom: '0.75rem', fontWeight: 600 }}>
                              👑 {dish.serves}
                            </span>
                          )}
                        </div>

                        <div>
                          {/* Half / Full Selector if item supports both */}
                          {hasHalfFull && (
                            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.85rem' }}>
                              <button
                                onClick={() => handlePortionSelect(dish.id, 'Half')}
                                style={{
                                  flex: 1,
                                  padding: '0.35rem',
                                  fontSize: '0.78rem',
                                  borderRadius: 'var(--radius-sm)',
                                  fontWeight: 600,
                                  background: selectedPortion === 'Half' ? 'var(--gold-gradient)' : 'rgba(255,255,255,0.05)',
                                  color: selectedPortion === 'Half' ? '#000' : 'var(--text-secondary)',
                                  border: selectedPortion === 'Half' ? 'none' : '1px solid rgba(255,255,255,0.08)'
                                }}
                              >
                                Half: Rs. {dish.halfPrice.toLocaleString()}
                              </button>

                              <button
                                onClick={() => handlePortionSelect(dish.id, 'Full')}
                                style={{
                                  flex: 1,
                                  padding: '0.35rem',
                                  fontSize: '0.78rem',
                                  borderRadius: 'var(--radius-sm)',
                                  fontWeight: 600,
                                  background: selectedPortion === 'Full' ? 'var(--gold-gradient)' : 'rgba(255,255,255,0.05)',
                                  color: selectedPortion === 'Full' ? '#000' : 'var(--text-secondary)',
                                  border: selectedPortion === 'Full' ? 'none' : '1px solid rgba(255,255,255,0.08)'
                                }}
                              >
                                Full: Rs. {dish.fullPrice.toLocaleString()}
                              </button>
                            </div>
                          )}

                          {/* Single half or single full explicit indicators */}
                          {!hasHalfFull && dish.halfPrice && (
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                              Half Portion Only: Rs. {dish.halfPrice.toLocaleString()}
                            </div>
                          )}
                          {!hasHalfFull && dish.fullPrice && !dish.price && (
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                              Full Portion: Rs. {dish.fullPrice.toLocaleString()}
                            </div>
                          )}

                          <div className="dish-pricing-row">
                            <div>
                              {currentDisplayPrice ? (
                                <div className="dish-price-val">
                                  Rs. {currentDisplayPrice.toLocaleString()}
                                </div>
                              ) : (
                                <div className="dish-price-val" style={{ fontSize: '1rem', color: 'var(--gold-light)' }}>
                                  {dish.priceText || "Price on Request"}
                                </div>
                              )}
                            </div>

                            <button
                              className="btn-primary"
                              style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
                              onClick={() => handleAddItem(dish)}
                            >
                              <Plus size={15} /> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Dish Detail Modal */}
      {selectedDishDetail && (
        <div className="modal-backdrop" onClick={() => setSelectedDishDetail(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span className="badge-gold">Mini Monal Dish Spotlight</span>
              <button onClick={() => setSelectedDishDetail(null)} style={{ color: 'var(--text-muted)' }}>
                <X size={20} />
              </button>
            </div>

            <img
              src={selectedDishDetail.image || '/images/karahi.jpg'}
              alt={selectedDishDetail.name}
              style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', border: '1px solid var(--border-subtle)' }}
            />

            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem' }}>{selectedDishDetail.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {selectedDishDetail.description}
            </p>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Category:</span>
                <span style={{ color: '#fff', fontWeight: 600 }}>{selectedDishDetail.category.replace('-', ' ').toUpperCase()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Preparation:</span>
                <span style={{ color: 'var(--gold-light)' }}>Fresh to order (15-25 mins)</span>
              </div>
            </div>

            <button
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                handleAddItem(selectedDishDetail);
                setSelectedDishDetail(null);
              }}
            >
              + Add This Dish to Order Tray
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
