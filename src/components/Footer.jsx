import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Send,
  ExternalLink
} from 'lucide-react';
import DhyonoraLogo2 from '../companies-logo/dhyonara-logo-2.png';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'Our Companies', to: '/companies' },
      { label: 'Contact Us', to: '/contact' },
    ],
    industries: [
      { label: 'Pramukh Metal', to: '/companies/import-export' },
      { label: 'Pramukh Techventures', to: '/companies/tech-venture' },
      { label: 'Shreeji Infra', to: '/companies/shreeji-infra' },
      { label: 'Pramukh Import Export (Brics Trading)', to: '/companies/brics' },
    ],
    legal: [
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
      { label: 'Cookie Settings', to: '#' },
      { label: 'Sitemap', to: '#' },
    ]
  };

  const socials = [
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="relative bg-[#0a1422] pt-12 pb-12 overflow-hidden selection:bg-[#FAD77E] selection:text-[#0a1422]">

      {/* Background Decorative Text (Inspired by NextPlay) */}
      <div className="absolute bottom-4 left-0 right-0 select-none pointer-events-none overflow-hidden h-[30%] flex items-end justify-center">
        <h2 className="text-[15vw] font-heading font-black text-[#fad77e]/15 leading-none uppercase whitespace-nowrap text-center w-full">
          DHYANORA
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 pb-24 pt-8">

          {/* Brand & Social (Inspired by NextPlay) */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <Link to="/" className="inline-block group">
              <img src={DhyonoraLogo2} alt="Dhyanora Group" className="h-14 w-auto group-hover:brightness-110 transition-all duration-300" />
            </Link>
            <p className="text-gray-400 text-base font-medium leading-relaxed max-w-sm italic">
              "A focused collective of businesses across Gujarat, unified by discipline, values, and a relentless drive for industrial excellence."
            </p>

            <div className="flex flex-wrap gap-4">
              {socials.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/50 hover:text-[#FAD77E] hover:border-[#FAD77E]/50 hover:bg-[#FAD77E]/5 transition-all duration-300 shadow-xl"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-black uppercase tracking-[0.3em] text-[11px] mb-10 opacity-40">Company</h4>
            <ul className="flex flex-col gap-5">
              {footerLinks.navigation.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-gray-400 hover:text-[#FAD77E] text-sm font-bold uppercase italic tracking-wider flex items-center group transition-all">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-[#FAD77E] mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrial Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-black uppercase tracking-[0.3em] text-[11px] mb-10 opacity-40">Divisions</h4>
            <div className="grid grid-cols-1 gap-3">
              {footerLinks.industries.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="group bg-white/[0.02] border border-white/5 hover:border-[#172451]/30 p-4 rounded-xl flex items-center justify-between transition-all duration-300 hover:translate-x-2"
                >
                  <span className="text-gray-400 group-hover:text-[#FAD77E] text-sm font-black uppercase italic">
                    {label}
                  </span>
                  <ExternalLink size={14} className="text-gray-600 group-hover:text-[#FAD77E] transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details (Inspired by NextPlay) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-black uppercase tracking-[0.3em] text-[11px] mb-10 opacity-40">Reach Us</h4>
            <div className="space-y-8">
              {[
                { Icon: MapPin, text: 'Ahmedabad, Gujarat, India', label: 'Global HQ' },
                { Icon: Phone, text: '+91 90990 00000', label: 'Inquiries' },
                { Icon: Mail, text: 'contact@dhyanora.com', label: 'Support' },
              ].map(({ Icon, text, label }, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAD77E]/5 border border-[#FAD77E]/10 flex items-center justify-center text-[#FAD77E] flex-shrink-0 group-hover:bg-[#FAD77E] group-hover:text-[#0a1422] transition-all duration-500 shadow-lg shadow-[#FAD77E]/5">
                    <Icon size={20} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] text-[#FAD77E] font-black uppercase tracking-widest mb-1 opacity-60 group-hover:opacity-100 transition-opacity">{label}</span>
                    <p className="text-white text-sm font-bold">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-12 flex justify-center items-center relative">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 bg-white/[0.03] border border-white/10 px-8 py-4 rounded-full text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 z-20"
          >
            Back to Top
            <div className="w-6 h-6 rounded-full bg-[#172451] flex items-center justify-center group-hover:bg-[#FAD77E] transition-colors duration-500">
              <ArrowUp size={12} className="text-white group-hover:text-[#0a1422] transition-colors" />
            </div>
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;



