import React, { useState, useRef } from 'react';
import SEO from '../components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import FooterCTA from '../components/FooterCTA';
import BrandScroll from '../components/BrandScroll';
import { ArrowRight } from 'lucide-react';
import { CompanyNameTicker, ParallaxHorizontal } from '../components/ParallaxShowcase';

// Highly Reliable Industrial Video Paths
import video1 from '../videos/1.webm';
import video2 from '../videos/2.webm';
import video3 from '../videos/3.webm';

const videos = [video1, video2, video3];

const iconicCompanies = [
  {
    id: "01",
    name: "Pramukh Import Export",
    path: "/companies/import-export",
    sector: "Metal Scrap & International Trading",
    description: "Specializing in global procurement and regional distribution of high-grade ferrous and non-ferrous scrap for industrial foundries.",
    mainImg: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1536411396596-afed9fa3c1b2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1535090467336-9501f96eef89?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "02",
    name: "Shreeji Infra",
    path: "/companies/shreeji-infra",
    sector: "Industrial Infrastructure & Logistics",
    description: "Developing high-impact industrial ecosystems and workspace solutions, including Mahantam Industrial Park.",
    mainImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "03",
    name: "Pramukh Techventures",
    path: "/companies/tech-venture",
    sector: "Consumer Electronics & Technology",
    description: "Operating a robust retail and distribution network for smart technology and high-quality home appliances.",
    mainImg: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1526733158272-a1b42122b041?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "04",
    name: "Bricks Trading Division",
    path: "/companies/brics",
    sector: "Construction Materials & Supply",
    description: "Delivering the literal building blocks of the future with high-grade bricks and raw materials for large-scale infrastructure and residential development.",
    mainImg: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

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

const Companies = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <>
      <SEO title="Our Companies | Dhyanora Group" description="Explore the diverse companies and industrial sectors within Dhyanora Group." />
      <main className="bg-white">
        
        {/* VIDEO HERO SECTION */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy">
           <div className="absolute inset-0 w-full h-full overflow-hidden">
             <video
               key={videos[currentVideoIndex]}
               autoPlay
               muted
               playsInline
               onEnded={handleVideoEnd}
               className="absolute inset-0 w-full h-full object-cover opacity-60"
             >
               <source src={videos[currentVideoIndex]} type="video/webm" />
             </video>
           </div>
           <div className="absolute inset-0 bg-black/40 z-10" />
           
           <div className="relative z-20 text-center px-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-9xl font-heading font-black text-white uppercase italic leading-none"
              >
                Our Iconic <br /> Companies.
              </motion.h1>
           </div>
        </section>

        <CompanyNameTicker names={["Dhyanora Group", "Industrial Excellence", "Strategic Portfolio", "Global Vision"]} />

        {/* CENTERED INTRO TITLE */}
        <section className="py-24 md:py-48 px-6 bg-white border-b border-navy/5">
           <div className="max-w-4xl mx-auto text-center space-y-12">
              <ScrollRevealText>We are a diversified collective of focused businesses.</ScrollRevealText>
              <ScrollRevealText>Every entity within the Dhyanora Group operates with independence but shares a unified commitment to quality and integrity.</ScrollRevealText>
           </div>
        </section>

        {/* INDIVIDUAL COMPANY PROFILES */}
        <section className="py-24 md:py-48 space-y-48 md:space-y-72 bg-off-white">
           {iconicCompanies.map((company, idx) => (
              <div key={idx} className="relative w-full px-6">
                 <div className="max-w-7xl mx-auto space-y-20">
                    
                    {/* Linkable Card */}
                    <Link to={company.path}>
                       <motion.div 
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="relative h-[50vh] md:h-[70vh] overflow-hidden group cursor-pointer bg-navy rounded-none shadow-2xl"
                       >
                          <img 
                            src={company.mainImg} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80" 
                            alt={company.name} 
                            loading="lazy"
                          />
                          
                          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center p-8 md:p-24">
                             <div className="max-w-3xl transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                <div className="flex items-center gap-8 mb-8">
                                   <span className="text-white font-black text-5xl md:text-7xl italic leading-none">{company.id}</span>
                                   <div className="h-[1px] w-16 bg-white/30" />
                                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">{company.sector}</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-heading font-black text-white uppercase italic mb-8 leading-tight">
                                   {company.name}
                                </h3>
                                <p className="text-white/70 text-sm md:text-lg font-bold leading-relaxed mb-10 max-w-xl">
                                   {company.description}
                                </p>
                               <div className="flex items-center gap-4 text-gold font-black uppercase tracking-widest text-xs">
                                  Explore Division <ArrowRight size={18} />
                               </div>
                             </div>
                          </div>
                          
                          <div className="absolute bottom-8 left-8">
                             <h4 className="text-white font-black uppercase italic text-3xl md:text-5xl drop-shadow-2xl">{company.name}</h4>
                          </div>
                       </motion.div>
                    </Link>

                    {/* Capability Preview */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                       {company.gallery.map((img, i) => (
                          <div key={i} className="aspect-square bg-white border border-navy/5 overflow-hidden group relative">
                             <img 
                               src={img} 
                               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                               alt="Capability" 
                             />
                             <div className="absolute top-4 left-4 text-[10px] font-black text-navy opacity-0 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                          </div>
                       ))}
                    </div>

                 </div>
              </div>
           ))}
        </section>

        <BrandScroll />
        <FooterCTA />

      </main>
    </>
  );
};

export default Companies;
