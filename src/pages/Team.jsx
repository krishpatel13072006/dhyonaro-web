import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import MovingMesh from '../components/MovingMesh';
import { User, Users, ShieldCheck, Heart, Award } from 'lucide-react';

const Team = () => {
  return (
    <>
      <SEO title="Our Team | Dhyanora Leadership" description="Meet the people behind Dhyanora Group. A team built on discipline, integrity, and a shared vision for excellence in Gujarat's industries." />
      <main className="relative">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-navy pt-20">
          <MovingMesh />
          <div className="relative z-20 text-center px-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-black uppercase tracking-[0.5em] text-xs mb-8 block"
            >
              The People
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-cream uppercase italic">Our <span className="text-gold">Team.</span></h1>
          </div>
        </section>

        {/* Founder's Message Section */}
        <section className="py-32 px-6 bg-navy border-t border-white/5">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
              <div className="flex-1 order-2 lg:order-1">
                 <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-6 block">From the Founder's Desk</span>
                 <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase italic mb-10 leading-tight">Built on <span className="text-gold">Discipline.</span></h2>
                 <div className="space-y-6 text-xl text-gray-light/40 leading-relaxed font-medium mb-12">
                    <p>
                      "At Dhyanora, we believe that the strength of a business is not measured by its size, but by the clarity of its purpose and the integrity of its people. Every division we have built started with a single individual's vision and a collective commitment to see it through."
                    </p>
                    <p>
                      "We are not just building companies; we are building a legacy of trust in Ahmedabad and across Gujarat. Our team is the foundation of that legacy."
                    </p>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold border border-gold/20">
                       <User size={32} />
                    </div>
                    <div>
                       <div className="text-cream font-heading font-bold uppercase tracking-widest text-lg">The Visionary</div>
                       <div className="text-gold text-xs uppercase font-black tracking-widest">Founder, Dhyanora Group</div>
                    </div>
                 </div>
              </div>
              <div className="flex-1 w-full order-1 lg:order-2">
                 <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative group">
                    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Founder placeholder" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                    <div className="absolute top-10 right-10 w-24 h-24 bg-gold/5 backdrop-blur-3xl rounded-full border border-white/5 flex items-center justify-center text-gold/20">
                       <ShieldCheck size={48} />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Core Principles Strip */}
        <section className="py-32 bg-white/[0.02] border-y border-white/5">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Shared Vision", icon: <Users />, desc: "Every member of our team is aligned with the Dhyanora philosophy of focused, quality-driven growth." },
                { title: "Ethical Leadership", icon: <Award />, desc: "We lead by example, maintaining the highest standards of integrity in every transaction and interaction." },
                { title: "Local Soul", icon: <Heart />, desc: "Deeply rooted in Ahmedabad, our team understands the local market and is committed to its prosperity." }
              ].map((p, i) => (
                <div key={i} className="glass-card p-12 border-white/5 group hover:bg-gold/5 transition-all">
                   <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500">{p.icon}</div>
                   <h3 className="text-2xl font-heading font-bold text-cream mb-4 uppercase">{p.title}</h3>
                   <p className="text-sm text-gray-light/40 leading-relaxed">{p.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Global Talent CTA */}
        <section className="py-32 px-6">
           <div className="max-w-4xl mx-auto text-center glass-card p-16 border-white/5 relative overflow-hidden">
              <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase mb-8 italic">Join the <span className="text-gold">Family.</span></h2>
              <p className="text-xl text-gray-light/60 mb-12 max-w-2xl mx-auto font-medium">
                 We are always looking for disciplined, visionary individuals to join our growing team. If you believe in clarity and growth, we want to hear from you.
              </p>
              <button className="btn-primary px-12 py-5 font-black uppercase tracking-widest">
                 View Opportunities
              </button>
           </div>
        </section>

        <div className="h-32 bg-navy" />
      </main>
    </>
  );
};

export default Team;
