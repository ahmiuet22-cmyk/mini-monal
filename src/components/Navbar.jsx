import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  Phone, 
  MapPin, 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  Calendar,
  Utensils,
  ChevronRight,
  Clock
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Navbar({ activePage, setActivePage, openReservation, cartCount, openCart }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Complete Menu' },
    { id: 'about', label: 'Our Story' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & Directions' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        {/* Top micro announcement bar */}
        {!isScrolled && (
          <div className="top-announcement-bar">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#2ecc71', fontWeight: 700, fontSize: '0.78rem' }}>
                  <span className="live-dot" style={{ background: '#2ecc71', boxShadow: '0 0 8px #2ecc71' }}></span>
                  <span>OPEN NOW</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--gold-light)' }}>
                  <Clock size={13} /> {RESTAURANT_INFO.hours}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }} className="hide-mobile">
                  <MapPin size={13} /> {RESTAURANT_INFO.shortAddress}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <a 
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`} 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--gold-light)', fontWeight: 600 }}
                >
                  <Phone size={13} /> Call {RESTAURANT_INFO.phone}
                </a>
                <span style={{ color: 'var(--border-subtle)' }} className="hide-mobile">|</span>
                <span style={{ color: '#ffb703', fontWeight: 700 }} className="hide-mobile">
                  ★ 4.1 Rating (304 Google Reviews)
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Main Navbar */}
        <div className="navbar-main-strip">
          <div className="container">
            <div className="navbar-inner">
              {/* Brand Logo */}
              <div className="brand-logo" onClick={() => handleNavClick('home')}>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Crown className="brand-crown-icon" />
                </div>
                <div className="brand-title">
                  <span className="brand-title-main">MINI MONAL</span>
                  <span className="brand-title-sub">RESTAURANT • GUJRANWALA</span>
                </div>
              </div>

              {/* Desktop Navigation Links */}
              <ul className="nav-links-desktop">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button 
                      className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Actions: Order Tray, Book Table, Mobile Hamburger */}
              <div className="nav-actions">
                {/* Cart / Tray Button */}
                <button 
                  onClick={openCart}
                  style={{
                    position: 'relative',
                    background: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.55rem 0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--gold-light)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    transition: 'all 0.2s'
                  }}
                  title="View WhatsApp Order Tray"
                >
                  <ShoppingBag size={17} />
                  <span className="hide-mobile">Order Tray</span>
                  {cartCount > 0 && (
                    <span style={{
                      background: 'var(--gold-gradient)',
                      color: '#000',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {cartCount}
                    </span>
                  )}
                </button>

                {/* Book a Table Button */}
                <button 
                  className="btn-primary hide-mobile"
                  onClick={openReservation}
                  style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}
                >
                  <Calendar size={15} /> Reserve Table
                </button>

                {/* Mobile Hamburger Toggle */}
                <button 
                  className="mobile-menu-btn"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Toggle navigation menu"
                >
                  <MenuIcon size={26} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <div className="brand-logo" onClick={() => handleNavClick('home')}>
              <Crown size={28} color="var(--gold-primary)" />
              <div className="brand-title">
                <span className="brand-title-main" style={{ fontSize: '1.05rem' }}>MINI MONAL</span>
                <span className="brand-title-sub" style={{ fontSize: '0.6rem' }}>FAMILY RESTAURANT</span>
              </div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: 'var(--text-secondary)', padding: '0.4rem' }}
            >
              <X size={24} />
            </button>
          </div>

          <ul className="drawer-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <div 
                  className={`drawer-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={18} color="var(--gold-primary)" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
          <button 
            className="btn-primary" 
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              openReservation();
            }}
          >
            <Calendar size={16} /> Book Table
          </button>
          
          <a 
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="btn-secondary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <Phone size={16} color="var(--gold-primary)" /> Call +92 320 7462212
          </a>
        </div>
      </div>
    </>
  );
}
