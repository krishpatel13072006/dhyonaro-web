'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ModernVideoBackground = ({ 
  videos = [], 
  overlayOpacity = 0.5,
  className = "" 
}) => {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        // Do not call .load() on mount as the browser naturally starts loading the HTML src.
        videoElement.play().catch(err => {
          console.warn("[VideoDebug] Autoplay blocked:", err);
        });
      } else {
        videoElement.load();
        videoElement.play().catch(err => {
          console.warn("[VideoDebug] Play blocked:", err);
        });
      }
    }
  }, [index]);

  const handleEnded = () => {
    if (videos.length <= 1) return;
    setIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[#050b14] ${className}`}>
      {videos.length > 0 && (
        <video
          ref={videoRef}
          src={videos[index]}
          onEnded={handleEnded}
          muted
          playsInline
          autoPlay
          loop={videos.length === 1}
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        >
          Your browser does not support the video tag.
        </video>
      )}

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
