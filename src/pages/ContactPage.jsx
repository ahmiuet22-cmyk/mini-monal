import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Car, 
  Utensils, 
  Truck, 
  ExternalLink, 
  CheckCircle2, 
  MessageSquare,
  Navigation
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTAURANT_INFO } from '../data/menuData';

export default function ContactPage({ openReservation }) {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    phone: '',
    subject: 'General Dining Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {}
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*MESSAGE / INQUIRY - MINI MONAL RESTAURANT*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${inquiryData.name}\n` +
      `📞 *Phone:* ${inquiryData.phone}\n` +
      `📌 *Subject:* ${inquiryData.subject}\n` +
      `💬 *Message:* ${inquiryData.message}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `_From Mini Monal Website Contact Page_`
    );
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="contact-page-wrapper" style={{ paddingTop: '5.5rem', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 2rem', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 70%)' }}>
        <div className="container">
          <span className="section-tag">
            <MapPin size={14} /> Rahwali Cantt, Gujranwala
          </span>
          <h1 className="section-title">
            Contact & <span className="text-gold-gradient">Directions</span>
          </h1>
          <p className="section-desc" style={{ maxWidth: '680px', margin: '0 auto' }}>
            We look forward to serving you and your family. Reach out directly for table reservations, car takeaways, party platters, or directions.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Cards + Interactive Form + Map Card */}
      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          {/* Card 1: Restaurant Details */}
          <div className="glass-card card-hover-lift reveal-left" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>
                Restaurant Location
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(212,175,55,0.12)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Address</div>
                    <div style={{ color: '#fff', fontSize: '0.98rem', fontWeight: 600, marginTop: '0.2rem', lineHeight: 1.5 }}>
                      Grand Trunk Road, Rahwali Cantt, Choudry Bazar, near Dr Arshad, Muslim Town, Gujranwala, 52250, Pakistan
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(212,175,55,0.12)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone & WhatsApp</div>
                    <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} style={{ color: 'var(--gold-light)', fontSize: '1.1rem', fontWeight: 700, marginTop: '0.2rem', display: 'block' }}>
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(212,175,55,0.12)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Dining Hours</div>
                    <div style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600, marginTop: '0.2rem' }}>
                      Open Daily: 12:00 PM – 2:00 AM (Late Night)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
              <a 
                href={`tel:${RESTAURANT_INFO.phoneRaw}`} 
                className="btn-primary" 
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Phone size={16} /> Call Now
              </a>
              <a 
                href={RESTAURANT_INFO.googleMapsUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn-secondary" 
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Navigation size={16} color="var(--gold-primary)" /> Directions
              </a>
            </div>
          </div>

          {/* Card 2: Interactive Message Form */}
          <div className="glass-card card-hover-lift reveal-right" style={{ padding: '2.5rem 2rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
              Send a Message / Inquiry
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Have questions about catering, family platters, or booking the hall?
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(46,204,113,0.15)', color: '#2ecc71', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Message Prepared!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Click below to dispatch your message directly to our WhatsApp team.
                </p>
                <button 
                  onClick={handleWhatsAppSend}
                  className="btn-primary" 
                  style={{ width: '100%', background: '#25D366', color: '#fff', justifyContent: 'center' }}
                >
                  <Send size={16} /> Send via WhatsApp
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Asad Ali"
                    value={inquiryData.name}
                    onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                    className="modal-input" 
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="0320 0000000"
                    value={inquiryData.phone}
                    onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                    className="modal-input" 
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Subject</label>
                  <select 
                    value={inquiryData.subject}
                    onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                    className="modal-input"
                    style={{ background: '#171a22', color: '#fff' }}
                  >
                    <option value="General Dining Inquiry">General Dining Inquiry</option>
                    <option value="Family Platter Pre-Order">Family Platter Pre-Order</option>
                    <option value="Mutton Ran Special Order">Mutton Ran Special Order</option>
                    <option value="Party / Family Gathering">Party / Family Gathering</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>Message *</label>
                  <textarea 
                    rows="3" 
                    required 
                    placeholder="Write your message or inquiry here..."
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    className="modal-input"
                    style={{ resize: 'none' }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Send size={15} /> Prepare Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Interactive Google Map Section & Landmark Card */}
        <div className="glass-card" style={{ padding: '2rem', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge-gold">Main GT Road Landmark</span>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginTop: '0.35rem' }}>
                How to Reach Mini Monal Restaurant
              </h3>
            </div>
            <a 
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold"
            >
              Open in Google Maps App <ExternalLink size={14} />
            </a>
          </div>

          <div style={{
            width: '100%',
            height: '380px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid var(--border-subtle)',
            background: '#12141a'
          }}>
            {/* Embedded Responsive Google Maps Iframe centered on Rahwali Cantt GT Road */}
            <iframe 
              title="Mini Monal Restaurant Location Map"
              src="https://maps.google.com/maps?q=Grand+Trunk+Road+Rahwali+Cantt+Gujranwala+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.95)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
