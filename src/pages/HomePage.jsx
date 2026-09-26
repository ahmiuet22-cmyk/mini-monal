import React, { useState } from 'react';
import {
  Crown,
  MapPin,
  Phone,
  ChevronRight,
  Star,
  Utensils,
  Car,
  Truck,
  Flame,
  Sparkles,
  Award,
  Users,
  ShieldCheck,
  Clock,
  ArrowRight,
  ChevronLeft,
  Quote,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { RESTAURANT_INFO, MENU_DATA, REVIEWS } from '../data/menuData';

export default function HomePage({ setActivePage, openReservation, addToCart }) {
  const [selectedPreviewCategory, setSelectedPreviewCategory] = useState('mutton-karahi');
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Popular category highlights
  const popularCategories = [
    { id: 'mutton-karahi', name: 'Mutton Karahi', desc: 'Fresh tender mutton cooked in pure iron woks with ginger & green chillies.', image: '/images/karahi.jpg' },
    { id: 'chicken-karahi', name: 'Chicken Karahi', desc: 'Classic Shinwari, Desi Ghee & White Karahi simmered to perfection.', image: '/images/karahi.jpg' },
    { id: 'chicken-bbq', name: 'Chicken BBQ', desc: 'Smoky charcoal grilled Seekh Kababs, Malai Boti & Rajasthani Tikka.', image: '/images/bbq.jpg' },
    { id: 'mutton-bbq', name: 'Mutton BBQ', desc: 'Tender mutton chops, Ganderi, and melt-in-mouth Afghani seekh.', image: '/images/bbq.jpg' },
    { id: 'family-platters', name: 'Family Platters', desc: 'Grand royal feasts designed for 4–8 people with rich variety.', image: '/images/bbq.jpg' },
    { id: 'chicken-handi', name: 'Chicken Handi', desc: 'Silky creamy boneless handi simmered in traditional clay pots.', image: '/images/handi.jpg' },
    { id: 'chinese', name: 'Chinese & Chowmein', desc: 'Sizzling Manchurian, spicy chili chicken and wok-tossed noodles.', image: '/images/chinese.jpg' },
    { id: 'tandoor', name: 'Tandoor & Naan', desc: 'Clay tandoor baked Chicken Cheese Naan, Roghni & Garlic Naan.', image: '/images/naan.jpg' }
  ];

  // Selected Signature Dishes per prompt
  const signatureDishes = [
    MENU_DATA.find(d => d.name === "Special Mutton Karahi"),
    MENU_DATA.find(d => d.name === "Special Chicken Karahi"),
    MENU_DATA.find(d => d.name === "Family Mix Platter"),
    MENU_DATA.find(d => d.name === "Mutton Platter"),
    MENU_DATA.find(d => d.name === "Chicken Platter"),
    MENU_DATA.find(d => d.name === "Special Chicken Handi"),
    MENU_DATA.find(d => d.name === "Chicken Cheese Naan"),
    MENU_DATA.find(d => d.name === "Chicken Manchurian")
  ].filter(Boolean);

  // Preview category tabs
  const previewCategories = [
    { id: 'soups', label: 'Soups' },
    { id: 'chinese', label: 'Chinese' },
    { id: 'special-rice', label: 'Rice' },
    { id: 'tawa', label: 'Tawa' },
    { id: 'chicken-bbq', label: 'BBQ' },
    { id: 'mutton-karahi', label: 'Karahi' },
    { id: 'chicken-handi', label: 'Handi' },
    { id: 'tandoor', label: 'Tandoor' }
  ];

  const filteredPreviewDishes = MENU_DATA.filter(item => item.category === selectedPreviewCategory).slice(0, 4);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <div className="home-page-container">
      {/* 1. PROFESSIONAL SPLIT HERO SECTION */}
      <section className="hero-split-section">
        <div className="container">
          <div className="hero-split-grid">

            {/* Left Column: Brand, Tagline, Story, Actions */}
            <div className="hero-left-col animate-fade-up">
              <div className="hero-badge-clean">
                <Crown size={15} color="var(--gold-primary)" />
                <span>PREMIUM FAMILY DINING • GUJRANWALA</span>
              </div>

              <h1 className="hero-split-title">
                MINI MONAL <br />
                <span className="text-gold-gradient">RESTAURANT</span>
              </h1>

              <h2 className="hero-split-tagline">
                "{RESTAURANT_INFO.tagline}"
              </h2>

              <p className="hero-split-desc">
                {RESTAURANT_INFO.subTagline}
              </p>

              {/* Action Buttons */}
              <div className="hero-split-cta">
                <button
                  className="btn-primary"
                  onClick={() => setActivePage('menu')}
                  style={{ padding: '0.9rem 2.1rem', fontSize: '1rem' }}
                >
                  <Utensils size={17} /> Explore Menu
                </button>

                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.9rem 1.9rem', fontSize: '1rem' }}
                >
                  <MapPin size={17} color="var(--gold-primary)" /> Get Directions
                </a>
              </div>

              {/* Quick Trust / Phone Strip */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: 'var(--gold-light)', fontWeight: 700, fontSize: '0.95rem' }}
                >
                  <Phone size={15} color="var(--gold-primary)" /> {RESTAURANT_INFO.phone}
                </a>
                <span style={{ color: 'var(--border-subtle)' }}>•</span>
                <span style={{ color: '#ffb703', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Star size={14} fill="#ffb703" /> 4.1 ★ (304 Google Reviews)
                </span>
              </div>
            </div>

            {/* Right Column: Prominent Storefront / Chef Photography */}
            <div className="hero-right-col animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="hero-image-card">
                <img
                  src="/images/storefront.jpg"
                  alt="Mini Monal Restaurant Storefront on GT Road Gujranwala"
                />

                {/* Floating Top Badge */}
                <div className="hero-floating-badge-top">
                  <Crown size={15} color="var(--gold-primary)" />
                  <span>GT Road Rahwali Cantt Landmark</span>
                </div>

                {/* Floating Bottom Live Grill Status */}
                <div className="hero-floating-badge-bottom">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span className="live-dot"></span>
                    <div>
                      <div style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700 }}>Live Sizzling Station</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>BBQ, Karahi & Tandoor Open Till 2:00 AM (Late Night)</div>
                    </div>
                  </div>

                  <button
                    onClick={openReservation}
                    className="btn-outline-gold"
                    style={{ padding: '0.35rem 0.85rem', fontSize: '0.78rem' }}
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-card card-hover-lift reveal-up delay-100">
              <div className="trust-icon-box">
                <Star size={24} fill="var(--gold-primary)" color="var(--gold-primary)" />
              </div>
              <div>
                <div className="trust-text-val">
                  4.1 ★ <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>(304 Reviews)</span>
                </div>
                <div className="trust-text-label">Google Verified Rating</div>
              </div>
            </div>

            <div className="trust-card card-hover-lift reveal-up delay-200">
              <div className="trust-icon-box">
                <Users size={24} />
              </div>
              <div>
                <div className="trust-text-val">Family Restaurant</div>
                <div className="trust-text-label">Spacious AC Seating</div>
              </div>
            </div>

            <div className="trust-card card-hover-lift reveal-up delay-300">
              <div className="trust-icon-box">
                <Utensils size={24} />
              </div>
              <div>
                <div className="trust-text-val">Dine-in</div>
                <div className="trust-text-label">Warm Traditional Hospitality</div>
              </div>
            </div>

            <div className="trust-card card-hover-lift reveal-up delay-400">
              <div className="trust-icon-box">
                <Car size={24} />
              </div>
              <div>
                <div className="trust-text-val">Drive-through</div>
                <div className="trust-text-label">Quick Car-Side Takeaway</div>
              </div>
            </div>

            <div className="trust-card card-hover-lift reveal-up delay-500">
              <div className="trust-icon-box">
                <Truck size={24} />
              </div>
              <div>
                <div className="trust-text-val">No-Contact Delivery</div>
                <div className="trust-text-label">Rahwali & Gujranwala</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE EXPERIENCE: "Where Tradition Meets Taste" */}
      <section className="section">
        <div className="container">
          <div className="split-experience">
            <div className="exp-image-wrap reveal-left">
              <img
                src="/images/karahi.jpg"
                alt="Sizzling Mutton Karahi at Mini Monal"
              />
              <div className="exp-badge-float floating-elem">
                <Flame color="var(--gold-primary)" size={24} />
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Live Wok Cooking</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Pure Desi Ghee & Fresh Herbs</div>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="section-tag">
                <Sparkles size={14} /> Our Culinary Heritage
              </div>
              <h2 className="section-title">
                Where Tradition <br />
                <span className="text-gold-gradient">Meets Taste</span>
              </h2>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                "From traditional karahi and tender BBQ to flavorful rice, Chinese favorites and fresh naan from the tandoor, Mini Monal brings a wide variety of flavors together under one roof."
              </p>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
                Located right on Grand Trunk Road in Rahwali Cantt, we take pride in serving wholesome, authentic Pakistani recipes prepared with 100% fresh meat, pure country ghee, and secret spice formulations refined over years of family dining service.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  className="btn-primary"
                  onClick={() => setActivePage('menu')}
                >
                  Discover Our Menu <ArrowRight size={16} />
                </button>
                <button
                  className="btn-secondary"
                  onClick={openReservation}
                >
                  Reserve a Family Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. POPULAR CATEGORIES */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header reveal-up">
            <div className="section-tag">
              <Award size={14} /> Culinary Diversity
            </div>
            <h2 className="section-title">
              Popular <span className="text-gold-gradient">Categories</span>
            </h2>
            <p className="section-desc">
              Explore our wide variety of authentic Pakistani specialties, sizzling charcoal grills, and traditional wok karahis.
            </p>
          </div>

          <div className="category-grid">
            {popularCategories.map((cat, index) => (
              <div
                key={cat.id}
                className={`category-card card-hover-lift reveal-up delay-${((index % 4) + 1) * 100}`}
                onClick={() => setActivePage('menu')}
              >
                <img src={cat.image} alt={cat.name} className="category-card-bg" />
                <div className="category-card-overlay"></div>
                <div className="category-card-content">
                  <h3 className="category-card-title">{cat.name}</h3>
                  <p className="category-card-desc">{cat.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-light)', fontSize: '0.85rem', fontWeight: 700 }}>
                    Explore Category <ChevronRight size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE DISHES */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal-up">
            <div className="section-tag">
              <Flame size={14} /> Guest Favorites
            </div>
            <h2 className="section-title">
              Signature <span className="text-gold-gradient">Dishes</span>
            </h2>
            <p className="section-desc">
              Hand-picked masterpieces prepared with passion, premium ingredients, and authentic Punjabi craftsmanship.
            </p>
          </div>

          <div className="dishes-grid">
            {signatureDishes.map((dish, index) => (
              <div key={dish.id} className={`dish-card card-hover-lift reveal-up delay-${((index % 4) + 1) * 100}`}>
                <div className="dish-img-container">
                  <img src={dish.image} alt={dish.name} className="dish-img" />
                  {dish.tag && (
                    <div className="dish-tag-badge">
                      <span className="badge-gold">{dish.tag}</span>
                    </div>
                  )}
                </div>

                <div className="dish-content">
                  <div>
                    <h4 className="dish-title">{dish.name}</h4>
                    <p className="dish-desc">{dish.description}</p>
                  </div>

                  <div>
                    <div className="dish-pricing-row">
                      <div>
                        {dish.halfPrice ? (
                          <>
                            <div className="dish-price-val">Rs. {dish.fullPrice.toLocaleString()}</div>
                            <div className="dish-price-sub">Half: Rs. {dish.halfPrice.toLocaleString()} | Full: Rs. {dish.fullPrice.toLocaleString()}</div>
                          </>
                        ) : (
                          <div className="dish-price-val">Rs. {dish.price.toLocaleString()}</div>
                        )}
                      </div>

                      <button
                        className="btn-outline-gold"
                        style={{ padding: '0.45rem 0.95rem' }}
                        onClick={() => {
                          addToCart({
                            id: dish.id,
                            name: dish.name,
                            price: dish.price || dish.fullPrice,
                            portion: dish.halfPrice ? 'Full' : null,
                            quantity: 1
                          });
                        }}
                      >
                        + Add to Tray
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAMILY PLATTERS: "Made for the Whole Family" */}
      <section className="section" style={{ background: 'linear-gradient(180deg, #101217 0%, #0b0c10 100%)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Crown size={14} /> Royal Banquets
            </div>
            <h2 className="section-title">
              Made for the <span className="text-gold-gradient">Whole Family</span>
            </h2>
            <p className="section-desc">
              Experience the pinnacle of Pakistani family hospitality with our generous feast platters, combining the finest Karahi, BBQ, rice, and fresh tandoori breads.
            </p>
          </div>

          <div className="platter-grid">
            {/* Platter 1: Family Mix Platter */}
            <div className="platter-card featured">
              <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--gold-gradient)', color: '#000', padding: '0.35rem 1.25rem', borderBottomLeftRadius: '14px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>
                Most Popular
              </div>

              <div>
                <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>Serves 6–8 Persons</span>
                <h3 style={{ fontSize: '1.85rem', color: '#fff', marginBottom: '0.5rem' }}>Family Mix Platter</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  The Ultimate Banquet: Special Mutton Karahi, Chicken Malai Boti, Seekh Kababs, Rajasthani Tikka, Biryani Rice, assorted Tandoori Naans, Fresh Salad & Mint Raita.
                </p>

                <div className="platter-price-badge">
                  Rs. 8,500 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ complete feast</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '1.25rem 0', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--gold-primary)" /> Sizzling BBQ Skewers & Karahi
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--gold-primary)" /> Aromatic Saffron Biryani Rice
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--gold-primary)" /> Assorted Clay Tandoori Naans
                  </div>
                </div>
              </div>

              <button
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => {
                  addToCart({
                    id: 'platter-1',
                    name: 'Family Mix Platter',
                    price: 8500,
                    quantity: 1
                  });
                }}
              >
                + Add Platter to Order Tray
              </button>
            </div>

            {/* Platter 2: Mutton Platter */}
            <div className="platter-card">
              <div>
                <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>Serves 4–5 Persons</span>
                <h3 style={{ fontSize: '1.85rem', color: '#fff', marginBottom: '0.5rem' }}>Mutton Platter</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  Exclusively for mutton lovers: Special Mutton Karahi, Mutton Seekh Kababs, Mutton Chanp Ribs, Special Rice, Garlic Naan, and Mint Raita.
                </p>

                <div className="platter-price-badge">
                  Rs. 6,000 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ complete feast</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '1.25rem 0', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--gold-primary)" /> Prime Mutton Chops & Karahi
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--gold-primary)" /> Special Seasoned Basmati Rice
                  </div>
                </div>
              </div>

              <button
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => {
                  addToCart({
                    id: 'platter-2',
                    name: 'Mutton Platter',
                    price: 6000,
                    quantity: 1
                  });
                }}
              >
                + Add Platter to Order Tray
              </button>
            </div>

            {/* Platter 3: Chicken Platter */}
            <div className="platter-card">
              <div>
                <span className="badge-gold" style={{ marginBottom: '0.75rem' }}>Serves 4–5 Persons</span>
                <h3 style={{ fontSize: '1.85rem', color: '#fff', marginBottom: '0.5rem' }}>Chicken Platter</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                  Hearty chicken feast: Chicken Karahi, Chicken Malai Boti, Chicken Seekh Kababs, Fried Rice, Fresh Tandoori Naans, and Raita.
                </p>

                <div className="platter-price-badge">
                  Rs. 4,500 <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ complete feast</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '1.25rem 0', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--gold-primary)" /> Velvety Malai Boti & Seekh Kababs
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--gold-primary)" /> Chicken Fried Rice & Fresh Naans
                  </div>
                </div>
              </div>

              <button
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => {
                  addToCart({
                    id: 'platter-3',
                    name: 'Chicken Platter',
                    price: 4500,
                    quantity: 1
                  });
                }}
              >
                + Add Platter to Order Tray
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MENU PREVIEW WITH HORIZONTAL CATEGORY SWITCHER */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Utensils size={14} /> Quick Exploration
            </div>
            <h2 className="section-title">
              Menu <span className="text-gold-gradient">Preview</span>
            </h2>
            <p className="section-desc">
              Browse through our core menu sections. Click any category to switch live dishes or open the full menu.
            </p>
          </div>

          {/* Horizontal Category Nav */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {previewCategories.map((cat) => (
              <button
                key={cat.id}
                className={`category-tab-btn ${selectedPreviewCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedPreviewCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dishes List */}
          <div className="dishes-grid" style={{ marginBottom: '3rem' }}>
            {filteredPreviewDishes.map((dish) => (
              <div key={dish.id} className="dish-card">
                <div className="dish-img-container">
                  <img src={dish.image} alt={dish.name} className="dish-img" />
                </div>
                <div className="dish-content">
                  <div>
                    <h4 className="dish-title">{dish.name}</h4>
                    <p className="dish-desc">{dish.description}</p>
                  </div>
                  <div className="dish-pricing-row">
                    <div>
                      {dish.halfPrice ? (
                        <div className="dish-price-val">Rs. {dish.fullPrice.toLocaleString()}</div>
                      ) : dish.price ? (
                        <div className="dish-price-val">Rs. {dish.price.toLocaleString()}</div>
                      ) : (
                        <div className="dish-price-val" style={{ fontSize: '1rem' }}>{dish.priceText}</div>
                      )}
                    </div>
                    <button
                      className="btn-outline-gold"
                      onClick={() => {
                        addToCart({
                          id: dish.id,
                          name: dish.name,
                          price: dish.price || dish.fullPrice,
                          portion: dish.halfPrice ? 'Full' : null,
                          quantity: 1
                        });
                      }}
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              className="btn-primary"
              onClick={() => setActivePage('menu')}
              style={{ padding: '0.95rem 2.5rem', fontSize: '1.05rem' }}
            >
              View Full Menu (All 18+ Categories) <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. WHY MINI MONAL (4 Feature Cards) */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <ShieldCheck size={14} /> The Mini Monal Standard
            </div>
            <h2 className="section-title">
              Why <span className="text-gold-gradient">Mini Monal</span>
            </h2>
            <p className="section-desc">
              We stand apart in Rahwali Cantt for our uncompromised culinary principles and family hospitality.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            {/* Feature 1 */}
            <div className="glass-card" style={{ padding: '2.25rem 1.75rem', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212,175,55,0.12)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', margin: '0 auto 1.5rem' }}>
                <Flame size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.75rem' }}>Authentic Flavors</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Time-honored Pakistani spice blends, open charcoal fires, and iron wok preparations that deliver unmistakable aroma.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card" style={{ padding: '2.25rem 1.75rem', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212,175,55,0.12)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', margin: '0 auto 1.5rem' }}>
                <Sparkles size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.75rem' }}>Fresh Ingredients</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                100% pure fresh meats sourced daily, organic country ghee options, virgin olive oil, and crisp garden produce.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card" style={{ padding: '2.25rem 1.75rem', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212,175,55,0.12)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', margin: '0 auto 1.5rem' }}>
                <Users size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.75rem' }}>Family Dining</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Spacious, peaceful air-conditioned dining halls built specifically to host families, gatherings, and special occasions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-card" style={{ padding: '2.25rem 1.75rem', textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(212,175,55,0.12)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', margin: '0 auto 1.5rem' }}>
                <Utensils size={28} />
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.75rem' }}>Wide Variety</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Over 18 comprehensive culinary categories ranging from Mutton & Chicken BBQ to Chinese, Tawa, and Fresh Tandoor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS & GOOGLE REVIEWS SECTION */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <Star size={14} /> Guest Feedback
            </div>
            <h2 className="section-title">
              What Our Guests <span className="text-gold-gradient">Say</span>
            </h2>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#ffb703', fontWeight: 700, fontSize: '1.15rem' }}>
              ★ 4.1 Rating <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>• 304+ Verified Reviews on Google</span>
            </div>
          </div>

          <div className="testimonials-wrapper">
            <button className="testimonial-nav-btn testimonial-prev" onClick={prevReview} aria-label="Previous Review">
              <ChevronLeft size={22} />
            </button>
            <button className="testimonial-nav-btn testimonial-next" onClick={nextReview} aria-label="Next Review">
              <ChevronRight size={22} />
            </button>

            <div className="testimonial-slide">
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', color: '#ffb703', marginBottom: '1.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#ffb703" />
                ))}
              </div>

              <p className="testimonial-quote">
                "{REVIEWS[currentReviewIndex].comment}"
              </p>

              <div>
                <div className="testimonial-author-name">{REVIEWS[currentReviewIndex].name}</div>
                <div className="testimonial-author-role">
                  {REVIEWS[currentReviewIndex].badge} • {REVIEWS[currentReviewIndex].date}
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-gold"
              >
                See All 304 Reviews on Google <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LOCATION CTA: "Your Table Awaits" */}
      <section className="section" style={{ background: 'linear-gradient(180deg, #101217 0%, #060709 100%)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.12) 0%, rgba(16, 18, 23, 0.9) 70%)',
            border: '1px solid var(--border-active)',
            borderRadius: 'var(--radius-lg)',
            padding: '4rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <Crown size={48} color="var(--gold-primary)" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#fff', marginBottom: '1rem' }}>
              Your Table <span className="text-gold-gradient">Awaits</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 1.5rem' }}>
              Visit Mini Monal Restaurant in Rahwali Cantt, Gujranwala. Indulge in an unforgettable dinner with your family tonight.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: 'var(--gold-light)', fontSize: '0.95rem', marginBottom: '2.5rem', background: 'rgba(0,0,0,0.4)', padding: '0.6rem 1.4rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)' }}>
              <MapPin size={16} /> Grand Trunk Road, Rahwali Cantt, Choudry Bazar, near Dr Arshad, Muslim Town, Gujranwala, Pakistan 52250
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ padding: '0.9rem 2.2rem' }}
              >
                <MapPin size={17} /> Get Directions
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="btn-secondary"
                style={{ padding: '0.9rem 2.2rem' }}
              >
                <Phone size={17} color="var(--gold-primary)" /> Call Now (+92 320 7462212)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
