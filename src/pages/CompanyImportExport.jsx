import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Ship, ShieldCheck, Globe, Factory, Anchor, Package, Truck } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';
import BrandScroll from '../components/BrandScroll';
import { ParallaxHorizontal, CompanyNameTicker } from '../components/ParallaxShowcase';

// Videos
import video1 from '../videos/1.webm';

const ScrollRevealText = ({ children, size = "text-2xl md:text-5xl" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(26, 35, 66, 0.1)", "rgba(26, 35, 66, 1)"]
  );

  return (
    <motion.div ref={ref} style={{ color }} className={`${size} font-heading font-black uppercase italic leading-[1.2] transition-colors duration-500`}>
      {children}
    </motion.div>
  );
};

const ImportExport = () => {
  const portfolioItems = [
    { name: "Bulk Metal Trading", category: "Ferrous Scrap", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800" },
    { name: "Global Port Ops", category: "Logistics", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" },
    { name: "Raw Material Hub", category: "Warehousing", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
    { name: "Foundry Supply", category: "Procurement", img: "https://images.unsplash.com/photo-1558346489-19413612118b?auto=format&fit=crop&q=80&w=800" },
    { name: "Industrial Export", category: "Maritime", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
    { name: "Aluminium Scrap", category: "Non-Ferrous", img: "https://images.unsplash.com/photo-1536411396596-afed9fa3c1b2?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <>
      <SEO title="Pramukh Import Export | Metal Scrap Trading" description="Gujarat's reliable partner for metal scrap procurement, trading, and export services." />
      <main className="bg-white">
        
        {/* HERO */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy">
           <div className="absolute inset-0 w-full h-full overflow-hidden">
             <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
               <source src={video1} type="video/webm" />
             </video>
           </div>
           <div className="absolute inset-0 bg-black/40 z-10" />
           <div className="relative z-20 text-center px-6">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-white/60 font-black uppercase tracking-[0.6em] text-[10px] md:text-xs mb-8 block">Global Trade / Metal Solutions</motion.span>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-5xl md:text-9xl font-heading font-black text-white uppercase italic leading-none">Pramukh <br /> <span className="text-white">Import Export.</span></motion.h1>
           </div>
        </section>

        <CompanyNameTicker names={["Pramukh Import Export", "Metal Scrap Trading", "Global Logistics", "Industrial Procurement"]} />

        {/* INFO GRID */}
        <section className="py-24 md:py-48 px-6">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-12">
                 <ScrollRevealText>We are the bridge between global scrap sources and local industrial foundries.</ScrollRevealText>
                 <ScrollRevealText>Pramukh Import Export ensures that critical raw materials reach India's industrial backbone with unmatched reliability.</ScrollRevealText>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { label: "01 / Procurement", desc: "Sourcing high-grade ferrous scrap from verified global suppliers." },
                   { label: "02 / Quality Control", desc: "Strict grading and material verification before every dispatch." },
                   { label: "03 / Supply Chain", desc: "Managing end-to-end maritime and road logistics for bulk trade." },
                   { label: "04 / Distribution", desc: "Ready inventory for the diverse foundry network of Gujarat." }
                 ].map((item, i) => (
                    <div key={i} className="p-10 bg-off-white border border-navy/5 rounded-none hover:bg-black group transition-all duration-500">
                       <h4 className="text-navy group-hover:text-gold font-black uppercase tracking-widest text-[10px] mb-6 opacity-40 group-hover:opacity-100 transition-all">{item.label}</h4>
                       <p className="text-sm text-navy/40 group-hover:text-white/40 font-bold leading-relaxed transition-all">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* PARALLAX HORIZONTAL SHOWCASE */}
        <section className="py-24 bg-white overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 mb-16">
              <span className="text-navy/20 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">The Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase italic">Global <br /> <span className="text-navy">Operations.</span></h2>
           </div>
           <ParallaxHorizontal items={portfolioItems} />
        </section>

        {/* WORK GRID */}
        <section className="py-32 md:py-48 px-6 bg-off-white">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-7xl font-heading font-black text-navy uppercase italic">Our <span className="text-navy">Capabilities.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                 {[
                   { icon: <Globe />, title: "International Sourcing", desc: "Connecting Gujarat with the world's leading scrap markets." },
                   { icon: <Anchor />, title: "Port Handling", desc: "Expert management of bulk material arrival and customs." },
                   { icon: <ShieldCheck />, title: "Quality Assurance", desc: "Industrial grade material verification and certification." },
                   { icon: <Factory />, title: "Foundry Direct", desc: "Direct supply line to smelting and casting units." },
                   { icon: <Package />, title: "Bulk Packaging", desc: "Secured material handling for safe long-distance transport." },
                   { icon: <Truck />, title: "Road Logistics", desc: "Efficient last-mile delivery to industrial doorsteps." }
                 ].map((offering, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-16 bg-white border border-navy/5 hover:bg-navy group transition-all duration-500">
                       <div className="w-12 h-12 bg-navy flex items-center justify-center text-white mb-8 group-hover:bg-white group-hover:text-navy transition-all">{offering.icon}</div>
                       <h3 className="text-xl font-heading font-black mb-4 uppercase text-navy group-hover:text-white transition-colors">{offering.title}</h3>
                       <p className="text-xs text-navy/40 leading-relaxed font-bold group-hover:text-white/40 transition-colors">{offering.desc}</p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        <BrandScroll />
        <FooterCTA />

      </main>
    </>
  );
};

export default ImportExport;
