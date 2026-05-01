import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, HardHat, Construction, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import BricsCTA from '../../components/brics/BricsCTA';

const secondClassItems = [
  {
    title: "Utility Wall Bricks",
    desc: "Reliable red bricks with high thermal mass, perfect for internal partition walls where surface finish is secondary.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Foundation Base Bricks",
    desc: "Over-burnt, high-density bricks that offer superior resistance to soil moisture and ground pressure.",
    img: "https://images.unsplash.com/photo-1590069230002-70cc3027aa21?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "In-Fill Masonry",
    desc: "Cost-effective bricks for filling structural RC frames, providing excellent bonding for heavy plastering.",
    img: "https://images.unsplash.com/photo-1621932953912-0b6557d8a4e7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Brick-Bat Coba",
    desc: "Crushed second-class bricks used as a highly effective waterproofing and insulation layer for flat roofs.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Compound Wall Supply",
    desc: "Durable masonry units for boundary walls and industrial fencing, balancing structural strength with economy.",
    img: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Backing Masonry",
    desc: "Sturdy bricks used behind stone cladding or facing bricks to provide the necessary structural depth.",
    img: "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Industrial Base Work",
    desc: "Used in the construction of machine foundations and industrial flooring bases due to high density.",
    img: "https://images.unsplash.com/photo-1495539406979-bf61750d38ad?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Bulk Masonry Units",
    desc: "High-volume supply for large infrastructure projects where structural performance outweighs surface aesthetics.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Rural Infrastructure",
    desc: "Supporting rural development with affordable, long-lasting masonry solutions for community projects.",
    img: "https://images.unsplash.com/photo-1535813543269-73567a57443d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Temporary Structures",
    desc: "Ideal for site offices and storage units that require solid masonry protection with quick turnaround.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200"
  }
];

const BricsSecondClass = () => {
  return (
    <>
      <SEO title="Second-Class Bricks | Bricks Trading Division" />
      <main className="bg-off-white pt-24 pb-32">
        {/* HERO */}
        <section className="px-6 py-20 bg-gold text-navy relative overflow-hidden">
           <div className="max-w-7xl mx-auto relative z-10">
              <Link to="/brics/products" className="flex items-center gap-2 text-navy/60 text-xs font-black uppercase tracking-widest mb-10 hover:gap-4 transition-all w-fit">
                <ArrowLeft size={16} /> All Products
              </Link>
              <h1 className="text-5xl md:text-8xl font-heading font-black uppercase italic mb-8 leading-none">
                Second-Class <br/><span className="text-white">Red Bricks.</span>
              </h1>
              <p className="text-xl md:text-2xl text-navy/60 max-w-2xl font-bold leading-relaxed">
                Reliable performance for hidden masonry. Slightly over-burnt for enhanced durability.
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
                       <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Utility & Value</span>
                       <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic mb-8">Heavy-Duty <br/><span className="text-gold-dark">Masonry.</span></h2>
                       <p className="text-lg text-navy/60 font-bold leading-relaxed">
                         Our second-class bricks offer a cost-effective solution for structural elements. These bricks are slightly over-burnt, giving them a very high density.
                       </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <HardHat className="text-gold" size={20}/> Robust
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Higher thermal mass and density compared to first-class bricks due to the intense firing process.</p>
                       </motion.div>
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Construction className="text-gold" size={20}/> Core Use
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Standard choice for internal partitions, temporary structures, and brick-bat coba flooring.</p>
                       </motion.div>
                    </div>
                 </div>

                 <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-navy p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                    <h3 className="text-3xl font-heading font-black uppercase mb-10 italic">Best Use <span className="text-gold">Cases.</span></h3>
                    <ul className="space-y-8">
                       {[
                         "Internal partition walls in apartments.",
                         "Foundation masonry and plinth work.",
                         "Compound walls and boundary structures.",
                         "Industrial flooring base layers.",
                         "Temporary site offices and labor camps."
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
                 <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Operation Sites</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic">Project <span className="text-gold-dark">Supply.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {secondClassItems.map((item, i) => (
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

export default BricsSecondClass;
