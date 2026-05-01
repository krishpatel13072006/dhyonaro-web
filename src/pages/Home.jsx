import React from 'react';
import Hero from '../sections/Hero';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ExternalLink, Building2, ShoppingCart, Globe, Factory, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const companies = [
  {
    id: "01",
    name: "Pramukh Import Export",
    icon: <Globe size={40} />,
    desc: "Gujarat's reliable partner for metal scrap procurement, trading, and export services.",
    path: "/companies/import-export",
    color: "text-navy",
    bgColor: "bg-off-white"
  },
  {
    id: "02",
    name: "Pramukh Techventures",
    icon: <ShoppingCart size={40} />,
    desc: "Your trusted destination for quality electronics — from home appliances to the latest technology.",
    path: "/companies/tech-venture",
    color: "text-gold-dark",
    bgColor: "bg-white"
  },
  {
    id: "03",
    name: "Shreeji Infra",
    icon: <Factory size={40} />,
    desc: "Premium industrial sheds and workspace solutions under the Mahantam Industrial Park brand.",
    path: "/companies/shreeji-infra",
    color: "text-navy",
    bgColor: "bg-off-white"
  },
  {
    id: "04",
    name: "Bricks Trading Division",
    icon: <Building2 size={40} />,
    desc: "Supplying quality bricks and construction materials to builders and contractors across the region.",
    path: "/companies/brics",
    color: "text-gold-dark",
    bgColor: "bg-white"
  }
];

const Home = () => {
  return (
    <>
      <SEO title="Building Businesses That Last | Dhyanora Group" description="Dhyanora Group is a diversified business group based in Ahmedabad, Gujarat — bringing together companies across metal trading, electronics, infrastructure, and construction." />
      <main className="bg-white">
        <Hero />
        
        {/* About Intro Strip */}
        <section className="py-40 px-6 bg-white relative overflow-hidden border-y border-navy/5">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-navy font-black uppercase text-xs mb-8 block opacity-40"
              >
                Who We Are
              </motion.span>
              <h2 className="text-4xl md:text-7xl font-heading font-black text-navy uppercase mb-12 leading-tight italic">
                One Group. <br /><span className="text-gold-dark">Multiple Strengths.</span>
              </h2>
              <p className="text-xl md:text-2xl text-navy/60 leading-relaxed font-bold">
                Dhyanora is not just a holding company — it is a platform for focused growth. We believe that disciplined businesses, guided by clear purpose and strong values, create lasting impact. Every company under Dhyanora operates with the same commitment: deliver quality, build trust, grow together.
              </p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
        </section>

        {/* RE-DESIGNED: The Dhyanora Family (Pillars) */}
        <section className="py-40 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24">
              <span className="text-navy font-black uppercase text-[10px] mb-6 block opacity-30">The Dhyanora Family</span>
              <h2 className="text-5xl md:text-8xl font-heading font-black text-navy uppercase italic leading-[0.8]">Four Pillars. <br/><span className="text-gold-dark">One Vision.</span></h2>
            </div>

            <div className="flex flex-col">
              {companies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`group relative flex flex-col md:flex-row items-center py-24 border-b border-navy/5 last:border-0 ${company.bgColor === 'bg-white' ? 'bg-white' : 'bg-off-white -mx-6 px-6 md:-mx-12 md:px-12'}`}
                >
                  <div className="flex-1 flex items-center gap-12 w-full">
                    <span className="text-7xl md:text-9xl font-heading font-black text-navy/5 group-hover:text-gold-dark/20 transition-colors duration-500">{company.id}</span>
                    <div className="flex flex-col gap-2">
                       <div className={`${company.color} mb-6 transition-colors group-hover:text-gold`}>{company.icon}</div>
                       <h3 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic transition-colors group-hover:text-gold-dark">{company.name}</h3>
                    </div>
                  </div>
                  
                  <div className="flex-1 w-full mt-10 md:mt-0 md:pl-20">
                    <p className="text-xl md:text-2xl text-navy/40 font-bold leading-relaxed mb-12 max-w-md group-hover:text-navy transition-colors">
                      {company.desc}
                    </p>
                    <Link 
                      to={company.path} 
                      className="inline-flex items-center gap-4 px-10 py-5 bg-navy text-white rounded-full text-xs font-black uppercase hover:bg-gold-dark hover:text-navy transition-all shadow-xl"
                    >
                      View Company <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Dhyanora Section */}
        <section className="py-40 px-6 bg-off-white border-y border-navy/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-navy font-black uppercase text-[10px] mb-8 block opacity-40"
              >
                Our Promise
              </motion.span>
              <h2 className="text-4xl md:text-7xl font-heading font-black text-navy uppercase italic">What Sets <span className="text-gold-dark">Us Apart.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                   className="flex flex-col gap-8 p-12 bg-white rounded-[3rem] shadow-xl border border-navy/5 hover:bg-navy transition-all duration-500 group"
                 >
                    <div className="text-gold-dark font-black text-6xl opacity-20 group-hover:opacity-40 transition-opacity">0{i+1}</div>
                    <h4 className="text-2xl font-heading font-black text-navy uppercase group-hover:text-white transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-base text-navy/40 leading-relaxed font-bold group-hover:text-white/40 transition-colors">{point.desc}</p>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-48 px-6 text-center bg-white">
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto bg-off-white p-16 md:p-32 rounded-[4rem] border border-navy/5 shadow-2xl relative overflow-hidden"
           >
              <h2 className="text-4xl md:text-8xl font-heading font-black text-navy uppercase mb-10 italic leading-none">Ready to <br/><span className="text-gold-dark">Work With Us?</span></h2>
              <p className="text-2xl text-navy/40 mb-16 max-w-2xl mx-auto font-bold">
                 Whether you are a business partner, investor, or client — we would love to hear from you.
              </p>
              <Link to="/contact" className="btn-primary px-16 py-8 text-xl font-black uppercase shadow-2xl">
                 Get In Touch
              </Link>
           </motion.div>
        </section>
      </main>
    </>
  );
};

export default Home;
