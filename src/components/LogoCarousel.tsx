import React from 'react';
import './LogoCarousel.css';

const logos = [
  '/logos/08fcefea5b1035bd08efae4394afb497-removebg-preview.png',
  '/logos/apple-removebg-preview.png',
  '/logos/cropped-arammind-logo-e1742546820790-removebg-preview (1).png',
  '/logos/photo_2025-07-22_15-15-44-removebg-preview.png',
  '/images (1).jpg',
  '/ba78fc340b71f8f1741bb473f5c606.webp',
];

const LogoCarousel = () => (
  <div
    className="carousel-container"
    style={{
      WebkitMaskImage:
        'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
      maskImage:
        'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
    }}
  >
    <div className="carousel-track">
      {[...logos, ...logos].map((src, i) => (
        <img key={i} src={src} alt={`logo-${i}`} className="carousel-logo" />
      ))}
    </div>
  </div>
);

export default LogoCarousel;
