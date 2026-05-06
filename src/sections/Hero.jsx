import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';



import CrossfadeVideo from '../components/CrossfadeVideo';

export default function Hero() {

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0d1b2e] pt-20">
       {/* ── Video background ── */}
       <CrossfadeVideo 
         videos={[
           '/hero-1.mp4', 
           '/hero-2.mp4'
         ]} 
         overlayOpacity={0.3}
       />
      


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
            <div className="w-6 md:w-8 h-0.5 bg-blue-400" />
            <span className="text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Ahmedabad, Gujarat · Est. 2026
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-5 md:mb-6">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.05] md:leading-[1.02] tracking-tight"
            >
              Building<br />
              Businesses<br />
              <span className="text-blue-400">That Last.</span>
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

      {/* ── Decorative floating box ── */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-32 right-10 md:right-24 hidden lg:flex flex-col items-end gap-2 z-10"
      >
        <div className="w-14 h-14 border border-blue-400/20 rounded" />
        <div className="w-8 h-8 bg-blue-600/20 rounded" />
      </motion.div>
    </section>
  );
}
