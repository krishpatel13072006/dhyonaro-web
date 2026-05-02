import React from 'react';
import Hero from '../sections/Hero';
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
    desc: "Gujarat's reliable partner for metal scrap procurement, trading, and export services.",
    path: "/companies/import-export",
  },
  {
    id: "02",
    name: "Pramukh Techventures",
    logo: pramukhLogo,
    img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1200",
    desc: "Your trusted destination for quality electronics — from home appliances to the latest technology.",
    path: "/companies/tech-venture",
  },
  {
    id: "03",
    name: "Shreeji Infra",
    logo: shreejiLogo,
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    desc: "Premium industrial sheds and workspace solutions under the Mahantam Industrial Park brand.",
    path: "/companies/shreeji-infra",
  },
  {
    id: "04",
    name: "Bricks Trading Division",
    logo: pramukhLogo,
    img: "https://images.unsplash.com/photo-1590069230005-db39373927bf?auto=format&fit=crop&q=80&w=1200",
    desc: "Supplying quality bricks and construction materials to builders and contractors across the region.",
    path: "/companies/brics",
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
        <section className="py-40 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 md:mb-24">
              <span className="text-navy font-black uppercase text-[10px] mb-6 block opacity-30">The Dhyanora Family</span>
              <h2 className="text-3xl sm:text-5xl md:text-8xl font-heading font-black text-navy uppercase italic leading-[0.8]">Four Pillars. <br/><span className="text-gold-dark">One Vision.</span></h2>
            </div>

            {/* Sequential Image Gallery Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[400px] md:h-[650px] mb-24 overflow-hidden group -mx-6 w-[calc(100%+3rem)] md:-mx-12 md:w-[calc(100%+6rem)] lg:mx-0 lg:w-full bg-navy"
            >
              <AnimatePresence>
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 w-full h-full"
                >
                   <motion.img
                     src={introImages[currentImage]}
                     initial={{ scale: 1.2 }}
                     animate={{ scale: 1 }}
                     transition={{ duration: 4, ease: "linear" }}
                     className="w-full h-full object-cover object-center"
                   />
                </motion.div>
              </AnimatePresence>

              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-navy/10 z-10" />
              
              {/* Minimal Label Overlay */}
              <div className="absolute bottom-10 left-10 z-20">
                 <div className="flex items-center gap-4 text-white">
                    <span className="h-px w-12 bg-gold" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em]">Industry Excellence</span>
                 </div>
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-10 right-10 z-30 flex gap-3">
                {introImages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 transition-all duration-500 rounded-full ${i === currentImage ? 'w-12 bg-gold' : 'w-4 bg-white/20'}`} 
                  />
                ))}
              </div>
            </motion.div>

            {/* REFINED IDENTITY SPLIT: Dhyanora Family */}
            <div className="space-y-12 md:space-y-24 mt-20">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="group flex flex-col lg:flex-row h-auto lg:h-[500px] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl bg-white border border-navy/5"
                >
                   {/* Logo Branding Side (Pure White, Maximum Clarity) */}
                   <div className="lg:w-1/3 bg-white flex items-center justify-center p-12 md:p-20 relative z-10">
                      <motion.img 
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        src={company.logo || company.icon} 
                        alt={company.name} 
                        className="w-full h-auto max-h-40 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute top-8 left-8 text-gold-dark/20 font-black text-4xl italic">{company.id}</div>
                   </div>

                   {/* Information & Visual Side (Cinematic) */}
                   <div className="lg:w-2/3 relative flex items-center p-10 md:p-20 overflow-hidden">
                      <img 
                        src={company.img} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                      />
                      <div className="absolute inset-0 bg-navy/90 backdrop-blur-[2px]" />
                      
                      <div className="relative z-10 max-w-lg">
                         <div className="flex items-center gap-4 mb-6">
                            <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Division</span>
                            <div className="h-px w-12 bg-gold" />
                         </div>
                         
                         <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase italic mb-8 leading-tight">
                           {company.name}
                         </h3>
                         
                         <p className="text-white/60 text-lg md:text-xl font-bold leading-relaxed mb-10">
                           {company.desc}
                         </p>
                         
                         <Link 
                           to={company.path} 
                           className="inline-flex items-center gap-4 px-10 py-5 bg-gold text-navy rounded-full text-xs font-black uppercase hover:bg-white transition-all shadow-xl group/btn"
                         >
                           Explore Entity <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                         </Link>
                      </div>

                      {/* Decorative Element */}
                      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
                   </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Footer CTA */}
        <section className="py-24 px-6 text-center bg-white">
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto bg-off-white p-12 md:p-20 rounded-[3rem] border border-navy/5 shadow-2xl relative overflow-hidden"
           >
              <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase mb-6 italic leading-none">Ready to <br/><span className="text-gold-dark">Work With Us?</span></h2>
              <p className="text-lg text-navy/40 mb-10 max-w-xl mx-auto font-bold">
                 Whether you are a business partner, investor, or client — we would love to hear from you.
              </p>
              <Link to="/contact" className="btn-primary px-10 py-5 text-base font-black uppercase shadow-2xl">
                 Get In Touch
              </Link>
           </motion.div>
        </section>
      </main>
    </>
  );
};

export default Home;
