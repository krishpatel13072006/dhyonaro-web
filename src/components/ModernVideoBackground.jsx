import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ModernVideoBackground = ({ 
  videos = [], 
  overlayOpacity = 0.5,
  className = "" 
}) => {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef([]);

  // Handle path resolution for different environments
  const resolvePath = (path) => {
    if (!path) return '';
    if (path.startsWith('/') && !path.startsWith('http')) {
      const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
      return `${base}${path}`;
    }
    return path;
  };

  // Manage playing and pausing the stacked videos
  useEffect(() => {
    videos.forEach((_, i) => {
      const videoElement = videoRefs.current[i];
      if (videoElement) {
        if (i === index) {
          // Play the currently active video from the beginning
          videoElement.currentTime = 0; 
          videoElement.play().catch(err => console.warn("Autoplay blocked:", err));
        } else {
          // Let the outgoing video play during the 1.5s fade out, 
          // then pause it to save CPU and battery
          setTimeout(() => {
             if (videoElement) videoElement.pause();
          }, 1500);
        }
      }
    });
  }, [index, videos]);

  const handleEnded = (videoIndex) => {
    // Only trigger next video if the one that ended is the currently active one
    if (videoIndex === index && videos.length > 1) {
      setIndex((prev) => (prev + 1) % videos.length);
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[#050b14] ${className}`}>
      
      {/* 1. The Stacked Video Layers */}
      {videos.map((videoPath, i) => (
        <motion.video
          key={videoPath}
          ref={(el) => (videoRefs.current[i] = el)}
          src={resolvePath(videoPath)}
          initial={{ opacity: 0 }}
          // Crossfade magic: Only the active video fades to 1, rest fade to 0
          animate={{ opacity: index === i ? 1 : 0 }} 
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onEnded={() => handleEnded(i)}
          muted
          playsInline
          // Loop continuously if there is only 1 video in the array
          loop={videos.length === 1} 
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}

      {/* 2. Premium Overlays */}
      
      {/* Subtle Grainy Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-10"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />

      {/* Cinematic Gradient Mesh */}
      <div className="absolute inset-0 z-20 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at center, transparent 0%, rgba(5, 11, 20, ${overlayOpacity}) 100%),
                       linear-gradient(to bottom, rgba(5, 11, 20, 0.4) 0%, rgba(5, 11, 20, ${overlayOpacity + 0.2}) 100%)`
        }} 
      />
    </div>
  );
};

export default ModernVideoBackground;
