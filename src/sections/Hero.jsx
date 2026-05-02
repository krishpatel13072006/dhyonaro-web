import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MovingMesh from '../components/MovingMesh';

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-navy pt-20">
      {/* Immersive Space Indigo Background with Mixed Gradient */}
      <MovingMesh />

      {/* Mixed Background: Gradient fade to white at the very bottom */}
      <div className="absolute inset-0 bg-navy/20 backdrop-blur-[1px] z-10" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Orbital Animations - Moving Objects in Circles */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        {/* Orbit 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gold rounded-full shadow-[0_0_15px_rgba(250,215,126,0.8)]" />
        </motion.div>

        {/* Orbit 2 */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-white/5 rounded-full"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] opacity-40" />
        </motion.div>

        {/* Drifting Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, i % 2 === 0 ? 50 : -50, 0],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-gold/40 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full -mt-6 md:-mt-16">
        <div className="flex flex-col items-center text-center">
          {/* Main Heading */}
          <div className="overflow-hidden mb-8 md:mb-16">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[0.95] uppercase italic"
            >
              Visionary <br />
              <span className="text-gold">Growth.</span>
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-12 md:mb-24 font-bold italic"
          >
            A narrative of focus, discipline, and building the industrial future of Gujarat. One legacy at a time.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-10"
          >
            <Link to="/our-companies" className="group relative px-10 py-5 bg-gold text-navy rounded-full text-xs font-black uppercase overflow-hidden shadow-2xl">
              <span className="relative z-10 flex items-center gap-4">
                Explore Group <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link to="/about" className="px-10 py-5 text-xs font-black text-white uppercase hover:text-gold transition-colors border-b-2 border-white/20 hover:border-gold">
              Our Full Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Geometric Decoration - Subtle */}
      <motion.div
        animate={{
          rotate: [0, 10, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-32 h-32 border-2 border-white/5 rounded-[2rem] hidden lg:block opacity-30"
      />
    </section>
  );
};

export default Hero;
