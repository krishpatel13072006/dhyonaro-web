import React from 'react';
import SEO from '../../components/SEO';
import { ShieldCheck, BarChart3, Globe, Truck } from 'lucide-react';

const PramukhServices = () => {
  return (
    <>
      <SEO title="Services | Pramukh Import Export" description="Explore our comprehensive metal scrap trading and procurement services." />
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">What We Do</span>
             <h1 className="text-5xl md:text-7xl font-heading font-black text-cream uppercase italic">Our <span className="text-gold">Services.</span></h1>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
             {[
               { title: "Ferrous Scrap", desc: "MS scrap, Cast Iron, Melting scrap specifically graded for steel plants and heavy manufacturing." },
               { title: "Non-Ferrous", desc: "High-quality Copper, Aluminium, Brass, and Stainless Steel trading with precise purity metrics." },
               { title: "Industrial Procurement", desc: "Factory surplus, production waste, and demolition scrap procurement at scale." },
               { title: "Export & Logistics", desc: "End-to-end facilitation of global trade through established shipping channels and customs compliance." }
             ].map((item, i) => (
               <div key={i} className="glass-card p-10 border-white/10 hover:border-gold/50 transition-colors">
                  <h3 className="text-2xl font-heading font-black text-cream uppercase mb-4">{item.title}</h3>
                  <p className="text-gray-light/60 leading-relaxed text-lg">{item.desc}</p>
               </div>
             ))}
          </div>

          {/* Process Workflow */}
          <div className="text-center mb-16">
             <h2 className="text-4xl font-heading font-black text-cream uppercase italic">The <span className="text-gold">Workflow.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             {[
               { step: "01", title: "Sourcing", desc: "We source metal scrap from verified suppliers, shipbreakers, and industrial units.", icon: <Globe /> },
               { step: "02", title: "Quality Check", desc: "All material is rigorously graded and verified against industry standards.", icon: <ShieldCheck /> },
               { step: "03", title: "Trading", desc: "We supply to foundries and processors based on exact specifications.", icon: <BarChart3 /> },
               { step: "04", title: "Fulfillment", desc: "Timely delivery via robust domestic and international logistics.", icon: <Truck /> }
             ].map((service, i) => (
               <div key={i} className="glass-card p-8 group hover:bg-gold/5 transition-all relative overflow-hidden border-white/5">
                  <div className="absolute -top-4 -right-4 text-gold/5 font-heading font-black text-8xl transition-all group-hover:text-gold/10">{service.step}</div>
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                     {service.icon}
                  </div>
                  <h4 className="text-xl font-heading font-bold mb-3 uppercase relative z-10">{service.title}</h4>
                  <p className="text-sm text-gray-light/60 leading-relaxed relative z-10">{service.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PramukhServices;
