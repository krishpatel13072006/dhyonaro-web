import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MovingMesh from '../components/MovingMesh';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 md:pt-24 hero-grid overflow-hidden">
      {/* TRENDING ORGANIC BACKGROUND */}
      <MovingMesh />

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full flex flex-col items-center text-center">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/20 border border-gold/40 rounded-full mb-8 mt-2"
        >
          <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
          <span className="text-gold font-bold text-[9px] uppercase tracking-widest">Clarity. Direction. Growth.</span>
        </motion.div>

        {/* Main Headline - Simplified spacing */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-cream leading-[1.1] uppercase italic mb-6"
        >
          Building <span className="text-gold">Businesses</span> <br className="hidden md:block" /> That Last.
        </motion.h1>

        {/* Subheadline - More compact margin */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-light/70 text-base md:text-xl max-w-2xl leading-relaxed mb-8 font-medium px-4"
        >
          Dhyanora Group is a diversified business group based in Ahmedabad — bringing together companies across metal trading, electronics, infrastructure, and construction.
        </motion.p>

        {/* CTAs - No backdrop-blur for maximum clarity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/our-companies"
            className="group px-8 py-3.5 bg-gold rounded-full text-navy font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl"
          >
            Explore Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="px-8 py-3.5 bg-white/10 border border-white/20 rounded-full text-cream font-bold uppercase tracking-widest text-[11px] flex items-center justify-center hover:bg-white/20 transition-all"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      
      {/* DECORATIVE BOTTOM OVERLAY - Reduced height */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-navy to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
