import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ShoppingCart, Tv, Headphones, Smartphone, ShieldCheck, Tag, Headset, Star, ArrowRight } from 'lucide-react';
import MovingMesh from '../components/MovingMesh';

const TechVenture = () => {
  const categories = [
    { title: "Consumer Electronics", icon: <Tv />, desc: "Televisions, laptops, smartphones, and tablets from top global brands." },
    { title: "Home Appliances", icon: <ShoppingCart />, desc: "Washing machines, refrigerators, and air conditioners for modern living." },
    { title: "Audio & Visual", icon: <Headphones />, desc: "High-fidelity speakers, home theatre systems, and professional cameras." },
    { title: "Accessories", icon: <Smartphone />, desc: "Mobile accessories, computer peripherals, and smart home devices." }
  ];

  return (
    <>
      <SEO title="Pramukh Techventures | Premium Electronics Retail" description="Your trusted destination for quality electronics in Gujarat. From home appliances to the latest technology with honest pricing and expert guidance." />
      <main className="bg-white">
        {/* Company Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-white pt-20">
          <MovingMesh />
          <div className="relative z-20 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white font-black uppercase tracking-[0.5em] text-[10px] mb-8 block opacity-60">Portfolio / Consumer Tech</span>
              <h1 className="text-6xl md:text-9xl font-heading font-black text-white uppercase italic leading-none">Pramukh <br /><span className="text-gold">Techventures.</span></h1>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-6 bg-white border-y border-navy/5">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
              <div className="flex-1">
                 <span className="text-navy font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-30">Authenticity & Quality</span>
                 <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase italic mb-10 leading-tight">Who We <span className="text-gold-dark">Are.</span></h2>
                 <div className="space-y-8 text-xl text-navy/40 leading-relaxed font-bold">
                    <p>
                      Pramukh Techventures Pvt Ltd is an electronics retail business under the Dhyanora Group. We offer a wide range of consumer electronics, home appliances, and technology products to families and businesses across Gujarat.
                    </p>
                    <p>
                      In a market crowded with options, we stand out through three things: <strong className="text-navy">genuine products</strong>, <strong className="text-navy">transparent pricing</strong>, and <strong className="text-navy">reliable after-sales support</strong>.
                    </p>
                 </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-6">
                 {[
                   "1498049794561-7780e7231661",
                   "1550009158-9ebf69173e03",
                   "1523206489230-c012c64b2b48",
                   "1496181133206-80ce9b88a853"
                 ].map((id, i) => (
                    <div key={i} className="aspect-square bg-off-white rounded-3xl border border-navy/5 overflow-hidden shadow-xl group">
                       <img 
                         src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=600`} 
                         className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" 
                         alt="Electronics"
                       />
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Categories Grid */}
        <section className="py-32 px-6 bg-off-white border-y border-navy/5">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                 <span className="text-navy font-black uppercase tracking-[0.4em] text-[10px] mb-6 block opacity-30">Our Selection</span>
                 <h2 className="text-4xl md:text-7xl font-heading font-black text-navy uppercase italic">What We <span className="text-gold-dark">Offer.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {categories.map((cat, i) => (
                   <div key={i} className="p-10 bg-white rounded-[3rem] border border-navy/5 shadow-xl hover:bg-navy group transition-all duration-500">
                      <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-navy transition-all">
                         {cat.icon}
                      </div>
                      <h3 className="text-2xl font-heading font-black mb-4 uppercase text-navy group-hover:text-white transition-colors">{cat.title}</h3>
                      <p className="text-sm text-navy/40 leading-relaxed font-bold group-hover:text-white/40 transition-colors">{cat.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Promises Section */}
        <section className="py-40 px-6 bg-white border-y border-navy/5">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-24">
                 <h2 className="text-4xl md:text-[5rem] font-heading font-black text-navy uppercase italic leading-none">Our <span className="text-gold-dark">Promise.</span></h2>
                 <p className="text-navy/30 font-black uppercase tracking-widest text-[10px] mt-6 italic">Unwavering Commitment to Customer Satisfaction</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                 {[
                   { title: "100% Genuine", icon: <ShieldCheck />, desc: "Sourced from authorized distributors with valid manufacturer warranty." },
                   { title: "Honest Pricing", icon: <Tag />, desc: "No hidden charges. What you see is what you pay. Every single time." },
                   { title: "After-Sales", icon: <Headset />, desc: "Proper guidance and support for every purchase. We're here for you." },
                   { title: "Expert Guidance", icon: <Star />, desc: "Our team helps you choose the right product for your actual needs." }
                 ].map((p, i) => (
                   <div key={i} className="flex flex-col items-center text-center gap-8">
                      <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center text-gold shadow-2xl group-hover:scale-110 transition-transform">
                         {p.icon}
                      </div>
                      <h4 className="text-2xl font-heading font-black text-navy uppercase italic tracking-wider">{p.title}</h4>
                      <p className="text-base text-navy/40 leading-relaxed font-bold max-w-xs">{p.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-6 bg-white text-center">
           <div className="max-w-5xl mx-auto bg-navy p-16 md:p-32 rounded-[4rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gold/5 opacity-40 pointer-events-none" />
              <h2 className="text-5xl md:text-[6rem] font-heading font-black text-white uppercase mb-12 italic leading-[0.9]">Visit Our <br /><span className="text-gold">Showroom.</span></h2>
              <p className="text-2xl text-white/40 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">Experience our range in person. Our expert team is ready to guide you to the perfect technology for your needs.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-8 relative z-10">
                 <button className="bg-gold text-navy px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl">
                    Get Directions <ArrowRight size={22} />
                 </button>
                 <button className="px-12 py-6 border-2 border-white/20 rounded-full text-white font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
                    Call Our Team
                 </button>
              </div>
           </div>
        </section>
      </main>
    </>
  );
};

export default TechVenture;
