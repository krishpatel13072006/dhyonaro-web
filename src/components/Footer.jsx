import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Globe,
  Send,
  ExternalLink,
  Share2
} from 'lucide-react';

const Linkedin = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = ({ size = 24, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
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
      { label: 'Pramukh Import Export', to: '/companies/import-export' },
      { label: 'Pramukh Techventures', to: '/companies/tech-venture' },
      { label: 'Shreeji Infra', to: '/companies/shreeji-infra' },
      { label: 'Construction Materials (Brics Trading)', to: '/companies' },
    ],
    legal: [
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
      { label: 'Cookie Settings', to: '#' },
      { label: 'Sitemap', to: '#' },
    ]
  };

  const socials = [
    { Icon: Linkedin, href: 'https://linkedin.com/company/dhyanora-group', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://instagram.com/dhyanora_group', label: 'Instagram' },
    { Icon: Twitter, href: 'https://twitter.com/dhyanoragroup', label: 'Twitter' },
    { Icon: Globe, href: 'https://dhyanora.com', label: 'Website' },
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
            <Link href="/" className="inline-block group">
              <Image 
                src={DhyonoraLogo2} 
                alt="Dhyanora Group - Leading Industrial Group in Ahmedabad, Gujarat" 
                width={200}
                height={56}
                className="h-14 w-auto group-hover:brightness-110 transition-all duration-300 object-contain" 
              />
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
                  <Link href={to} className="text-gray-400 hover:text-[#FAD77E] text-sm font-bold uppercase italic tracking-wider flex items-center group transition-all">
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
                  href={to}
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
                { Icon: Phone, text: '+91 96246 14003', label: 'Inquiries' },
                { Icon: Mail, text: 'pramukhimportexportindia@gmail.com', label: 'Support' },
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



