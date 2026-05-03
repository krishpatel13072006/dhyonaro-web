import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingCart, Tv, Headphones, Smartphone, ShieldCheck, Tag, Headset, Star } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';
import BrandScroll from '../components/BrandScroll';
import { ParallaxVertical, CompanyNameTicker } from '../components/ParallaxShowcase';

// Videos
import video3 from '../videos/3.webm';

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

const TechVenture = () => {
  const customerItems = [
    { name: "LG Electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800" },
    { name: "Samsung Home", img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800" },
    { name: "Sony Audio", img: "https://images.unsplash.com/photo-1526733158272-a1b42122b041?auto=format&fit=crop&q=80&w=800" },
    { name: "Apple Hub", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { name: "HP Computing", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
    { name: "Whirlpool", img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800" },
    { name: "Dell Tech", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800" },
    { name: "Smart Living", img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <>
      <SEO title="Pramukh Techventures | Premium Electronics Retail" description="Your trusted destination for quality electronics in Gujarat." />
      <main className="bg-white">
        
        {/* HERO */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy">
           <div className="absolute inset-0 w-full h-full overflow-hidden">
             <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
               <source src={video3} type="video/webm" />
             </video>
           </div>
           <div className="absolute inset-0 bg-black/40 z-10" />
           <div className="relative z-20 text-center px-6">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-white/60 font-black uppercase tracking-[0.6em] text-[10px] md:text-xs mb-8 block">Consumer Tech / Premium Retail</motion.span>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-5xl md:text-9xl font-heading font-black text-white uppercase italic leading-none">Pramukh <br /> <span className="text-white">Techventures.</span></motion.h1>
           </div>
        </section>

        <CompanyNameTicker names={["Pramukh Techventures", "Consumer Electronics", "Smart Technology", "Home Appliances"]} />

        {/* INFO GRID */}
        <section className="py-24 md:py-48 px-6">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-12">
                 <ScrollRevealText>We bring the world's most reliable technology to the households of Gujarat.</ScrollRevealText>
                 <ScrollRevealText>Our retail philosophy is built on three pillars: genuine products, honest pricing, and expert guidance.</ScrollRevealText>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { label: "01 / Authorized Retail", desc: "Partnering with top global electronics brands for 100% genuine inventory." },
                   { label: "02 / Price Transparency", desc: "Honest, market-competitive pricing with no hidden costs." },
                   { label: "03 / Expert Guidance", desc: "A knowledgeable team that helps you choose technology based on actual needs." },
                   { label: "04 / After-Sales", desc: "Dedicated support and maintenance for a worry-free ownership experience." }
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
              <span className="text-navy/20 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Brand Ecosystem</span>
              <h2 className="text-4xl md:text-8xl font-heading font-black text-navy uppercase italic">Our <br /> <span className="text-navy">Partners.</span></h2>
           </div>
           <ParallaxVertical items={customerItems} />
        </section>

        {/* WORK GRID */}
        <section className="py-32 md:py-48 px-6 bg-off-white">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                 {[
                   { icon: <Tv />, title: "Smart TV", desc: "Next-gen audio visual experiences." },
                   { icon: <ShoppingCart />, title: "Appliances", desc: "Modern refrigerators and washing units." },
                   { icon: <Headphones />, title: "Audio Hub", desc: "Hi-Fi systems and professional speakers." },
                   { icon: <Smartphone />, title: "Mobile", desc: "Latest smartphones and tablets." },
                   { icon: <ShieldCheck />, title: "Warranty", desc: "Full manufacturer-backed protection." },
                   { icon: <Tag />, title: "Best Deals", desc: "Honest pricing on every single item." },
                   { title: "Support", icon: <Headset />, desc: "Expert troubleshooting and setup." },
                   { icon: <Star />, title: "Premium", desc: "Curated collection of flagship tech." }
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

export default TechVenture;
