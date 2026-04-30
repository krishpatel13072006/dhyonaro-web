import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowLeft } from 'lucide-react';

const PramukhLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/pramukh' },
    { name: 'About', path: '/pramukh/about' },
    { name: 'Services', path: '/pramukh/services' },
    { name: 'Contact', path: '/pramukh/contact' },
  ];

  return (
    <div className="relative min-h-screen bg-navy text-cream font-sans">
      <div className="grain-overlay" />
      
      {/* Sub-company Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'py-4 bg-navy/90 backdrop-blur-md border-white/10' : 'py-6 bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/our-companies" className="text-gray-light/60 hover:text-gold transition-colors flex items-center gap-2 text-sm font-medium">
              <ArrowLeft size={16} /> <span className="hidden md:inline">Back to Group</span>
            </Link>
            <div className="w-px h-6 bg-white/10 hidden md:block"></div>
            <Link to="/pramukh" className="flex flex-col">
              <span className="text-xl md:text-2xl font-heading font-black text-cream uppercase italic leading-none">
                Pramukh <span className="text-gold">I/E.</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-widest uppercase transition-colors hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-cream'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button className="md:hidden text-cream" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-heading font-black uppercase italic tracking-widest ${location.pathname === link.path ? 'text-gold' : 'text-cream'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/our-companies" onClick={() => setIsOpen(false)} className="mt-8 text-sm font-medium text-gray-light/60 hover:text-gold flex items-center gap-2">
              <ArrowLeft size={16} /> Back to Dhyanora Group
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 min-h-screen">
        <Outlet />
      </main>
      
      <footer className="py-12 border-t border-white/10 bg-navy/50 text-center">
         <p className="text-gray-light/60 text-sm">© {new Date().getFullYear()} Pramukh Import Export. A Dhyanora Group Company.</p>
      </footer>
    </div>
  );
};

export default PramukhLayout;
