import React from 'react';
import SEO from '../../components/SEO';
import { Factory, ShieldCheck, Zap, Layers, BarChart, Settings } from 'lucide-react';

const PramukhAbout = () => {
  return (
    <>
      <SEO title="About Us | Pramukh Import Export" description="Learn about Pramukh Import Export, a Dhyanora Group company specializing in metal scrap trading." />
      
      <main className="bg-white pt-20">
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <span className="text-navy font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-30">Who We Are</span>
               <h1 className="text-6xl md:text-8xl font-heading font-black text-navy uppercase italic leading-tight">About <br/><span className="text-gold-dark">Pramukh.</span></h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="flex-1 space-y-8 text-xl text-navy/40 leading-relaxed font-bold">
                <p>
                  <strong className="text-navy font-black">Pramukh Import Export</strong> is a premier metal scrap trading company operating proudly under the umbrella of the <strong className="text-gold-dark">Dhyanora Group</strong>. We facilitate the import and export of ferrous and non-ferrous scrap for industrial buyers and processors across Gujarat and beyond.
                </p>
                <p>
                  Metal scrap is a critical raw material for India's booming steel and manufacturing industries. Our mission is to bridge the gap between supply and demand by ensuring a consistent, quality-verified, and competitively priced supply of scrap material to the businesses that rely on it to build the future.
                </p>
                <p>
                  With years of market expertise and a robust logistical framework, we have positioned ourselves as a trusted partner for both local foundries and international suppliers.
                </p>
              </div>
              <div className="flex-1 w-full relative">
                 <div className="w-full h-[600px] bg-off-white rounded-[4rem] border border-navy/5 flex items-center justify-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-dark/5 to-transparent" />
                    <Factory size={160} className="text-navy/5" />
                    <div className="absolute bottom-10 left-10 right-10 bg-navy p-12 rounded-[3rem] border border-white/5 shadow-2xl">
                       <p className="text-xl italic text-white/60 font-bold leading-relaxed">"Pramukh Import Export ensures that critical raw materials reach India's industrial backbone with unmatched reliability."</p>
                       <p className="text-[10px] mt-8 font-black text-gold uppercase tracking-[0.4em] opacity-60">— Industrial Partner</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-off-white border-y border-navy/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase mb-4 italic">Why Work With <span className="text-gold-dark">Us.</span></h2>
               <p className="text-navy/40 font-bold uppercase tracking-widest text-xs">Our Commitment to Industrial Excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { t: "Consistent Supply", i: <Layers />, d: "Reliable supply chain tailored to your industrial schedules." },
                  { t: "Market Pricing", i: <BarChart />, d: "Transparent pricing based on real-time global market data." },
                  { t: "Expert Team", i: <Settings />, d: "Experienced team with deep, localized scrap market knowledge." },
                  { t: "Global Network", i: <Globe />, d: "Strong logistics network across Gujarat and major Indian hubs." },
                  { t: "Group Stability", i: <ShieldCheck />, d: "Backed by the financial stability and credibility of Dhyanora Group." },
                  { t: "Quality Assured", i: <Zap />, d: "Stringent quality checks ensuring precise material grading." }
               ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-6 p-12 bg-white rounded-[3rem] border border-navy/5 shadow-xl group hover:bg-navy transition-all duration-500">
                     <div className="text-gold-dark group-hover:text-gold transition-colors">{item.i}</div>
                     <h4 className="text-xl font-heading font-black text-navy uppercase group-hover:text-white transition-colors">{item.t}</h4>
                     <p className="text-navy/40 font-bold leading-relaxed group-hover:text-white/40 transition-colors">{item.d}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PramukhAbout;
