import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import FooterCTA from '../components/FooterCTA';
import BrandScroll from '../components/BrandScroll';
import { ArrowRight } from 'lucide-react';

// Highly Reliable Industrial Video Paths
import video1 from '../videos/1.webm';
import video2 from '../videos/2.webm';
import video3 from '../videos/3.webm';

const videos = [video1, video2, video3];

const iconicCompanies = [
  {
    id: "01",
    name: "Pramukh Import Export",
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
               className="absolute inset-0 w-full h-full object-cover"
             >
               <source src={videos[currentVideoIndex]} type="video/webm" />
             </video>
           </div>
           <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10" />
           
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

        {/* CENTERED INTRO TITLE */}
        <section className="py-24 md:py-48 px-6 bg-white">
           <div className="max-w-7xl mx-auto text-center">
              <motion.span 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="text-navy/30 font-black uppercase tracking-[0.6em] text-[10px] mb-6 block"
              >
                 The Group Ecosystem
              </motion.span>
              <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="text-4xl md:text-8xl font-heading font-black text-navy uppercase italic leading-none"
              >
                 Our Companies.
              </motion.h2>
              <div className="w-20 h-1 bg-black mx-auto mt-12" />
           </div>
        </section>

        {/* INDIVIDUAL COMPANY PROFILES */}
        <section className="pb-40 space-y-48 md:space-y-72">
           {iconicCompanies.map((company, idx) => (
              <div key={idx} className="relative w-full px-6 md:px-12">
                 <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
                    
                    {/* Main Company Entry - Hover Reveal */}
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative h-[60vh] md:h-[80vh] overflow-hidden group cursor-pointer bg-navy rounded-none"
                    >
                       <img 
                         src={company.mainImg} 
                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-105" 
                         alt={company.name} 
                         loading="lazy"
                       />
                       
                       <div className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center p-8 md:p-24">
                          <div className="max-w-3xl transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                             <div className="flex items-center gap-8 mb-8">
                                <span className="text-white font-black text-5xl md:text-8xl italic leading-none">{company.id}</span>
                                <div className="h-[1px] w-24 bg-white/40" />
                                <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white/50">{company.sector}</span>
                             </div>
                             <h3 className="text-4xl md:text-7xl font-heading font-black text-white uppercase italic mb-8 leading-tight">
                                {company.name}
                             </h3>
                             <p className="text-white/70 text-lg md:text-2xl font-bold leading-relaxed">
                                {company.description}
                             </p>
                          </div>
                       </div>
                       
                       <div className="absolute bottom-10 right-10 text-white font-black uppercase text-[10px] tracking-[0.4em] opacity-30 group-hover:opacity-0 transition-opacity">
                          Reveal Details [Hover]
                       </div>
                    </motion.div>

                    {/* Detailed Service Gallery - With Numbering */}
                    <div className="space-y-12">
                       <div className="flex items-center gap-6">
                          <div className="h-[1px] w-16 bg-navy/10" />
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/30">Sector Capabilities & Operations</span>
                       </div>
                       
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
                          {company.gallery.map((img, i) => (
                             <motion.div 
                               key={i}
                               initial={{ opacity: 0, y: 30 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               viewport={{ once: true }}
                               transition={{ delay: i * 0.1 }}
                               className="relative group/item"
                             >
                                <div className="mb-4 flex items-center gap-3">
                                   <span className="text-navy/40 font-black text-xs">0{i+1}</span>
                                   <div className="h-[1px] flex-grow bg-navy/5" />
                                </div>
                                <div className="aspect-square bg-gray-50 overflow-hidden shadow-2xl rounded-none relative">
                                   <motion.img 
                                     whileHover={{ scale: 1.1 }}
                                     src={img} 
                                     className="w-full h-full object-cover" 
                                     alt={`${company.name} operational visual`} 
                                     loading="lazy"
                                   />
                                </div>
                             </motion.div>
                          ))}
                       </div>
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
