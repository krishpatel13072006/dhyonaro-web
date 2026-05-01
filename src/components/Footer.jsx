import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#E9F1F7] border-t border-navy/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center font-black text-gold text-xl shadow-lg">D</div>
            <span className="font-heading text-xl font-black tracking-tight text-navy uppercase">DHYANORA</span>
          </Link>
          <p className="text-navy/60 text-sm leading-relaxed font-bold">
            Dhyanora Group is a diversified business group based in Ahmedabad, Gujarat — bringing together companies across metal trading, electronics, infrastructure, and construction under one focused vision.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy/40 hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-navy font-black uppercase tracking-widest text-xs mb-8">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-xs font-black uppercase tracking-widest text-navy/40">
            <li><Link to="/" className="hover:text-gold-dark transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-dark transition-colors">Our Story</Link></li>
            <li><Link to="/vision-mission" className="hover:text-gold-dark transition-colors">Vision & Mission</Link></li>
            <li><Link to="/team" className="hover:text-gold-dark transition-colors">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-gold-dark transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Companies */}
        <div>
          <h4 className="text-navy font-black uppercase tracking-widest text-xs mb-8">Our Companies</h4>
          <ul className="flex flex-col gap-4 text-xs font-black uppercase tracking-widest text-navy/40">
            <li><Link to="/gateway" className="hover:text-gold-dark transition-colors">Pramukh Metal</Link></li>
            <li><Link to="/companies/tech-venture" className="hover:text-gold-dark transition-colors">Pramukh Techventures</Link></li>
            <li><Link to="/companies/shreeji-infra" className="hover:text-gold-dark transition-colors">Shreeji Infra</Link></li>
            <li><Link to="/gateway" className="hover:text-gold-dark transition-colors">Bricks Trading</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-navy font-black uppercase tracking-widest text-xs mb-8">Get in Touch</h4>
          <ul className="flex flex-col gap-4 text-xs font-black uppercase tracking-widest text-navy/40">
            <li className="flex gap-3"><MapPin size={18} className="text-gold-dark shrink-0" /> Ahmedabad, Gujarat, India</li>
            <li className="flex gap-3"><Phone size={18} className="text-gold-dark shrink-0" /> +91 [PHONE]</li>
            <li className="flex gap-3"><Mail size={18} className="text-gold-dark shrink-0" /> contact@dhyanora.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-navy/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-navy uppercase tracking-[0.3em] font-black">
        <p>© {new Date().getFullYear()} Dhyanora Group. All rights reserved.</p>
        
        {/* Mobile-only social links */}
        <div className="md:hidden flex gap-4 my-4">
           <a href="https://wa.me/919876543210" className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl"><Phone size={20} /></a>
           <a href="mailto:info@dhyanora.com" className="w-12 h-12 bg-[#EA4335] rounded-full flex items-center justify-center text-white shadow-xl"><Mail size={20} /></a>
           <button onClick={scrollToTop} className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold shadow-xl"><ArrowUp size={20} /></button>
        </div>

        <button 
          onClick={scrollToTop}
          className="flex items-center gap-3 text-navy hover:text-navy/60 transition-colors group cursor-pointer"
        >
          Designed by Dhyanora Creative
          <div className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-navy transition-all shadow-sm">
            <ArrowUp size={16} />
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
