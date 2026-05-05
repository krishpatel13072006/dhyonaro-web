import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxVertical = ({ items }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div ref={targetRef} className="h-[100vh] overflow-hidden flex gap-4 md:gap-8 px-4 md:px-20">
      <motion.div style={{ y: y1 }} className="flex-1 flex flex-col gap-4 md:gap-8">
        {items.slice(0, 4).map((item, i) => (
          <div key={i} className="aspect-square bg-off-white border border-navy/5 overflow-hidden group relative">
            <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-none shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div style={{ y: y2 }} className="flex-1 flex flex-col gap-4 md:gap-8 mt-40">
        {items.slice(4, 8).map((item, i) => (
          <div key={i} className="aspect-square bg-off-white border border-navy/5 overflow-hidden group">
            <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-none shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const ParallaxHorizontal = ({ items }) => {
  return (
    <div className="py-20 overflow-hidden bg-white">
      <motion.div 
        className="flex gap-4 md:gap-8 px-4"
        animate={{ x: [0, -2000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="min-w-[300px] md:min-w-[500px] h-[300px] md:h-[400px] bg-off-white border border-navy/5 overflow-hidden relative group">
            <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt="" />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all" />
            <div className="absolute bottom-8 left-8">
               <h4 className="text-white font-black uppercase italic text-2xl mb-2">{item.name}</h4>
               <p className="text-white/60 text-[10px] font-black uppercase tracking-widest">{item.category}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const CompanyNameTicker = ({ names }) => {
  return (
    <div className="py-12 border-y border-navy/5 overflow-hidden bg-white">
      <motion.div 
        className="flex gap-20 items-center whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...names, ...names, ...names].map((name, i) => (
          <span 
            key={i} 
            className="text-4xl md:text-6xl font-heading font-black text-[#0d1b2e] opacity-5 uppercase italic hover:text-[#1a56db] hover:opacity-100 transition-all duration-500 cursor-pointer"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
