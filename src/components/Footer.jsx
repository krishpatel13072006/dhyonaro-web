import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-navy text-xl">D</div>
            <span className="font-heading text-xl font-bold tracking-tight text-cream">DHYANORA</span>
          </Link>
          <p className="text-gray-light/40 text-sm leading-relaxed font-medium">
            Dhyanora Group is a diversified business group based in Ahmedabad, Gujarat — bringing together companies across metal trading, electronics, infrastructure, and construction under one focused vision.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-cream/50 hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-cream font-bold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-light/40">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link to="/vision-mission" className="hover:text-gold transition-colors">Vision & Mission</Link></li>
            <li><Link to="/team" className="hover:text-gold transition-colors">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Companies */}
        <div>
          <h4 className="text-cream font-bold mb-6">Our Companies</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-light/40">
            <li><Link to="/companies/import-export" className="hover:text-gold transition-colors">Pramukh Import Export</Link></li>
            <li><Link to="/companies/tech-venture" className="hover:text-gold transition-colors">Pramukh Techventures</Link></li>
            <li><Link to="/companies/shreeji-infra" className="hover:text-gold transition-colors">Shreeji Infra</Link></li>
            <li><Link to="/companies/brics" className="hover:text-gold transition-colors">Bricks Trading Division</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-cream font-bold mb-6">Get in Touch</h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-light/40">
            <li className="flex gap-3"><MapPin size={18} className="text-gold shrink-0" /> Ahmedabad, Gujarat, India</li>
            <li className="flex gap-3"><Phone size={18} className="text-gold shrink-0" /> +91 [PHONE NUMBER]</li>
            <li className="flex gap-3"><Mail size={18} className="text-gold shrink-0" /> contact@dhyanora.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-light/20 uppercase tracking-[0.2em] font-medium">
        <p>© 2026 Dhyanora Group. All rights reserved.</p>
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-gold transition-colors group cursor-pointer"
        >
          Designed by Dhyanora Creative
          <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-navy transition-all">
            <ArrowUp size={14} />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
