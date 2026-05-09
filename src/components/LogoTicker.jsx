import React from 'react';
import { motion } from 'framer-motion';

import logo1 from '../logo grid/Screenshot 2026-05-09 113532.png';
import logo2 from '../logo grid/Screenshot 2026-05-09 113539.png';
import logo3 from '../logo grid/Screenshot 2026-05-09 113547.png';
import logo4 from '../logo grid/Screenshot 2026-05-09 113601.png';
import logo5 from '../logo grid/Screenshot 2026-05-09 113606.png';
import logo6 from '../logo grid/WhatsApp Image 2026-05-07 at 10.49.55 PM.jpeg';
import logo7 from '../logo grid/WhatsApp Image 2026-05-07 at 10.50.02 PM.jpeg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const LogoTicker = () => {
  return (
    <div className="overflow-hidden bg-[#f8fafc] border-y border-gray-100 py-10 select-none flex">
      <motion.div
        className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ width: "fit-content" }}
      >
        {/* Render the logos array twice. Moving by -50% exactly matches the width of one set of logos, creating an infinite scroll. */}
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="w-32 md:w-40 h-16 md:h-20 flex-shrink-0 flex items-center justify-center transition-all duration-500 cursor-pointer"
          >
            <img 
              src={logo} 
              alt="Brand Partner Logo" 
              className="max-w-full max-h-full object-contain mix-blend-multiply" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoTicker;
