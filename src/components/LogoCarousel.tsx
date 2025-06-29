import React, { useEffect, useRef } from 'react';

const LogoCarousel = () => {
  const logos = [
    'valabrand/logos/imaawdges.jpg',
    'valabrand/logos/dj.jpg',
    'valabrand/logos/apple-removebg-preview.png',
    'valabrand/logos/cropped-arammind-logo-e1742546820790-removebg-preview (1).png',
    'valabrand/logos/08fcefea5b1035bd08efae4394afb497-removebg-preview.png',
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // ✅ safety check
  
    let animationFrameId: number;
    let speed = 0.5;
    let position = 0;
  
    const animate = () => {
      position -= speed;
      if (position < -container.scrollWidth / 2) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };
  
    animationFrameId = requestAnimationFrame(animate);
  
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  

  return (
    <div className="overflow-hidden mx-auto max-w-screen-lg"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent blur)'
      }}
    >
      <div ref={containerRef} className="flex items-center whitespace-nowrap will-change-transform mt-10">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="inline-flex px-3 min-w-[200px] sm:min-w-[140px] md:min-w-[260px] justify-center"
          >
            <img
              src={logo}
              alt={`Logo ${index % logos.length + 1}`}
              className="h-20 sm:h-28 md:h-28 lg:h-30 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
  
}
export default LogoCarousel;
