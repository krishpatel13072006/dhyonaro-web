import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import MovingMesh from '../components/MovingMesh';
import { Target, Compass, Zap, ShieldCheck, BarChart3 } from 'lucide-react';

const VisionMission = () => {
  return (
    <>
      <SEO title="Vision & Mission | Our Purpose" description="The core purpose and future vision of Dhyanora Group. Guided by clarity, integrity, and long-term thinking." />
      <main className="bg-off-white">
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-white pt-20">
          <MovingMesh />
          <div className="relative z-20 text-center px-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-8 block opacity-60"
            >
              The Foundation
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-9xl font-heading font-black text-white uppercase italic leading-none">Vision <span className="text-gold-dark">&</span> Mission.</h1>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-32 px-6 bg-white border-t border-navy/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-navy rounded-2xl md:rounded-3xl flex items-center justify-center text-gold mb-8 md:mb-10 shadow-xl">
                <Target size={32} />
              </div>
              <h2 className="text-3xl md:text-6xl font-heading font-black text-navy uppercase italic mb-6 md:mb-8 leading-tight">Our <br /><span className="text-gold-dark">Vision.</span></h2>
              <p className="text-lg md:text-2xl text-navy/40 leading-relaxed font-bold mb-8 md:mb-10">
                To be Gujarat's most trusted diversified business group — a name that represents quality, reliability, and responsible growth across every sector we operate in.
              </p>
              <div className="p-6 md:p-8 border-l-4 border-navy bg-off-white rounded-r-2xl">
                <p className="text-base md:text-lg text-navy/60 italic font-bold">
                  "Our vision is not simply to be large — it is to be trusted. Trust is earned through consistency, and consistency comes from discipline."
                </p>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square relative rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-navy/10 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Vision" />
               <div className="absolute inset-0 bg-navy/10 mix-blend-overlay" />
            </div>
          </div>
        </section>

        {/* Mission Section - Now White/Off-white */}
        <section className="py-16 md:py-32 px-6 bg-off-white border-y border-navy/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
            <div className="flex-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-navy rounded-2xl md:rounded-3xl flex items-center justify-center text-gold mb-8 md:mb-10 shadow-2xl">
                <Compass size={32} />
              </div>
              <h2 className="text-3xl md:text-6xl font-heading font-black text-navy uppercase italic mb-6 md:mb-8 leading-tight">Our <br /><span className="text-gold-dark">Mission.</span></h2>
              <p className="text-lg md:text-2xl text-navy/40 leading-relaxed font-bold mb-8 md:mb-10">
                To build and operate focused, high-quality businesses across diverse sectors that create real value for our clients, partners, and the Gujarat economy — guided always by clarity, integrity, and long-term thinking.
              </p>
              <ul className="space-y-4 md:space-y-6">
                 {[
                   "Delivering excellence in every industrial vertical.",
                   "Fostering sustainable growth for our partners.",
                   "Building infrastructure that powers the future.",
                   "Maintaining unwavering ethical standards."
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-navy font-black uppercase tracking-widest text-[10px] opacity-40">
                      <div className="w-2 h-2 bg-gold-dark rounded-full" /> {item}
                   </li>
                 ))}
              </ul>
            </div>
            <div className="flex-1 w-full aspect-square relative rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-navy/10 shadow-2xl">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Mission" />
            </div>
          </div>
        </section>

        {/* Core Values Strip */}
        <section className="py-16 md:py-32 px-6 bg-off-white">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 md:mb-24">
                <h2 className="text-3xl md:text-6xl font-heading font-black text-navy uppercase italic leading-tight">Guided by <br /><span className="text-gold-dark">Values.</span></h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
                 {[
                   { title: "Clarity", icon: <Zap /> },
                   { title: "Direction", icon: <Compass /> },
                   { title: "Growth", icon: <BarChart3 /> },
                   { title: "Integrity", icon: <ShieldCheck /> },
                   { title: "Discipline", icon: <Target /> }
                 ].map((v, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     className="glass-card p-8 md:p-12 text-center bg-white border-navy/5 hover:bg-navy transition-all group shadow-sm"
                   >
                      <div className="text-navy group-hover:text-gold mb-4 md:mb-6 flex justify-center group-hover:scale-110 transition-transform">
                        {React.cloneElement(v.icon, { size: window.innerWidth < 768 ? 24 : 32 })}
                      </div>
                      <h3 className="text-[10px] font-black text-navy group-hover:text-white uppercase tracking-[0.2em] transition-colors">{v.title}</h3>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        <div className="h-32 bg-off-white" />
      </main>
    </>
  );
};

export default VisionMission;
