import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Truck, Package, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const logisticsItems = [
  {
    title: "Heavy-Duty Trucking",
    desc: "A managed fleet of industrial trucks specialized in the safe transport of heavy metal scrap and machinery.",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Warehouse Management",
    desc: "Strategic storage solutions for industrial assets, offering secure staging before local or global transit.",
    img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Container Staging",
    desc: "Professional loading and securing of cargo in standard shipping containers to ensure damage-free delivery.",
    img: "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Route Optimization",
    desc: "Advanced logistics planning to minimize transit times and reduce fuel consumption for industrial freight.",
    img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Last-Mile Delivery",
    desc: "Reliable delivery of critical materials directly to your factory doorstep, even in remote industrial zones.",
    img: "https://images.unsplash.com/photo-154919438c-f4c63eb12f95?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Vessel Coordination",
    desc: "Direct booking and coordination with major shipping lines for high-volume industrial commodity exports.",
    img: "https://images.unsplash.com/photo-1501700489910-fb21dca92147?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Bulk Material Handling",
    desc: "Specialized equipment for the loading and unloading of loose industrial scrap and raw commodities.",
    img: "https://images.unsplash.com/photo-1473445717391-4950bc44037a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Customs Brokerage",
    desc: "In-house experts managing the flow of documentation at border crossings and international ports.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Inventory Tracking",
    desc: "Real-time visibility into your cargo's status through our integrated logistics management system.",
    img: "https://images.unsplash.com/photo-1512403754473-27835f7b9981?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Just-In-Time Supply",
    desc: "Coordinating deliveries to align perfectly with your production schedule, minimizing on-site storage needs.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
  }
];

const PramukhLogistics = () => {
  return (
    <>
      <SEO title="Logistics Services | Pramukh Import Export" />
      <main className="bg-off-white pt-24 pb-32">
        {/* HERO */}
        <section className="px-6 py-20 bg-gold text-navy relative overflow-hidden">
           <div className="max-w-7xl mx-auto relative z-10">
              <Link to="/pramukh/services" className="flex items-center gap-2 text-navy/60 text-xs font-black uppercase tracking-widest mb-10 hover:gap-4 transition-all w-fit">
                <ArrowLeft size={16} /> All Services
              </Link>
              <h1 className="text-5xl md:text-8xl font-heading font-black uppercase italic mb-8 leading-none">
                Industrial <br/><span className="text-white">Logistics.</span>
              </h1>
              <p className="text-xl md:text-2xl text-navy/60 max-w-2xl font-bold leading-relaxed">
                Seamless movement of heavy freight. Our logistics network is built for efficiency, scale, and reliability.
              </p>
           </div>
           <div className="absolute bottom-0 right-0 w-1/2 h-full bg-navy/5 -skew-y-6 translate-y-1/4" />
        </section>

        {/* DETAILS SECTION */}
        <section className="py-24 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                 <div className="space-y-12">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="p-8 bg-white rounded-3xl shadow-xl border border-navy/5">
                       <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Reliable Transport</span>
                       <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic mb-8">Freight in <br/><span className="text-gold-dark">Motion.</span></h2>
                       <p className="text-lg text-navy/60 font-bold leading-relaxed">
                         Logistics is the backbone of industrial trade. Pramukh Import Export operates a robust logistics network that specializes in the transport of heavy scrap and industrial equipment.
                       </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Truck className="text-gold" size={20}/> Fleet
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Managed transport fleet equipped for heavy-duty industrial hauling and container transport.</p>
                       </motion.div>
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Clock className="text-gold" size={20}/> Timelines
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Strict adherence to delivery windows, critical for maintaining factory production cycles.</p>
                       </motion.div>
                    </div>
                 </div>

                 <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-navy p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                    <h3 className="text-3xl font-heading font-black uppercase mb-10 italic">Logistics <span className="text-gold">Operations.</span></h3>
                    <ul className="space-y-8">
                       {[
                         "Multimodal transport (Road, Sea, Rail).",
                         "Real-time shipment tracking & reporting.",
                         "Specialized loading for bulk industrial scrap.",
                         "Last-mile delivery to remote industrial sites.",
                         "Warehousing and consolidation services."
                       ].map((item, i) => (
                         <li key={i} className="flex gap-4">
                            <Package className="text-gold shrink-0" />
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
                 <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Visual Operations</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic">Fleet & <br/><span className="text-gold-dark">Transit.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {logisticsItems.map((item, i) => (
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
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-8 italic leading-tight">Move Your <br/><span className="text-gold">Freight Today.</span></h2>
              <p className="text-lg text-white/40 mb-10 font-bold">Get a customized logistics plan for your business.</p>
              <Link to="/pramukh/contact" className="btn-gold px-10 py-5 text-sm font-black uppercase tracking-widest inline-flex items-center gap-4">
                 Request Quote <ArrowRight size={20} />
              </Link>
           </motion.div>
        </section>
      </main>
    </>
  );
};

export default PramukhLogistics;
