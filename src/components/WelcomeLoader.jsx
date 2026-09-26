import React, { useState, useEffect } from 'react';
import { Crown, Sparkles, Utensils } from 'lucide-react';

export default function WelcomeLoader({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Smooth progress counter increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const diff = 100 - prev;
        const step = Math.max(2, Math.floor(diff * 0.14));
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsFadingOut(true);
        const removeTimeout = setTimeout(() => {
          if (onFinished) onFinished();
        }, 650);
        return () => clearTimeout(removeTimeout);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [progress, onFinished]);

  return (
    <div 
      className={`welcome-splash-screen ${isFadingOut ? 'fade-out' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#090a0d',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: isFadingOut ? 'none' : 'auto'
      }}
    >
      {/* Ambient luxury glow background */}
      <div 
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(180, 83, 9, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'pulseGoldGlow 4s infinite ease-in-out',
          pointerEvents: 'none'
        }}
      />

      {/* Decorative Top Border Ribbon */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--gold-gradient)',
          boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
        }}
      />

      {/* Skip Button in corner */}
      <button
        onClick={() => {
          setIsFadingOut(true);
          setTimeout(() => onFinished && onFinished(), 300);
        }}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          color: 'var(--gold-light)',
          padding: '0.4rem 0.9rem',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          fontWeight: 600,
          cursor: 'pointer',
          letterSpacing: '0.05em',
          transition: 'all 0.2s ease',
          zIndex: 10
        }}
      >
        Skip Intro ›
      </button>

      {/* Main Content Container */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 1.5rem',
          maxWidth: '560px',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Animated Crown Icon with Glowing Rings */}
        <div 
          style={{
            position: 'relative',
            width: '90px',
            height: '90px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.75rem'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '50%',
              border: '1px dashed rgba(212, 175, 55, 0.35)',
              animation: 'spin 18s linear infinite'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.35)'
            }}
          />
          <Crown 
            size={46} 
            color="var(--gold-primary)" 
            style={{ 
              filter: 'drop-shadow(0 4px 15px rgba(212, 175, 55, 0.6))',
              animation: 'floatGentle 3.5s ease-in-out infinite' 
            }} 
          />
        </div>

        {/* Small Spaced Subtitle */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid var(--border-subtle)',
            padding: '0.3rem 1rem',
            borderRadius: 'var(--radius-full)',
            color: 'var(--gold-light)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}
        >
          <Sparkles size={12} color="var(--gold-primary)" />
          WELCOME TO
        </div>

        {/* Grand Brand Name */}
        <h1 
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5.5vw, 3.2rem)',
            fontWeight: 900,
            letterSpacing: '0.06em',
            lineHeight: 1.15,
            color: '#ffffff',
            margin: '0 0 0.5rem',
            textTransform: 'uppercase'
          }}
        >
          MINI MONAL <br />
          <span className="text-gold-gradient">RESTAURANT</span>
        </h1>

        {/* Tagline */}
        <p 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
            fontStyle: 'italic',
            color: 'var(--gold-light)',
            margin: '0 0 2.2rem',
            opacity: 0.95
          }}
        >
          "Authentic Flavors. Memorable Family Dining."
        </p>

        {/* Progress Bar Container */}
        <div 
          style={{
            width: '260px',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            alignItems: 'center'
          }}
        >
          {/* Progress Bar Track */}
          <div 
            style={{
              width: '100%',
              height: '4px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '4px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            <div 
              style={{
                width: `${progress}%`,
                height: '100%',
                background: 'var(--gold-gradient)',
                borderRadius: '4px',
                transition: 'width 0.05s linear',
                boxShadow: '0 0 12px rgba(212, 175, 55, 0.8)'
              }}
            />
          </div>

          {/* Loading status & percentage */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              fontWeight: 600,
              letterSpacing: '0.08em'
            }}
          >
            <span style={{ color: 'var(--text-secondary)' }}>Preparing Experience...</span>
            <span style={{ color: 'var(--gold-light)' }}>{progress}%</span>
          </div>
        </div>

        {/* Footnote */}
        <div 
          style={{
            marginTop: '2.5rem',
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}
        >
          Grand Trunk Road • Rahwali Cantt, Gujranwala
        </div>
      </div>
    </div>
  );
}
