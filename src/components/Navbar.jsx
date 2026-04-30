import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'About', 
    path: '/about',
    subLinks: [
      { name: 'Our Story', path: '/about' },
      { name: 'Vision & Mission', path: '/vision-mission' },
      { name: 'Our Team', path: '/team' },
    ]
  },
  { 
    name: 'Companies', 
    path: '/our-companies',
    subLinks: [
      { name: 'View All Companies', path: '/our-companies' },
      { name: 'Pramukh Import Export', path: '/companies/import-export' },
      { name: 'Pramukh Techventures', path: '/companies/tech-venture' },
      { name: 'Shreeji Infra', path: '/companies/shreeji-infra' },
      { name: 'Bricks Trading Division', path: '/companies/brics' },
    ]
  },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Extra lock for mobile
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
    return () => {
        document.body.style.overflow = 'unset';
        document.body.style.touchAction = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500",
      scrolled ? "py-4 bg-navy/90 backdrop-blur-2xl border-b border-white/5" : "py-8 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 relative h-12">
        
        {/* Logo at Left */}
        <Link to="/" className="flex items-center z-50">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-navy text-xl shadow-[0_0_20px_rgba(242,201,76,0.3)]">D</div>
        </Link>

        {/* Desktop Links (ABSOLUTE CENTERED) */}
        <div className="hidden md:flex items-center gap-2 p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.subLinks && link.subLinks.some(s => location.pathname === s.path));
            
            return (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setHoveredPath(link.name)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {/* Active/Hover Pill Animation */}
                {(isActive || hoveredPath === link.name) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}

                {link.subLinks ? (
                  <div className="relative">
                    <button className={cn(
                      "relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1",
                      isActive ? "text-gold" : "text-cream/70 group-hover:text-cream"
                    )}>
                      {link.name}
                      <span className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform duration-300">▼</span>
                    </button>
                    
                    {/* Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-navy/95 backdrop-blur-2xl border border-white/10 rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-5 py-2.5 text-sm text-cream/60 hover:text-gold hover:bg-white/5 transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={link.path} 
                    className={cn(
                      "relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-300 block",
                      isActive ? "text-gold" : "text-cream/70 hover:text-cream"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Brand & CTA at Right */}
        <div className="flex items-center gap-6 z-50">
          <Link to="/hub" className="hidden sm:flex group items-center gap-2 px-6 py-2.5 bg-gold rounded-full text-navy font-black text-sm uppercase tracking-widest hover:scale-[1.05] transition-all duration-300 shadow-[0_0_20px_rgba(242,201,76,0.2)]">
            DHYANORA
          </Link>
          
          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-cream hover:text-gold transition-colors z-50 relative w-10 h-10 flex items-center justify-center" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* FULL SCREEN MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-navy z-[60] flex flex-col items-center justify-center p-6 h-[100dvh]"
          >
            {/* Mobile Nav Links */}
            <div className="flex flex-col items-center gap-6 w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className="w-full text-center"
                >
                  {link.subLinks ? (
                    <div className="space-y-4">
                      <span className="text-gray-light/20 uppercase tracking-[0.3em] text-[10px] font-bold">{link.name}</span>
                      <div className="flex flex-col gap-3">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="text-xl font-heading font-bold text-cream/60 hover:text-gold transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-4xl font-heading font-bold text-cream hover:text-gold transition-colors block uppercase tracking-tighter"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8 w-full"
              >
                <Link to="/hub" className="btn-primary w-full py-5 text-center block font-black uppercase tracking-[0.2em]">
                  DHYANORA
                </Link>
              </motion.div>
            </div>

            {/* Background Decorative Gradient */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(242,201,76,0.08)_0%,transparent_60%)] pointer-events-none -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
