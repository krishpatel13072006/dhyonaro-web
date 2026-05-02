import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Building2, Truck, Ruler, ShieldCheck, ArrowRight, Construction, Hammer, Warehouse } from 'lucide-react';
import MovingMesh from '../components/MovingMesh';

const Brics = () => {
  return (
    <>
      <SEO title="Bricks Trading Division | Dhyanora Group" description="Supplying quality bricks and construction materials to builders and contractors across Ahmedabad and Gujarat. High-grade red bricks and AAC blocks." />
      <main className="relative">
        
        {/* PREMIUM ANIMATED HERO */}
        <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-navy pt-24 md:pt-[165px]">
          <MovingMesh />
          
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gold/10 backdrop-blur-xl border border-gold/20 rounded-2xl md:rounded-3xl mb-8 md:mb-10 text-gold shadow-[0_0_50px_rgba(242,201,76,0.1)]">
                <Building2 size={32} />
              </div>
              
              <h1 className="font-heading font-black uppercase leading-[1] text-cream mb-6 md:mb-8" style={{ fontSize: "clamp(2rem, 8vw, 6.5rem)" }}>
                Bricks <span className="text-gold">Trading.</span>
              </h1>
              
              <p className="text-lg md:text-3xl text-gray-light/60 leading-relaxed max-w-3xl mx-auto font-medium">
                Foundations of Quality. Bricks for Better Building. We supply the core materials that build the skyline of Gujarat.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-navy to-transparent z-10" />
        </section>

        {/* About Section */}
        <section className="py-16 md:py-32 px-6 bg-navy relative z-20 border-t border-white/5">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
              <div className="flex-1">
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-cream uppercase mb-6 md:mb-8">Who We Are</h2>
                 <div className="space-y-6 text-base md:text-lg text-gray-light/40 leading-relaxed font-medium">
                    <p>
                      The Bricks Trading Division of Dhyanora Group is a dedicated supplier of high-quality construction materials. We serve builders, contractors, and individual property owners across the region, ensuring they have the strongest foundation for their projects.
                    </p>
                    <p>
                      In construction, the quality of your raw materials determines the longevity of your structure. We take this responsibility seriously, sourcing and supplying only verified, high-grade materials.
                    </p>
                 </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 md:gap-6">
                 {[
                   { title: "Red Bricks", desc: "Traditional high-strength clay bricks for durable masonry." },
                   { title: "AAC Blocks", desc: "Lightweight, eco-friendly blocks for modern construction." },
                   { title: "Aggregates", desc: "Quality stone and sand for high-strength concrete." },
                   { title: "Bulk Supply", desc: "Reliable delivery for large-scale infrastructure projects." }
                 ].map((item, i) => (
                   <div key={i} className="glass-card p-6 md:p-8 border-white/5 flex flex-col justify-center">
                      <h4 className="text-gold font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-4">{item.title}</h4>
                      <p className="text-[10px] md:text-xs text-gray-light/50 leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Product Inventory (Refined Cards) */}
        <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5 relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <span className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our Inventory</span>
               <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase italic">Core <span className="text-gold">Materials.</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <Construction size={32} />, title: "High-Grade Bricks", desc: "Sourced from the best kilns to ensure consistent size, shape, and compression strength." },
                { icon: <Hammer size={32} />, title: "Lightweight Blocks", desc: "Providing AAC blocks that reduce structural load and improve thermal insulation." },
                { icon: <Warehouse size={32} />, title: "Ready Stock", desc: "We maintain significant inventory to ensure that your project never stops due to supply issues." }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group glass-card p-12 border-white/5 hover:border-gold/30 transition-all duration-500"
                >
                  <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-cream mb-4 uppercase">{service.title}</h3>
                  <p className="text-gray-light/40 leading-relaxed text-sm">{service.desc}</p>
                  <div className="mt-8 w-12 h-0.5 bg-gold/20 group-hover:w-full transition-all duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Logistics Section */}
        <section className="py-16 md:py-32 bg-navy relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="order-2 lg:order-1">
                 <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl">
                    <img 
                       src="https://images.unsplash.com/photo-1590069230002-70cc3027aa21?auto=format&fit=crop&q=80&w=1200" 
                       alt="Construction site"
                       className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                 </div>
              </div>
              <div className="order-1 lg:order-2">
                 <div className="mb-4 md:mb-6 flex items-center gap-4">
                    <span className="h-px w-12 bg-gold/50" />
                    <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Logistics</span>
                 </div>
                 <h2 className="text-3xl md:text-6xl mb-6 md:mb-8 font-heading font-black text-cream leading-tight uppercase italic">Reliable <br /><span className="text-gold">Delivery.</span></h2>
                 <p className="text-lg md:text-xl text-gray-light/40 mb-8 md:mb-10 leading-relaxed max-w-xl font-medium">
                    At Dhyanora, we understand that construction timelines are critical. Our Bricks Trading Division is backed by a robust fleet and logistics network to ensure that your materials reach the site on time, every time.
                 </p>
                 <ul className="space-y-4 mb-8 md:mb-10">
                    {[
                      { icon: <Truck size={20} />, text: "Timely site delivery across the region" },
                      { icon: <Ruler size={20} />, text: "Precise count and quality verification" },
                      { icon: <ShieldCheck size={20} />, text: "Competitive bulk-order pricing" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-cream/70 font-medium text-sm md:text-base">
                         <span className="text-gold">{item.icon}</span> {item.text}
                      </li>
                    ))}
                 </ul>
                 <button className="group flex items-center gap-3 text-gold font-bold hover:gap-5 transition-all uppercase tracking-widest text-xs md:text-sm">
                    Request a Quote <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
           <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 border-white/5 relative overflow-hidden">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-cream uppercase mb-6 italic leading-none">Ready to <span className="text-gold">Start Building?</span></h2>
              <p className="text-lg text-gray-light/60 mb-10 max-w-xl mx-auto font-bold">
                 Reach out to our trading team for bulk pricing, material specifications, and delivery schedules.
              </p>
              <button className="btn-primary px-10 py-5 text-base font-black uppercase shadow-2xl">
                 Contact Sales Team
              </button>
           </div>
        </section>

        <div className="h-32 bg-navy" />
      </main>
    </>
  );
};

export default Brics;
