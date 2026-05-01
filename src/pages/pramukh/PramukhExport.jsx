import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Ship, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const exportItems = [
  {
    title: "Containerized Shipping",
    desc: "Efficient loading and coordination of standard 20ft and 40ft containers for international sea freight.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Port Logistics",
    desc: "Strategic coordination with major global ports ensuring smooth transition from land to sea cargo systems.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Customs Compliance",
    desc: "Expert handling of complex customs documentation to ensure fast clearance and zero legal delays.",
    img: "https://images.unsplash.com/photo-1494412574743-0194849a6051?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Global Supply Chain",
    desc: "Connecting manufacturers in India to distributors and industrial buyers across the globe.",
    img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Documentation Desk",
    desc: "Full-service management of Letters of Credit, Bills of Lading, and Certificates of Origin.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "International Air Freight",
    desc: "Expedited shipping solutions for high-value or time-sensitive industrial components and electronics.",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Hazardous Cargo",
    desc: "Specialized handling and transport of hazardous materials in full compliance with IMDG regulations.",
    img: "https://images.unsplash.com/photo-1512403754473-27835f7b9981?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Cargo Tracking",
    desc: "Real-time visibility into the movement of your goods across international waters and borders.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Trade Finance",
    desc: "Financial coordination and risk management solutions to facilitate large-scale international transactions.",
    img: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Consolidated Shipping",
    desc: "LCL (Less than Container Load) solutions for smaller businesses looking to expand globally.",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536ad31?auto=format&fit=crop&q=80&w=1200"
  }
];

const PramukhExport = () => {
  return (
    <>
      <SEO title="Export Services | Pramukh Import Export" />
      <main className="bg-off-white pt-24 pb-32">
        {/* HERO */}
        <section className="px-6 py-20 bg-navy text-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto relative z-10">
              <Link to="/pramukh/services" className="flex items-center gap-2 text-gold text-xs font-black uppercase tracking-widest mb-10 hover:gap-4 transition-all w-fit">
                <ArrowLeft size={16} /> All Services
              </Link>
              <h1 className="text-5xl md:text-8xl font-heading font-black uppercase italic mb-8 leading-none">
                Export <br/><span className="text-gold">Solutions.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-bold leading-relaxed">
                Expanding your reach to global markets. We manage the complexities of international trade and compliance.
              </p>
           </div>
           <div className="absolute top-1/2 right-0 w-1/4 h-1/2 bg-gold/10 rounded-full blur-[100px]" />
        </section>

        {/* DETAILS SECTION */}
        <section className="py-24 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                 <div className="space-y-12">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="p-8 bg-white rounded-3xl shadow-xl border border-navy/5">
                       <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Global Connectivity</span>
                       <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic mb-8">Trade Without <br/><span className="text-gold-dark">Borders.</span></h2>
                       <p className="text-lg text-navy/60 font-bold leading-relaxed">
                         The global market offers immense opportunities, but it also brings regulatory challenges. Pramukh Import Export provides end-to-end export services.
                       </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <FileText className="text-gold" size={20}/> Compliance
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Expert handling of export licenses, certifications, and international trade documents.</p>
                       </motion.div>
                       <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8 bg-white rounded-3xl border border-navy/5 shadow-xl">
                          <h4 className="text-lg font-heading font-black text-navy uppercase mb-4 flex items-center gap-2">
                             <Globe className="text-gold" size={20}/> Reach
                          </h4>
                          <p className="text-sm text-navy/50 font-bold">Strategic partnerships in major global ports across Asia, Europe, and the Middle East.</p>
                       </motion.div>
                    </div>
                 </div>

                 <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-navy p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                    <h3 className="text-3xl font-heading font-black uppercase mb-10 italic">Export <span className="text-gold">Capability.</span></h3>
                    <ul className="space-y-8">
                       {[
                         "International market research and buyer matching.",
                         "In-depth knowledge of export-import policies.",
                         "Hazardous material handling & certifications.",
                         "Letter of Credit (LC) and banking coordination.",
                         "International insurance and risk management."
                       ].map((item, i) => (
                         <li key={i} className="flex gap-4">
                            <Ship className="text-gold shrink-0" />
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
                 <span className="text-navy font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Visual Scope</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic">Global <span className="text-gold-dark">Footprint.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                 {exportItems.map((item, i) => (
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
              <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase mb-8 italic leading-tight">Scale Your <br/><span className="text-gold-dark">Global Presence.</span></h2>
              <p className="text-lg text-navy/40 mb-10 font-bold">Partner with us for a seamless export experience.</p>
              <Link to="/pramukh/contact" className="btn-primary px-10 py-5 text-sm font-black uppercase tracking-widest inline-flex items-center gap-4">
                 Start Exporting <ArrowRight size={20} />
              </Link>
           </motion.div>
        </section>
      </main>
    </>
  );
};

export default PramukhExport;
