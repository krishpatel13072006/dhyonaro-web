import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroVideo from '../images/hero-section-home.webm';

const videos = [heroVideo];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0d1b2e] pt-20">
      {/* ── Video background ── */}
      <div className="absolute inset-0">
        <video
          key={videos[idx]}
          autoPlay muted playsInline
          onEnded={() => setIdx((p) => (p + 1) % videos.length)}
          className="w-full h-full object-cover"
        >
          <source src={videos[idx]} type="video/webm" />
        </video>
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-[#0d1b2e]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2e]/80 via-transparent to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="max-w-2xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="w-8 h-0.5 bg-blue-400" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
              Ahmedabad, Gujarat · Est. 2026
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.02] tracking-tight"
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
            className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
          >
            A diversified conglomerate across metal trading, electronics retail, industrial
            infrastructure, and construction — unified by a single vision of excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/companies" className="btn-blue group">
              Explore Our Companies
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn-outline-white">
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
