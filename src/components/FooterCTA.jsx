import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterCTA = () => {
  return (
    <section className="relative py-24 md:py-40 px-6 overflow-hidden bg-white border-t border-navy/5">
      {/* Background Image - Fully Visible */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=2000" 
          alt="Work With Us Background" 
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Darker tint for high contrast text */}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/60 p-12 md:p-20 border border-white/10"
        >
          <h2 className="text-4xl md:text-7xl font-heading font-black text-white uppercase mb-8 italic leading-tight">
            Ready to <br/>
            <span className="text-white">Work With Us?</span>
          </h2>
          <p className="text-lg md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-bold leading-relaxed">
            Whether you are a business partner, investor, or client — we would love to hear from you.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-white text-black px-12 py-6 rounded-none font-black uppercase text-sm hover:bg-gray-200 hover:scale-105 transition-all shadow-2xl group"
          >
            Get In Touch
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

export default FooterCTA;
