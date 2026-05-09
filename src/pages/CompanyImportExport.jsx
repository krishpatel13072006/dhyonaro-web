import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, HardHat, ShieldCheck, Globe2, Settings2 } from 'lucide-react';
import CrossfadeVideo from '../components/CrossfadeVideo';


const CompanyImportExport = () => {
  return (
    <>
      <SEO 
        title="Pramukh Import Export | Metal Scrap Trading | Dhyanora Group" 
        description="Pramukh Import Export is the industrial trading division of Dhyanora Group, specializing in ferrous and non-ferrous metal scrap." 
      />
      
      <main className="bg-white min-h-screen">
        {/* ── HERO ── */}
        <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-[#172451]">
          <CrossfadeVideo 
            videos={['/videos/Company-1.mp4', '/videos/company-2.mp4', '/videos/company-3.mp4']} 
            overlayOpacity={0.15}
          />




          <div className="relative z-20 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#172451]/80 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Globe2 size={14} /> Metal Scrap Trading
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-white uppercase leading-[1.1]"
            >
              Pramukh Import Export
            </motion.h1>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto text-center">
           <Link to="/companies" className="inline-flex items-center gap-2 text-[#172451] font-bold mb-12 hover:gap-3 transition-all">
             <ArrowLeft size={18} /> Back to Companies
           </Link>
           <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-heading font-black text-[#172451] mb-6 md:mb-8 leading-tight">Industrial Metal Specialists</h2>
             <p className="text-slate-500 text-lg leading-relaxed mb-12">
               We facilitate the procurement and distribution of high-grade ferrous and non-ferrous metal scrap for India's leading manufacturers. Our global network ensures a steady supply of quality materials.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                 <Settings2 className="text-[#172451] mb-4" size={32} />
                 <h4 className="text-xl font-heading font-black text-[#172451] mb-2">Key Materials</h4>
                 <p className="text-slate-500 text-sm">MS Scrap, Cast Iron, Copper, Aluminium, Brass, and Stainless Steel.</p>
               </div>
               <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                 <ShieldCheck className="text-[#172451] mb-4" size={32} />
                 <h4 className="text-xl font-heading font-black text-[#172451] mb-2">Quality First</h4>
                 <p className="text-slate-500 text-sm">Every batch is meticulously graded and verified for purity before delivery.</p>
               </div>
             </div>
           </div>
        </section>
      </main>
    </>
  );
};

export default CompanyImportExport;
