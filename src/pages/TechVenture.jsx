import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ShoppingCart, Smartphone, Tv, Laptop, Headphones, ShieldCheck, Tag, Headset, Star, ArrowRight } from 'lucide-react';

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
      <main className="pt-32">
        {/* Company Hero */}
        <section className="px-6 py-20 relative overflow-hidden bg-navy-dark">
          <div className="absolute inset-0 z-0">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_50%_50%,#F2C94C_0%,transparent_50%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold font-bold tracking-widest uppercase text-sm">
                Dhyanora Group  →  Our Companies
              </span>
              <h1 className="text-6xl md:text-8xl mt-4 mb-8 font-heading font-black text-cream uppercase italic leading-none">
                Pramukh <br /><span className="text-gold">Techventures.</span>
              </h1>
              <p className="text-xl text-gray-light/60 max-w-2xl leading-relaxed font-medium">
                Technology You Can Trust. Service You Can Count On. We are your destination for quality electronics and reliable support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
              <div className="flex-1">
                 <h2 className="text-4xl md:text-5xl font-heading font-black text-cream uppercase mb-8">Who We Are</h2>
                 <div className="space-y-6 text-lg text-gray-light/40 leading-relaxed font-medium">
                    <p>
                      Pramukh Techventures Pvt Ltd is an electronics retail business under the Dhyanora Group. We offer a wide range of consumer electronics, home appliances, and technology products to families and businesses across Gujarat.
                    </p>
                    <p>
                      In a market crowded with options, we stand out through three things: <strong className="text-gold">genuine products</strong>, <strong className="text-gold">transparent pricing</strong>, and <strong className="text-gold">reliable after-sales support</strong>.
                    </p>
                 </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                 {[1, 2, 3, 4].map(i => (
                    <div key={i} className="aspect-square bg-navy rounded-3xl border border-white/5 overflow-hidden">
                       <img 
                         src={`https://images.unsplash.com/photo-${[
                           "1498049794561-7780e7231661",
                           "1550009158-9ebf69173e03",
                           "1523206489230-c012c64b2b48",
                           "1496181133206-80ce9b88a853"
                         ][i-1]}?auto=format&fit=crop&q=80&w=600`} 
                         className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                         alt="Electronics"
                       />
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Categories Grid */}
        <section className="py-32 px-6">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                 <span className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our Inventory</span>
                 <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase italic">What We <span className="text-gold">Offer.</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {categories.map((cat, i) => (
                   <div key={i} className="glass-card p-10 group hover:bg-gold/5 transition-all">
                      <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                         {cat.icon}
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-4 uppercase">{cat.title}</h3>
                      <p className="text-sm text-gray-light/50 leading-relaxed">{cat.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Promises Section */}
        <section className="py-32 px-6 bg-gold/5 border-y border-gold/10">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                 <h2 className="text-4xl md:text-5xl font-heading font-black text-cream uppercase">Our <span className="text-gold">Promise</span> to Customers</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {[
                   { title: "100% Genuine", icon: <ShieldCheck />, desc: "Sourced from authorized distributors with valid manufacturer warranty." },
                   { title: "Honest Pricing", icon: <Tag />, desc: "No hidden charges. What you see is what you pay. Every single time." },
                   { title: "After-Sales", icon: <Headset />, desc: "Proper guidance and support for every purchase. We're here for you." },
                   { title: "Expert Guidance", icon: <Star />, desc: "Our team helps you choose the right product for your actual needs." }
                 ].map((p, i) => (
                   <div key={i} className="flex flex-col items-center text-center gap-6">
                      <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-gold border border-gold/20 shadow-2xl">
                         {p.icon}
                      </div>
                      <h4 className="text-xl font-heading font-bold text-cream uppercase">{p.title}</h4>
                      <p className="text-sm text-gray-light/40 leading-relaxed">{p.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
           <div className="max-w-4xl mx-auto text-center glass-card p-16 border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase mb-8 italic">Visit Our <span className="text-gold">Showroom.</span></h2>
              <p className="text-xl text-gray-light/60 mb-12 font-medium">Come and experience our range in person. Our team is ready to help you find exactly what you need.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <button className="btn-primary px-10 py-5 font-black uppercase tracking-widest flex items-center justify-center gap-2">
                    Get Directions <ArrowRight size={18} />
                 </button>
                 <button className="px-10 py-5 border border-white/10 rounded-full text-cream font-bold hover:bg-white/5 transition-all">
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
