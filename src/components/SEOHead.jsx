import React, { useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function SEOHead({ activePage }) {
  useEffect(() => {
    const titles = {
      home: "Mini Monal Restaurant | Family Restaurant in Gujranwala",
      menu: "Complete Menu & Prices | Mini Monal Restaurant Gujranwala",
      about: "Our Story & Heritage | Mini Monal Restaurant Gujranwala",
      gallery: "Food & Restaurant Gallery | Mini Monal Restaurant Gujranwala",
      contact: "Contact & Directions GT Road | Mini Monal Restaurant Gujranwala"
    };

    const descriptions = {
      home: "Mini Monal Restaurant in Rahwali Cantt, Gujranwala — enjoy authentic Pakistani cuisine, BBQ, karahi, Chinese food, rice, tandoor and family platters.",
      menu: "Browse over 100+ authentic Pakistani dishes, Special Mutton Karahi, sizzling BBQ, Chicken Handi, and Family Platters at Mini Monal Restaurant Gujranwala.",
      about: "Discover the culinary vision, kitchen hygiene standards, and family dining values of Mini Monal Restaurant on Grand Trunk Road, Gujranwala.",
      gallery: "View photos of authentic Pakistani Karahi, mixed BBQ platters, freshly baked tandoori naans, and family dining ambiance at Mini Monal.",
      contact: "Find Mini Monal Restaurant on Grand Trunk Road, Rahwali Cantt, Gujranwala. Call +92 320 7462212 for reservations and directions."
    };

    document.title = titles[activePage] || titles.home;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', descriptions[activePage] || descriptions.home);
    }

    // Add / Update JSON-LD Structured Data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Mini Monal Restaurant",
      "image": "https://minimonal.pk/images/storefront.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Grand Trunk Road, Rahwali Cantt, Choudry Bazar, near Dr Arshad, Muslim Town",
        "addressLocality": "Gujranwala",
        "postalCode": "52250",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.2289",
        "longitude": "74.1956"
      },
      "telephone": RESTAURANT_INFO.phoneRaw,
      "servesCuisine": ["Pakistani", "Barbecue", "Karahi", "Chinese", "Asian"],
      "priceRange": RESTAURANT_INFO.priceRange,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.1",
        "reviewCount": "304"
      },
      "openingHours": "Mo-Su 12:00-02:00",
    };

    let scriptTag = document.getElementById('restaurant-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'restaurant-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, [activePage]);

  return null;
}
