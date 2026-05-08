import React from 'react';
import { motion } from 'framer-motion';

import img1 from '../images/pramukh import export home.avif';
import img2 from '../images/pramukh tech venture.avif';
import img3 from '../images/shreeji infra tech.avif';
import img4 from '../images/global sourcing pramukh import export.jpg';
import img5 from '../images/quality assurance pramukh import export.avif';
import img6 from '../images/brics home page.avif';
import img7 from '../images/industrial shed companies page.avif';
import img8 from '../images/secure tiles.avif';

const ALL_IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];

// Duplicate the images to ensure seamless scrolling
const COLUMN_1 = [...ALL_IMAGES, ...ALL_IMAGES];
const COLUMN_2 = [...ALL_IMAGES].reverse().concat([...ALL_IMAGES].reverse());
const COLUMN_3 = [...ALL_IMAGES.slice(2), ...ALL_IMAGES.slice(0, 2), ...ALL_IMAGES.slice(2), ...ALL_IMAGES.slice(0, 2), ...ALL_IMAGES.slice(2), ...ALL_IMAGES.slice(0, 2), ...ALL_IMAGES.slice(2), ...ALL_IMAGES.slice(0, 2)];
const COLUMN_4 = [...ALL_IMAGES.slice(4), ...ALL_IMAGES.slice(0, 4), ...ALL_IMAGES.slice(4), ...ALL_IMAGES.slice(0, 4), ...ALL_IMAGES.slice(4), ...ALL_IMAGES.slice(0, 4), ...ALL_IMAGES.slice(4), ...ALL_IMAGES.slice(0, 4)].reverse();
const COLUMN_5 = [...ALL_IMAGES, ...ALL_IMAGES];

const MovingImageGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050b14] pointer-events-none select-none">
      <div className="absolute inset-0 opacity-100">
        <div 
          className="flex gap-4 min-w-[150vw] h-[250vh] -ml-[25vw] -mt-[75vh]"
          style={{ transform: 'rotate(-12deg)' }}
        >
          <GridColumn images={COLUMN_1} direction="up" speed={35} />
          <GridColumn images={COLUMN_2} direction="down" speed={45} />
          <GridColumn images={COLUMN_3} direction="up" speed={40} />
          <GridColumn images={COLUMN_4} direction="down" speed={50} />
          <GridColumn images={COLUMN_5} direction="up" speed={35} />
          <GridColumn images={COLUMN_2} direction="down" speed={42} />
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
          <div key={i} className="w-full aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MovingImageGrid;
