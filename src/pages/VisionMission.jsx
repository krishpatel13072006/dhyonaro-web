import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import MovingMesh from '../components/MovingMesh';
import { Target, Compass, Zap, ShieldCheck, BarChart3 } from 'lucide-react';

const VisionMission = () => {
  return (
    <>
      <SEO title="Vision & Mission | Our Purpose" description="The core purpose and future vision of Dhyanora Group. Guided by clarity, integrity, and long-term thinking." />
      <main className="relative">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-navy pt-20">
          <MovingMesh />
          <div className="relative z-20 text-center px-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-black uppercase tracking-[0.5em] text-xs mb-8 block"
            >
              The Foundation
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-cream uppercase italic">Vision <span className="text-gold">&</span> Mission.</h1>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-32 px-6 bg-navy border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center text-gold mb-10">
                <Target size={40} />
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase italic mb-8">Our <span className="text-gold">Vision.</span></h2>
              <p className="text-2xl text-gray-light/40 leading-relaxed font-medium mb-10">
                To be Gujarat's most trusted diversified business group — a name that represents quality, reliability, and responsible growth across every sector we operate in.
              </p>
              <div className="p-8 border-l-4 border-gold bg-white/[0.02]">
                <p className="text-lg text-gray-light/60 italic">
                  "Our vision is not simply to be large — it is to be trusted. Trust is earned through consistency, and consistency comes from discipline."
                </p>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square relative rounded-[4rem] overflow-hidden border border-white/10">
               <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-50" alt="Vision" />
               <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="flex-1">
              <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center text-gold mb-10">
                <Compass size={40} />
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase italic mb-8">Our <span className="text-gold">Mission.</span></h2>
              <p className="text-2xl text-gray-light/40 leading-relaxed font-medium mb-10">
                To build and operate focused, high-quality businesses across diverse sectors that create real value for our clients, partners, and the Gujarat economy — guided always by clarity, integrity, and long-term thinking.
              </p>
              <ul className="space-y-4">
                 {[
                   "Delivering excellence in every industrial vertical.",
                   "Fostering sustainable growth for our partners.",
                   "Building infrastructure that powers the future.",
                   "Maintaining unwavering ethical standards."
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-cream/70 font-bold uppercase tracking-widest text-xs">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" /> {item}
                   </li>
                 ))}
              </ul>
            </div>
            <div className="flex-1 w-full aspect-square relative rounded-[4rem] overflow-hidden border border-white/10">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-50" alt="Mission" />
               <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Core Values Strip */}
        <section className="py-32 px-6 bg-navy">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase italic">Guided by <span className="text-gold">Values.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
                     className="glass-card p-10 text-center border-white/5 hover:border-gold/30 transition-all group"
                   >
                      <div className="text-gold mb-6 flex justify-center group-hover:scale-110 transition-transform">{v.icon}</div>
                      <h3 className="text-lg font-heading font-bold text-cream uppercase tracking-widest">{v.title}</h3>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        <div className="h-32 bg-navy" />
      </main>
    </>
  );
};

export default VisionMission;
