import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Factory, MapPin, ShieldCheck, Zap, Warehouse, Building2, Ruler } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';
import BrandScroll from '../components/BrandScroll';
import { ParallaxHorizontal, CompanyNameTicker } from '../components/ParallaxShowcase';

// Videos
import video2 from '../videos/2.webm';

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

const ShreejiInfra = () => {
  const portfolioItems = [
    { name: "Industrial Park A", category: "Infrastructure", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" },
    { name: "Logistics Hub", category: "Warehousing", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
    { name: "Custom Sheds", category: "Construction", img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" },
    { name: "Utility Grid", category: "Power & Water", img: "https://images.unsplash.com/photo-1503387762-592be5a525b7?auto=format&fit=crop&q=80&w=800" },
    { name: "Road Network", category: "Civic Infra", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" },
    { name: "Storage Facility", category: "Logistics", img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <>
      <SEO title="Shreeji Infra | Mahantam Industrial Park" description="Premium industrial sheds and workspace solutions in Ahmedabad, Gujarat." />
      <main className="bg-white">
        
        {/* HERO */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy">
           <div className="absolute inset-0 w-full h-full overflow-hidden">
             <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
               <source src={video2} type="video/webm" />
             </video>
           </div>
           <div className="absolute inset-0 bg-black/40 z-10" />
           <div className="relative z-20 text-center px-6">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-white/60 font-black uppercase tracking-[0.6em] text-[10px] md:text-xs mb-8 block">Industrial Excellence / Infrastructure</motion.span>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-5xl md:text-9xl font-heading font-black text-white uppercase italic leading-none">Mahantam <br /> <span className="text-white">Industrial Park.</span></motion.h1>
           </div>
        </section>

        <CompanyNameTicker names={["Shreeji Infra", "Mahantam Industrial Park", "Infrastructure Excellence", "Modern Workspace"]} />

        {/* INFO GRID */}
        <section className="py-24 md:py-48 px-6">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-12">
                 <ScrollRevealText>We develop the spaces where modern industry breathes and grows.</ScrollRevealText>
                 <ScrollRevealText>Mahantam Industrial Park is our flagship development, offering professionally managed ecosystems for manufacturers.</ScrollRevealText>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { label: "01 / Strategic Hub", desc: "Located near Ahmedabad's major transport corridors for easy logistics." },
                   { label: "02 / Scalable Sheds", desc: "Custom-built industrial units designed for diverse manufacturing needs." },
                   { label: "03 / Utility Support", desc: "Integrated power, water, and waste management for 24/7 operations." },
                   { label: "04 / Legal Assurance", desc: "Transparent documentation and clear titles for long-term security." }
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
              <span className="text-navy/20 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">The Development</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase italic">Project <br /> <span className="text-navy">Highlights.</span></h2>
           </div>
           <ParallaxHorizontal items={portfolioItems} />
        </section>

        {/* WORK GRID */}
        <section className="py-32 md:py-48 px-6 bg-off-white">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-7xl font-heading font-black text-navy uppercase italic">Our <span className="text-navy">Solutions.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                 {[
                   { icon: <Factory />, title: "Industrial Sheds", desc: "Built for strength and functional efficiency." },
                   { icon: <Warehouse />, title: "Warehousing", desc: "Large-span spaces for storage and logistics." },
                   { icon: <Zap />, title: "Power & Utility", desc: "High-tension lines and dedicated water supply." },
                   { icon: <MapPin />, title: "Site Location", desc: "Optimal positioning for regional transport access." },
                   { icon: <Building2 />, title: "Commercial Sale", desc: "Flexible structures for long-term industrial investment." },
                   { icon: <Ruler />, title: "Civil Support", desc: "Precision engineering and construction management." }
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

export default ShreejiInfra;
