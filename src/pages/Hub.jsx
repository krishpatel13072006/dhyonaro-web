import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Box, Globe, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

const Hub = () => {
  return (
    <>
      <SEO title="Dhyanora Hub | The Portal" description="The digital nerve center of Dhyanora Group. Highlighting our diverse business verticals and strategic vision." />
      <main className="relative min-h-screen bg-navy overflow-hidden">
        
        {/* CINEMATIC HUB HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
             >
                <motion.div 
                  initial={{ opacity: 0, rotate: -45, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="w-20 h-20 md:w-24 md:h-24 bg-gold rounded-3xl flex items-center justify-center text-navy font-black text-3xl md:text-4xl shadow-[0_0_100px_rgba(242,201,76,0.3)] border-4 border-white/10 mx-auto mb-12"
                >
                   D
                </motion.div>
                
                <span className="text-gold font-black uppercase tracking-[0.6em] text-[10px] md:text-xs mb-8 block opacity-40">Digital Nerve Center</span>
                <h1 className="text-4xl sm:text-6xl md:text-[10rem] font-heading font-black text-white uppercase italic leading-[0.8] mb-8 md:mb-12">
                   The <br /><span className="text-gold">Hub.</span>
                </h1>
                <p className="text-lg md:text-2xl text-white/40 max-w-2xl mx-auto font-bold leading-relaxed mb-12 md:mb-20">
                   A centralized portal for the Dhyanora ecosystem. Connecting our diverse verticals through shared values and strategic vision.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                   {[
                     { title: "Strategic Assets", icon: <Layers />, desc: "Managing a high-value portfolio of industrial and retail enterprises." },
                     { title: "Operational Excellence", icon: <ShieldCheck />, desc: "Standardizing quality and discipline across all group divisions." },
                     { title: "Future Growth", icon: <Zap />, desc: "Continuously identifying new opportunities for intentional expansion." }
                   ].map((item, i) => (
                     <motion.div
                       key={i}
                       initial={{ opacity: 0, y: 30 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.8 + (i * 0.1) }}
                       className="p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] hover:bg-white/10 transition-all group text-left"
                     >
                        <div className="text-gold mb-6 group-hover:scale-110 transition-transform">
                           {React.cloneElement(item.icon, { size: 24 })}
                        </div>
                        <h3 className="text-lg md:text-xl font-heading font-black text-white uppercase mb-4">{item.title}</h3>
                        <p className="text-xs md:text-sm text-white/30 font-bold leading-relaxed">{item.desc}</p>
                     </motion.div>
                   ))}
                </div>

                <div className="mt-20">
                   <Link to="/our-companies" className="inline-flex items-center gap-4 bg-gold text-navy px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">
                      Explore Our Portfolio <ArrowRight size={20} />
                   </Link>
                </div>
             </motion.div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Hub;
