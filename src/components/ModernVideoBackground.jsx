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
    // 1. If there's only one video, let the browser handle looping
    if (videos.length <= 1) return;

    // 2. Determine the next intended video
    const nextIndex = (videoIndex + 1) % videos.length;
    const nextVideo = videoRefs.current[nextIndex];

    // 3. Check if next video is ready (HAVE_ENOUGH_DATA or better)
    if (nextVideo && nextVideo.readyState >= 3) {
      setIndex(nextIndex);
    } else {
      // Not ready: Loop the current video instead of switching to a frozen frame
      const currentVideo = videoRefs.current[videoIndex];
      if (currentVideo) {
        currentVideo.currentTime = 0;
        currentVideo.play();
        console.log(`[VideoDebug] Next video (${nextIndex}) not ready. Looping video ${videoIndex}.`);
      }
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[#050b14] ${className}`}>
      
      {/* 1. The Stacked Video Layers */}
      {videos.map((videoPath, i) => {
        const isCurrent = index === i;
        const isNext = (index + 1) % videos.length === i;

        return (
          <motion.video
            key={videoPath}
            ref={(el) => (videoRefs.current[i] = el)}
            src={resolvePath(videoPath)}
            initial={{ opacity: 0 }}
            animate={{ opacity: isCurrent ? 1 : 0 }} 
            transition={{ duration: 1.5, ease: "easeInOut" }}
            onEnded={() => handleEnded(i)}
            muted
            playsInline
            loop={videos.length === 1} 
            preload={isCurrent || isNext ? "auto" : "metadata"}
            className="absolute inset-0 w-full h-full object-cover"
          />
        );
      })}

      {/* 2. Premium Overlays */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-10"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

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
