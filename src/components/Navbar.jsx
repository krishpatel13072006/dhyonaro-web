import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import DhyanoraLogo1 from '../companies-logo/dhyanora-logo-1.png';
import DhyanoraLogo2 from '../companies-logo/dhyanora-logo-2.png';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Our Companies', path: '/companies' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isTransparentPage = location.pathname === '/' || location.pathname.startsWith('/companies');

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b",
      scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200"
        : (isTransparentPage ? "bg-transparent border-transparent" : "bg-white border-transparent")
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 relative transition-all duration-300",
        scrolled ? "py-4" : "py-8"
      )}>

        {/* Logo Left */}
        <Link to="/" className="flex items-center shrink-0">
          <div className={cn(
            "p-1.5 md:p-2 rounded-xl transition-all duration-300 flex items-center justify-center",
            "bg-transparent"
          )}>
            <img
              src={(!scrolled && isTransparentPage) ? DhyanoraLogo2 : DhyanoraLogo1}
              alt="Dhyanora Group"
              className="h-10 md:h-14 w-auto object-contain transition-all duration-300"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-12 mr-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xs font-heading font-black uppercase transition-all duration-300 py-2 block",
                location.pathname === link.path
                  ? ((!scrolled && isTransparentPage) ? "text-white" : "text-navy")
                  : ((!scrolled && isTransparentPage) ? "text-white/80 hover:text-white" : "text-navy/60 hover:text-navy")
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link to="/contact" className={cn(
            "hidden lg:block px-8 py-3 font-bold text-xs uppercase transition-all duration-300 rounded-sm",
            (!scrolled && isTransparentPage) ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"
          )}>
            Contact us
          </Link>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden transition-colors flex items-center justify-center p-2",
              (!scrolled && isTransparentPage) ? "text-white" : "text-navy"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 overflow-y-auto"
          >
            <div className="flex flex-col p-8 gap-8 pb-32">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-black text-navy uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


