import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Factory, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const PramukhHome = () => {
  return (
    <>
      <SEO title="Pramukh Import Export | Home" description="Gujarat's reliable partner for metal scrap procurement, trading, and export services." />
      
      <main className="bg-white">
        {/* Hero */}
        <section className="px-6 py-20 relative overflow-hidden min-h-[90vh] flex items-center bg-white pt-32">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-off-white -skew-x-12 translate-x-1/4 pointer-events-none" />
          <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
              >
                <span className="text-navy font-black tracking-[0.3em] uppercase text-[10px] mb-6 block opacity-40">
                  Global Trading Solutions
                </span>
                <h1 className="text-6xl md:text-8xl mb-8 font-heading font-black text-navy uppercase italic leading-[0.9]">
                  Pramukh <br /><span className="text-gold-dark">Import Export.</span>
                </h1>
                <p className="text-xl text-navy/60 max-w-xl leading-relaxed font-bold mb-12">
                  Reliable Metal Scrap Solutions for Industrial Gujarat. We specialize in the procurement, trading, and export of high-grade metal scrap.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <Link to="/pramukh/services" className="bg-navy text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm flex items-center gap-4 hover:scale-105 transition-all shadow-2xl">
                    Our Services <ArrowRight size={20} />
                  </Link>
                  <Link to="/pramukh/contact" className="px-10 py-5 text-sm font-black text-navy uppercase tracking-widest border-2 border-navy/10 hover:border-navy transition-all rounded-full">
                    Get a Quote
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 hidden md:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-[600px] relative"
              >
                <div className="absolute inset-0 bg-gold/10 rounded-full blur-[100px]" />
                <img src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200" alt="Metal Scrap Trading" className="w-full h-full object-cover rounded-[4rem] relative z-10 border border-navy/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute -bottom-10 -right-10 bg-navy p-10 rounded-[2rem] shadow-2xl border border-white/5 z-20">
                    <div className="text-gold font-black text-5xl mb-1 italic">4+</div>
                    <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">Global Port Hubs</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-32 px-6 bg-off-white border-y border-navy/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Global Reach", 
                desc: "Facilitating global trade through established channels and efficient logistics for ferrous and non-ferrous scrap.",
                icon: <Globe size={40} className="text-navy" />
              },
              { 
                title: "Quality Assured", 
                desc: "All material is strictly graded and verified before dispatch to ensure maximum value for our industrial partners.",
                icon: <ShieldCheck size={40} className="text-navy" />
              },
              { 
                title: "Industrial Logic", 
                desc: "Consistent supply chain catering to foundries and processors across India with transparent business practices.",
                icon: <Factory size={40} className="text-navy" />
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-12 bg-white border-navy/5 hover:bg-navy group transition-all duration-500 shadow-xl rounded-[3rem]"
              >
                 <div className="mb-8 p-4 bg-off-white w-fit rounded-2xl group-hover:bg-white/10 transition-colors">
                   {feature.icon}
                 </div>
                 <h3 className="text-2xl font-heading font-black mb-4 uppercase text-navy group-hover:text-white transition-colors">{feature.title}</h3>
                 <p className="text-navy/40 font-bold leading-relaxed group-hover:text-white/40 transition-colors">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Competency Strip */}
        <section className="py-32 px-6 bg-white">
           <div className="max-w-4xl mx-auto text-center">
              <span className="text-navy font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-30">Our Competency</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase italic mb-10 leading-tight">Expertly Handled. <br/><span className="text-gold-dark">Globally Shipped.</span></h2>
              <p className="text-xl text-navy/40 font-bold leading-relaxed mb-16">
                From the moment scrap is sourced to its final delivery at a furnace, Pramukh Import Export ensures a seamless, documented, and transparent journey.
              </p>
              <Link to="/pramukh/services" className="inline-flex items-center gap-4 text-navy font-black uppercase tracking-widest text-xs border-b-2 border-gold-dark pb-2 hover:gap-6 transition-all">
                View All Industrial Services <ArrowRight size={20} />
              </Link>
           </div>
        </section>
      </main>
    </>
  );
};

export default PramukhHome;
