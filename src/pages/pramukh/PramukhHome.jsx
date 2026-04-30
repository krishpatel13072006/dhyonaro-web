import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PramukhHome = () => {
  return (
    <>
      <SEO title="Pramukh Import Export | Home" description="Gujarat's reliable partner for metal scrap procurement, trading, and export services." />
      
      {/* Hero */}
      <section className="px-6 py-20 relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                Welcome to
              </span>
              <h1 className="text-6xl md:text-8xl mb-8 font-heading font-black text-cream uppercase italic leading-none">
                Pramukh <br /><span className="text-gold">Import Export.</span>
              </h1>
              <p className="text-xl text-gray-light/80 max-w-xl leading-relaxed font-medium mb-10">
                Reliable Metal Scrap Solutions for Industrial Gujarat. We specialize in the procurement, trading, and export of ferrous and non-ferrous metal scrap.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/pramukh/services" className="btn-primary flex items-center gap-3 px-8 py-4 text-sm font-black uppercase tracking-widest">
                  Our Services <ArrowRight size={18} />
                </Link>
                <Link to="/pramukh/contact" className="px-8 py-4 text-sm font-black text-cream uppercase tracking-widest border border-white/20 hover:border-gold hover:text-gold transition-colors rounded-none">
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 hidden md:block">
            <div className="w-full h-[500px] relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl" />
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Metal Scrap Trading" className="w-full h-full object-cover rounded-2xl relative z-10 border border-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 group border-white/5 hover:border-gold/30 transition-all">
             <Globe className="text-gold mb-6" size={40} />
             <h3 className="text-2xl font-heading font-bold mb-4 uppercase">Global Reach</h3>
             <p className="text-gray-light/60">Facilitating global trade through established channels and efficient logistics.</p>
          </div>
          <div className="glass-card p-8 group border-white/5 hover:border-gold/30 transition-all">
             <ShieldCheck className="text-gold mb-6" size={40} />
             <h3 className="text-2xl font-heading font-bold mb-4 uppercase">Quality Assured</h3>
             <p className="text-gray-light/60">All material is strictly graded and verified before dispatch to ensure maximum value.</p>
          </div>
          <div className="glass-card p-8 group border-white/5 hover:border-gold/30 transition-all">
             <div className="w-10 h-10 flex items-center justify-center font-black text-gold text-2xl mb-6">#1</div>
             <h3 className="text-2xl font-heading font-bold mb-4 uppercase">Reliable Supply</h3>
             <p className="text-gray-light/60">Consistent supply chain catering to foundries and processors across India.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PramukhHome;
