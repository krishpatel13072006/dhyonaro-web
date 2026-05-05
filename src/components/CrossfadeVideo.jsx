import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CrossfadeVideo = ({ videos, className, overlayOpacity = 0.6 }) => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = [useRef(null), useRef(null)];
  const [activeRefIdx, setActiveRefIdx] = useState(0);

  useEffect(() => {
    const activeVideo = videoRefs[activeRefIdx].current;
    if (activeVideo) {
      activeVideo.src = videos[index];
      activeVideo.load();
      activeVideo.play().catch(e => console.log("Autoplay blocked or failed", e));
    }
  }, [index, activeRefIdx, videos]);

  const handleEnded = () => {
    const nextIndex = (index + 1) % videos.length;
    const nextRefIdx = (activeRefIdx + 1) % 2;
    
    // Set the source for the next video (hidden)
    const nextVideo = videoRefs[nextRefIdx].current;
    if (nextVideo) {
      nextVideo.src = videos[nextIndex];
      nextVideo.load();
      nextVideo.play().then(() => {
        // Once next video is playing, switch visibility
        setIndex(nextIndex);
        setActiveRefIdx(nextRefIdx);
      }).catch(e => {
        // Fallback if play fails
        setIndex(nextIndex);
        setActiveRefIdx(nextRefIdx);
      });
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video Elements */}
      {videoRefs.map((ref, i) => (
        <video
          key={i}
          ref={ref}
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            activeRefIdx === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          onEnded={activeRefIdx === i ? handleEnded : undefined}
        />
      ))}
      
      {/* Global Overlay */}
      <div 
        className="absolute inset-0 z-20" 
        style={{ backgroundColor: `rgba(13, 27, 46, ${overlayOpacity})` }} 
      />
    </div>
  );
};

export default CrossfadeVideo;
