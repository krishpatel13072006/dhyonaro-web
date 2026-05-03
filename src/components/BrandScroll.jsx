import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const brands = [
  { name: "Pramukh", category: "Metal Trading", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800" },
  { name: "Shreeji", category: "Infrastructure", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { name: "Techventures", category: "Electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800" },
  { name: "Bricks", category: "Construction", img: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800" },
  { name: "Mahantam", category: "Industrial Park", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800" },
  { name: "Scrap Pro", category: "International Export", img: "https://images.unsplash.com/photo-1577705998148-ebbd773d01f7?auto=format&fit=crop&q=80&w=800" },
  { name: "Logistics", category: "Supply Chain", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
  { name: "Foundry", category: "Raw Materials", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" }
];

const BrandScroll = () => {
  // Duplicate for seamless scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight">
          04+ Brands & Counting
        </h2>
      </div>

      <div className="flex">
        <motion.div 
          className="flex gap-4 px-4"
          animate={{ x: [0, -3200] }} 
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedBrands.map((brand, i) => (
            <div 
              key={i} 
              className="min-w-[300px] md:min-w-[400px] aspect-square relative group overflow-hidden bg-zinc-900 border border-white/5"
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
        </motion.div>
      </div>
    </section>
  );
};

export default BrandScroll;
