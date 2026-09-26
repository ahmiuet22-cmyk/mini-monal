import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import ReservationModal from './components/ReservationModal';
import OrderDrawer from './components/OrderDrawer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { MessageCircle, ShoppingBag, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from './data/menuData';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [reservationOpen, setReservationOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Trigger universal hardware-accelerated scroll animations on page change & scroll
  useScrollReveal(activePage);

  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('mini_monal_tray');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('mini_monal_tray', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  // Cart operations
  const addToCart = (dishItem) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (i) => i.id === dishItem.id && i.portion === dishItem.portion
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += (dishItem.quantity || 1);
        return updated;
      } else {
        return [...prevCart, { ...dishItem, quantity: dishItem.quantity || 1 }];
      }
    });
  };

  const updateQuantity = (dishId, portion, change) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === dishId && item.portion === portion) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeItem = (dishId, portion) => {
    setCart((prevCart) => 
      prevCart.filter((i) => !(i.id === dishId && i.portion === portion))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-root">
      {/* Dynamic SEO Meta & Schema */}
      <SEOHead activePage={activePage} />

      {/* Main Glassmorphic Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
        openReservation={() => setReservationOpen(true)}
        cartCount={totalItemsInCart}
        openCart={() => setCartOpen(true)}
      />

      {/* Main Page Content Router */}
      <main>
        {activePage === 'home' && (
          <HomePage 
            setActivePage={setActivePage} 
            openReservation={() => setReservationOpen(true)}
            addToCart={addToCart}
          />
        )}
        {activePage === 'menu' && (
          <MenuPage 
            addToCart={addToCart}
            openCart={() => setCartOpen(true)}
          />
        )}
        {activePage === 'about' && (
          <AboutPage 
            setActivePage={setActivePage}
            openReservation={() => setReservationOpen(true)}
          />
        )}
        {activePage === 'gallery' && (
          <GalleryPage />
        )}
        {activePage === 'contact' && (
          <ContactPage 
            openReservation={() => setReservationOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Small Floating WhatsApp Icon */}
      <a 
        href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Hello Mini Monal Restaurant, I would like to inquire / place a food order.')}`}
        target="_blank" 
        rel="noreferrer"
        className="floating-order-btn"
        style={{
          bottom: totalItemsInCart > 0 ? '84px' : '24px'
        }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      {/* Sticky Bottom Bar when items are in tray */}
      {totalItemsInCart > 0 && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(16, 18, 23, 0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border-active)',
          padding: '0.85rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 89,
          boxShadow: '0 -10px 30px rgba(0,0,0,0.7)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Order Tray ({totalItemsInCart} items)</span>
              <div style={{ color: 'var(--gold-light)', fontWeight: 800, fontSize: '1.15rem' }}>
                Rs. {cart.reduce((tot, it) => tot + ((it.price || 0) * it.quantity), 0).toLocaleString()}
              </div>
            </div>
            <button 
              onClick={clearCart}
              style={{ fontSize: '0.78rem', color: '#ff8e8e', background: 'rgba(224,75,75,0.12)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}
            >
              Clear
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              className="btn-primary" 
              onClick={() => setCartOpen(true)}
              style={{ padding: '0.65rem 1.5rem', fontSize: '0.92rem' }}
            >
              <ShoppingBag size={17} /> View Order Tray
            </button>
          </div>
        </div>
      )}

      {/* Interactive Reservation Modal */}
      <ReservationModal 
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Interactive Order Tray Drawer */}
      <OrderDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
        clearCart={clearCart}
      />
    </div>
  );
}
