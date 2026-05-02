import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import MovingMesh from '../components/MovingMesh';
import { User, Users, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';

const Team = () => {
  return (
    <>
      <SEO title="Our Team | Dhyanora Leadership" description="Meet the people behind Dhyanora Group. A team built on discipline, integrity, and a shared vision for excellence in Gujarat's industries." />
      <main className="bg-off-white">
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-white pt-20">
          <MovingMesh />
          <div className="relative z-20 text-center px-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-8 block opacity-60"
            >
              The People
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-heading font-black text-white uppercase italic">Our <span className="text-gold-dark">Team.</span></h1>
          </div>
        </section>

        {/* Founder's Message Section */}
        <section className="py-16 md:py-32 px-6 bg-white border-y border-navy/5">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="flex-1 order-2 lg:order-1">
                 <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-6 block opacity-40">From the Founder's Desk</span>
                 <h2 className="text-3xl md:text-6xl font-heading font-black text-navy uppercase italic mb-8 md:mb-10 leading-tight">Built on <br /><span className="text-gold-dark">Discipline.</span></h2>
                 <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-navy/60 leading-relaxed font-bold mb-10 md:mb-12">
                    <p>
                      "At Dhyanora, we believe that the strength of a business is not measured by its size, but by the clarity of its purpose and the integrity of its people. Every division we have built started with a single individual's vision and a collective commitment to see it through."
                    </p>
                    <p>
                      "We are not just building companies; we are building a legacy of trust in Ahmedabad and across Gujarat. Our team is the foundation of that legacy."
                    </p>
                 </div>
                 <div className="flex items-center gap-6 p-4 md:p-6 bg-off-white rounded-2xl md:rounded-3xl border border-navy/5 w-fit">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-navy rounded-full flex items-center justify-center text-gold shadow-lg">
                       <User size={24} />
                    </div>
                    <div>
                       <div className="text-navy font-heading font-black uppercase tracking-widest text-base md:text-lg">The Visionary</div>
                       <div className="text-navy/30 text-[10px] uppercase font-black tracking-widest mt-1">Founder, Dhyanora Group</div>
                    </div>
                 </div>
              </div>
              <div className="flex-1 w-full order-1 lg:order-2">
                 <div className="aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-navy/10 shadow-2xl relative group">
                    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Founder placeholder" />
                    <div className="absolute inset-0 bg-navy/20 mix-blend-overlay" />
                 </div>
              </div>
           </div>
        </section>

        {/* Core Principles Strip */}
        <section className="py-32 px-6 bg-off-white">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Shared Vision", icon: <Users />, desc: "Every member of our team is aligned with the Dhyanora philosophy of focused, quality-driven growth." },
                { title: "Ethical Leadership", icon: <Award />, desc: "We lead by example, maintaining the highest standards of integrity in every transaction and interaction." },
                { title: "Local Soul", icon: <Heart />, desc: "Deeply rooted in Ahmedabad, our team understands the local market and is committed to its prosperity." }
              ].map((p, i) => (
                <div key={i} className="glass-card p-12 bg-white border-navy/5 group hover:bg-navy transition-all duration-500 shadow-sm">
                   <div className="text-navy group-hover:text-gold mb-8 group-hover:scale-110 transition-transform duration-500">{p.icon}</div>
                   <h3 className="text-2xl font-heading font-black text-navy group-hover:text-white mb-4 uppercase transition-colors">{p.title}</h3>
                   <p className="text-sm text-navy/40 group-hover:text-white/40 leading-relaxed font-bold transition-colors">{p.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Global Talent CTA - Navy Background */}
        <section className="py-16 md:py-32 px-6">
           <div className="max-w-4xl mx-auto text-center bg-navy p-10 md:p-24 rounded-[2.5rem] md:rounded-[4rem] border-navy-dark relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-3xl md:text-7xl font-heading font-black text-white uppercase mb-8 md:mb-10 italic leading-tight">Join the <br /><span className="text-gold">Family.</span></h2>
              <p className="text-lg md:text-xl text-white/40 mb-10 md:mb-12 max-w-2xl mx-auto font-bold">
                 We are always looking for disciplined, visionary individuals to join our growing team. If you believe in clarity and growth, we want to hear from you.
              </p>
              <button className="bg-gold text-navy px-10 py-5 md:px-12 md:py-6 rounded-full font-black uppercase tracking-widest text-xs md:text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3 mx-auto">
                 View Opportunities <ArrowRight size={20} />
              </button>
           </div>
        </section>

        <div className="h-32 bg-off-white" />
      </main>
    </>
  );
};

export default Team;
