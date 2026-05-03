import React from 'react';
import Hero from '../sections/Hero';
import ServicesSection from '../sections/ServicesSection';
import InfiniteScroll from '../components/InfiniteScroll';
import FooterCTA from '../components/FooterCTA';
import BrandScroll from '../components/BrandScroll';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, ShoppingCart, Globe, Factory, ArrowRight, ArrowUpRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import pramukhLogo from '../companies-logo/Pramukh Logo.png';
import shreejiLogo from '../companies-logo/shreeji logo.png';

const companies = [
  {
    id: "01",
    name: "Pramukh Import Export",
    logo: pramukhLogo,
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200",
    desc: "Gujarat's reliable partner for metal scrap procurement, trading, and export services. Discover our global reach, our operational ethos, and how we deliver consistent value to industries worldwide.",
    path: "/companies/import-export",
    linkLabel: "DISCOVER WHO WE ARE"
  },
  {
    id: "02",
    name: "Shreeji Infra",
    logo: shreejiLogo,
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    desc: "Premium industrial sheds and workspace solutions under the Mahantam Industrial Park brand. Explore our strategically designed infrastructure that inspires new ways to operate and drives business performance.",
    path: "/companies/shreeji-infra",
    linkLabel: "DISCOVER WHAT WE DO"
  },
  {
    id: "03",
    name: "Pramukh Techventures",
    logo: pramukhLogo,
    img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1200",
    desc: "With world-class electronics expertise and local market presence, we deliver tailored technology solutions that drive success — making us a trusted partner of choice for modern consumers.",
    path: "/companies/tech-venture",
    linkLabel: "DEVELOP WITH US"
  }
];

const Home = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [essenceImage, setEssenceImage] = React.useState(0);

  const introImages = [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1600"
  ];

  const essenceImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % introImages.length);
      setEssenceImage((prev) => (prev + 1) % essenceImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO title="Building Businesses That Last | Dhyanora Group" description="Dhyanora Group is a diversified business group based in Ahmedabad, Gujarat — bringing together companies across metal trading, electronics, infrastructure, and construction." />
      <main className="bg-white">
        <Hero />
        
        {/* REDESIGNED: Who We Are Section */}
        <section className="py-24 md:py-40 px-6 bg-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
                 <div className="flex-1 relative z-10">
                    <motion.div
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                       <div className="flex items-center gap-4 mb-8">
                          <span className="h-px w-8 bg-gold-dark" />
                          <span className="text-gold-dark font-black uppercase tracking-[0.4em] text-[10px]">The Dhyanora Essence</span>
                       </div>
                       
                       <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic mb-8 leading-tight">
                          One Group. <br />
                          <span className="text-gold-dark">Multiple Strengths.</span>
                       </h2>
                       
                       <p className="text-base md:text-lg text-navy/60 leading-relaxed font-bold max-w-lg mb-8">
                          Dhyanora is a platform for focused growth. We believe disciplined businesses, guided by clear purpose and strong values, create lasting impact. Every division operates with the same commitment: deliver quality, build trust, and grow together.
                       </p>

                       <motion.div 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="flex items-center gap-6"
                       >
                          <div className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center text-navy/30">
                             <Zap size={20} />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-navy/40">Focused Expansion Since [Year]</span>
                       </motion.div>
                    </motion.div>
                 </div>

                 <div className="flex-1 w-full relative">
                    <motion.div 
                       initial={{ clipPath: "inset(0 100% 0 0)" }}
                       whileInView={{ clipPath: "inset(0 0 0 0)" }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                       className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden shadow-2xl bg-navy"
                    >
                       <AnimatePresence>
                          <motion.div
                            key={essenceImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 w-full h-full"
                          >
                             <motion.img 
                                src={essenceImages[essenceImage]}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 4, ease: "linear" }}
                                className="w-full h-full object-cover"
                             />
                          </motion.div>
                       </AnimatePresence>
                       <div className="absolute inset-0 bg-navy/10 z-10" />
                    </motion.div>
                 </div>
              </div>
           </div>
        </section>
        
        <InfiniteScroll />

        <ServicesSection />

        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800">Our Pillars. <span className="font-semibold text-[#c5a880]">One Vision.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {companies.map((company, index) => (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex flex-col group"
                >
                   {/* Top Image (No padding/borders) */}
                   <div className="w-full aspect-[4/3] overflow-hidden mb-6">
                     <img 
                       src={company.img} 
                       alt={company.name}
                       className="w-full h-full object-cover" 
                     />
                   </div>

                   {/* Content Body */}
                   <div className="flex flex-col flex-grow">
                      <h3 className="text-2xl md:text-3xl font-serif text-[#c5a880] mb-4">
                        {company.name}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                        {company.desc}
                      </p>
                      
                      <Link 
                        to={company.path} 
                        className="inline-flex items-center gap-2 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase hover:text-[#c5a880] transition-colors mt-auto"
                      >
                        {company.linkLabel} <ArrowRight size={14} />
                      </Link>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FooterCTA />

      </main>
    </>
  );
};

export default Home;
