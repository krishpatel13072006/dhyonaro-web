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
    name: 'Companies',
    path: '/our-companies',
    subLinks: [
      { name: 'View All Companies', path: '/our-companies' },
      { name: 'Pramukh Metal', path: '/companies/import-export' },
      { name: 'Pramukh Tech', path: '/companies/tech-venture' },
      { name: 'Shreeji Infra', path: '/companies/shreeji-infra' },
      { name: 'Bricks Trading', path: '/companies/brics' },
    ]
  },
  { name: 'Contact', path: '/contact' },
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
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
      scrolled 
        ? "py-3 bg-white/95 backdrop-blur-md shadow-md border-navy/5" 
        : (isHomePage ? "py-6 bg-transparent border-transparent" : "py-6 bg-white border-transparent")
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 relative">
        
        {/* Logo Left */}
        <Link to="/" className="flex items-center">
          <div className={cn(
            "p-1.5 md:p-2 rounded-xl transition-all duration-300",
            (!scrolled && isHomePage) ? "bg-white shadow-lg" : "bg-transparent"
          )}>
            <img 
              src={dhyanoraLogo} 
              alt="Dhyanora Group" 
              className="h-8 md:h-10 w-auto" 
            />
          </div>
        </Link>

        {/* Desktop Links - RIGHT */}
        <div className="hidden lg:flex items-center gap-8 ml-auto mr-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
            >
              {link.subLinks ? (
                <div className="flex items-center gap-1 cursor-pointer py-2">
                   <Link
                    to={link.path}
                    className={cn(
                      "text-xs font-black uppercase transition-all duration-300",
                      location.pathname.startsWith(link.path) 
                        ? ((!scrolled && isHomePage) ? "text-white" : "text-navy")
                        : ((!scrolled && isHomePage) ? "text-white/50 group-hover:text-white" : "text-navy/50 group-hover:text-navy")
                    )}
                  >
                    {link.name}
                  </Link>
                  <ChevronDown size={14} className={cn(
                    "transition-transform duration-300 group-hover:rotate-180",
                    (!scrolled && isHomePage) ? "text-white/30" : "text-navy/30"
                  )} />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white border border-navy/5 rounded-xl shadow-2xl py-3 w-56 overflow-hidden">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-6 py-2.5 text-[10px] font-black uppercase text-navy/60 hover:text-navy hover:bg-off-white transition-all"
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
                      : ((!scrolled && isHomePage) ? "text-white/50 hover:text-white" : "text-navy/50 hover:text-navy")
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
            "hidden lg:block px-8 py-3 font-bold text-xs uppercase transition-all duration-300",
            (!scrolled && isHomePage) ? "bg-white text-black hover:bg-zinc-200" : "bg-black text-white hover:bg-zinc-800"
          )}>
            Contact us
          </Link>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden transition-colors",
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
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-navy/5 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <Link
                    to={link.path}
                    className="text-2xl font-black text-navy uppercase"
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-navy/5">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="text-sm font-bold text-navy/40 uppercase"
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
