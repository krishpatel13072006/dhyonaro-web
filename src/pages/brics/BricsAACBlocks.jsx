import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Zap, Cloud, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import BricsCTA from '../../components/brics/BricsCTA';

const aacItems = [
  {
    title: "AAC Block Pallets",
    desc: "Precision-manufactured AAC blocks ready for shipment. Uniform sizing reduces mortar consumption by up to 60%.",
    img: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Lightweight Structure",
    desc: "A comparison showing the massive weight reduction of AAC blocks versus traditional clay bricks, saving structural costs.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Thermal Insulation",
    desc: "High-performance blocks that provide superior heat resistance, significantly lowering air conditioning costs.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "High-Rise Construction",
    desc: "The preferred choice for multi-story residential and commercial towers to minimize dead load on the foundation.",
    img: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Fire Resistant Masonry",
    desc: "AAC blocks offer up to 4 hours of fire rating, providing essential safety for industrial and public buildings.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Acoustic Insulation",
    desc: "Porous structure that dampens sound, making AAC blocks ideal for hotels, hospitals, and luxury apartments.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Eco-Friendly Building",
    desc: "Manufactured using sustainable processes and non-toxic materials, contributing to green building certifications.",
    img: "https://images.unsplash.com/photo-1530124560677-bdaea02c9a55?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Fast Installation",
    desc: "Large block size and lightweight nature allow for 3x faster wall construction compared to traditional bricks.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Precision Cutting",
    desc: "AAC blocks can be easily cut, drilled, and chased on-site for electrical and plumbing installations.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Moisture Resistance",
    desc: "Closed-cell structure minimizes water capillary action, reducing the risk of dampness and efflorescence.",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536ad31?auto=format&fit=crop&q=80&w=1200"
  }
];

const BricsAACBlocks = () => {
  return (
    <>
      <SEO title="AAC Lightweight Blocks | Bricks Trading Division" />
      <main className="bg-off-white pt-24 pb-32">
        {/* HERO */}
        <section className="px-6 py-20 bg-navy text-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto relative z-10">
              <Link to="/brics/products" className="flex items-center gap-2 text-gold text-xs font-black uppercase tracking-widest mb-10 hover:gap-4 transition-all w-fit">
                <ArrowLeft size={16} /> All Products
              </Link>
              <h1 className="text-5xl md:text-8xl font-heading font-black uppercase italic mb-8 leading-none">
                AAC <br/><span className="text-gold">Lightweight Blocks.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-bold leading-relaxed">
                Modern construction at high speed. Autoclaved Aerated Concrete blocks for superior insulation.
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
                       <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Modern Masonry</span>
                       <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic mb-8">Efficiency & <br/><span className="text-gold-dark">Insulation.</span></h2>
                       <p className="text-lg text-navy/60 font-bold leading-relaxed">
                         Autoclaved Aerated Concrete (AAC) is a game-changer for high-rise and commercial construction.
                       </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Cloud className="text-gold" size={20}/> Lightweight
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Easy to handle and transport, drastically reducing construction timelines and labor intensity.</p>
                       </motion.div>
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Zap className="text-gold" size={20}/> Thermal
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Outstanding R-value for energy efficiency, keeping interiors cool in the Gujarat heat.</p>
                       </motion.div>
                    </div>
                 </div>

                 <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-navy p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                    <h3 className="text-3xl font-heading font-black uppercase mb-10 italic">AAC <br/><span className="text-gold">Advantages.</span></h3>
                    <ul className="space-y-8">
                       {[
                         "Up to 3x faster construction than traditional bricks.",
                         "Reduced dead load on high-rise RC structures.",
                         "Superior fire resistance (up to 4 hours).",
                         "Eco-friendly: 100% recyclable and low carbon footprint.",
                         "Consistent sizing leads to minimal mortar use."
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
                 <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Product Inventory</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic">Precision <br/><span className="text-gold-dark">Blocks.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {aacItems.map((item, i) => (
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

export default BricsAACBlocks;
