import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Send, 
  ShoppingBag, 
  Utensils, 
  Car, 
  Truck, 
  MapPin, 
  Navigation, 
  Loader2, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function OrderDrawer({ isOpen, onClose, cart, updateQuantity, removeItem, clearCart }) {
  const [orderType, setOrderType] = useState('Dine-in');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [locationCoords, setLocationCoords] = useState(null); // { lat, lng }
  const [isLocating, setIsLocating] = useState(false);
  const [locationMsg, setLocationMsg] = useState({ type: '', text: '' });
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Fetch user current location & reverse geocode
  const detectLocation = () => {
    if (!navigator.geolocation) {
      setLocationMsg({ type: 'error', text: 'Geolocation is not supported by your browser.' });
      return;
    }

    setIsLocating(true);
    setLocationMsg({ type: 'info', text: 'Detecting your GPS location...' });

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLocationCoords({ lat, lng });

        try {
          // Reverse geocode via OpenStreetMap Nominatim API
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
            {
              headers: {
                'Accept-Language': 'en,ur'
              }
            }
          );
          const data = await res.json();
          
          if (data && data.address) {
            const addr = data.address;
            const parts = [
              addr.road || addr.suburb || addr.neighbourhood || '',
              addr.residential || addr.commercial || '',
              addr.city || addr.town || addr.county || 'Gujranwala',
              addr.state || 'Punjab'
            ].filter(Boolean);

            const fullFormatted = parts.length > 0 ? parts.join(', ') : data.display_name;
            setCustomerAddress(fullFormatted);
            setLocationMsg({ 
              type: 'success', 
              text: `📍 Location detected: ${parts[0] || 'Current Area'}, ${addr.city || 'Gujranwala'}` 
            });
          } else {
            setCustomerAddress(`GPS: ${lat.toFixed(5)}, ${lng.toFixed(5)}`);
            setLocationMsg({ type: 'success', text: `📍 GPS coordinates captured (${lat.toFixed(4)}, ${lng.toFixed(4)})` });
          }
        } catch (err) {
          console.error('Reverse geocode error:', err);
          setCustomerAddress(`Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`);
          setLocationMsg({ type: 'success', text: '📍 GPS coordinates captured successfully' });
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        setIsLocating(false);
        let errorTxt = 'Unable to retrieve location. Please type manually.';
        if (error.code === error.PERMISSION_DENIED) {
          errorTxt = 'Location access denied in browser. Please allow location or type address.';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          errorTxt = 'GPS location unavailable. Please type your address.';
        } else if (error.code === error.TIMEOUT) {
          errorTxt = 'Location request timed out. Please try again.';
        }
        setLocationMsg({ type: 'error', text: errorTxt });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 30000
      }
    );
  };

  if (!isOpen) return null;

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      if (item.price) {
        return total + (item.price * item.quantity);
      }
      return total;
    }, 0);
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let itemsList = cart.map((item, index) => {
      const priceStr = item.price ? `Rs. ${(item.price * item.quantity).toLocaleString()}` : 'Price on Request';
      const portionStr = item.portion ? ` (${item.portion})` : '';
      return `${index + 1}. *${item.name}*${portionStr} × ${item.quantity} ➔ ${priceStr}`;
    }).join('\n');

    const total = calculateTotal();

    const orderText = encodeURIComponent(
      `*🍽️ NEW FOOD ORDER - MINI MONAL RESTAURANT*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Customer:* ${customerName || 'Valued Guest'}\n` +
      `📞 *Phone:* ${customerPhone || 'N/A'}\n` +
      `🛵 *Service Type:* ${orderType}\n` +
      (orderType === 'Delivery' && customerAddress ? `📍 *Delivery Address:* ${customerAddress}\n` : '') +
      (orderType === 'Delivery' && locationCoords ? `🗺️ *Live Google Maps Pin:* https://maps.google.com/?q=${locationCoords.lat},${locationCoords.lng}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `*ORDERED ITEMS:*\n${itemsList}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `💰 *Estimated Total:* Rs. ${total.toLocaleString()}\n` +
      (specialInstructions ? `📝 *Note:* ${specialInstructions}\n` : '') +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent via Mini Monal Online Ordering System_`
    );

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${orderText}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-box" 
        onClick={(e) => e.stopPropagation()}
        style={{ 
          maxWidth: '560px', 
          maxHeight: '90vh', 
          display: 'flex', 
          flexDirection: 'column',
          padding: '1.75rem' 
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag color="var(--gold-primary)" size={22} />
            <h3 style={{ fontSize: '1.35rem', color: '#fff' }}>Your Order Tray</h3>
            <span className="badge-gold">{cart.length} items</span>
          </div>
          <button 
            onClick={onClose} 
            style={{ color: 'var(--text-secondary)', padding: '0.35rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Items List */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              <Utensils size={40} style={{ opacity: 0.3, margin: '0 auto 1rem' }} />
              <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Your tray is empty</p>
              <p style={{ fontSize: '0.9rem' }}>Browse the menu and add your favorite Karahi, BBQ, or Platters!</p>
            </div>
          ) : (
            cart.map((item) => (
              <div 
                key={`${item.id}-${item.portion || 'std'}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{ flexGrow: 1, paddingRight: '1rem' }}>
                  <h5 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 600 }}>{item.name}</h5>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                    {item.portion && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', background: 'rgba(212,175,55,0.1)', padding: '0.1rem 0.4rem', borderRadius: '4px' }}>
                        {item.portion}
                      </span>
                    )}
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 700 }}>
                      {item.price ? `Rs. ${item.price.toLocaleString()}` : 'Price on Request'}
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', background: '#171a22', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)' }}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.portion, -1)}
                      style={{ padding: '0.35rem 0.6rem', color: 'var(--text-secondary)' }}
                    >
                      <Minus size={13} />
                    </button>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, minWidth: '20px', textAlign: 'center', color: '#fff' }}>
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.portion, 1)}
                      style={{ padding: '0.35rem 0.6rem', color: 'var(--text-secondary)' }}
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  <button 
                    onClick={() => removeItem(item.id, item.portion)}
                    style={{ color: '#e04b4b', padding: '0.4rem', background: 'rgba(224,75,75,0.1)', borderRadius: '6px' }}
                    title="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Options */}
        {cart.length > 0 && (
          <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* Service Type Selector */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
              {[
                { id: 'Dine-in', label: 'Dine-In', icon: Utensils },
                { id: 'Drive-through', label: 'Drive-thru', icon: Car },
                { id: 'Delivery', label: 'Delivery', icon: Truck }
              ].map((serv) => {
                const Icon = serv.icon;
                return (
                  <button
                    key={serv.id}
                    onClick={() => setOrderType(serv.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.45rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      background: orderType === serv.id ? 'var(--gold-gradient)' : 'rgba(255,255,255,0.04)',
                      color: orderType === serv.id ? '#000' : 'var(--text-secondary)',
                      border: orderType === serv.id ? 'none' : '1px solid rgba(255,255,255,0.08)'
                    }}
                  >
                    <Icon size={14} /> {serv.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <input 
                type="text" 
                placeholder="Your Name (optional)" 
                value={customerName} 
                onChange={(e) => setCustomerName(e.target.value)}
                className="modal-input" 
                style={{ marginBottom: 0, padding: '0.55rem 0.85rem', fontSize: '0.85rem' }}
              />
              <input 
                type="tel" 
                placeholder="Phone (optional)" 
                value={customerPhone} 
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="modal-input" 
                style={{ marginBottom: 0, padding: '0.55rem 0.85rem', fontSize: '0.85rem' }}
              />
            </div>

            {orderType === 'Delivery' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <div style={{ position: 'relative', flexGrow: 1 }}>
                    <input 
                      type="text" 
                      placeholder="Delivery Address / House / Street / Area" 
                      value={customerAddress} 
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="modal-input" 
                      style={{ 
                        marginBottom: 0, 
                        padding: '0.6rem 0.85rem 0.6rem 2.2rem', 
                        fontSize: '0.85rem',
                        width: '100%'
                      }}
                    />
                    <MapPin 
                      size={15} 
                      color="var(--gold-primary)" 
                      style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} 
                    />
                  </div>

                  <button
                    type="button"
                    onClick={detectLocation}
                    disabled={isLocating}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.6rem 0.85rem',
                      background: isLocating ? 'rgba(212, 175, 55, 0.2)' : 'var(--gold-gradient)',
                      color: '#000',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: isLocating ? 'wait' : 'pointer',
                      whiteSpace: 'nowrap',
                      border: 'none',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 8px rgba(212, 175, 55, 0.25)'
                    }}
                    title="Get my current live GPS location"
                  >
                    {isLocating ? (
                      <>
                        <Loader2 size={14} className="animate-spin" /> Locating...
                      </>
                    ) : (
                      <>
                        <Navigation size={14} /> Auto-Detect Location
                      </>
                    )}
                  </button>
                </div>

                {/* Location Feedback Status */}
                {locationMsg.text && (
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '6px',
                      background: locationMsg.type === 'error' 
                        ? 'rgba(224, 75, 75, 0.12)' 
                        : locationMsg.type === 'success' 
                        ? 'rgba(46, 204, 113, 0.12)' 
                        : 'rgba(56, 189, 248, 0.12)',
                      color: locationMsg.type === 'error' 
                        ? '#ff6b6b' 
                        : locationMsg.type === 'success' 
                        ? '#2ecc71' 
                        : '#38bdf8',
                      border: `1px solid ${
                        locationMsg.type === 'error' 
                          ? 'rgba(224, 75, 75, 0.25)' 
                          : locationMsg.type === 'success' 
                          ? 'rgba(46, 204, 113, 0.25)' 
                          : 'rgba(56, 189, 248, 0.25)'
                      }`
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {locationMsg.type === 'success' && <CheckCircle2 size={12} />}
                      {locationMsg.type === 'error' && <AlertCircle size={12} />}
                      {locationMsg.type === 'info' && <Loader2 size={12} className="animate-spin" />}
                      <span>{locationMsg.text}</span>
                    </div>

                    {locationCoords && (
                      <a 
                        href={`https://maps.google.com/?q=${locationCoords.lat},${locationCoords.lng}`} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{ color: 'var(--gold-light)', textDecoration: 'underline', fontWeight: 600, marginLeft: '0.5rem', whiteSpace: 'nowrap' }}
                      >
                        View Map
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Total and Submit button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0' }}>
              <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Estimated Total:</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold-light)' }}>
                Rs. {calculateTotal().toLocaleString()}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={clearCart}
                style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontSize: '0.82rem' }}
              >
                Clear
              </button>
              <button 
                onClick={handleWhatsAppCheckout}
                className="btn-primary"
                style={{ flexGrow: 1, background: '#25D366', color: '#fff', justifyContent: 'center' }}
              >
                <Send size={16} /> Send Order to WhatsApp (+92 320 7462212)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
