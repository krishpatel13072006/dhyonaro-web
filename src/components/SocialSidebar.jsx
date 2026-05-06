import React from 'react';
import { Mail, Phone, MessageCircle, ChevronUp } from 'lucide-react';

const SocialSidebar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      id: 'email',
      icon: <Mail size={22} />,
      label: 'info@Dhyanora.com',
      href: 'mailto:info@Dhyanora.com',
      color: 'bg-[#EA4335]'
    },
    { 
      id: 'whatsapp',
      icon: <MessageCircle size={22} />,
      label: '+91 98765 43210',
      href: 'https://wa.me/919876543210',
      color: 'bg-[#25D366]'
    },
    { 
      id: 'phone',
      icon: <Phone size={22} />,
      label: 'Call Us Now',
      href: 'tel:+919876543210',
      color: 'bg-[#333333]'
    }
  ];

  return (
    <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex-col gap-2">
      {socialLinks.map((link) => (
        <a 
          key={link.id}
          href={link.href}
          target={link.id === 'whatsapp' ? '_blank' : undefined}
          rel={link.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
          className={`group flex items-center h-12 relative overflow-hidden transition-all duration-500 hover:pr-4 rounded-l-full shadow-lg ${link.color}`}
        >
          {/* Label that slides out */}
          <span className="w-0 overflow-hidden whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-white transition-all duration-500 group-hover:w-40 group-hover:pl-4">
            {link.label}
          </span>
          
          {/* Icon Container */}
          <div className="w-12 h-12 flex items-center justify-center text-white shrink-0">
            {link.icon}
          </div>
        </a>
      ))}

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className="group flex items-center h-12 relative overflow-hidden transition-all duration-500 hover:pr-4 rounded-l-full shadow-lg bg-black"
      >
        <span className="w-0 overflow-hidden whitespace-nowrap text-[10px] font-black uppercase tracking-widest text-gold transition-all duration-500 group-hover:w-24 group-hover:pl-4">
          Go Up
        </span>
        <div className="w-12 h-12 flex items-center justify-center text-gold shrink-0">
          <ChevronUp size={22} />
        </div>
      </button>
    </div>
  );
};

export default SocialSidebar;


