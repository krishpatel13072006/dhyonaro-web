'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import img1 from '@/images/pramukh-import-export-home.avif';
import img2 from '@/images/pramukh-tech-venture.avif';
import img3 from '@/images/shreeji-infra-tech.avif';
import img4 from '@/images/global-sourcing-pramukh-import-export.jpg';
import img5 from '@/images/quality-assurance-pramukh-import-export.avif';
import img6 from '@/images/brics-home-page.jpg';
import img7 from '@/images/industrial-shed-companies-page.avif';
import img8 from '@/images/secure-tiles.avif';
import img9 from '@/images/brics.jpeg';

const ALL_IMAGES = [
  { src: img1, alt: "Modern electronics retail showroom showcasing premium gadgets" },
  { src: img2, alt: "Industrial logistics hub and supply chain management in Gujarat" },
  { src: img3, alt: "Sustainable metal scrap procurement and recycling facility" },
  { src: img4, alt: "High-quality industrial sheds and manufacturing workspace infrastructure" },
  { src: img5, alt: "Diversified industrial portfolio showcasing metal and tech divisions" },
  { src: img6, alt: "Premium construction materials and building supplies distribution" },
  { src: img7, alt: "Authorised brand retail partnership for consumer appliances" },
  { src: img8, alt: "Safe and secure industrial storage and warehousing facility" },
  { src: img9, alt: "Dhyanora Group's strategic industrial connectivity across Ahmedabad" }
];

// Quadruple the images to ensure seamless scrolling and full coverage
const col3_base = [...ALL_IMAGES.slice(2), ...ALL_IMAGES.slice(0, 2)];
const col4_base = [...ALL_IMAGES.slice(4), ...ALL_IMAGES.slice(0, 4)].reverse();

const COLUMN_1 = [...ALL_IMAGES, ...ALL_IMAGES, ...ALL_IMAGES, ...ALL_IMAGES];
const COLUMN_2 = [...[...ALL_IMAGES].reverse(), ...[...ALL_IMAGES].reverse(), ...[...ALL_IMAGES].reverse(), ...[...ALL_IMAGES].reverse()];
const COLUMN_3 = [...col3_base, ...col3_base, ...col3_base, ...col3_base];
const COLUMN_4 = [...col4_base, ...col4_base, ...col4_base, ...col4_base];
const COLUMN_5 = [...ALL_IMAGES, ...ALL_IMAGES, ...ALL_IMAGES, ...ALL_IMAGES];
const COLUMN_6 = [...[...ALL_IMAGES].reverse(), ...[...ALL_IMAGES].reverse(), ...[...ALL_IMAGES].reverse(), ...[...ALL_IMAGES].reverse()];

const MovingImageGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050b14] pointer-events-none select-none">
      <div className="absolute inset-0 opacity-100">
        <div 
          className="flex gap-4 w-[2000px] md:w-[150vw] h-[4000px] md:h-[250vh] -ml-[800px] md:-ml-[25vw] -mt-[1500px] md:-mt-[75vh] max-w-none"
          style={{ transform: 'rotate(-12deg)' }}
        >
          <GridColumn images={COLUMN_1} direction="up" speed={70} />
          <GridColumn images={COLUMN_2} direction="down" speed={90} />
          <GridColumn images={COLUMN_3} direction="up" speed={80} />
          <GridColumn images={COLUMN_4} direction="down" speed={100} />
          <GridColumn images={COLUMN_5} direction="up" speed={70} />
          <GridColumn images={COLUMN_6} direction="down" speed={84} />
        </div>
      </div>
      
      {/* Very light overlay just to slightly dim the images so white text can be read */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-[#050b14]/40 to-transparent" />
      <div className="absolute inset-0 bg-[#050b14]/30" />
    </div>
  );
};

const GridColumn = ({ images, direction, speed }) => {
  const yValues = direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%'];
  
  return (
    <div className="flex-1 relative">
      <motion.div 
        className="flex flex-col gap-4 absolute w-full"
        animate={{ y: yValues }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full aspect-[4/3] rounded-2xl overflow-hidden shrink-0 relative">
            <Image 
              src={src.src} 
              alt={src.alt} 
              fill 
              sizes="(max-width: 768px) 33vw, 20vw"
              className="object-cover" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingImageGrid;
