import { useEffect } from 'react';

/**
 * Universal hardware-accelerated scroll reveal observer.
 * Safely reveals all elements as they scroll into view while ensuring
 * dynamic components (like menu dishes) render immediately and smoothly.
 */
export function useScrollReveal(dependency) {
  useEffect(() => {
    // Scroll smoothly to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const scanAndObserve = () => {
      const selector = '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale';
      const elements = document.querySelectorAll(selector);

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in or above viewport, reveal immediately
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.95) {
          el.classList.add('is-revealed');
        }
      });
    };

    // Run initial scan
    scanAndObserve();
    const timer = setTimeout(scanAndObserve, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05
      }
    );

    const observeTargets = () => {
      const elements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale');
      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    };

    observeTargets();

    // Re-scan when scrolling
    window.addEventListener('scroll', scanAndObserve, { passive: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('scroll', scanAndObserve);
    };
  }, [dependency]);
}
