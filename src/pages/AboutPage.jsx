import React from 'react';
import { 
  Crown, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Users, 
  MapPin, 
  Phone, 
  Flame, 
  Utensils, 
  Award,
  Clock
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function AboutPage({ setActivePage, openReservation }) {
  return (
    <div className="about-page-wrapper" style={{ paddingTop: '5.5rem', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 3rem', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 70%)' }}>
        <div className="container">
          <span className="section-tag">
            <Crown size={14} /> Our Heritage & Vision
          </span>
          <h1 className="section-title">
            About <span className="text-gold-gradient">Mini Monal</span>
          </h1>
          <p className="section-desc" style={{ maxWidth: '720px', margin: '0 auto' }}>
            A true culinary landmark on Grand Trunk Road, Rahwali Cantt, Gujranwala — dedicated to rich Pakistani taste, genuine family warmth, and uncompromising food purity.
          </p>
        </div>
      </section>

      {/* 1. Restaurant Introduction & Split Story */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="split-experience">
            <div className="exp-image-wrap reveal-left">
              <img 
                src="/images/storefront.jpg" 
                alt="Mini Monal Restaurant Storefront on GT Road" 
              />
              <div className="exp-badge-float floating-elem">
                <Crown color="var(--gold-primary)" size={24} />
                <div>
                  <div style={{ color: '#fff', fontWeight: 700 }}>Mini Monal Restaurant</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>GT Road, Rahwali Cantt, Gujranwala</div>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="section-tag">
                <Sparkles size={14} /> The Journey
              </div>
              <h2 className="section-title">
                Crafting Flavors <br />
                <span className="text-gold-gradient">With Heart & Soul</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Mini Monal Restaurant was founded to bring families together around tables filled with authentic, sizzling Pakistani cuisine. Located prominently on Grand Trunk Road in Rahwali Cantt, we have become the go-to dining choice for Gujranwala residents and travelers seeking genuine culinary excellence.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Whether you crave the slow-simmered richness of our Special Mutton Karahi cooked in pure Desi Ghee, the smokiness of our charcoal-grilled Malai Boti, or our lavish Family Mix Platters, every dish is prepared fresh to order under strict hygienic standards.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '2rem' }}>
                <div className="reveal-up delay-100 card-hover-lift" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--gold-light)', fontSize: '1.6rem', fontWeight: 800 }}>4.1 ★</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>304+ Verified Google Reviews</div>
                </div>
                <div className="reveal-up delay-200 card-hover-lift" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ color: 'var(--gold-light)', fontSize: '1.6rem', fontWeight: 800 }}>18+</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Diverse Culinary Categories</div>
                </div>
              </div>

              <button className="btn-primary" onClick={openReservation}>
                Book a Family Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Philosophy & 4 Pillars */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header reveal-up">
            <div className="section-tag">
              <ShieldCheck size={14} /> Our Core Values
            </div>
            <h2 className="section-title">
              Our <span className="text-gold-gradient">Philosophy</span>
            </h2>
            <p className="section-desc">
              Every detail at Mini Monal is guided by four foundational commitments to our dining guests.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div className="glass-card card-hover-lift reveal-up delay-100" style={{ padding: '2.5rem 2rem' }}>
              <Flame size={32} color="var(--gold-primary)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem' }}>Authentic Flavors</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                We believe in genuine culinary techniques — cast-iron wok sautéing, live charcoal barbecuing, and slow dum cooking without artificial enhancers.
              </p>
            </div>

            <div className="glass-card card-hover-lift reveal-up delay-200" style={{ padding: '2.5rem 2rem' }}>
              <ShieldCheck size={32} color="var(--gold-primary)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem' }}>Quality & Freshness</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                We source fresh meats daily, premium long-grain basmati rice, pure country Desi Ghee, and fresh garden herbs to guarantee peak freshness in every bite.
              </p>
            </div>

            <div className="glass-card card-hover-lift reveal-up delay-300" style={{ padding: '2.5rem 2rem' }}>
              <Users size={32} color="var(--gold-primary)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem' }}>Family Dining Experience</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Our restaurant environment is designed specifically for family comfort, peaceful dining, celebrations, and memorable gatherings.
              </p>
            </div>

            <div className="glass-card card-hover-lift reveal-up delay-400" style={{ padding: '2.5rem 2rem' }}>
              <Utensils size={32} color="var(--gold-primary)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem' }}>Wide Variety</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                From rich Mutton Karahi and juicy BBQ to spicy Indo-Chinese noodles, sizzling Tawa delicacies, and crisp tandoori naans, everyone finds their favorite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visual Dining & Kitchen Section */}
      <section className="section">
        <div className="container">
          <div className="split-experience" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="reveal-left">
              <div className="section-tag">
                <Award size={14} /> Hospitality
              </div>
              <h2 className="section-title">
                A Welcoming Space for <br />
                <span className="text-gold-gradient">Every Celebration</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Whether it's a family reunion, a birthday celebration, or a casual weekend dinner, Mini Monal provides air-conditioned family dining halls, quick car-side drive-through service, and speedy home delivery.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <Clock size={18} color="var(--gold-primary)" /> Open 7 days a week: 12:00 PM – 2:00 AM (Late Night)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={18} color="var(--gold-primary)" /> Conveniently located on main GT Road Rahwali Cantt
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <Phone size={18} color="var(--gold-primary)" /> Direct inquiries & takeaway: {RESTAURANT_INFO.phone}
                </div>
              </div>

              <button className="btn-primary" onClick={() => setActivePage('menu')}>
                Explore Our Complete Menu
              </button>
            </div>

            <div className="exp-image-wrap reveal-right">
              <img 
                src="/images/dining.jpg" 
                alt="Family Dining Experience at Mini Monal" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
