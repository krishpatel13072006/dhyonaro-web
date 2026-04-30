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
    icon: <Globe size={40} />,
    desc: "Gujarat's reliable partner for metal scrap procurement, trading, and export services. Facilitating high-volume industrial raw materials.",
    path: "/pramukh",
    color: "bg-blue-500/10",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Pramukh Techventures",
    tagline: "Electronics Retail",
    icon: <ShoppingCart size={40} />,
    desc: "Your trusted destination for quality electronics — from home appliances to the latest technology. Honest pricing and genuine products.",
    path: "/companies/tech-venture",
    color: "bg-purple-500/10",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Shreeji Infra",
    tagline: "Mahantam Industrial Park",
    icon: <Factory size={40} />,
    desc: "Premium industrial sheds and workspace solutions. Professionally managed infrastructure for manufacturing and logistics.",
    path: "/companies/shreeji-infra",
    color: "bg-orange-500/10",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Bricks Trading Division",
    tagline: "Construction Materials",
    icon: <Building2 size={40} />,
    desc: "Supplying quality bricks and construction materials to builders and contractors. Foundations built on reliability and strength.",
    path: "/companies/brics",
    color: "bg-green-500/10",
    image: "https://images.unsplash.com/photo-1590069230002-70cc3027aa21?auto=format&fit=crop&q=80&w=800"
  }
];

const Companies = () => {
  return (
    <>
      <SEO title="Our Companies | Dhyanora Group" description="Explore the diverse business verticals of Dhyanora Group. From metal scrap trading and electronics to industrial infrastructure and bricks." />
      <main className="relative">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-navy pt-20">
          <MovingMesh />
          <div className="relative z-20 text-center px-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-black uppercase tracking-[0.5em] text-xs mb-8 block"
            >
              The Portfolio
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-cream uppercase italic">Our <span className="text-gold">Companies.</span></h1>
          </div>
        </section>

        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto space-y-24">
              {companies.map((company, index) => (
                <motion.div 
                  key={company.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
                >
                   {/* Image Container */}
                   <div className="flex-1 w-full group relative">
                      <div className="aspect-[16/10] overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
                         <img 
                           src={company.image} 
                           className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                           alt={company.name} 
                         />
                         <div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-all duration-500" />
                      </div>
                      <div className={`absolute -bottom-8 ${index % 2 === 1 ? '-left-8' : '-right-8'} w-32 h-32 ${company.color} backdrop-blur-3xl rounded-3xl border border-white/10 flex items-center justify-center text-gold shadow-2xl z-10`}>
                         {company.icon}
                      </div>
                   </div>

                   {/* Content Container */}
                   <div className="flex-1">
                      <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{company.tagline}</span>
                      <h2 className="text-4xl md:text-5xl font-heading font-black text-cream uppercase italic mb-8 leading-tight">{company.name}</h2>
                      <p className="text-xl text-gray-light/40 leading-relaxed font-medium mb-12">
                         {company.desc}
                      </p>
                      <Link 
                        to={company.path} 
                        className="group flex items-center gap-4 text-gold font-black uppercase tracking-widest text-sm hover:gap-6 transition-all"
                      >
                         Explore Company <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                      </Link>
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Collective Strength Section */}
        <section className="py-32 bg-white/[0.02] border-t border-white/5">
           <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-3xl md:text-5xl font-heading font-black text-cream uppercase italic mb-10">Collective <span className="text-gold">Strength.</span></h2>
              <p className="text-xl text-gray-light/40 leading-relaxed font-medium">
                 While each company operates with its own dedicated leadership and focus, they all share the Dhyanora DNA — a commitment to quality, discipline, and long-term value creation for the Gujarat economy.
              </p>
           </div>
        </section>

        <div className="h-32 bg-navy" />
      </main>
    </>
  );
};

export default Companies;
