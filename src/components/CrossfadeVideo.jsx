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
      const currentSrc = activeVideo.getAttribute('src');
      if (currentSrc !== videos[index]) {
        console.log(`Setting video ${index} src:`, videos[index]);
        activeVideo.src = videos[index];
        activeVideo.load();
      }

      const playPromise = activeVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log(`Video ${index} is playing`))
          .catch(e => console.warn('Autoplay blocked, waiting for interaction:', e));
      }
    }

    return () => { isMounted = false; };
  }, [index, activeRefIdx, videos]);

  // Handle video end (for crossfade)
  const handleEnded = () => {
    const nextIndex = (index + 1) % videos.length;
    const nextRefIdx = (activeRefIdx + 1) % 2;

    const nextVideo = videoRefs[nextRefIdx].current;
    if (nextVideo) {
      if (nextVideo.getAttribute('src') !== videos[nextIndex]) {
        nextVideo.src = videos[nextIndex];
        nextVideo.load();
      }

      nextVideo.play().then(() => {
        setIndex(nextIndex);
        setActiveRefIdx(nextRefIdx);
      }).catch(e => {
        console.error('Failed to play next video, switching:', e);
        setIndex(nextIndex);
        setActiveRefIdx(nextRefIdx);
      });
    }
  };

  // Track load errors
  const handleError = (e, idx) => {
    const videoUrl = videos[idx];
    console.error(`Video ${idx} failed to load:`, videoUrl, e.target?.error);
    setLoadErrors(prev => [...prev, { idx, url: videoUrl }]);
  };

  // Log successful loads
  const handleLoadedData = (idx) => {
    console.log(`Video ${idx} loaded successfully:`, videos[idx]);
  };

  return (
    <div className={`relative inset-0 overflow-hidden bg-navy-deep ${className || ''}`}>
      {/* Two video elements for crossfade */}
      {videoRefs.map((ref, i) => (
        <video
          key={i}
          ref={ref}
          muted
          autoPlay
          playsInline
          webkit-playsinline
          loop={videos.length === 1}
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
            activeRefIdx === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          onEnded={videos.length > 1 && activeRefIdx === i ? handleEnded : undefined}
          onError={(e) => handleError(e, i)}
          onLoadedData={() => handleLoadedData(i)}
        />
      ))}

      {/* Error fallback overlay */}
      {loadErrors.length > 0 && (
        <div className="absolute inset-0 z-5 flex items-center justify-center bg-[#0d1b2e]">
          <p className="text-white/50 text-sm">Video unavailable</p>
        </div>
      )}

      {/* Dark overlay for content readability */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ backgroundColor: `rgba(13, 27, 46, ${overlayOpacity})` }}
      />
    </div>
  );
};

export default CrossfadeVideo;
