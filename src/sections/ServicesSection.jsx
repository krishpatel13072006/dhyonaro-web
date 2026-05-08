import React from 'react';
import { motion } from 'framer-motion';

const segments = [
  {
    title: "Industry",
    img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Realty",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Lifestyle",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Layout from Image */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="order-2 md:order-1">
             <span className="text-white/40 text-sm font-medium">Yearly Growth across Brands</span>
          </div>
          <div className="order-1 md:order-2 text-left md:text-right">
            <h2 className="text-4xl md:text-6xl font-heading font-black leading-none uppercase">
              Our Brand <br />
              <span className="text-white">Segments</span>
            </h2>
          </div>
        </div>

        {/* Grid Layout from Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {segments.map((segment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-zinc-900 rounded-sm">
                <img 
                  src={segment.img} 
                  alt={segment.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-white transition-colors group-hover:text-gold">
                {segment.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
