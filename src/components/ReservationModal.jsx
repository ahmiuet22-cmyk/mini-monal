import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Send, Phone, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTAURANT_INFO } from '../data/menuData';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '4 Persons (Family)',
    seating: 'Main Family Hall (AC)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // Confetti fallback
    }
  };

  const sendToWhatsApp = () => {
    const text = encodeURIComponent(
      `*TABLE RESERVATION REQUEST - MINI MONAL RESTAURANT*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📅 *Date:* ${formData.date}\n` +
      `⏰ *Time:* ${formData.time}\n` +
      `👥 *Guests:* ${formData.guests}\n` +
      `📍 *Seating:* ${formData.seating}\n` +
      (formData.notes ? `📝 *Special Requests:* ${formData.notes}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `_Requested from Mini Monal Website_`
    );

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`, '_blank');
    onClose();
    setIsSubmitted(false);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
          <div>
            <span className="badge-gold" style={{ marginBottom: '0.4rem' }}>Mini Monal Experience</span>
            <h3 style={{ fontSize: '1.6rem', color: '#fff' }}>Table Reservation</h3>
          </div>
          <button 
            onClick={onClose}
            style={{ color: 'var(--text-secondary)', padding: '0.4rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}
          >
            <X size={20} />
          </button>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: '50%', 
              background: 'rgba(46, 204, 113, 0.15)', 
              color: '#2ecc71',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem'
            }}>
              <CheckCircle size={36} />
            </div>
            <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>Reservation Request Received!</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
              Thank you, <strong style={{ color: 'var(--gold-light)' }}>{formData.name}</strong>. Would you like to confirm via WhatsApp or call our desk immediately?
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <button 
                onClick={sendToWhatsApp}
                className="btn-primary"
                style={{ width: '100%', background: '#25D366', color: '#fff', justifyContent: 'center' }}
              >
                <Send size={16} /> Confirm on WhatsApp Now
              </button>
              <a 
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={16} color="var(--gold-primary)" /> Direct Call ({RESTAURANT_INFO.phone})
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="e.g. Usman Malik"
                  value={formData.name} 
                  onChange={handleChange}
                  className="modal-input" 
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="0320 0000000"
                  value={formData.phone} 
                  onChange={handleChange}
                  className="modal-input" 
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Reservation Date *
                </label>
                <input 
                  type="date" 
                  name="date" 
                  required 
                  value={formData.date} 
                  onChange={handleChange}
                  className="modal-input" 
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Estimated Time *
                </label>
                <select 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange}
                  className="modal-input"
                  style={{ background: '#171a22', color: '#fff' }}
                >
                  <option value="13:00">1:00 PM (Lunch)</option>
                  <option value="14:00">2:00 PM (Lunch)</option>
                  <option value="19:00">7:00 PM (Dinner)</option>
                  <option value="20:00">8:00 PM (Dinner)</option>
                  <option value="21:00">9:00 PM (Dinner Peak)</option>
                  <option value="22:00">10:00 PM (Late Dinner)</option>
                  <option value="23:00">11:00 PM (Late Night)</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Number of Guests
                </label>
                <select 
                  name="guests" 
                  value={formData.guests} 
                  onChange={handleChange}
                  className="modal-input"
                  style={{ background: '#171a22', color: '#fff' }}
                >
                  <option value="2 Persons (Couple)">2 Persons (Couple)</option>
                  <option value="4 Persons (Family)">4 Persons (Family)</option>
                  <option value="6-8 Persons (Large Family)">6-8 Persons (Large Family)</option>
                  <option value="10+ Persons (Party / Gathering)">10+ Persons (Party / Gathering)</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                  Seating Area
                </label>
                <select 
                  name="seating" 
                  value={formData.seating} 
                  onChange={handleChange}
                  className="modal-input"
                  style={{ background: '#171a22', color: '#fff' }}
                >
                  <option value="Main Family Hall (AC)">Main Family Hall (AC)</option>
                  <option value="Executive Section">Executive Section</option>
                  <option value="Drive-Through / Quick Takeaway">Drive-Through / Takeaway</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.35rem' }}>
                Special Notes / Pre-ordered Dishes (Optional)
              </label>
              <textarea 
                name="notes" 
                rows="2" 
                placeholder="e.g. Please keep Mutton Karahi and Family Mix Platter ready..."
                value={formData.notes} 
                onChange={handleChange}
                className="modal-input"
                style={{ resize: 'none' }}
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            >
              Submit Reservation Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
