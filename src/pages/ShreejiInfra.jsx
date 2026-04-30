import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { HardHat, Ruler, Building, Factory, ArrowRight, MapPin, ShieldCheck, Zap, Warehouse } from 'lucide-react';

const ShreejiInfra = () => {
  const offerings = [
    { title: "Industrial Sheds", icon: <Factory />, desc: "Ready-to-move and custom-built units designed for manufacturing excellence." },
    { title: "Warehousing", icon: <Warehouse />, desc: "Large floor-area spaces with optimized loading bays and logistics access." },
    { title: "Commercial Sale", icon: <Building />, desc: "Flexible commercial structures for long-term lease or outright sale." },
    { title: "Utilities", icon: <Zap />, desc: "Robust power, water, and road infrastructure integrated within the park." }
  ];

  return (
    <>
      <SEO title="Shreeji Infra | Mahantam Industrial Park" description="Premium industrial sheds and workspace solutions in Ahmedabad, Gujarat. Professionally managed infrastructure for manufacturing and logistics." />
      <main className="pt-32">
        {/* Company Hero */}
        <section className="px-6 py-20 relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-full object-cover opacity-20 grayscale"
               alt="Industrial park"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <span className="text-gold font-bold tracking-widest uppercase text-sm">Dhyanora Group  →  Our Companies</span>
              <h1 className="text-6xl md:text-8xl mt-4 mb-8 font-heading font-black text-cream uppercase italic leading-none">Mahantam <br /><span className="text-gold">Industrial Park.</span></h1>
              <p className="text-xl text-gray-light/60 leading-relaxed font-medium max-w-2xl">
                Purpose-Built Industrial Spaces for Growing Businesses. Developed and managed by <strong className="text-gold">Shreeji Infra</strong>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About the Park */}
        <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
              <div className="flex-1">
                 <h2 className="text-4xl md:text-5xl font-heading font-black text-cream uppercase mb-8">About the Park</h2>
                 <div className="space-y-6 text-lg text-gray-light/40 leading-relaxed font-medium">
                    <p>
                      Shreeji Infra is the infrastructure and industrial development company of the Dhyanora Group. Under the Mahantam Industrial Park brand, we develop and manage premium industrial properties designed for manufacturing and logistics.
                    </p>
                    <p>
                      Mahantam Industrial Park is our flagship development — a planned, professionally managed industrial zone offering sheds and spaces for businesses across manufacturing, warehousing, and assembly.
                    </p>
                 </div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   { label: "Strategic Location", desc: "Near Ahmedabad for easy highway and transport access." },
                   { label: "Clear Titles", desc: "Transparent documentation and hassle-free legalities." },
                   { label: "Flexible Units", desc: "Sizes suitable for small units to large operations." },
                   { label: "Full Utilities", desc: "Integrated power, water, and logistics infrastructure." }
                 ].map((item, i) => (
                   <div key={i} className="glass-card p-8 border-white/5 flex flex-col justify-center">
                      <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">{item.label}</h4>
                      <p className="text-xs text-gray-light/50 leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                 <span className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Infrastructure</span>
                 <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase italic">What We <span className="text-gold">Offer.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {offerings.map((offering, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="glass-card group hover:bg-gold/5 transition-all p-10"
                   >
                     <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                       {offering.icon}
                     </div>
                     <h3 className="text-2xl font-heading font-bold mb-4 uppercase">{offering.title}</h3>
                     <p className="text-sm text-gray-light/40 leading-relaxed font-medium">{offering.desc}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Why Mahantam Section */}
        <section className="py-32 px-6 bg-gold/5 border-y border-gold/10">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-20">
                 <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-cream uppercase mb-10 leading-tight">Why Choose <br /><span className="text-gold">Mahantam Park.</span></h2>
                    <ul className="space-y-6">
                       {[
                         "Strategically located near major transport hubs",
                         "Professionally developed and managed infrastructure",
                         "Flexible unit sizes for diverse industrial needs",
                         "Transparent documentation and clear land titles",
                         "Backed by the industrial credibility of Dhyanora Group"
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-4 text-lg text-gray-light/40 font-medium">
                            <ShieldCheck className="text-gold" size={24} /> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      alt="Industrial facility"
                    />
                    <div className="absolute inset-0 bg-gold/10 pointer-events-none mix-blend-overlay" />
                    <div className="absolute bottom-8 left-8 bg-navy/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                       <div className="flex items-center gap-3 text-gold mb-2">
                          <MapPin size={18} />
                          <span className="text-xs font-black uppercase tracking-widest">Ahmedabad, Gujarat</span>
                       </div>
                       <p className="text-sm text-cream/70 font-medium">Flagship Industrial Development</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6">
           <div className="max-w-5xl mx-auto glass-card p-12 md:p-24 text-center border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
              <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase mb-8 italic">Ready to <span className="text-gold">Scale Up?</span></h2>
              <p className="text-xl text-gray-light/60 mb-12 max-w-2xl mx-auto font-medium">
                 Contact our team to discuss available units, pricing, and site visits. We will help you find the right space for your operation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                 <button className="btn-primary px-12 py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3">
                    Book a Site Visit <ArrowRight size={20} />
                 </button>
                 <button className="px-12 py-5 border border-white/10 rounded-full text-cream font-bold hover:bg-white/5 transition-all uppercase tracking-widest text-sm">
                    Send Enquiry
                 </button>
              </div>
           </div>
        </section>
      </main>
    </>
  );
};

export default ShreejiInfra;
