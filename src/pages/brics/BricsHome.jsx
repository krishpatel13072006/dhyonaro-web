import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, ShieldCheck, Truck, BadgePercent, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import MovingMesh from '../../components/MovingMesh';
import { Link } from 'react-router-dom';
import BricsCTA from '../../components/brics/BricsCTA';

const BricsHome = () => {
  return (
    <>
      <SEO title="Bricks Trading | Premium Construction Materials" description="Supplying quality bricks and construction materials to builders across Gujarat. Foundations of quality for every project." />
      
      <main className="bg-white">
        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-start justify-center overflow-hidden bg-white pt-32 md:pt-48">
          <MovingMesh />
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl mb-12 text-gold shadow-2xl border border-white/10">
                <Building2 size={32} />
              </div>
              <h1 className="font-heading font-black uppercase leading-[0.9] text-white mb-10 italic" style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}>
                Bricks <br /><span className="text-gold">Trading.</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/40 leading-relaxed max-w-3xl mx-auto font-bold mb-14 italic">
                Foundations of Quality. We supply the core materials that build the skyline of Gujarat.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <Link to="/brics/products" className="bg-gold text-navy px-10 py-5 rounded-full font-black uppercase text-xs flex items-center gap-4 hover:scale-105 transition-all shadow-2xl">
                  Explore Products <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* QUICK STATS */}
        <section className="py-40 bg-white border-y border-navy/5">
          <div className="max-w-7xl mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { label: "Monthly Capacity", value: "1M+", icon: <Truck size={32} /> },
                  { label: "Partner Kilns", value: "25+", icon: <Building2 size={32} /> },
                  { label: "Projects Served", value: "500+", icon: <CheckCircle2 size={32} /> }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center p-16 bg-off-white rounded-[3rem] border border-navy/5 hover:bg-navy group transition-all duration-500 shadow-xl"
                  >
                    <div className="mb-8 text-navy group-hover:text-gold transition-colors">
                      {stat.icon}
                    </div>
                    <div className="text-5xl md:text-6xl font-heading font-black text-navy group-hover:text-white mb-4 transition-colors italic">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase text-navy/30 group-hover:text-white/40 transition-colors">{stat.label}</div>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* WHY BRICS SECTION */}
        <section className="py-48 px-6 bg-white">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
              <div className="flex-1">
                 <span className="text-navy font-black uppercase text-[10px] mb-8 block opacity-30">Industrial Prowess</span>
                 <h2 className="text-4xl md:text-7xl font-heading font-black text-navy uppercase italic mb-12 leading-tight">Why Builders <br/><span className="text-gold-dark">Trust Us.</span></h2>
                 <div className="space-y-10">
                    {[
                      { title: "Sourced with Integrity", desc: "We partner only with kilns that follow ethical practices and sustainable sourcing of clay.", icon: <ShieldCheck /> },
                      { title: "Unbeatable Logistics", desc: "Our own fleet of transport vehicles ensures your site never runs out of material.", icon: <Truck /> },
                      { title: "Wholesale Advantage", desc: "Direct trading relationships allow us to pass on significant cost savings to you.", icon: <BadgePercent /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-10 p-12 bg-off-white rounded-[3rem] shadow-xl border border-navy/5 hover:bg-navy group transition-all duration-500">
                         <div className="w-16 h-16 shrink-0 bg-navy rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                            {item.icon}
                         </div>
                         <div>
                            <h4 className="text-2xl font-heading font-black text-navy uppercase mb-4 group-hover:text-white transition-colors">{item.title}</h4>
                            <p className="text-base text-navy/50 font-bold leading-relaxed group-hover:text-white/40 transition-colors">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex-1 relative group">
                 <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border border-navy/10 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                      alt="Construction site"
                    />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-all duration-500" />
                 </div>
                 <div className="absolute -bottom-12 -left-12 bg-white p-16 rounded-[3.5rem] shadow-2xl border border-navy/5 hidden md:block">
                    <div className="text-navy font-black text-6xl mb-2 italic">2026</div>
                    <div className="text-navy/30 text-[10px] font-black uppercase">Building Gujarat Since</div>
                 </div>
              </div>
           </div>
        </section>

        {/* CORE MATERIALS */}
        <section className="py-48 px-6 bg-off-white border-y border-navy/5">
           <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-32">
                 <div>
                    <span className="text-navy font-black uppercase text-[10px] mb-8 block opacity-30">Our Products</span>
                    <h2 className="text-4xl md:text-8xl font-heading font-black text-navy uppercase italic leading-tight">Core <br /><span className="text-gold-dark">Materials.</span></h2>
                 </div>
                 <Link to="/brics/products" className="hidden md:flex items-center gap-4 text-navy font-black uppercase text-xs hover:gap-6 transition-all pb-2 border-b-2 border-gold-dark">
                    View Catalog <ArrowUpRight size={20} />
                 </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 {[
                   { name: "First-Class Bricks", desc: "Standard size, sharp edges, and uniform deep red color. Perfect for structural walls.", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200" },
                   { name: "Second-Class Bricks", desc: "Slightly over-burnt but highly durable. Ideal for internal walls and flooring base.", img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" }
                 ].map((prod, i) => (
                   <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="group relative"
                   >
                     <Link to="/brics/products" className="block relative aspect-[16/10] rounded-[4rem] overflow-hidden shadow-2xl border border-navy/5">
                        <img src={prod.img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={prod.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-12 left-12 right-12">
                           <h3 className="text-3xl font-heading font-black text-white uppercase mb-6 italic">{prod.name}</h3>
                           <p className="text-white/60 text-lg font-bold leading-relaxed">{prod.desc}</p>
                        </div>
                     </Link>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        <BricsCTA />
      </main>
    </>
  );
};

export default BricsHome;
