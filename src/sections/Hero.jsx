import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CrossfadeVideo from '../components/CrossfadeVideo';
import hero1 from '../assets/videos/hero1.mp4';
import hero2 from '../assets/videos/hero2.mp4';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#172451] pt-20">
       {/* ── Video background ── */}
       <CrossfadeVideo 
         videos={[hero1, hero2]} 
         overlayOpacity={0.3}
       />

      {/* ── Background Pattern (Overlay) ── */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#172451] via-transparent to-[#172451] pointer-events-none z-20" />

      {/* ── Content ── */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 md:gap-3 mb-5 md:mb-7"
          >
            <div className="w-6 md:w-8 h-0.5 bg-[#fad77e]" />
            <span className="text-[#fad77e] text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Ahmedabad, Gujarat · Est. 2026
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-5 md:mb-6">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.05] md:leading-[1.02]"
            >
              BUILDING<br />
              BUSINESSES<br />
              <span className="text-[#fad77e]/90">THAT LAST.</span>
            </motion.h1>
          </div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-white/60 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg"
          >
            A diversified conglomerate across metal trading, electronics retail, industrial
            infrastructure, and construction — unified by a single vision of excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4"
          >
            <Link to="/companies" className="btn-blue group justify-center sm:justify-start">
              Explore Our Companies
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn-outline-white justify-center sm:justify-start">
              Our Full Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
