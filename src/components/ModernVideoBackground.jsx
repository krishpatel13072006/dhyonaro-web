'use client';
import React, { useEffect, useRef, useCallback } from 'react';

const ModernVideoBackground = ({ 
  videos = [], 
  overlayOpacity = 0.5,
  className = "" 
}) => {
  const videoA = useRef(null);
  const videoB = useRef(null);

  // Track state via refs — NO useState to avoid stale closure / batching bugs
  const activeSlotRef = useRef('a');     // which slot is currently visible
  const currentIndexRef = useRef(0);     // index of currently playing video
  const isTransitioningRef = useRef(false);

  // Direct DOM helpers — faster than React state
  const getEl = (slot) => slot === 'a' ? videoA.current : videoB.current;
  const getOtherSlot = (slot) => slot === 'a' ? 'b' : 'a';

  useEffect(() => {
    if (!videos.length) return;
    const elA = videoA.current;
    const elB = videoB.current;
    if (!elA || !elB) return;

    // --- Initial setup via direct DOM manipulation ---
    // Slot A: load first video, keep hidden (opacity 0) initially until playing
    elA.src = videos[0];
    elA.style.opacity = '0';
    elA.style.zIndex = '2';
    elA.load();

    let readyFired = false;
    const signalReady = () => {
      if (readyFired) return;
      readyFired = true;
      elA.style.opacity = '1';
      window.dispatchEvent(new CustomEvent('heroVideoReady'));
    };

    const handleTimeUpdate = () => {
      if (elA.currentTime > 0.08) {
        signalReady();
        elA.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };

    elA.addEventListener('timeupdate', handleTimeUpdate);

    const handleFallback = () => {
      setTimeout(() => {
        if (!readyFired) {
          signalReady();
          elA.removeEventListener('timeupdate', handleTimeUpdate);
        }
      }, 1000);
    };

    elA.addEventListener('canplay', handleFallback, { once: true });

    elA.play().catch(() => {});

    // Slot B: silently preload the second video, completely hidden
    if (videos.length > 1) {
      elB.src = videos[1 % videos.length];
      elB.style.opacity = '0';
      elB.style.zIndex = '1';
      elB.load();
    }

    return () => {
      elA.removeEventListener('timeupdate', handleTimeUpdate);
      elA.removeEventListener('canplay', handleFallback);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleVideoEnd = useCallback(() => {
    if (videos.length <= 1) return;
    // Guard: prevent double-firing if onEnded fires on both elements
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const currentSlot = activeSlotRef.current;
    const nextSlot = getOtherSlot(currentSlot);
    const currentEl = getEl(currentSlot);
    const nextEl = getEl(nextSlot);
    if (!currentEl || !nextEl) return;

    // Step 1: Bring next video to front and start playing immediately
    // It's already preloaded so this is instant — no buffering wait
    nextEl.style.zIndex = '2';
    nextEl.play().catch(() => {});

    // Step 2: Fade in next, fade out current simultaneously
    // Small rAF delay ensures z-index change is painted before opacity starts
    requestAnimationFrame(() => {
      nextEl.style.opacity = '1';
      currentEl.style.opacity = '0';
    });

    // Update active tracking refs immediately
    const nextIndex = (currentIndexRef.current + 1) % videos.length;
    activeSlotRef.current = nextSlot;
    currentIndexRef.current = nextIndex;

    // Step 3: After crossfade completes, push current slot to background
    // and preload the video that comes after next
    setTimeout(() => {
      currentEl.style.zIndex = '1';
      currentEl.pause();

      const afterNextIndex = (nextIndex + 1) % videos.length;
      currentEl.src = videos[afterNextIndex];
      currentEl.load();

      isTransitioningRef.current = false;
    }, 900); // slightly longer than the CSS transition duration

  }, [videos]);

  if (!videos.length) return null;

  const noiseDataUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[#050b14] ${className}`}>

      {/* Slot A */}
      <video
        ref={videoA}
        muted
        playsInline
        preload="auto"
        onEnded={() => { if (activeSlotRef.current === 'a') handleVideoEnd(); }}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0, zIndex: 2, transition: 'opacity 800ms ease-in-out' }}
      />

      {/* Slot B — stays hidden until crossfade */}
      <video
        ref={videoB}
        muted
        playsInline
        preload="auto"
        onEnded={() => { if (activeSlotRef.current === 'b') handleVideoEnd(); }}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0, zIndex: 1, transition: 'opacity 800ms ease-in-out' }}
      />

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: noiseDataUrl, opacity: 0.03, zIndex: 10 }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, transparent 0%, rgba(5, 11, 20, ${overlayOpacity}) 100%),
                       linear-gradient(to bottom, rgba(5, 11, 20, 0.4) 0%, rgba(5, 11, 20, ${overlayOpacity + 0.2}) 100%)`,
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default ModernVideoBackground;
