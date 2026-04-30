import React from 'react';
import SEO from '../../components/SEO';
import { Factory } from 'lucide-react';

const PramukhAbout = () => {
  return (
    <>
      <SEO title="About Us | Pramukh Import Export" description="Learn about Pramukh Import Export, a Dhyanora Group company specializing in metal scrap trading." />
      
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Who We Are</span>
             <h1 className="text-5xl md:text-7xl font-heading font-black text-cream uppercase italic">About <span className="text-gold">Pramukh.</span></h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6 text-lg text-gray-light/70 leading-relaxed">
              <p>
                <strong className="text-cream font-bold">Pramukh Import Export</strong> is a premier metal scrap trading company operating proudly under the umbrella of the <strong className="text-gold">Dhyanora Group</strong>. We facilitate the import and export of ferrous and non-ferrous scrap for industrial buyers and processors across Gujarat and beyond.
              </p>
              <p>
                Metal scrap is a critical raw material for India's booming steel and manufacturing industries. Our mission is to bridge the gap between supply and demand by ensuring a consistent, quality-verified, and competitively priced supply of scrap material to the businesses that rely on it to build the future.
              </p>
              <p>
                With years of market expertise and a robust logistical framework, we have positioned ourselves as a trusted partner for both local foundries and international suppliers.
              </p>
            </div>
            <div className="flex-1 w-full relative">
               <div className="w-full h-[400px] bg-navy-light/50 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
                  <Factory size={140} className="text-gold/20" />
                  <div className="absolute bottom-8 left-8 right-8 bg-navy/90 backdrop-blur-md p-6 rounded-2xl border border-gold/20 shadow-2xl">
                     <p className="text-sm italic text-cream/90 font-medium leading-relaxed">"Pramukh Import Export ensures that critical raw materials reach India's industrial backbone with unmatched reliability."</p>
                     <p className="text-xs mt-4 font-black text-gold uppercase tracking-widest">— Industrial Partner</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-black text-cream uppercase mb-12 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
                "Consistent and reliable supply chain tailored to your schedules.",
                "Competitive and transparent pricing based on real-time market data.",
                "Experienced team with deep, localized market knowledge.",
                "Strong logistics network across Gujarat and major Indian hubs.",
                "Backed by the financial stability and credibility of Dhyanora Group.",
                "Stringent quality checks ensuring precise material grading."
             ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 glass-card border-white/5">
                   <div className="w-3 h-3 bg-gold rounded-sm mt-1.5 flex-shrink-0" />
                   <p className="text-gray-light/80 font-medium">{item}</p>
                </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PramukhAbout;
