import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, HardHat, Truck, ShoppingCart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import BricsCTA from '../../components/brics/BricsCTA';

const materialItems = [
  {
    title: "Industrial Pavers",
    desc: "Heavy-duty concrete pavers designed for industrial yards and heavy vehicle movement zones.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Structural Aggregates",
    desc: "High-quality crushed stone and gravel sourced for concrete mixing and foundation base work.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Masonry Tools",
    desc: "A range of professional industrial tools and additives for high-precision masonry and block work.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Structural Steel",
    desc: "Secondary steel components essential for industrial sheds, warehouses, and structural framing.",
    img: "https://images.unsplash.com/photo-1590069230002-70cc3027aa21?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Mortar Additives",
    desc: "Specialized chemical additives that improve workability, bonding, and moisture resistance of masonry mortar.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Pre-Cast Components",
    desc: "Ready-to-install concrete lintels and kerbs that speed up construction and ensure quality control.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Site Safety Gear",
    desc: "Supply of essential industrial safety equipment required for large-scale construction site compliance.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Bulk Cement Supply",
    desc: "Coordination of bulk cement procurement for major industrial and infrastructure foundations.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Logistics Fleet",
    desc: "Dedicated transport vehicles ensuring timely delivery of heavy construction materials to your site.",
    img: "https://images.unsplash.com/photo-1530124560677-bdaea02c9a55?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Warehouse Inventory",
    desc: "Secure staging and storage of critical construction assets ready for immediate dispatch.",
    img: "https://images.unsplash.com/photo-154919438c-f4c63eb12f95?auto=format&fit=crop&q=80&w=1200"
  }
];

const BricsMaterials = () => {
  return (
    <>
      <SEO title="Construction Materials | Bricks Trading Division" />
      <main className="bg-off-white pt-24 pb-32">
        {/* HERO */}
        <section className="px-6 py-20 bg-gold text-navy relative overflow-hidden">
           <div className="max-w-7xl mx-auto relative z-10">
              <Link to="/brics/products" className="flex items-center gap-2 text-navy/60 text-xs font-black uppercase tracking-widest mb-10 hover:gap-4 transition-all w-fit">
                <ArrowLeft size={16} /> All Products
              </Link>
              <h1 className="text-5xl md:text-8xl font-heading font-black uppercase italic mb-8 leading-none">
                Essential <br/><span className="text-white">Materials.</span>
              </h1>
              <p className="text-xl md:text-2xl text-navy/60 max-w-2xl font-bold leading-relaxed">
                Your one-stop supply partner for core industrial construction materials.
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
                       <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Bulk Supply</span>
                       <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic mb-8">Foundation <br/><span className="text-gold-dark">Solutions.</span></h2>
                       <p className="text-lg text-navy/60 font-bold leading-relaxed">
                         Beyond bricks, the Bricks Trading Division provides a range of construction materials required for large-scale industrial and commercial projects.
                       </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <ShoppingCart className="text-gold" size={20}/> Bulk
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Managed procurement of construction aggregates and core building blocks for large projects.</p>
                       </motion.div>
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Truck className="text-gold" size={20}/> On-Site
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Direct delivery logistics coordinated with your project schedule to minimize storage on site.</p>
                       </motion.div>
                    </div>
                 </div>

                 <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-navy p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                    <h3 className="text-3xl font-heading font-black uppercase mb-10 italic">Supply <br/><span className="text-gold">Portfolio.</span></h3>
                    <ul className="space-y-8">
                       {[
                         "Specialized masonry mortars and additives.",
                         "Industrial-grade building blocks and pavers.",
                         "Structural steel components for sheds.",
                         "Bulk aggregates for foundation base work.",
                         "Customized material handling solutions."
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
                 <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Visual Supply</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic">Project <br/><span className="text-gold-dark">Archive.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {materialItems.map((item, i) => (
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

        <BricsCTA />
      </main>
    </>
  );
};

export default BricsMaterials;
