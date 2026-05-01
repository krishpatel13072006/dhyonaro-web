import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Zap, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const metalItems = [
  {
    title: "HMS 1/2 Steel",
    desc: "Heavy Melting Steel scrap sourced from industrial demolition and machinery. High density and perfect for electric arc furnaces.",
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Shredded Scrap",
    desc: "Homogenized steel scrap processed through high-capacity shredders. Low impurity levels for efficient smelting.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Aluminum Tense",
    desc: "Mixed aluminum casting scrap. Ideal for secondary aluminum smelters producing automotive components.",
    img: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Copper Millberry",
    desc: "Highest grade of copper wire scrap, free of any insulation or tinning. 99.9% purity for high-end electrical applications.",
    img: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Brass Honey",
    desc: "Yellow brass scrap consisting of mixed solids, valves, and plumbing fixtures. Essential for bronze manufacturing.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Stainless Steel 304",
    desc: "Industrial-grade stainless steel scrap with 18/8 chrome-nickel content. Highly corrosion resistant.",
    img: "https://images.unsplash.com/photo-1567502723161-59368d02951f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Zinc Die Cast",
    desc: "Clean zinc alloy scrap from automotive and hardware die-casting operations. Low melting point efficiency.",
    img: "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Lead Soft Scrap",
    desc: "Clean lead solids from industrial piping and shielding. Fully compliant with environmental transport standards.",
    img: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Bundled Scrap",
    desc: "Mechanically compressed steel sheets and offcuts. Optimized for transport and furnace charging volume.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Copper Birch",
    desc: "Mixed copper solids and tubing. A versatile non-ferrous raw material for alloy production.",
    img: "https://images.unsplash.com/photo-1535813543269-73567a57443d?auto=format&fit=crop&q=80&w=1200"
  }
];

const PramukhMetals = () => {
  return (
    <>
      <SEO title="Ferrous & Non-Ferrous Metals | Pramukh Import Export" />
      <main className="bg-off-white pt-24 pb-32">
        {/* HERO */}
        <section className="px-6 py-20 bg-navy text-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto relative z-10">
              <Link to="/pramukh/services" className="flex items-center gap-2 text-gold text-xs font-black uppercase tracking-widest mb-10 hover:gap-4 transition-all w-fit">
                <ArrowLeft size={16} /> All Services
              </Link>
              <h1 className="text-5xl md:text-8xl font-heading font-black uppercase italic mb-8 leading-none">
                Ferrous & <br/><span className="text-gold">Non-Ferrous.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-bold leading-relaxed">
                Strategic procurement and supply of industrial metal scrap. We bridge the gap between global raw materials and local manufacturing demands.
              </p>
           </div>
           <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/4" />
        </section>

        {/* DETAILS SECTION */}
        <section className="py-24 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                 <div className="space-y-12">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="p-8 bg-white rounded-3xl shadow-xl border border-navy/5">
                       <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Market Specialization</span>
                       <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic mb-8">Industrial Raw <br/><span className="text-gold-dark">Materials.</span></h2>
                       <p className="text-lg text-navy/60 font-bold leading-relaxed">
                         At Pramukh Import Export, we specialize in the bulk trading of both ferrous and non-ferrous metal scraps. Our operations involve meticulous sorting, quality assessment, and international shipping.
                       </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Zap className="text-gold" size={20}/> Ferrous
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Iron and steel scraps including HMS 1/2, Shredded Scrap, and cast iron. Ideal for large-scale construction.</p>
                       </motion.div>
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Award className="text-gold" size={20}/> Non-Ferrous
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Aluminum, Copper, Brass, Zinc, and Lead. High-value materials for electronics and automotive.</p>
                       </motion.div>
                    </div>
                 </div>

                 <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-navy p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                    <h3 className="text-3xl font-heading font-black uppercase mb-10 italic">Why Partner <span className="text-gold">With Us?</span></h3>
                    <ul className="space-y-8">
                       {[
                         "Direct sourcing from international scrap yards.",
                         "Stringent quality control and sorting standards.",
                         "Compliance with international trade regulations.",
                         "Consistent supply chain for large industrial needs.",
                         "Transparent pricing and weight verification."
                       ].map((item, i) => (
                         <li key={i} className="flex gap-4">
                            <CheckCircle2 className="text-gold shrink-0" />
                            <span className="text-sm font-bold opacity-80 uppercase tracking-widest">{item}</span>
                         </li>
                       ))}
                    </ul>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* IMAGE GALLERY - 3 PER ROW, LARGE, WITH DETAILS */}
        <section className="py-24 px-6 bg-white border-y border-navy/5">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                 <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Visual Inventory</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic">Operation <span className="text-gold-dark">Gallery.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {metalItems.map((item, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: (i % 3) * 0.1 }}
                     className="flex flex-col group"
                   >
                      <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 border border-navy/5 shadow-2xl">
                         <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={item.title} />
                      </div>
                      <h3 className="text-xl font-heading font-black text-navy uppercase mb-3 tracking-wider">{item.title}</h3>
                      <p className="text-navy/40 text-sm font-bold leading-relaxed">{item.desc}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center">
           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto bg-off-white p-16 rounded-[4rem] border border-navy/5 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase mb-8 italic leading-tight">Ready for <br/><span className="text-gold-dark">Procurement?</span></h2>
              <p className="text-lg text-navy/40 mb-10 font-bold">Contact our trading desk to discuss your monthly volume requirements.</p>
              <Link to="/pramukh/contact" className="btn-primary px-10 py-5 text-sm font-black uppercase tracking-widest inline-flex items-center gap-4">
                 Request a Quote <ArrowRight size={20} />
              </Link>
           </motion.div>
        </section>
      </main>
    </>
  );
};

export default PramukhMetals;
