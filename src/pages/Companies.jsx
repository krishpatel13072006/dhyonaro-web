import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Factory, ShoppingCart, Building2, ArrowRight } from 'lucide-react';
import MovingMesh from '../components/MovingMesh';

const companies = [
  {
    name: "Pramukh Import Export",
    tagline: "Metal Scrap Trading",
    icon: <Globe size={32} />,
    desc: "Gujarat's reliable partner for metal scrap procurement, trading, and export services. Facilitating high-volume industrial raw materials.",
    path: "/gateway",
    color: "bg-navy/5",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    name: "Pramukh Techventures",
    tagline: "Electronics Retail",
    icon: <ShoppingCart size={32} />,
    desc: "Your trusted destination for quality electronics — from home appliances to the latest technology. Honest pricing and genuine products.",
    path: "/companies/tech-venture",
    color: "bg-navy/5",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=1200"
  },
  {
    name: "Shreeji Infra",
    tagline: "Mahantam Industrial Park",
    icon: <Factory size={32} />,
    desc: "Premium industrial sheds and workspace solutions. Professionally managed infrastructure for manufacturing and logistics.",
    path: "/companies/shreeji-infra",
    color: "bg-navy/5",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200"
  },
  {
    name: "Bricks Trading Division",
    tagline: "Construction Materials",
    icon: <Building2 size={32} />,
    desc: "Supplying quality bricks and construction materials to builders and contractors. Foundations built on reliability and strength.",
    path: "/gateway",
    color: "bg-navy/5",
    image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1200"
  }
];

const Companies = () => {
  return (
    <>
      <SEO title="Our Companies | Dhyanora Group" description="Explore the diverse business verticals of Dhyanora Group. From metal scrap trading and electronics to industrial infrastructure and bricks." />
      <main className="relative bg-white">
        
        {/* COMPANIES HERO SECTION */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden bg-navy pt-24">
          <MovingMesh />
          
          {/* Falling Stars Animation */}
          <div className="absolute inset-0 z-12 pointer-events-none overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "120%", y: "-20%", opacity: 0 }}
                animate={{ 
                  x: ["120%", "-20%"],
                  y: ["-20%", "120%"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "linear"
                }}
                className="absolute w-[150px] h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-white/50 rotate-[-45deg] blur-[1px]"
              />
            ))}
          </div>

          {/* Orbital Orbs */}
          <div className="absolute inset-0 z-15 pointer-events-none">
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] border border-white/5 rounded-full"
             >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold/60 rounded-full blur-[2px]" />
             </motion.div>
          </div>

          <div className="relative z-20 text-center px-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/40 font-black uppercase text-[10px] mb-8 block"
            >
              The Portfolio
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-heading font-black text-white uppercase italic leading-none">Our <span className="text-gold">Companies.</span></h1>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent z-10" />
        </section>        <section className="py-12 md:py-24 px-6">
          <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-12 lg:gap-20 group/card`}
              >
                {/* Image Container - Normal / No Overlap / Sharp Corners */}
                <div className="flex-1 w-full">
                  <div className="aspect-[16/10] overflow-hidden border border-navy/5 shadow-xl relative">
                    <img
                      src={company.image}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                      alt={company.name}
                    />
                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-all duration-500" />
                  </div>
                </div>
 
                {/* Content Container - Normal / Sharp Corners */}
                <div className="flex-1 p-8 md:p-10 lg:p-12 transition-all duration-500 bg-white border border-navy/5 group-hover/card:bg-navy group/content w-full">
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                     <div className="w-10 h-10 md:w-12 md:h-12 bg-off-white flex items-center justify-center text-navy group-hover/card:text-gold transition-colors border border-navy/5">
                        {React.cloneElement(company.icon, { size: window.innerWidth < 768 ? 20 : 24 })}
                     </div>
                     <span className="text-navy font-bold uppercase text-[10px] group-hover/card:text-gold transition-colors">{company.tagline}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-navy uppercase italic mb-4 md:mb-6 leading-tight group-hover/card:text-white transition-colors">{company.name}</h2>
                  <p className="text-base md:text-lg text-navy/40 leading-relaxed font-bold mb-8 md:mb-10 group-hover/card:text-white/40 transition-colors">
                    {company.desc}
                  </p>
                  <Link
                    to={company.path}
                    className="group flex items-center gap-4 text-navy font-black uppercase text-[10px] md:text-xs group-hover/card:text-gold transition-all"
                  >
                    Explore Company <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Collective Strength Section */}
        <section className="py-16 md:py-32 bg-off-white border-t border-navy/5">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-6xl font-heading font-black text-navy uppercase italic mb-6 md:mb-8 leading-tight">Collective <br /><span className="text-gold-dark">Strength.</span></h2>
            <p className="text-lg md:text-xl text-navy/40 leading-relaxed font-bold">
              While each company operates with its own dedicated leadership and focus, they all share the Dhyanora DNA — a commitment to quality, discipline, and long-term value creation for the Gujarat economy.
            </p>
          </div>
        </section>

      </main>
    </>
  );
};

export default Companies;
