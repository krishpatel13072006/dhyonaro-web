import React from 'react';
import Hero from '../sections/Hero';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, ShoppingCart, Globe, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const companies = [
  {
    name: "Pramukh Import Export",
    icon: <Globe className="text-gold" size={32} />,
    desc: "Gujarat's reliable partner for metal scrap procurement, trading, and export services.",
    path: "/companies/import-export",
    color: "bg-blue-500/10"
  },
  {
    name: "Pramukh Techventures",
    icon: <ShoppingCart className="text-gold" size={32} />,
    desc: "Your trusted destination for quality electronics — from home appliances to the latest technology.",
    path: "/companies/tech-venture",
    color: "bg-purple-500/10"
  },
  {
    name: "Shreeji Infra",
    icon: <Factory className="text-gold" size={32} />,
    desc: "Premium industrial sheds and workspace solutions under the Mahantam Industrial Park brand.",
    path: "/companies/shreeji-infra",
    color: "bg-orange-500/10"
  },
  {
    name: "Bricks Trading Division",
    icon: <Building2 className="text-gold" size={32} />,
    desc: "Supplying quality bricks and construction materials to builders and contractors across the region.",
    path: "/companies/brics",
    color: "bg-green-500/10"
  }
];

const Home = () => {
  return (
    <>
      <SEO title="Building Businesses That Last | Dhyanora Group" description="Dhyanora Group is a diversified business group based in Ahmedabad, Gujarat — bringing together companies across metal trading, electronics, infrastructure, and construction." />
      <main>
        <Hero />
        
        {/* About Intro Strip */}
        <section className="py-24 px-6 bg-navy relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block"
              >
                Who We Are
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase mb-10 leading-tight italic">
                One Group. <br /><span className="text-gold">Multiple Strengths.</span>
              </h2>
              <p className="text-xl text-gray-light/60 leading-relaxed font-medium">
                Dhyanora is not just a holding company — it is a platform for focused growth. We believe that disciplined businesses, guided by clear purpose and strong values, create lasting impact. From raw materials to infrastructure, every company under Dhyanora operates with the same commitment: deliver quality, build trust, grow together.
              </p>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
        </section>

        {/* Companies Section */}
        <section className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block"
                >
                  The Dhyanora Family
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-cream uppercase italic">Four Pillars. <span className="text-gold">One Vision.</span></h2>
              </div>
              <Link to="/about" className="group flex items-center gap-3 text-gold font-black uppercase tracking-widest text-sm hover:gap-5 transition-all">
                Learn more about Us <ExternalLink size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card group hover:border-gold/30 transition-all duration-500 p-8"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 ${company.color}`}>
                    {company.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-gold transition-colors uppercase">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-light/50 mb-10 leading-relaxed font-medium">
                    {company.desc}
                  </p>
                  <Link 
                    to={company.path} 
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                  >
                    View Company <ArrowRight size={16} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Dhyanora Section */}
        <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block"
              >
                Our Promise
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase italic">What Sets <span className="text-gold">Us Apart.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                 { title: "Focused Vision", desc: "Every business we operate is guided by a clear purpose — not scattered ambition. We grow with intention." },
                 { title: "Sector Diversity", desc: "From commodities to construction, our portfolio spans industries that form the backbone of the Indian economy." },
                 { title: "Gujarat Roots", desc: "Born and built in Ahmedabad — we understand the market, the people, and the opportunity this region holds." },
                 { title: "Long-Term Thinking", desc: "We do not chase short-term gains. Every decision we make is built for permanence." }
               ].map((point, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   className="flex flex-col gap-4"
                 >
                    <div className="text-gold font-black text-3xl opacity-20">0{i+1}</div>
                    <h4 className="text-xl font-heading font-bold text-cream uppercase">
                      {point.title}
                    </h4>
                    <p className="text-sm text-gray-light/40 leading-relaxed">{point.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-32 px-6 text-center">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-heading font-black text-cream uppercase mb-8 italic">Ready to <span className="text-gold">Work With Us?</span></h2>
              <p className="text-xl text-gray-light/40 mb-12 max-w-2xl mx-auto font-medium">
                 Whether you are a business partner, investor, or client — we would love to hear from you.
              </p>
              <Link to="/contact" className="btn-primary px-12 py-6 text-lg font-black uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(242,201,76,0.2)]">
                 Get In Touch
              </Link>
           </div>
        </section>
      </main>
    </>
  );
};

const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

export default Home;
