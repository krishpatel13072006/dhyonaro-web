import React, { useState, useEffect, useRef } from 'react';

const CrossfadeVideo = ({ videos, className, overlayOpacity = 0.6 }) => {
  const [index, setIndex] = useState(0);
  const [activeRefIdx, setActiveRefIdx] = useState(0);
  const videoRefs = [useRef(null), useRef(null)];
  const [isLoaded, setIsLoaded] = useState([false, false]);

  // Log all video paths for debugging in production console
  useEffect(() => {
    console.log('[VideoDebug] Initializing with:', videos);
    if (!videos || videos.length === 0) {
      console.warn('[VideoDebug] No videos provided to CrossfadeVideo');
    }
  }, [videos]);

  // Handle video playback and transitions
  useEffect(() => {
    const activeVideo = videoRefs[activeRefIdx].current;
    if (!activeVideo) return;

    // Reset loaded state for new source
    const currentRefIdx = activeRefIdx;
    
    const playVideo = async () => {
      try {
        await activeVideo.play();
        console.log(`[VideoDebug] Success: Playing video index ${index}`);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.warn(`[VideoDebug] Autoplay failed for video ${index}:`, err);
          // If autoplay fails, it might be due to user interaction policy
          // We can't do much, but we ensure it's muted
          activeVideo.muted = true;
        }
      }
    };

    if (activeVideo.readyState >= 3) {
      playVideo();
    } else {
      const handleCanPlay = () => {
        playVideo();
        activeVideo.removeEventListener('canplay', handleCanPlay);
      };
      activeVideo.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      activeVideo.pause();
    };
  }, [index, activeRefIdx]);

  const handleEnded = () => {
    if (videos.length <= 1) return;
    const nextIndex = (index + 1) % videos.length;
    const nextRefIdx = (activeRefIdx + 1) % 2;
    
    console.log(`[VideoDebug] Transitioning: ${index} -> ${nextIndex}`);
    setIndex(nextIndex);
    setActiveRefIdx(nextRefIdx);
  };

  const handleError = (idx, i) => {
    console.error(`[VideoDebug] Error loading video at index ${idx} (ref ${i}):`, videos[idx]);
    // If it fails, try to skip to the next one if available
    if (videos.length > 1) {
      setTimeout(handleEnded, 2000);
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[#0d1b2e] ${className || ''}`}>
      {videoRefs.map((ref, i) => {
        const isCurrent = activeRefIdx === i;
        const isNext = (activeRefIdx + 1) % 2 === i;

        // Source logic
        let videoSrc = '';
        let targetIdx = index;
        if (isCurrent) {
          videoSrc = videos[index];
          targetIdx = index;
        } else if (isNext && videos.length > 1) {
          videoSrc = videos[(index + 1) % videos.length];
          targetIdx = (index + 1) % videos.length;
        }

        return (
          <video
            key={i}
            ref={ref}
            src={videoSrc}
            muted
            autoPlay
            playsInline
            webkit-playsinline="true"
            loop={videos.length === 1}
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            onEnded={isCurrent ? handleEnded : undefined}
            onError={() => handleError(targetIdx, i)}
          />
        );
      })}

      {/* Solid fallback if needed or overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ backgroundColor: `rgba(13, 27, 46, ${overlayOpacity})` }}
      />
    </div>
  );
};

export default CrossfadeVideo;

