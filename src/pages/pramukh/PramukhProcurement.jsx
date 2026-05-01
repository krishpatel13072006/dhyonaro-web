import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Factory, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const procurementItems = [
  {
    title: "Heavy Machinery Sourcing",
    desc: "Identifying and procuring state-of-the-art manufacturing equipment from global leaders for specialized factory setups.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Factory Raw Materials",
    desc: "Bulk supply coordination of steel, polymers, and chemicals essential for large-scale industrial production cycles.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Industrial Spare Parts",
    desc: "Maintaining critical inventory of specialized components to ensure zero downtime for our industrial partners.",
    img: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Global Supply Networks",
    desc: "A vast network of vetted suppliers across Asia and Europe, ensuring the best balance of quality and price.",
    img: "https://images.unsplash.com/photo-1530124560677-bdaea02c9a55?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Strategic Negotiation",
    desc: "Our experts handle complex contract negotiations to secure the most favorable terms for your procurement budget.",
    img: "https://images.unsplash.com/photo-1454165833767-027ff33026b6?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Quality Assurance",
    desc: "On-site inspection and verification of materials before they leave the supplier's facility, ensuring full compliance.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Supply Consolidation",
    desc: "Combining multiple orders into single shipments to reduce logistics costs and simplify site deliveries.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Market Intel",
    desc: "Real-time tracking of global commodity prices to time your bulk purchases for maximum cost savings.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Inventory Planning",
    desc: "Collaborative forecasting with your operations team to maintain optimal stock levels of critical industrial assets.",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536ad31?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Procurement Consulting",
    desc: "Expert guidance on optimizing your internal procurement workflows for greater transparency and speed.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
  }
];

const PramukhProcurement = () => {
  return (
    <>
      <SEO title="Industrial Procurement | Pramukh Import Export" />
      <main className="bg-off-white pt-24 pb-32">
        {/* HERO */}
        <section className="px-6 py-20 bg-gold text-navy relative overflow-hidden">
           <div className="max-w-7xl mx-auto relative z-10">
              <Link to="/pramukh/services" className="flex items-center gap-2 text-navy/60 text-xs font-black uppercase tracking-widest mb-10 hover:gap-4 transition-all w-fit">
                <ArrowLeft size={16} /> All Services
              </Link>
              <h1 className="text-5xl md:text-8xl font-heading font-black uppercase italic mb-8 leading-none">
                Industrial <br/><span className="text-white">Procurement.</span>
              </h1>
              <p className="text-xl md:text-2xl text-navy/60 max-w-2xl font-bold leading-relaxed">
                Streamlining the supply chain for manufacturing giants. We source the components and machinery you need to stay operational.
              </p>
           </div>
           <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 -skew-x-12 translate-x-1/4" />
        </section>

        {/* DETAILS SECTION */}
        <section className="py-24 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                 <div className="space-y-12">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="p-8 bg-white rounded-3xl shadow-xl border border-navy/5">
                       <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Strategic Sourcing</span>
                       <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic mb-8">Optimized <br/><span className="text-gold-dark">Supply Chain.</span></h2>
                       <p className="text-lg text-navy/60 font-bold leading-relaxed">
                         Industrial procurement is about more than just buying—it's about reliability, cost-efficiency, and timing. Pramukh Import Export acts as an extended procurement arm for industrial clients.
                       </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Search className="text-gold" size={20}/> Sourcing
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Identifying the best quality materials and equipment from global markets at competitive price points.</p>
                       </motion.div>
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Factory className="text-gold" size={20}/> Industrial
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Specialized procurement for the steel, power, automotive, and heavy engineering sectors.</p>
                       </motion.div>
                    </div>
                 </div>

                 <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-navy p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                    <h3 className="text-3xl font-heading font-black uppercase mb-10 italic">Procurement <span className="text-gold">Workflow.</span></h3>
                    <ul className="space-y-8">
                       {[
                         "Requirement analysis & specification mapping.",
                         "Global supplier identification & vetting.",
                         "Negotiation & contract management.",
                         "Quality inspection & compliance checks.",
                         "Just-in-time delivery coordination."
                       ].map((item, i) => (
                         <li key={i} className="flex gap-4">
                            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-navy font-black text-xs shrink-0">{i+1}</div>
                            <span className="text-sm font-bold opacity-80 uppercase tracking-widest leading-loose">{item}</span>
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
                 <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Visual Archive</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic">Project <span className="text-gold-dark">Fulfillment.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {procurementItems.map((item, i) => (
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
           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto bg-navy p-16 rounded-[4rem] border border-navy/5 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-8 italic leading-tight">Lower Your <br/><span className="text-gold">Procurement Costs.</span></h2>
              <p className="text-lg text-white/40 mb-10 font-bold">Talk to our experts about our strategic sourcing programs.</p>
              <Link to="/pramukh/contact" className="btn-gold px-10 py-5 text-sm font-black uppercase tracking-widest inline-flex items-center gap-4">
                 Get in Touch <ArrowRight size={20} />
              </Link>
           </motion.div>
        </section>
      </main>
    </>
  );
};

export default PramukhProcurement;
