import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Construction, Hammer, Warehouse, Truck, Ruler, ShieldCheck } from 'lucide-react';
import BricsCTA from '../../components/brics/BricsCTA';

const BricsProducts = () => {
  return (
    <>
      <SEO title="Products | Bricks Trading Division" description="Core construction materials and inventory." />
      
      <main className="bg-white pt-20">
        <section className="py-24 px-6 bg-white relative z-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <span className="text-navy font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-30">Our Inventory</span>
               <h2 className="text-5xl md:text-8xl font-heading font-black text-navy uppercase italic leading-none">Core <br /><span className="text-gold-dark">Materials.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
              {[
                { 
                  icon: <Construction size={32} />, 
                  title: "High-Grade Bricks", 
                  desc: "Sourced from the best kilns to ensure consistent size, shape, and compression strength.",
                  img: "https://images.unsplash.com/photo-1590069230005-db393739a731?auto=format&fit=crop&q=80&w=800"
                },
                { 
                  icon: <Hammer size={32} />, 
                  title: "Lightweight Blocks", 
                  desc: "Providing AAC blocks that reduce structural load and improve thermal insulation.",
                  img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
                },
                { 
                  icon: <Warehouse size={32} />, 
                  title: "Ready Stock", 
                  desc: "We maintain significant inventory to ensure that your project never stops due to supply issues.",
                  img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col bg-white border border-navy/5 rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img src={service.img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={service.title} />
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-heading font-black text-navy mb-4 uppercase leading-tight">{service.title}</h3>
                    <p className="text-navy/40 leading-relaxed text-sm font-bold">{service.desc}</p>
                    <div className="mt-8 w-12 h-1 bg-gold-dark/30 group-hover:w-full group-hover:bg-gold-dark transition-all duration-700" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1">
                  <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl border border-navy/10">
                     <img 
                       src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                       alt="Logistics fleet"
                       className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                     />
                     <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-all duration-500" />
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <div className="mb-8 flex items-center gap-6">
                     <span className="h-px w-16 bg-gold-dark" />
                     <span className="text-gold-dark text-sm font-black uppercase tracking-[0.4em]">Logistics Excellence</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl mb-10 font-heading font-black text-navy leading-[1.1] uppercase italic">Reliable <br /><span className="text-gold-dark">Site Delivery.</span></h2>
                  <p className="text-xl text-navy/60 mb-12 leading-relaxed max-w-xl font-bold">
                     At Dhyanora, we understand that construction timelines are critical. Our Bricks Trading Division is backed by a robust fleet and logistics network to ensure that your materials reach the site on time, every time.
                  </p>
                  <ul className="space-y-6">
                     {[
                       { icon: <Truck size={28} />, text: "Timely site delivery across the region" },
                       { icon: <Ruler size={28} />, text: "Precise count and quality verification" },
                       { icon: <ShieldCheck size={28} />, text: "Competitive bulk-order pricing" }
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-5 text-navy text-lg font-bold">
                          <div className="w-12 h-12 rounded-full bg-off-white flex items-center justify-center text-navy shadow-sm group-hover:bg-navy group-hover:text-gold transition-all">
                            {item.icon}
                          </div>
                          {item.text}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
          </div>
        </section>
        <BricsCTA />
      </main>
    </>
  );
};

export default BricsProducts;
