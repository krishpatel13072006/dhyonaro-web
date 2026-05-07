import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import DhyanoraLogo1 from '../companies-logo/dhyanora-logo-1.png';
import DhyonoraLogo2 from '../companies-logo/dhyonara-logo-2.png';

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isTransparentPage = location.pathname === '/' || location.pathname.startsWith('/companies');

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 border-b",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200"
          : (isTransparentPage ? "bg-transparent border-transparent" : "bg-white border-transparent")
      )}>
        <div className={cn(
          "max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 relative transition-all duration-300",
          scrolled ? "py-2 md:py-3" : "py-4 md:py-5"
        )}>

          {/* Logo Left */}
          <Link to="/" className="flex items-center shrink-0">
            <div className={cn(
              "p-1 rounded-xl transition-all duration-300 flex items-center justify-center",
              "bg-transparent"
            )}>
              <img
                src={(!scrolled && isTransparentPage) ? DhyonoraLogo2 : DhyanoraLogo1}
                alt="Dhyanora Group"
                className="h-7 sm:h-8 md:h-12 w-auto object-contain transition-all duration-300"
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

          <div className="flex items-center gap-3 md:gap-6">
            <Link to="/contact" className={cn(
              "hidden lg:block px-8 py-3 font-bold text-xs uppercase transition-all duration-300 rounded-sm",
              (!scrolled && isTransparentPage) ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"
            )}>
              Contact us
            </Link>

            {/* Mobile Toggle */}
            <button
              className={cn(
                "lg:hidden transition-colors flex items-center justify-center p-2 rounded-lg z-[110]",
                (!scrolled && isTransparentPage) ? "text-white bg-white/10" : "text-navy bg-navy/5"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[105] bg-navy/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col h-[100dvh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <img src={DhyanoraLogo1} alt="Dhyanora Group" className="h-8 w-auto object-contain" />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-navy/5 text-navy rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col p-8 gap-6 overflow-y-auto">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-3xl font-heading font-black uppercase tracking-tight",
                        location.pathname === link.path ? "text-blue-600" : "text-navy"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto p-8 border-t border-gray-100 bg-gray-50/50">
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#1a56db] text-white flex items-center justify-center py-5 text-sm font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-blue-900/20"
                >
                  Get In Touch
                </Link>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Location</p>
                    <p className="text-xs font-bold text-navy">Ahmedabad, Gujarat</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Social</p>
                    <p className="text-xs font-bold text-navy">LinkedIn / Instagram</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


