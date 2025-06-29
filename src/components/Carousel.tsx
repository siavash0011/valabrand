import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "./9X3sTCErveScE24wKdWU3W-1200-80.jpg",
    "./2254852-1716666892-keanu-reeves-neo-matrix-1EdRae3qXMfe.jpg",
    "./33035909-hugo-weaving-als-agent-smith-in-der-matrix-trilogie-warner-3cfe.jpg",
    "./matrix-298571.webp",
    "./1508939944582-matrix_code-copy.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToPrev = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToNext = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              className="block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex gap-2 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        type="button"
        onClick={goToPrev}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <ChevronRight className="text-white" size={20} />
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        onClick={goToNext}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <ChevronLeft className="text-white" size={20} />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
