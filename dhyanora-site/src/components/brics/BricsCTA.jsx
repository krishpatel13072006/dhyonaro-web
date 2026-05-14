import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BricsCTA = () => {
  return (
    <section className="py-24 px-6 bg-white text-center">
       <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto bg-navy p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden"
       >
          <div className="absolute top-0 left-0 w-full h-full bg-gold/5 opacity-40 pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-8 italic leading-tight">Need Bulk <br /><span className="text-gold">Supply?</span></h2>
          <p className="text-lg text-white/40 mb-12 max-w-xl mx-auto font-bold leading-relaxed">Whether it's a small residential project or a large industrial development, we have the capacity to deliver.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
             <Link to="/brics/contact" className="bg-gold text-navy px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl">
                Get Bulk Rates <ArrowRight size={18} />
             </Link>
             <a href="tel:+919876543210" className="px-10 py-5 border-2 border-white/20 rounded-full text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                Call Logistics
             </a>
          </div>
       </motion.div>
    </section>
  );
};

export default BricsCTA;
