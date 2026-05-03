import React from 'react';
import { motion } from 'framer-motion';

const GlobalReach = () => {
  const avatars = [
    { id: 1, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", x: "15%", y: "20%", size: "w-10 h-10 md:w-14 md:h-14" },
    { id: 2, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", x: "65%", y: "15%", size: "w-14 h-14 md:w-20 md:h-20" },
    { id: 3, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", x: "82%", y: "45%", size: "w-12 h-12 md:w-16 md:h-16" },
    { id: 4, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200", x: "10%", y: "55%", size: "w-16 h-16 md:w-24 md:h-24" },
    { id: 5, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200", x: "25%", y: "75%", size: "w-8 h-8 md:w-12 md:h-12" },
    { id: 6, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200", x: "70%", y: "65%", size: "w-12 h-12 md:w-16 md:h-16" },
    { id: 7, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", x: "40%", y: "10%", size: "w-10 h-10 md:w-14 md:h-14" },
    { id: 8, img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200", x: "90%", y: "75%", size: "w-10 h-10 md:w-14 md:h-14" },
  ];

  // Generate particles in a circular halo around the globe
  const particles = Array.from({ length: 150 }).map((_, i) => {
    const angle = Math.random() * Math.PI * 2;
    // Globe radius is roughly 32.5% of container. We want particles from 28% to 55% radius.
    const radius = 28 + Math.random() * 27; 
    return {
      id: i,
      size: Math.random() * 3 + 1,
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    };
  });

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-black/90 backdrop-blur-xl flex items-center justify-center">
      <div className="relative w-full max-w-[900px] aspect-square flex items-center justify-center">
        
        {/* Circular Halo Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: '#C1B09C', // Beige particles
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Globe Container for Fixed Lighting */}
        <div className="relative w-[85%] md:w-[70%] aspect-square">
          
          {/* The Globe Core (Tilted for realistic Earth axis) */}
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{ backgroundColor: '#FAF8F5', rotate: '-15deg' }} 
          >
            {/* Seamless Continents Overlay */}
            <motion.div 
              className="absolute top-0 bottom-0 left-0 w-[200%]"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              <div 
                className="absolute inset-0"
                style={{
                  backgroundColor: '#C1B09C', // Solid beige continents
                  maskImage: `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
                  WebkitMaskImage: `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
                  maskSize: '50% auto',
                  WebkitMaskSize: '50% auto',
                  maskRepeat: 'repeat-x',
                  WebkitMaskRepeat: 'repeat-x',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                }}
              />
              
              {/* Avatars - First Copy */}
              {avatars.map((avatar) => (
                 <div 
                   key={`a1-${avatar.id}`} 
                   className={`absolute ${avatar.size} z-10 hover:z-50`} 
                   style={{ 
                     left: `calc(${parseFloat(avatar.x) * 0.5}%)`, 
                     top: avatar.y,
                     transform: 'translate(-50%, -50%)'
                   }}
                 >
                   <div 
                     className="w-full h-full rounded-full border-[3px] border-white shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.6] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                     style={{ rotate: '15deg' }} // Counter-rotate to stay upright
                   >
                     <img src={avatar.img} className="w-full h-full object-cover pointer-events-none" alt="Global Network" />
                   </div>
                 </div>
              ))}
              
              {/* Avatars - Second Copy (Seamless Loop) */}
              {avatars.map((avatar) => (
                 <div 
                   key={`a2-${avatar.id}`} 
                   className={`absolute ${avatar.size} z-10 hover:z-50`} 
                   style={{ 
                     left: `calc(${parseFloat(avatar.x) * 0.5 + 50}%)`, 
                     top: avatar.y,
                     transform: 'translate(-50%, -50%)'
                   }}
                 >
                   <div 
                     className="w-full h-full rounded-full border-[3px] border-white shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.6] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                     style={{ rotate: '15deg' }} // Counter-rotate to stay upright
                   >
                     <img src={avatar.img} className="w-full h-full object-cover pointer-events-none" alt="Global Network" />
                   </div>
                 </div>
              ))}
            </motion.div>
          </div>
          
          {/* 3D Sphere Inner Shadow (Fixed, not tilted, so lighting stays natural) */}
          <div className="absolute inset-0 rounded-full shadow-[inset_-40px_-30px_80px_rgba(0,0,0,0.12),inset_20px_20px_50px_rgba(255,255,255,0.9)] pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default GlobalReach;
