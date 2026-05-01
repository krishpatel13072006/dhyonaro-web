import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowLeft, ChevronDown } from 'lucide-react';

const BricsLayout = () => {
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

  const navLinks = [
    { name: 'Home', path: '/brics' },
    { name: 'About', path: '/brics/about' },
    { 
      name: 'Products', 
      path: '/brics/products',
      subLinks: [
        { name: 'First-Class Bricks', path: '/brics/products/first-class' },
        { name: 'Second-Class Bricks', path: '/brics/products/second-class' },
        { name: 'AAC Blocks', path: '/brics/products/aac-blocks' },
        { name: 'Building Materials', path: '/brics/products/materials' },
      ]
    },
    { name: 'Contact', path: '/brics/contact' },
  ];

  // Helper to determine if we are on a page with a dark hero (like BricsHome)
  const isDarkHeroPage = location.pathname === '/brics';

  return (
    <div className="relative min-h-screen bg-off-white text-navy font-sans">
      <div className="grain-overlay" />
      
      {/* Sub-company Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white shadow-md border-b border-navy/5' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/our-companies" className={`transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${(!scrolled && isDarkHeroPage) ? 'text-white/60 hover:text-white' : 'text-navy/60 hover:text-navy'}`}>
              <ArrowLeft size={14} /> <span className="hidden md:inline">Group</span>
            </Link>
            <div className={`w-px h-6 hidden md:block ${(!scrolled && isDarkHeroPage) ? 'bg-white/10' : 'bg-navy/10'}`}></div>
            <Link to="/brics" className="flex flex-col">
              <span className={`text-xl md:text-2xl font-heading font-black uppercase italic leading-none transition-colors ${(!scrolled && isDarkHeroPage) ? 'text-white' : 'text-navy'}`}>
                Bricks <span className="text-gold">Trading.</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <div className="flex items-center gap-1 cursor-pointer py-1">
                    <Link 
                      to={link.path}
                      className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${location.pathname.startsWith(link.path) ? (scrolled || !isDarkHeroPage ? 'text-navy' : 'text-white') : (scrolled || !isDarkHeroPage ? 'text-navy/40 hover:text-navy' : 'text-white/40 hover:text-white')}`}
                    >
                      {link.name}
                    </Link>
                    <ChevronDown size={12} className={`transition-transform duration-300 group-hover:rotate-180 ${(!scrolled && isDarkHeroPage) ? 'text-white/30' : 'text-navy/30'}`} />
                    
                    {/* Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white border border-navy/5 rounded-2xl shadow-2xl py-4 w-64">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-6 py-3 text-[10px] font-black uppercase tracking-widest text-navy/60 hover:text-navy hover:bg-off-white transition-all"
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
                    className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${location.pathname === link.path ? (scrolled || !isDarkHeroPage ? 'text-navy after:bg-gold' : 'text-white after:bg-gold') + ' after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5' : (scrolled || !isDarkHeroPage ? 'text-navy/40 hover:text-navy' : 'text-white/40 hover:text-white')}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button className={`md:hidden transition-colors ${(!scrolled && isDarkHeroPage) ? 'text-white' : 'text-navy'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 w-full z-40 bg-white border-b border-navy/5 flex flex-col items-center py-10 gap-6 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center gap-4">
                <Link
                  to={link.path}
                  onClick={() => !link.subLinks && setIsOpen(false)}
                  className={`text-2xl font-heading font-black uppercase italic tracking-widest ${location.pathname.startsWith(link.path) ? 'text-navy' : 'text-navy/30'}`}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="flex flex-col items-center gap-4 pb-4">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className="text-xs font-black text-navy/40 uppercase tracking-widest hover:text-navy"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/our-companies" onClick={() => setIsOpen(false)} className="mt-4 text-[10px] font-black text-navy/40 uppercase tracking-[0.3em] flex items-center gap-2">
              <ArrowLeft size={14} /> Back to Group
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen">
        <Outlet />
      </main>
      
      <footer className="py-20 border-t border-navy/5 bg-white text-center">
         <p className="text-navy/40 text-[10px] font-black uppercase tracking-[0.3em]">© {new Date().getFullYear()} Bricks Trading Division. A Dhyanora Group Company.</p>
      </footer>
    </div>
  );
};

export default BricsLayout;
