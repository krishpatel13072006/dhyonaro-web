import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Layers, ShieldCheck, Truck, Factory, Building2, Ruler, Hammer } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';
import BrandScroll from '../components/BrandScroll';
import { ParallaxVertical, CompanyNameTicker } from '../components/ParallaxShowcase';

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

const Brics = () => {
  const projectItems = [
    { name: "Residential Complex", img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800" },
    { name: "Commercial Hub", img: "https://images.unsplash.com/photo-1590069230005-db39373927bf?auto=format&fit=crop&q=80&w=800" },
    { name: "Industrial Site", img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800" },
    { name: "Civic Infra", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800" },
    { name: "Raw Logistics", img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" },
    { name: "Material Hub", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" },
    { name: "New Township", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" },
    { name: "Urban Build", img: "https://images.unsplash.com/photo-1503387762-592be5a525b7?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <>
      <SEO title="Bricks Trading Division | Dhyanora Group" description="Providing high-grade bricks and construction materials for Gujarat's infrastructure development." />
      <main className="bg-white">
        
        {/* HERO */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy">
           <div className="absolute inset-0 w-full h-full overflow-hidden">
             <motion.img 
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1600" 
               className="absolute inset-0 w-full h-full object-cover opacity-50"
             />
           </div>
           <div className="absolute inset-0 bg-black/40 z-10" />
           <div className="relative z-20 text-center px-6">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-white/60 font-black uppercase tracking-[0.6em] text-[10px] md:text-xs mb-8 block">Construction Materials / Bricks Division</motion.span>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-5xl md:text-9xl font-heading font-black text-white uppercase italic leading-none">Bricks <br /> <span className="text-white">Trading.</span></motion.h1>
           </div>
        </section>

        <CompanyNameTicker names={["Bricks Trading Division", "Construction Materials", "Building Foundations", "High-Grade Bricks"]} />

        {/* INFO GRID */}
        <section className="py-24 md:py-48 px-6">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-12">
                 <ScrollRevealText>We supply the literal building blocks of Gujarat's rising infrastructure.</ScrollRevealText>
                 <ScrollRevealText>By combining bulk inventory capacity with precise material grading, we ensure structural integrity for every developer.</ScrollRevealText>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { label: "01 / Bulk Supply", desc: "Handling massive construction volume for townships and industrial zones." },
                   { label: "02 / Material Grading", desc: "Strict quality checks to ensure load-bearing strength and durability." },
                   { label: "03 / On-Site Logistics", desc: "Reliable transport fleet ensuring materials reach the site exactly when needed." },
                   { label: "04 / Expert Network", desc: "Direct connections with builders, contractors, and raw material sources." }
                 ].map((item, i) => (
                    <div key={i} className="p-10 bg-off-white border border-navy/5 rounded-none hover:bg-black group transition-all duration-500">
                       <h4 className="text-navy group-hover:text-gold font-black uppercase tracking-widest text-[10px] mb-6 opacity-40 group-hover:opacity-100 transition-all">{item.label}</h4>
                       <p className="text-sm text-navy/40 group-hover:text-white/40 font-bold leading-relaxed transition-all">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* PARALLAX VERTICAL SHOWCASE */}
        <section className="py-24 bg-white overflow-hidden">
           <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
              <span className="text-navy/20 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Construction Landscape</span>
              <h2 className="text-4xl md:text-8xl font-heading font-black text-navy uppercase italic">Project <br /> <span className="text-navy">Foundations.</span></h2>
           </div>
           <ParallaxVertical items={projectItems} />
        </section>

        {/* WORK GRID */}
        <section className="py-32 md:py-48 px-6 bg-off-white">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                 {[
                   { icon: <Layers />, title: "First Class", desc: "High-density load-bearing bricks." },
                   { icon: <Building2 />, title: "AAC Blocks", desc: "Lightweight thermal insulation." },
                   { icon: <Factory />, title: "Raw Aggregates", desc: "Sand, cement, and grit supply." },
                   { icon: <Truck />, title: "Delivery", desc: "On-site timely material drop-off." },
                   { icon: <ShieldCheck />, title: "Certified", desc: "Quality-verified building blocks." },
                   { icon: <Ruler />, title: "Precision", desc: "Uniform dimensions for perfect masonry." },
                   { icon: <Hammer />, title: "Contractor Support", desc: "Bulk sourcing for major builders." },
                   { icon: <Box />, title: "Warehousing", desc: "Stockpiled inventory for immediate dispatch." }
                 ].map((offering, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-12 bg-white border border-navy/5 hover:bg-navy group transition-all duration-500">
                       <div className="w-10 h-10 bg-navy flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-navy transition-all">{offering.icon}</div>
                       <h3 className="text-lg font-heading font-black mb-2 uppercase text-navy group-hover:text-white transition-colors">{offering.title}</h3>
                       <p className="text-[10px] text-navy/40 leading-relaxed font-bold group-hover:text-white/40 transition-colors">{offering.desc}</p>
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

export default Brics;
