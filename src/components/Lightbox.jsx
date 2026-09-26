import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function Lightbox({ isOpen, items, currentIndex, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div className="lightbox-modal" onClick={onClose}>
      <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
        <X size={32} />
      </button>

      {items.length > 1 && (
        <>
          <button 
            className="testimonial-nav-btn testimonial-prev"
            style={{ left: '2rem', width: '50px', height: '50px' }}
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            className="testimonial-nav-btn testimonial-next"
            style={{ right: '2rem', width: '50px', height: '50px' }}
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next Image"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img 
          src={currentItem.image} 
          alt={currentItem.title || "Mini Monal Restaurant"} 
          className="lightbox-image" 
        />
        <div className="lightbox-caption">
          <h4 style={{ color: 'var(--gold-light)', fontSize: '1.4rem', fontFamily: 'var(--font-serif)' }}>
            {currentItem.title}
          </h4>
          {currentItem.description && (
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.35rem' }}>
              {currentItem.description}
            </p>
          )}
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem', display: 'inline-block' }}>
            {currentIndex + 1} of {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}
