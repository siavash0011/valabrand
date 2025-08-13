import React, { useRef, useEffect, useState } from 'react';
import './LogoCarousel.css';

const logos = [
  '/logos/cropped-arammind-logo-e1742546820790-removebg-preview (1).png',
  '/logos/photo_2025-07-22_15-15-44-removebg-preview.png',
  './logos/photo_2024-05-19_14-58-23.jpg',
  './logos/e962b673039247.Y3JvcCwxOTk5LDE1NjQsMCwyMTc-removebg-preview.png',
  './logos/images.png',
  './logos/jordanclinic-logo-1.png',
  './logos/hamdard.png',
];

const LogoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [repeat, setRepeat] = useState(2);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const logoWidth = 120; // 80px height + 2*20px margin
      const minLogos = Math.ceil(containerWidth / logoWidth) + 1;
      setRepeat(Math.ceil(minLogos / logos.length) * 2);
    }
  }, []);

  return (
    <div
      className="carousel-container"
      ref={containerRef}
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}
    >
      <div className="carousel-track">
        {[...logos, ...logos, ...logos, ...logos].map((src, i) => (
          <img key={i} src={src} alt={`logo-${i}`} className="carousel-logo" />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
