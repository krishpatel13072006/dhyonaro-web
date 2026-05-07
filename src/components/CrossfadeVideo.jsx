import React, { useState, useEffect, useRef } from 'react';

const CrossfadeVideo = ({ videos, className, overlayOpacity = 0.6 }) => {
  const [index, setIndex] = useState(0);
  const [activeRefIdx, setActiveRefIdx] = useState(0);
  const [loadErrors, setLoadErrors] = useState([]);
  const videoRefs = [useRef(null), useRef(null)];

  // Log expected videos for debugging
  useEffect(() => {
    console.log('CrossfadeVideo: videos array:', videos);
  }, [videos]);

  // Load and play video when index/ref changes
  useEffect(() => {
    let isMounted = true;
    const activeVideo = videoRefs[activeRefIdx].current;

    if (activeVideo && isMounted) {
      // Explicitly call load if src changed
      activeVideo.load();
      const playPromise = activeVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log(`Video ${index} is playing`))
          .catch(e => {
            if (e.name !== 'AbortError') {
              console.warn('Autoplay blocked or interrupted:', e);
            }
          });
      }
    }

    return () => { isMounted = false; };
  }, [index, activeRefIdx, videos]);

  // Handle video end (for crossfade)
  const handleEnded = () => {
    if (videos.length <= 1) return;
    const nextIndex = (index + 1) % videos.length;
    const nextRefIdx = (activeRefIdx + 1) % 2;

    setIndex(nextIndex);
    setActiveRefIdx(nextRefIdx);
  };

  // Track load errors
  const handleError = (i) => {
    // Only care if the current video fails
    if (i === activeRefIdx) {
      const videoUrl = videos[index];
      console.error(`Video ${index} failed to load:`, videoUrl);
      setLoadErrors(prev => [...new Set([...prev, index])]);
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[#0d1b2e] ${className || ''}`}>
      {/* Two video elements for crossfade */}
      {videoRefs.map((ref, i) => {
        const isCurrent = activeRefIdx === i;
        const isNext = (activeRefIdx + 1) % 2 === i;

        // Determine which video source to assign
        let videoSrc = '';
        if (isCurrent) videoSrc = videos[index];
        else if (isNext && videos.length > 1) videoSrc = videos[(index + 1) % videos.length];

        return (
          <video
            key={i}
            ref={ref}
            src={videoSrc}
            muted
            autoPlay
            playsInline
            webkitPlaysInline={true}
            loop={videos.length === 1}
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            onEnded={isCurrent ? handleEnded : undefined}
            onError={() => handleError(i)}
          />
        );
      })}

      {/* Dark overlay for content readability */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ backgroundColor: `rgba(13, 27, 46, ${overlayOpacity})` }}
      />
    </div>
  );
};

export default CrossfadeVideo;
