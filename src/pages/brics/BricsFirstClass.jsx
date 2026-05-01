import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, ShieldCheck, Ruler, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import BricsCTA from '../../components/brics/BricsCTA';

const brickItems = [
  {
    title: "Structural Red Bricks",
    desc: "Standard modular bricks with high compressive strength, ideal for load-bearing multi-story structures.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Facing Bricks",
    desc: "Premium aesthetic bricks with uniform color and texture, designed for exposed masonry and external facades.",
    img: "https://images.unsplash.com/photo-1590069230002-70cc3027aa21?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Bullnose Bricks",
    desc: "Specialized bricks with rounded edges for smooth corners in windows, doorways, and compound walls.",
    img: "https://images.unsplash.com/photo-1623039405147-547794f92e9e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Engineering Bricks",
    desc: "High-density bricks with extremely low water absorption, perfect for foundations and damp-proof courses.",
    img: "https://images.unsplash.com/photo-1621932953912-0b6557d8a4e7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Fire Bricks",
    desc: "Refractory bricks capable of withstanding high temperatures, used in industrial kilns and chimneys.",
    img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Modular Paving Bricks",
    desc: "Heavy-duty bricks designed for pedestrian pathways and industrial flooring with high abrasion resistance.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Wire-Cut Bricks",
    desc: "Precision-manufactured bricks with sharp edges and a perforated core for better mortar bonding and insulation.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Hollow Clay Blocks",
    desc: "Lightweight thermal insulation blocks that reduce dead load and keep interiors cool in harsh climates.",
    img: "https://images.unsplash.com/photo-1590069230005-db393739a731?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Classic Red Bricks",
    desc: "The traditional choice for residential construction, offering a timeless look and proven structural reliability.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Recycled Clay Bricks",
    desc: "Eco-friendly options manufactured using sustainable processes without compromising on structural strength.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200"
  }
];

const BricsFirstClass = () => {
  return (
    <>
      <SEO title="First-Class Red Bricks | Bricks Trading Division" />
      <main className="bg-off-white pt-24 pb-32">
        {/* HERO */}
        <section className="px-6 py-20 bg-navy text-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto relative z-10">
              <Link to="/brics/products" className="flex items-center gap-2 text-gold text-xs font-black uppercase tracking-widest mb-10 hover:gap-4 transition-all w-fit">
                <ArrowLeft size={16} /> All Products
              </Link>
              <h1 className="text-5xl md:text-8xl font-heading font-black uppercase italic mb-8 leading-none">
                First-Class <br/><span className="text-gold">Red Bricks.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-bold leading-relaxed">
                The gold standard in masonry. Sharp edges and unmatched structural integrity for premium construction projects.
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
                       <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Quality Specifications</span>
                       <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic mb-8">Structural <br/><span className="text-gold-dark">Excellence.</span></h2>
                       <p className="text-lg text-navy/60 font-bold leading-relaxed">
                         Our first-class red bricks are manufactured in state-of-the-art kilns using highly refined clay. They are characterized by their uniform size and sharp rectangular edges.
                       </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Ruler className="text-gold" size={20}/> Precision
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Standard dimensions with minimal variation, ensuring smooth masonry work and reduced plastering costs.</p>
                       </motion.div>
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <ShieldCheck className="text-gold" size={20}/> Durability
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">High compressive strength and low water absorption rates for long-lasting foundations.</p>
                       </motion.div>
                    </div>
                 </div>

                 <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-navy p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                    <h3 className="text-3xl font-heading font-black uppercase mb-10 italic">Technical <span className="text-gold">Data.</span></h3>
                    <ul className="space-y-8">
                       {[
                         "Compressive Strength: > 105 kg/cm².",
                         "Water Absorption: < 15% by weight.",
                         "Texture: Smooth and uniform without cracks.",
                         "Color: Deep cherry red or copper color.",
                         "Edges: Perfectly sharp and rectangular."
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
                 <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Product Showcase</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic">Quality <br/><span className="text-gold-dark">Visualization.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {brickItems.map((item, i) => (
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

export default BricsFirstClass;
