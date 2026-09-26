import React from 'react';
import { 
  Crown, 
  MapPin, 
  Phone, 
  Clock, 
  Utensils, 
  Car, 
  Truck, 
  ChevronRight, 
  ArrowUp,
  ExternalLink,
  Heart
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page) => {
    setActivePage(page);
    scrollToTop();
  };

  return (
    <footer className="footer-main">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Crown size={36} color="var(--gold-primary)" />
              <div>
                <h3 className="brand-title-main" style={{ fontSize: '1.35rem' }}>MINI MONAL</h3>
                <span className="brand-title-sub" style={{ fontSize: '0.65rem' }}>FAMILY RESTAURANT</span>
              </div>
            </div>
            
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Gujranwala's premier family dining destination on Grand Trunk Road. Offering authentic Pakistani Karahi, sizzling charcoal BBQ, delicate Handi, fresh Tandoori breads, and royal family platters.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.88rem'
            }}>
              <span style={{ color: '#ffb703', fontWeight: 800 }}>★ 4.1</span>
              <span style={{ color: 'var(--text-secondary)' }}>Based on 304+ Google Reviews</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <button className="footer-link" onClick={() => handleNav('home')}>
                  • Home
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('menu')}>
                  • Complete Menu (18+ Categories)
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('about')}>
                  • About Our Heritage
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('gallery')}>
                  • Photo Gallery
                </button>
              </li>
              <li>
                <button className="footer-link" onClick={() => handleNav('contact')}>
                  • Contact & Location Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Timings */}
          <div>
            <h4 className="footer-title">Dining Services</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                <Utensils size={15} color="var(--gold-light)" /> Dine-In (Family Hall & AC)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                <Car size={15} color="var(--gold-light)" /> Drive-Through & Car Takeaway
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                <Truck size={15} color="var(--gold-light)" /> No-Contact Home Delivery
              </li>
            </ul>

            <h4 className="footer-title" style={{ marginTop: '1.5rem' }}>Opening Hours</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-light)', fontSize: '0.92rem' }}>
              <Clock size={16} /> Open Daily: 12:00 PM – 2:00 AM (Late Night)
            </div>
          </div>

          {/* Col 4: Contact & Address */}
          <div>
            <h4 className="footer-title">Visit & Inquiries</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <MapPin size={18} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Grand Trunk Road, Rahwali Cantt, Choudry Bazar, near Dr Arshad, Muslim Town, Gujranwala, 52250, Pakistan
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                <Phone size={18} color="var(--gold-primary)" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} style={{ color: 'var(--gold-light)', fontWeight: 700 }}>
                  {RESTAURANT_INFO.phone}
                </a>
              </div>

              <a 
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-gold"
                style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
              >
                <MapPin size={14} /> View on Google Maps <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Mini Monal Restaurant, Gujranwala. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Authentic Pakistani & Family Dining</span>
            <button 
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--gold-light)',
                background: 'rgba(212, 175, 55, 0.1)',
                padding: '0.35rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem'
              }}
            >
              <ArrowUp size={13} /> Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
