import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Factory, ArrowRight, MapPin, ShieldCheck, Zap, Warehouse, Building2 } from 'lucide-react';
import MovingMesh from '../components/MovingMesh';

const ShreejiInfra = () => {
  const offerings = [
    { title: "Industrial Sheds", icon: <Factory />, desc: "Ready-to-move and custom-built units designed for manufacturing excellence." },
    { title: "Warehousing", icon: <Warehouse />, desc: "Large floor-area spaces with optimized loading bays and logistics access." },
    { title: "Commercial Sale", icon: <Building2 />, desc: "Flexible commercial structures for long-term lease or outright sale." },
    { title: "Utilities", icon: <Zap />, desc: "Robust power, water, and road infrastructure integrated within the park." }
  ];

  return (
    <>
      <SEO title="Shreeji Infra | Mahantam Industrial Park" description="Premium industrial sheds and workspace solutions in Ahmedabad, Gujarat. Professionally managed infrastructure for manufacturing and logistics." />
      <main className="bg-white">
        {/* Company Hero - Updated to White Text / Dark Mesh */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white pt-20">
          <MovingMesh />
          <div className="relative z-20 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-8 block opacity-60">Portfolio / Infrastructure</span>
              <h1 className="text-6xl md:text-9xl font-heading font-black text-white uppercase italic leading-none">Mahantam <br /><span className="text-gold">Industrial Park.</span></h1>
            </motion.div>
          </div>
        </section>

        {/* About the Park */}
        <section className="py-32 px-6 bg-white border-y border-navy/5">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
              <div className="flex-1">
                 <span className="text-navy font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-30">Infrastructure Excellence</span>
                 <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase italic mb-10 leading-tight">About the <br/><span className="text-gold-dark">Park.</span></h2>
                 <div className="space-y-8 text-xl text-navy/40 leading-relaxed font-bold">
                    <p>
                      Shreeji Infra is the infrastructure and industrial development company of the Dhyanora Group. Under the Mahantam Industrial Park brand, we develop and manage premium industrial properties designed for manufacturing and logistics.
                    </p>
                    <p>
                      Mahantam Industrial Park is our flagship development — a planned, professionally managed industrial zone offering sheds and spaces for businesses across manufacturing, warehousing, and assembly.
                    </p>
                 </div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { label: "Strategic Location", desc: "Near Ahmedabad for easy highway and transport access." },
                   { label: "Clear Titles", desc: "Transparent documentation and hassle-free legalities." },
                   { label: "Flexible Units", desc: "Sizes suitable for small units to large operations." },
                   { label: "Full Utilities", desc: "Integrated power, water, and logistics infrastructure." }
                 ].map((item, i) => (
                   <div key={i} className="p-10 bg-off-white border border-navy/5 flex flex-col justify-center shadow-xl rounded-[3rem] hover:bg-navy group transition-all duration-500">
                      <h4 className="text-navy group-hover:text-gold font-black uppercase tracking-widest text-[10px] mb-4 opacity-30 group-hover:opacity-100 transition-all">{item.label}</h4>
                      <p className="text-sm text-navy/40 group-hover:text-white/40 font-bold leading-relaxed transition-all">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-32 px-6 bg-off-white">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                 <span className="text-navy font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-30">Solutions</span>
                 <h2 className="text-4xl md:text-7xl font-heading font-black text-navy uppercase italic">What We <span className="text-gold-dark">Offer.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {offerings.map((offering, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="p-12 bg-white rounded-[3rem] border border-navy/5 shadow-xl hover:bg-navy group transition-all duration-500"
                   >
                     <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-gold mb-10 group-hover:bg-gold group-hover:text-navy transition-all">
                       {offering.icon}
                     </div>
                     <h3 className="text-2xl font-heading font-black mb-4 uppercase text-navy group-hover:text-white transition-colors">{offering.title}</h3>
                     <p className="text-sm text-navy/40 leading-relaxed font-bold group-hover:text-white/40 transition-colors">{offering.desc}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Why Mahantam Section */}
        <section className="py-40 px-6 bg-white border-y border-navy/5">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-24">
                 <div className="flex-1">
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase mb-12 leading-tight">Why Choose <br /><span className="text-gold-dark">Mahantam Park.</span></h2>
                    <ul className="space-y-8">
                       {[
                         "Strategically located near major transport hubs",
                         "Professionally developed and managed infrastructure",
                         "Flexible unit sizes for diverse industrial needs",
                         "Transparent documentation and clear land titles",
                         "Backed by the industrial credibility of Dhyanora Group"
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-6 text-xl text-navy/40 font-bold">
                            <ShieldCheck className="text-gold-dark" size={28} /> {item}
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="flex-1 w-full aspect-square rounded-[4rem] overflow-hidden border border-navy/10 shadow-2xl relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      alt="Industrial facility"
                    />
                    <div className="absolute inset-0 bg-navy/10 pointer-events-none group-hover:bg-transparent transition-all" />
                    <div className="absolute bottom-10 left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-navy/5">
                       <div className="flex items-center gap-3 text-navy mb-2">
                          <MapPin size={20} className="text-gold-dark" />
                          <span className="text-xs font-black uppercase tracking-widest italic">Ahmedabad, Gujarat</span>
                       </div>
                       <p className="text-[10px] text-navy/30 font-black uppercase tracking-widest">Flagship Industrial Zone</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="py-40 px-6 bg-white text-center">
           <div className="max-w-5xl mx-auto bg-navy p-16 md:p-32 rounded-[4rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gold/5 opacity-40 pointer-events-none" />
              <h2 className="text-5xl md:text-[6rem] font-heading font-black text-white uppercase mb-12 italic leading-[0.9]">Ready to <br /><span className="text-gold">Scale Up?</span></h2>
              <p className="text-2xl text-white/40 mb-16 max-w-2xl mx-auto font-bold">
                 Contact our team to discuss available units, pricing, and site visits. We will help you find the right space for your operation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8 relative z-10">
                 <button className="bg-gold text-navy px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl">
                    Book Visit <ArrowRight size={22} />
                 </button>
                 <button className="px-12 py-6 border-2 border-white/20 rounded-full text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
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
