import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const brands = [
  { name: "Industry", category: "Manufacturing & Infrastructure", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" },
  { name: "Reality", category: "Real Estate & Spaces", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { name: "Lifestyle", category: "Consumer & Electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800" }
];

const BrandScroll = () => {
  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-white font-black text-3xl md:text-5xl uppercase italic tracking-tight">
          Our Brands
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, i) => (
            <div 
              key={i} 
              className="aspect-square relative group overflow-hidden bg-zinc-900 border border-white/5"
            >
              <img 
                src={brand.img} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                alt={brand.name} 
              />
              
              <div className="absolute top-6 right-6">
                 <ArrowUpRight className="text-white/40 group-hover:text-white transition-colors" size={24} />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                 <div className="text-white font-black text-2xl uppercase italic leading-none mb-2">
                    {brand.name}
                 </div>
                 <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                    {brand.category}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandScroll;
