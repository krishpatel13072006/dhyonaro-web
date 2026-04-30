import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Box, Globe, ArrowRight } from 'lucide-react';

const Hub = () => {
  return (
    <>
      <SEO title="Dhyanora Hub | The Portal" description="Enter the 3D world of Dhyanora. Explore the Nexus Helix and the Spatial Horizon Archive." />
      <main className="relative min-h-screen bg-navy overflow-hidden">
        
        {/* UNIQUE CINEMATIC SPLIT HERO */}
        <section className="relative h-screen flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Split - Nexus Helix */}
          <Link to="/nexus-helix" className="relative h-1/2 md:h-full flex-1 group overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
             <motion.div 
               initial={{ y: '-100%' }}
               animate={{ y: 0 }}
               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
               className="absolute inset-0"
             >
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  alt="Nexus Helix"
                />
                <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/20 transition-all duration-500" />
             </motion.div>

             <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 md:p-12 text-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-gold/20 backdrop-blur-2xl rounded-full flex items-center justify-center text-gold mb-6 md:mb-8 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-[0_0_50px_rgba(242,201,76,0.3)]"
                >
                   <Globe size={32} className="md:w-10 md:h-10" />
                </motion.div>
                <h2 className="text-4xl md:text-7xl font-heading font-black text-cream uppercase leading-none mb-2 md:mb-4 italic">Nexus <br /><span className="text-gold">Helix.</span></h2>
                <p className="text-gray-light/40 max-w-xs font-bold uppercase tracking-widest text-[10px] md:text-xs opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity">Enter the Visionary Axis</p>
                <div className="mt-6 md:mt-8 flex items-center gap-2 text-gold font-black uppercase tracking-widest text-xs md:text-sm group-hover:gap-4 transition-all">
                   Explore <ArrowRight size={18} />
                </div>
             </div>
          </Link>

          {/* Right Split - Spatial Horizon */}
          <Link to="/spatial-horizon" className="relative h-1/2 md:h-full flex-1 group overflow-hidden">
             <motion.div 
               initial={{ y: '100%' }}
               animate={{ y: 0 }}
               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
               className="absolute inset-0"
             >
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  alt="Spatial Horizon"
                />
                <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/20 transition-all duration-500" />
             </motion.div>

             <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 md:p-12 text-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-gold/20 backdrop-blur-2xl rounded-full flex items-center justify-center text-gold mb-6 md:mb-8 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-[0_0_50px_rgba(242,201,76,0.3)]"
                >
                   <Box size={32} className="md:w-10 md:h-10" />
                </motion.div>
                <h2 className="text-4xl md:text-7xl font-heading font-black text-cream uppercase leading-none mb-2 md:mb-4 italic">Spatial <br /><span className="text-gold">Horizon.</span></h2>
                <p className="text-gray-light/40 max-w-xs font-bold uppercase tracking-widest text-[10px] md:text-xs opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity">Step into the Artifact Vault</p>
                <div className="mt-6 md:mt-8 flex items-center gap-2 text-gold font-black uppercase tracking-widest text-xs md:text-sm group-hover:gap-4 transition-all">
                   Enter <ArrowRight size={18} />
                </div>
             </div>
          </Link>

          {/* Central Logo Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
             <motion.div 
               initial={{ opacity: 0, rotate: -45, scale: 0 }}
               animate={{ opacity: 1, rotate: 0, scale: 1 }}
               transition={{ delay: 1.5, type: 'spring' }}
               className="w-16 h-16 md:w-24 md:h-24 bg-gold rounded-2xl md:rounded-3xl flex items-center justify-center text-navy font-black text-2xl md:text-4xl shadow-[0_0_100px_rgba(242,201,76,0.5)] border-2 md:border-4 border-white"
             >
                D
             </motion.div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Hub;
