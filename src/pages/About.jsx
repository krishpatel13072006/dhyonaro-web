import React, { useRef, useState } from 'react';
import SEO from '../components/SEO';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Quote, Building2 } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';
import BrandScroll from '../components/BrandScroll';

const ScrollRevealText = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 50%"]
  });
  
  // Transition to Fade Dark Black
  const color = useTransform(scrollYProgress, [0, 1], ["#94a3b8", "#000000"]); 
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.span 
      ref={ref} 
      style={{ color, opacity }}
      className="inline"
    >
      {children}
    </motion.span>
  );
};

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeProwess, setActiveProwess] = useState(0);

  const carouselItems = [
    { title: "Metal Scrap Solutions", category: "Pramukh Import Export", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800" },
    { title: "Industrial Infrastructure", category: "Shreeji Infra", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" },
    { title: "Consumer Electronics", category: "Pramukh Techventures", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800" },
    { title: "Raw Material Logistics", category: "Dhyanora Supply", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
    { title: "Renewable Energy", category: "Pramukh Solar", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800" },
    { title: "Global Port Operations", category: "Import Export", img: "https://images.unsplash.com/photo-1577705998148-ebbd773d01f7?auto=format&fit=crop&q=80&w=800" }
  ];

  const prowessData = [
    { 
      title: "Metal Scrap Procurement & Trading", 
      img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200",
      desc: "Providing high-grade ferrous and non-ferrous scrap solutions for Gujarat's leading foundries."
    },
    { 
      title: "Consumer Electronics & Retail", 
      img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1200",
      desc: "Delivering the latest technology and home appliances through our trusted Pramukh Techventures network."
    },
    { 
      title: "Industrial Infrastructure Solutions", 
      img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200",
      desc: "Developing premium industrial parks and shedding solutions like Mahantam Industrial Park."
    },
    { 
      title: "Construction Materials Trading", 
      img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1200",
      desc: "Sourcing and supplying quality bricks and building materials for large-scale construction projects."
    }
  ];

  const nextSlide = () => setActiveSlide(prev => (prev + 1) % (carouselItems.length - 2));
  const prevSlide = () => setActiveSlide(prev => (prev === 0 ? carouselItems.length - 3 : prev - 1));

  return (
    <>
      <SEO title="About Us | Dhyanora Group" description="Sustainable growth and innovative industrial designs." />
      <main className="bg-white">

        {/* 1. HERO SECTION - SHARP CORNERS */}
        <section className="relative h-[100vh] w-full overflow-hidden flex items-end pb-32 px-6">
           <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover" 
                alt="Dhyanora Hero" 
              />
              <div className="absolute inset-0 bg-black/40" />
           </div>
           
           <div className="relative z-10 max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                 <h1 className="text-5xl md:text-8xl font-heading font-black text-white uppercase italic leading-[0.9] mb-8">
                    Building the <br /> Future of Gujarat
                 </h1>
                 <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between text-white/80">
                    <p className="max-w-md font-bold text-sm uppercase tracking-widest">Building excellence through disciplined businesses. One legacy at a time.</p>
                    <div className="flex items-center gap-4">
                       <span className="text-[10px] font-black uppercase">Learn More</span>
                       <div className="w-10 h-10 border border-white/30 rounded-none flex items-center justify-center">
                          <ArrowRight size={16} />
                       </div>
                    </div>
                 </div>
              </motion.div>
           </div>
        </section>

        {/* 2. INTRO SECTION */}
        <section className="py-24 md:py-40 px-6">
           <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-3xl font-heading font-black uppercase italic leading-relaxed text-center">
                 <ScrollRevealText>At Dhyanora, we believe that discipline and focus are the true foundations of growth. </ScrollRevealText>
                 <ScrollRevealText>Our group operates with the vision to bring industrial excellence and quality infrastructure to every corner of Gujarat, creating outcomes that last.</ScrollRevealText>
              </p>
           </div>
        </section>

        {/* 3. SERVICES SECTION - SHARP CORNERS */}
        <section className="py-24 md:py-40 px-6 bg-white">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="rounded-none overflow-hidden shadow-2xl relative h-[400px] md:h-[600px]">
                 <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeProwess}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={prowessData[activeProwess].img} 
                      className="absolute inset-0 w-full h-full object-cover" 
                      alt="Our Prowess" 
                    />
                 </AnimatePresence>
              </div>
              <div className="space-y-12">
                 <span className="text-navy font-black uppercase tracking-[0.4em] text-[10px] opacity-40">Our Prowess</span>
                 <div className="space-y-4">
                    {prowessData.map((item, i) => (
                      <div 
                        key={i} 
                        onClick={() => setActiveProwess(i)}
                        className={`flex flex-col py-6 border-b border-navy/10 group cursor-pointer transition-all duration-500 ${activeProwess === i ? 'pl-8' : 'pl-0'}`}
                      >
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-8">
                               <span className={`font-black text-xs transition-colors ${activeProwess === i ? 'text-black' : 'text-navy/20'}`}>0{i+1}</span>
                               <span className={`text-lg md:text-2xl font-heading font-black uppercase italic transition-all ${activeProwess === i ? 'text-black' : 'text-navy/30 group-hover:text-navy/60'}`}>{item.title}</span>
                            </div>
                            <ArrowRight size={20} className={`transition-all ${activeProwess === i ? 'text-black translate-x-0 opacity-100' : 'opacity-0 -translate-x-4'}`} />
                         </div>
                         {activeProwess === i && (
                           <motion.p 
                             initial={{ opacity: 0, height: 0 }}
                             animate={{ opacity: 1, height: "auto" }}
                             className="mt-4 text-sm text-navy/40 font-bold ml-12 max-w-sm"
                           >
                              {item.desc}
                           </motion.p>
                         )}
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 4. INDUSTRIAL EXCELLENCE - SHARP CORNERS & REMOVED EXPLORE SECTOR */}
        <section className="py-32 md:py-48 px-6 relative overflow-hidden">
           <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Designs" />
              <div className="absolute inset-0 bg-black/60" />
           </div>

           <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                 <h2 className="text-4xl md:text-7xl font-heading font-black text-white uppercase italic">Industrial <br /> Excellence</h2>
                 <div className="flex gap-4">
                    <button onClick={prevSlide} className="w-14 h-14 border-2 border-white/20 rounded-none flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                       <ChevronLeft size={28} />
                    </button>
                    <button onClick={nextSlide} className="w-14 h-14 border-2 border-white/20 rounded-none flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                       <ChevronRight size={28} />
                    </button>
                 </div>
              </div>

              <div className="relative overflow-hidden">
                <motion.div 
                  animate={{ x: `-${activeSlide * 33.33}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="flex gap-8"
                >
                   {carouselItems.map((item, i) => (
                      <div 
                        key={i}
                        className="min-w-[100%] md:min-w-[31%] bg-white p-6 rounded-none shadow-2xl"
                      >
                         <div className="aspect-square rounded-none overflow-hidden mb-6">
                            <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                         </div>
                         <div>
                            <div className="text-[10px] font-black uppercase text-navy/40 mb-2">{item.category}</div>
                            <div className="text-xl font-heading font-black text-navy uppercase italic mb-4">{item.title}</div>
                            {/* Explore Sector Text Removed */}
                         </div>
                      </div>
                   ))}
                </motion.div>
              </div>
           </div>
        </section>

        {/* RESTORED VISION & MISSION - SHARP CORNERS */}
        <section id="vision" className="py-24 md:py-40 px-6 bg-white border-y border-navy/5">
           <div className="max-w-7xl mx-auto">
              <div className="mb-20">
                 <span className="text-navy font-black uppercase text-[10px] mb-4 block opacity-40">Our Foundation</span>
                 <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic">Our Purpose <span className="text-black">and Promise.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { title: "Our Mission", content: "To create innovative, tangible solutions that address real-world challenges, drive progress, and deliver lasting value across industries." },
                   { title: "Our Vision", content: "To lead the charge in shaping a sustainable, modern world by fostering innovation, collaboration, and impact-driven growth." },
                   { title: "Our Future Goals", content: "To become a diversified leader in Gujarat's economy by 2030, expanding into emerging markets and driving sustainable excellence." }
                 ].map((card, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     className="p-10 md:p-12 bg-white border border-navy/5 rounded-none shadow-[0_10px_50px_rgba(0,0,0,0.03)] flex flex-col relative"
                   >
                      <h3 className="text-2xl font-heading font-black text-navy uppercase mb-8">{card.title}</h3>
                      <p className="text-navy/60 font-bold leading-relaxed flex-grow">{card.content}</p>
                      <div className="w-8 h-1 bg-black mt-10" />
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* TEAM SECTION - SHARP CORNERS */}
        <section id="team" className="py-24 md:py-40 px-6 bg-white">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
                 <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase italic leading-[0.9]">Visionaries Behind <br /><span className="text-black">Dhyanora Group.</span></h2>
                 <p className="max-w-xs text-navy/40 font-bold text-sm uppercase tracking-tight">A team of passionate leaders driving innovation, growth, and impact across industries.</p>
              </div>

              {/* Founder Spotlight */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
                 <div className="lg:col-span-5 aspect-[4/5] overflow-hidden rounded-none border border-navy/5">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Founder" />
                 </div>
                 <div className="lg:col-span-7">
                    <div className="p-10 md:p-16 bg-white border border-navy/5 rounded-none shadow-[0_20px_80px_rgba(0,0,0,0.05)] relative">
                       <Quote className="text-black/5 absolute top-10 right-10" size={80} />
                       <h3 className="text-2xl md:text-3xl font-heading font-black text-navy uppercase mb-8 italic">A Vision for Transforming Tomorrow</h3>
                       <p className="text-lg md:text-xl text-navy/60 font-bold leading-relaxed mb-12">"At Dhyanora Group, we believe in the power of ideas backed by action. Our mission is to not only invest in businesses but to create a ripple effect of innovation, growth, and positive change."</p>
                       <div>
                          <div className="text-navy font-black uppercase text-xl">Irfan</div>
                          <div className="text-navy/30 text-[10px] font-black uppercase tracking-widest mt-1">Founder & CEO</div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Team Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { name: "Hari Kiran", role: "Co-Founder & COO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500" },
                   { name: "Ganesh Kumar", role: "Group CEO", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=500" },
                   { name: "Suresh Goyal", role: "Group President", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500" },
                   { name: "Mohinder Singh", role: "Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500" },
                   { name: "Deepak Kumar", role: "Director", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=500" },
                   { name: "Omkar Navge", role: "VP Strategy", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=500" }
                 ].map((member, i) => (
                   <motion.div key={i} whileHover={{ y: -10 }} className="group relative aspect-[4/5] rounded-none overflow-hidden border border-navy/5">
                      <img src={member.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={member.name} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />
                      <div className="absolute bottom-0 left-0 w-full p-8 text-white flex justify-between items-end">
                         <div>
                            <div className="font-black uppercase text-lg mb-1">{member.name}</div>
                            <div className="text-[9px] uppercase font-black tracking-widest text-white/50">{member.role}</div>
                         </div>
                         <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-none flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                            <Building2 size={14} />
                         </div>
                      </div>
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

export default About;
