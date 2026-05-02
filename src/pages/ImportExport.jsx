import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Ship, Package, ShieldCheck, BarChart3, Globe, ArrowRight, Truck, Factory } from 'lucide-react';

const ImportExport = () => {
  const tradeImages = [
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <>
      <SEO title="Pramukh Import Export | Metal Scrap Trading" description="Gujarat's reliable partner for metal scrap procurement, trading, and export services. Specialized in ferrous and non-ferrous scrap." />
      <main className="pt-32">
        {/* Company Hero */}
        <section className="px-6 py-12 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4" />
          <div className="max-w-7xl mx-auto relative z-10">
             <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gold font-bold tracking-widest uppercase text-[10px] md:text-sm"
             >
                Dhyanora Group  →  Our Companies
             </motion.span>
             <h1 className="text-4xl sm:text-5xl md:text-8xl mt-4 mb-6 md:mb-8 font-heading font-black text-cream uppercase italic leading-none">Pramukh <br /><span className="text-gold">Import Export.</span></h1>
             <p className="text-lg md:text-xl text-gray-light/60 max-w-2xl leading-relaxed font-medium">
                Reliable Metal Scrap Solutions for Industrial Gujarat. We specialize in the procurement, trading, and export of ferrous and non-ferrous metal scrap.
             </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-32 px-6 bg-white/[0.02] border-y border-white/5">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
              <div className="flex-1">
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-cream uppercase mb-6 md:mb-8">Who We Are</h2>
                 <div className="space-y-6 text-base md:text-lg text-gray-light/40 leading-relaxed">
                    <p>
                      Pramukh Import Export is a metal scrap trading company operating under the Dhyanora Group. We facilitate the import and export of ferrous and non-ferrous scrap for industrial buyers and processors across Gujarat and beyond.
                    </p>
                    <p>
                      Metal scrap is a critical raw material for India's steel and manufacturing industries. Our role is to ensure a consistent, quality-verified, and competitively priced supply of scrap material to the businesses that need it.
                    </p>
                 </div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   { title: "Ferrous Scrap", desc: "MS scrap, Cast Iron, Melting scrap for steel plants." },
                   { title: "Non-Ferrous", desc: "Copper, Aluminium, Brass, and Stainless Steel trading." },
                   { title: "Industrial", desc: "Factory surplus and demolition scrap procurement." },
                   { title: "Export Services", desc: "Facilitating global trade through established channels." }
                 ].map((item, i) => (
                   <div key={i} className="glass-card p-6 md:p-8 border-white/5">
                      <h4 className="text-gold font-bold uppercase tracking-widest text-xs md:text-sm mb-4">{item.title}</h4>
                      <p className="text-xs text-gray-light/50 leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Process Grid */}
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                 <span className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">The Workflow</span>
                 <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase italic">Our <span className="text-gold">Process.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                 {[
                   { step: "01", title: "Sourcing", desc: "We source metal scrap from verified suppliers and industrial units.", icon: <Globe /> },
                   { step: "02", title: "Quality Check", desc: "All material is graded and verified before dispatch.", icon: <ShieldCheck /> },
                   { step: "03", title: "Trading", desc: "We supply to foundries and processors based on specs.", icon: <BarChart3 /> },
                   { step: "04", title: "Export", desc: "Global facilitation through logistics and compliance channels.", icon: <Truck /> }
                 ].map((service, i) => (
                   <div key={i} className="glass-card p-10 group hover:bg-gold/5 transition-all relative overflow-hidden">
                      <div className="absolute top-4 right-8 text-gold/10 font-heading font-black text-6xl">{service.step}</div>
                      <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                         {service.icon}
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-4 uppercase">{service.title}</h3>
                      <p className="text-sm text-gray-light/50 leading-relaxed">{service.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Logistics / Work Images */}
        <section className="py-32 px-6 bg-white/[0.02]">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-heading font-black text-cream uppercase mb-12 italic">Artifact <span className="text-gold">Gallery.</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {tradeImages.map((img, i) => (
                   <div key={i} className="rounded-3xl overflow-hidden h-[300px] border border-white/5">
                      <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Trade operations" />
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
              <div className="flex-1">
                 <h2 className="text-4xl md:text-5xl font-heading font-black text-cream uppercase mb-8">Why Work <span className="text-gold">With Us.</span></h2>
                 <ul className="space-y-6">
                    {[
                      "Consistent and reliable supply chain",
                      "Competitive and transparent pricing",
                      "Experienced team with deep market knowledge",
                      "Strong network across Gujarat and major hubs",
                      "Backed by the credibility of Dhyanora Group"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-lg text-gray-light/40 font-medium">
                         <div className="w-2 h-2 bg-gold rounded-full" /> {item}
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="flex-1 w-full h-[450px] bg-navy-light/50 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
                 <Factory size={180} className="text-gold/5" />
                 <div className="absolute bottom-8 left-8 right-8 bg-navy/90 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                    <p className="text-sm italic text-cream/70 font-medium leading-relaxed">"Pramukh Import Export ensures that critical raw materials reach India's industrial backbone with unmatched reliability."</p>
                    <p className="text-xs mt-4 font-black text-gold uppercase tracking-widest">— Industrial Partner</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-32 bg-gold/5">
           <div className="max-w-5xl mx-auto text-center px-6">
              <h2 className="text-3xl md:text-6xl font-heading font-black text-cream uppercase mb-6 md:mb-8 italic leading-tight">Ready for <span className="text-gold">Bulk Procurement?</span></h2>
              <p className="text-lg md:text-xl text-gray-light/60 mb-10 md:mb-12 max-w-2xl mx-auto font-medium">Reach out to our team to discuss your requirements. We handle bulk orders and long-term supply contracts.</p>
              <button className="btn-primary flex items-center gap-3 mx-auto px-10 py-5 text-base font-black uppercase shadow-2xl">
                 Send an Enquiry <ArrowRight size={20} />
              </button>
           </div>
        </section>
      </main>
    </>
  );
};

export default ImportExport;
