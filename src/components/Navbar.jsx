import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import dhyanoraLogo from '../companies-logo/Dhyanora logo.png';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    path: '/about',
    subLinks: [
      { name: 'Our Story', path: '/about#story' },
      { name: 'Vision & Mission', path: '/about#vision' },
      { name: 'Our Team', path: '/about#team' },
    ]
  },
  {
    name: 'Our Companies',
    path: '/companies',
    subLinks: [
      { name: 'View All Companies', path: '/companies' },
      { name: 'Shreeji Infra', path: '/companies/shreeji-infra' },
      { name: 'Pramukh Tech', path: '/companies/tech-venture' },
    ]
  }
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

  const isHomePage = location.pathname === '/';

  return (
    <nav className={cn(
      // Added `right-0` to guarantee true edge-to-edge stretching
      "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b",
      scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200"
        : (isHomePage ? "bg-transparent border-transparent" : "bg-white border-transparent")
    )}>
      {/* 
        FIX: Removed py-3/py-6 and replaced with explicit height (h-*) classes. 
        `flex items-center` now mathematically centers the logo and links, 
        making it impossible for them to hide under the top edge.
      */}
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 relative transition-all duration-300",
        scrolled ? "py-4" : "py-8"
      )}>

        {/* Logo Left */}
        <Link to="/" className="flex items-center shrink-0">
          <div className={cn(
            "p-1.5 md:p-2 rounded-xl transition-all duration-300 flex items-center justify-center",
            (!scrolled && isHomePage) ? "bg-white shadow-lg" : "bg-transparent"
          )}>
            <img
              src={dhyanoraLogo}
              alt="Dhyanora Group"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-12 mr-12">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group flex items-center"
            >
              {link.subLinks ? (
                <div className="flex items-center gap-1 cursor-pointer py-2">
                  <Link
                    to={link.path}
                    className={cn(
                      "text-xs font-black uppercase transition-all duration-300",
                      location.pathname.startsWith(link.path)
                        ? ((!scrolled && isHomePage) ? "text-white" : "text-navy")
                        : ((!scrolled && isHomePage) ? "text-white/80 hover:text-white" : "text-navy/60 hover:text-navy")
                    )}
                  >
                    {link.name}
                  </Link>
                  <ChevronDown size={14} className={cn(
                    "transition-transform duration-300 group-hover:rotate-180",
                    (!scrolled && isHomePage) ? "text-white/60" : "text-navy/60"
                  )} />

                  {/* Dropdown Menu */}
                  <div className="absolute top-full pt-4 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-md py-2 w-48 flex flex-col overflow-hidden">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    "text-xs font-black uppercase transition-all duration-300 py-2 block",
                    location.pathname === link.path
                      ? ((!scrolled && isHomePage) ? "text-white" : "text-navy")
                      : ((!scrolled && isHomePage) ? "text-white/80 hover:text-white" : "text-navy/60 hover:text-navy")
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link to="/contact" className={cn(
            "hidden lg:block px-8 py-3 font-bold text-xs uppercase transition-all duration-300 rounded-sm",
            (!scrolled && isHomePage) ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"
          )}>
            Contact us
          </Link>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden transition-colors flex items-center justify-center p-2",
              (!scrolled && isHomePage) ? "text-white" : "text-navy"
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
                <div key={link.name} className="flex flex-col gap-4">
                  <Link
                    to={link.path}
                    className="text-2xl font-black text-navy uppercase"
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="text-sm font-bold text-gray-500 uppercase hover:text-black transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
