import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const panelVariants = {
  closed: {
    height: 0,
    opacity: 0,
    backdropFilter: 'blur(0px)',
  },
  open: {
    height: 'auto',
    opacity: 1,
    backdropFilter: 'blur(12px)',  // match your “md” level blur
  },
};

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const dark = saved === 'dark';
    document.documentElement.classList.toggle('dark', dark);
    setIsDark(dark);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDark = () => {
    const html = document.documentElement;
    const nowDark = html.classList.toggle('dark');
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    setIsDark(nowDark);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-6' : 'bg-transparent py-8'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-center px-6 lg:px-8">
        {/* Mobile Toggle on the left */}
        <button
          className="md:hidden absolute top-6 left-6 flex items-center text-foreground"
          onClick={() => setMobileMenuOpen((o) => !o)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-x-4 backdrop-blur-sm border border-primary/30 rounded-xl px-10 py-2">
          <Link to="/#hero">
            <img
              src="./logos/the-matrix-logo-png_seeklogo-138764-removebg-preview.png"
              alt="matrix"
              className="h-6"
            />
          </Link>
         <Link to="/contact-us" className="btn-2">تماس با ما</Link>
         <a href="#services" className="btn-2">خدمات</a>
          <a href="#results" className="btn-2">نمونه کار</a>
          <a href="#faq" className="btn-2">سوالات متداول</a>
          <Link to="/#booking">
            <button className="btn font-bold">رزرو ملاقات</button>
          </Link>
          <button onClick={toggleDark} className="ml-4 p-2 rounded-full hover:bg-white/10 transition text-foreground">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2, ease: 'easeInOut' }}
          >
            {/* invisible click catcher */}
            <div className="absolute inset-0" onClick={() => setMobileMenuOpen(false)} />
            {/* slide+blur panel */}
            <motion.div
              className="relative container mx-auto px-4 py-4 md:hidden z-50 border-b border-matrix-black dark:border-b-matrix-glow rounded-sm"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: .4, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
              style={{ backdropFilter: 'blur(0px)' }} // start point, overridden by variants
            >
              {/* X in same left spot */}
              <button
                className="absolute left-4 p-2 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
              <nav className="mt-12 flex flex-col space-y-4 font-bold">
                <a href="#results" className="py-2 text-foreground">نتایج</a>
                <a href="#services" className="py-2 text-foreground">خدمات</a>
                <a href="#process" className="py-2 text-foreground">رویه</a>
                <a href="#faq" className="py-2 text-foreground">سوالات متداول</a>
                <div className='flex  justify-between justify-items-center '>
                <Link to="/contact-us" className="py-2 text-foreground">تماس با ما</Link>
                  <button onClick={toggleDark} className=" py-2 text-foreground">
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
              </div>
                <button className="btn">رزرو ملاقات</button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
