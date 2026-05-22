import React, { useState, useEffect, useRef } from 'react';

const CrossfadeVideo = ({ videos, posters = [], className, overlayOpacity = 0.6 }) => {
  const [index, setIndex] = useState(0);
  const [activeRefIdx, setActiveRefIdx] = useState(0);
  const videoRefs = [useRef(null), useRef(null)];
  const [isReady, setIsReady] = useState([false, false]);

  // Helper to resolve paths correctly regardless of base URL deployment
  const resolvePath = (path) => {
    if (!path) return '';
    if (path.startsWith('/') && !path.startsWith('http')) {
      const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
      return `${base}${path}`;
    }
    return path;
  };

  // Log all video paths for debugging in production console
  useEffect(() => {
    const resolved = videos.map(resolvePath);
    console.log('[VideoDebug] Initializing with:', resolved);
    if (!videos || videos.length === 0) {
      console.warn('[VideoDebug] No videos provided to CrossfadeVideo');
    }
  }, [videos]);

  // Handle video playback and transitions
  useEffect(() => {
    const activeVideo = videoRefs[activeRefIdx].current;
    if (!activeVideo) return;

    const playVideo = async () => {
      try {
        const onTimeUpdate = () => {
          if (activeVideo.currentTime > 0.25) {
            window.dispatchEvent(new CustomEvent('heroVideoReady'));
            activeVideo.removeEventListener('timeupdate', onTimeUpdate);
          }
        };
        activeVideo.addEventListener('timeupdate', onTimeUpdate);
        
        await activeVideo.play();
        console.log(`[VideoDebug] Success: Playing video ${index} (${resolvePath(videos[index])})`);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.warn(`[VideoDebug] Autoplay failed for video ${index}:`, err);
        }
      }
    };


    // We set isReady on loadeddata (first frame) to show the video ASAP
    if (activeVideo.readyState >= 2) {
      setIsReady(prev => {
        const next = [...prev];
        next[activeRefIdx] = true;
        return next;
      });
      playVideo();
    } else {
      const handleLoadedData = () => {
        setIsReady(prev => {
          const next = [...prev];
          next[activeRefIdx] = true;
          return next;
        });
        playVideo();
        activeVideo.removeEventListener('loadeddata', handleLoadedData);
      };
      activeVideo.addEventListener('loadeddata', handleLoadedData);
    }

    return () => {
      activeVideo.pause();
    };
  }, [index, activeRefIdx, videos]);

  const handleEnded = () => {
    if (videos.length <= 1) return;
    const nextIndex = (index + 1) % videos.length;
    const nextRefIdx = (activeRefIdx + 1) % 2;
    
    // Reset ready state for the next video
    setIsReady(prev => {
      const next = [...prev];
      next[nextRefIdx] = false;
      return next;
    });

    console.log(`[VideoDebug] Transitioning: ${index} -> ${nextIndex}`);
    setIndex(nextIndex);
    setActiveRefIdx(nextRefIdx);
  };

  const handleError = (idx, i) => {
    console.error(`[VideoDebug] Error loading video at index ${idx}:`, resolvePath(videos[idx]));
    if (videos.length > 1) {
      setTimeout(handleEnded, 3000); // Wait 3s before skipping failed video
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[#172451] ${className || ''}`}>
      {/* Background Poster / Fallback */}
      {posters[index] && (
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${resolvePath(posters[index])})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isReady[activeRefIdx] ? 0 : 1
          }}
        />
      )}

      {videoRefs.map((ref, i) => {
        const isCurrent = activeRefIdx === i;
        const isNext = (activeRefIdx + 1) % 2 === i;

        // Source logic
        let videoSrc = '';
        let targetIdx = index;
        if (isCurrent) {
          videoSrc = resolvePath(videos[index]);
          targetIdx = index;
        } else if (isNext && videos.length > 1) {
          videoSrc = resolvePath(videos[(index + 1) % videos.length]);
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
            // Increase preload to auto for better transitions
            preload={isCurrent ? "auto" : "metadata"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out will-change-opacity ${
              isCurrent && isReady[i] ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            onEnded={isCurrent ? handleEnded : undefined}
            onError={() => handleError(targetIdx, i)}
          />
        );
      })}

      {/* Solid overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ backgroundColor: `rgba(13, 27, 46, ${overlayOpacity})` }}
      />
    </div>
  );
};


export default CrossfadeVideo;


