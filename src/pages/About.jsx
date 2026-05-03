import React, { useRef, useState } from 'react';
import SEO from '../components/SEO';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Quote, Building2, ArrowUpRight } from 'lucide-react';
import FooterCTA from '../components/FooterCTA';
import BrandScroll from '../components/BrandScroll';
import GlobalReach from '../components/GlobalReach';

import officeImg from '../videos/office.png';

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

  const carouselItems = [
    { title: "Metal Scrap Solutions", category: "Pramukh Import Export", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800" },
    { title: "Industrial Infrastructure", category: "Shreeji Infra", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" },
    { title: "Consumer Electronics", category: "Pramukh Techventures", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800" },
    { title: "Raw Material Logistics", category: "Dhyanora Supply", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
    { title: "Renewable Energy", category: "Pramukh Solar", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800" },
    { title: "Global Port Operations", category: "Import Export", img: "https://images.unsplash.com/photo-1577705998148-ebbd773d01f7?auto=format&fit=crop&q=80&w=800" }
  ];

  const prowessData = [];

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
                src={officeImg} 
                className="w-full h-full object-cover" 
                alt="Dhyanora Office" 
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

        {/* NEW VISION, MISSION, & TEAM (Alternating Layout) */}
        <section className="py-24 md:py-40 px-6 bg-[#F9FAFB] bg-[radial-gradient(#D1D5DB_1px,transparent_1px)] [background-size:24px_24px]">
           <div className="max-w-6xl mx-auto space-y-32">
              
              {/* Vision */}
              <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
                 <div className="flex-1">
                    <div className="text-blue-600 font-semibold text-sm mb-2">// Our</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Vision</h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      To lead the charge in shaping a sustainable, modern world by fostering innovation, collaboration, and impact-driven growth. Supplying genuine and best quality products is an important goal. We build reputation for reliability and customer satisfaction, enhancing the overall experience.
                    </p>
                 </div>
                 <div className="flex-1 relative">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover rounded-3xl shadow-2xl relative z-10" alt="Vision" />
                 </div>
              </div>

              {/* Mission */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                 <div className="flex-1 relative">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover rounded-3xl shadow-2xl relative z-10" alt="Mission" />
                 </div>
                 <div className="flex-1">
                    <div className="text-blue-600 font-semibold text-sm mb-2">// Our</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mission</h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      To create innovative, tangible solutions that address real-world challenges, drive progress, and deliver lasting value across industries. Quality assurance is paramount, ensuring our solutions meet the highest quality standards to instill confidence in our partners.
                    </p>
                 </div>
              </div>

              {/* Team Blurb */}
              <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
                 <div className="flex-1">
                    <div className="text-blue-600 font-semibold text-sm mb-2">// Our</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Team</h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Building a strong and capable team is crucial for the success of any organization. With our dedicated members, you have a diverse pool of skills, expertise, and perspectives to draw upon. A strong team is a valuable asset driving our sustainable excellence.
                    </p>
                 </div>
                 <div className="flex-1 relative">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover rounded-3xl shadow-2xl relative z-10" alt="Team" />
                 </div>
              </div>

           </div>
        </section>

        {/* INDUSTRIAL EXCELLENCE - Kept as is */}
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
                         </div>
                      </div>
                   ))}
                </motion.div>
              </div>
           </div>
        </section>

        {/* GLOBAL REACH - THE EARTH DESIGN */}
        <GlobalReach />

        {/* NEW LEADERSHIP TEAM SECTION */}
        <section id="team" className="py-24 md:py-40 px-6 bg-white">
           <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">Our Leadership</h2>
              <p className="max-w-3xl mx-auto text-[#4B5563] text-lg mb-16 leading-relaxed">
                At the heart of Dhyanora Group's growth is a team of bold leaders who bring vision, expertise, and a proven track record of steering high-stakes projects to success.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-12">Promoters</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { name: "Irfan", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500" },
                   { name: "Hari Kiran", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500" },
                   { name: "Ganesh Kumar", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500" },
                   { name: "Suresh Goyal", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500" }
                 ].map((member, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="relative w-full aspect-[3/4] rounded-[2rem] bg-[#E5E7EB] overflow-hidden mb-6">
                         <img src={member.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={member.name} />
                         <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                            <ArrowUpRight size={16} className="text-[#1F2937]" />
                         </div>
                      </div>
                      <h4 className="text-xl font-bold text-[#1F2937]">{member.name}</h4>
                   </div>
                 ))}
              </div>
           </div>
        </section>

      </main>
    </>
  );
};

export default About;
