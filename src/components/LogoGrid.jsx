'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionTag from './SectionTag';

import logo1 from '@/logo grid/1.jpg';
import logo2 from '@/logo grid/2.jpg';
import logo3 from '@/logo grid/3.jpg';
import logo4 from '@/logo grid/4.jpg';
import logo5 from '@/logo grid/5.jpg';
import logo6 from '@/logo grid/6.jpg';
import logo7 from '@/logo grid/7.jpg';
import logo8 from '@/logo grid/8.jpg';
import logo9 from '@/logo grid/9.jpg';
import logo10 from '@/logo grid/10.jpg';
import logo11 from '@/logo grid/11.jpg';
import logo12 from '@/logo grid/12.jpg';

const logos = [
  { id: 1, src: logo1, alt: 'Brand 1' },
  { id: 2, src: logo2, alt: 'Brand 2' },
  { id: 3, src: logo3, alt: 'Brand 3' },
  { id: 4, src: logo4, alt: 'Brand 4' },
  { id: 5, src: logo5, alt: 'Brand 5' },
  { id: 6, src: logo6, alt: 'Brand 6' },
  { id: 7, src: logo7, alt: 'Brand 7' },
  { id: 8, src: logo8, alt: 'Brand 8' },
  { id: 9, src: logo9, alt: 'Brand 9' },
  { id: 10, src: logo10, alt: 'Brand 10' },
  { id: 11, src: logo11, alt: 'Brand 11' },
  { id: 12, src: logo12, alt: 'Brand 12' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const LogoGrid = () => {
  return (
    <section className="py-24 md:py-36 bg-white border-t border-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#172451 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#fad77e]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 flex flex-col items-center"
        >
          <SectionTag color="#172451">Trusted Network</SectionTag>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-[#172451] mb-6 tracking-tight">
            Brands We Work With
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Building strong ecosystems with industry leaders to deliver uncompromising quality and sustainable growth.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
        >
          {logos.map((logo) => {
            return (
              <motion.div
                key={logo.id}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.05 }}
                className="relative flex items-center justify-center p-6 md:p-8 bg-white border border-gray-100 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(250,215,126,0.5)] hover:border-[#fad77e] transition-all duration-300 w-[140px] sm:w-[180px] md:w-[220px] h-[140px] sm:h-[180px] md:h-[220px] group cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#172451] origin-bottom-left scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0 rounded-[2rem]" />
                
                <img
                  src={logo.src.src}
                  alt={logo.alt}
                  className="relative z-10 max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-110 brightness-100 group-hover:brightness-110 drop-shadow-sm group-hover:drop-shadow-lg"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoGrid;
