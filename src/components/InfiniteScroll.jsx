import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  "Pramukh Import Export",
  "Pramukh Techventures",
  "Shreeji Infra"
];

const InfiniteScroll = () => {
  return (
    <div className="py-12 bg-white overflow-hidden whitespace-nowrap border-y border-navy/5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center w-max"
      >
        <div className="flex items-center gap-20 px-10">
          {companies.map((company, index) => (
            <span 
              key={index} 
              className="text-black/10 text-3xl md:text-5xl font-heading font-black uppercase italic hover:text-[#172451] active:text-blue-700 transition-colors duration-500 cursor-pointer"
            >
              {company}
            </span>
          ))}
        </div>
        {/* Content Block 2 (Identical for seamless loop) */}
        <div className="flex items-center gap-20 px-10">
          {companies.map((company, index) => (
            <span 
              key={`loop-${index}`} 
              className="text-black/10 text-3xl md:text-5xl font-heading font-black uppercase italic hover:text-[#172451] active:text-blue-700 transition-colors duration-500 cursor-pointer"
            >
              {company}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
