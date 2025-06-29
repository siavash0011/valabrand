// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // scroll to the element with the ID matching the hash
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // smooth scroll if you like
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    // no hash or element not found => scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}
