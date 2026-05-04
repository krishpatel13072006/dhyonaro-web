import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp, ArrowRight } from 'lucide-react';
import dhyanoraLogo from '../companies-logo/Dhyanora logo.png';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link to="/">
              <img src={dhyanoraLogo} alt="Dhyanora Group" className="h-10 w-auto" />
            </Link>
            <p className="text-white/70 text-sm font-bold leading-relaxed max-w-xs">
              A focused collective of businesses across Gujarat, unified by discipline and values.
            </p>
            <div className="space-y-3">
              {[
                { Icon: MapPin, text: 'Ahmedabad, Gujarat, India' },
                { Icon: Phone, text: '+91 90990 00000' },
                { Icon: Mail, text: 'contact@dhyanora.com' },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70 text-xs font-bold">
                  <Icon size={13} className="text-gold flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block md:col-span-2" />

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-white/40 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Pages</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Companies', to: '/companies' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white/30 hover:text-gold text-xs font-black uppercase tracking-widest transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div className="md:col-span-3">
            <h4 className="text-white/40 font-black uppercase tracking-[0.3em] text-[10px] mb-6">Companies</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Pramukh Metal', to: '/companies/import-export' },
                { label: 'Pramukh Techventures', to: '/companies/tech-venture' },
                { label: 'Shreeji Infra', to: '/companies/shreeji-infra' },
                { label: 'Bricks Trading', to: '/companies/brics' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white/30 hover:text-gold text-xs font-black uppercase tracking-widest transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Dhyanora Group. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/20 hover:text-gold text-[10px] font-black uppercase tracking-widest transition-colors"
          >
            Back to Top
            <div className="w-7 h-7 rounded-full border border-white/10 group-hover:border-gold group-hover:bg-gold flex items-center justify-center transition-all duration-300">
              <ArrowUp size={12} className="group-hover:text-navy transition-colors" />
            </div>
          </button>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
