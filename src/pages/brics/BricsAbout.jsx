import React from 'react';
import SEO from '../../components/SEO';
import { Building2, ShieldCheck, Globe, Package, Truck, Layers } from 'lucide-react';
import BricsCTA from '../../components/brics/BricsCTA';

const BricsAbout = () => {
  return (
    <>
      <SEO title="About | Bricks Trading Division" description="Learn about the Bricks Trading Division of Dhyanora Group." />
      
      <main className="bg-white pt-20">
        <section className="py-32 px-6 bg-white relative z-20">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
              <div className="flex-1">
                 <span className="text-navy font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-30">Who We Are</span>
                 <h2 className="text-6xl md:text-[5rem] font-heading font-black text-navy uppercase mb-10 leading-[0.9] italic">Reliable <br /><span className="text-gold-dark">Supply Chain.</span></h2>
                 <div className="space-y-8 text-xl text-navy/40 leading-relaxed font-bold">
                    <p>
                      The <strong className="text-navy font-black">Bricks Trading Division</strong> of Dhyanora Group is a dedicated supplier of high-quality construction materials. We serve builders, contractors, and individual property owners across the region, ensuring they have the strongest foundation for their projects.
                    </p>
                    <p>
                      In construction, the quality of your raw materials determines the longevity of your structure. We take this responsibility seriously, sourcing and supplying only verified, high-grade materials that meet stringent durability standards.
                    </p>
                 </div>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                 {[
                   { title: "Red Bricks", icon: <Package />, desc: "Traditional high-strength clay bricks for durable masonry." },
                   { title: "AAC Blocks", icon: <Layers />, desc: "Lightweight, eco-friendly blocks for modern construction." },
                   { title: "Aggregates", icon: <ShieldCheck />, desc: "Quality stone and sand for high-strength concrete." },
                   { title: "Logistics", icon: <Truck />, desc: "Reliable delivery for large-scale infrastructure projects." }
                 ].map((item, i) => (
                   <div key={i} className="p-10 flex flex-col justify-center bg-off-white border border-navy/5 shadow-xl hover:bg-navy transition-all duration-500 group rounded-[3rem]">
                      <div className="text-gold-dark group-hover:text-gold transition-colors mb-6">{item.icon}</div>
                      <h4 className="text-navy group-hover:text-white font-black uppercase tracking-[0.2em] text-xs mb-4 transition-colors">{item.title}</h4>
                      <p className="text-sm text-navy/40 group-hover:text-white/40 leading-relaxed font-bold transition-colors">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-40 bg-off-white border-t border-navy/5">
          <div className="max-w-4xl mx-auto text-center px-6">
            <div className="w-20 h-20 bg-navy rounded-3xl flex items-center justify-center text-gold mx-auto mb-10 shadow-2xl">
               <Building2 size={40} />
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase mb-10 italic leading-tight">Building <br /><span className="text-gold-dark">Legacies.</span></h2>
            <p className="text-2xl text-navy/40 font-bold italic max-w-2xl mx-auto leading-relaxed">
              "We don't just sell bricks; we sell the assurance that your vision will stand strong for generations to come."
            </p>
          </div>
        </section>

        <BricsCTA />
      </main>
    </>
  );
};

export default BricsAbout;
