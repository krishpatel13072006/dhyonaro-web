import React from 'react';
import SEO from '../../components/SEO';
import { ShieldCheck, BarChart3, Globe, Truck } from 'lucide-react';

const PramukhServices = () => {
  return (
    <>
      <SEO title="Services | Pramukh Import Export" description="Explore our comprehensive metal scrap trading and procurement services." />
      
      <main className="bg-white pt-20">
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <span className="text-black font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-30">What We Do</span>
               <h1 className="text-5xl md:text-7xl font-heading font-black text-black uppercase italic leading-tight">Our <span className="text-gold-dark">Services.</span></h1>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
               {[
                 { title: "Ferrous Scrap", desc: "MS scrap, Cast Iron, Melting scrap specifically graded for steel plants and heavy manufacturing." },
                 { title: "Non-Ferrous", desc: "High-quality Copper, Aluminium, Brass, and Stainless Steel trading with precise purity metrics." },
                 { title: "Industrial Procurement", desc: "Factory surplus, production waste, and demolition scrap procurement at scale." },
                 { title: "Export & Logistics", desc: "End-to-end facilitation of global trade through established shipping channels and customs compliance." }
               ].map((item, i) => (
                 <div key={i} className="glass-card p-12 bg-white border-gray-100 hover:border-black/20 transition-all shadow-sm">
                    <h3 className="text-3xl font-heading font-black text-black uppercase mb-6 italic">{item.title}</h3>
                    <p className="text-black/60 font-bold leading-relaxed text-xl">{item.desc}</p>
                 </div>
               ))}
            </div>

            {/* Process Workflow */}
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-heading font-black text-black uppercase italic">The <span className="text-gold-dark">Workflow.</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { step: "01", title: "Sourcing", desc: "We source metal scrap from verified suppliers, shipbreakers, and industrial units.", icon: <Globe /> },
                 { step: "02", title: "Quality Check", desc: "All material is rigorously graded and verified against industry standards.", icon: <ShieldCheck /> },
                 { step: "03", title: "Trading", desc: "We supply to foundries and processors based on exact specifications.", icon: <BarChart3 /> },
                 { step: "04", title: "Fulfillment", desc: "Timely delivery via robust domestic and international logistics.", icon: <Truck /> }
               ].map((service, i) => (
                 <div key={i} className="glass-card p-10 bg-gray-50 border-gray-100 group hover:bg-white transition-all relative overflow-hidden shadow-sm">
                    <div className="absolute -top-4 -right-4 text-black/5 font-heading font-black text-8xl transition-all group-hover:text-gold-dark/10">{service.step}</div>
                    <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                       {service.icon}
                    </div>
                    <h4 className="text-xl font-heading font-black mb-4 uppercase text-black relative z-10">{service.title}</h4>
                    <p className="text-sm text-black/40 font-bold leading-relaxed relative z-10">{service.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PramukhServices;
