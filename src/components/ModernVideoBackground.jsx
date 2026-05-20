'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';

const ModernVideoBackground = ({ 
  videos = [], 
  overlayOpacity = 0.5,
  className = "" 
}) => {
  // Double-buffer: slot A and slot B alternate as active/preloading
  const [activeSlot, setActiveSlot] = useState('a');
  const [slotSrc, setSlotSrc] = useState({ a: videos[0] || '', b: videos[1] || '' });
  const [slotVisible, setSlotVisible] = useState({ a: true, b: false });

  const videoA = useRef(null);
  const videoB = useRef(null);
  const currentIndex = useRef(0);

  const getRef = (slot) => slot === 'a' ? videoA : videoB;
  const getInactiveSlot = (slot) => slot === 'a' ? 'b' : 'a';

  // Preload the next video into the inactive slot
  const preloadNext = useCallback((fromIndex) => {
    if (videos.length <= 1) return;
    const nextIndex = (fromIndex + 1) % videos.length;
    const inactiveSlot = getInactiveSlot(activeSlot);
    setSlotSrc(prev => ({ ...prev, [inactiveSlot]: videos[nextIndex] }));
    // Force the hidden video to start buffering
    const inactiveEl = getRef(inactiveSlot).current;
    if (inactiveEl) {
      inactiveEl.load();
    }
  }, [videos, activeSlot]);

  // On mount: start video A playing and preload video B
  useEffect(() => {
    if (!videos.length) return;
    const el = videoA.current;
    if (el) {
      el.play().catch(() => {});
    }
    // Preload next into slot B silently
    if (videos.length > 1 && videoB.current) {
      videoB.current.load();
    }
  }, []);

  const handleEnded = useCallback(() => {
    if (videos.length <= 1) return;

    const nextIndex = (currentIndex.current + 1) % videos.length;
    const inactiveSlot = getInactiveSlot(activeSlot);
    const inactiveEl = getRef(inactiveSlot).current;

    // The next video is already preloaded — start playing it immediately
    if (inactiveEl) {
      inactiveEl.play().catch(() => {});
    }

    // Crossfade: show the new slot, hide the old
    setSlotVisible({ [activeSlot]: false, [inactiveSlot]: true });
    setActiveSlot(inactiveSlot);
    currentIndex.current = nextIndex;

    // Now preload the one after next into the slot we just vacated
    const afterNextIndex = (nextIndex + 1) % videos.length;
    setSlotSrc(prev => ({ ...prev, [activeSlot]: videos[afterNextIndex] }));
    setTimeout(() => {
      const nowInactiveEl = getRef(activeSlot).current;
      if (nowInactiveEl) nowInactiveEl.load();
    }, 500); // small delay so crossfade can start first
  }, [activeSlot, videos]);

  if (!videos.length) return null;

  const noiseDataUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

  return (
    <div className={`absolute inset-0 overflow-hidden bg-[#050b14] ${className}`}>

      {/* Slot A */}
      <video
        ref={videoA}
        src={slotSrc.a}
        onEnded={activeSlot === 'a' ? handleEnded : undefined}
        muted
        playsInline
        preload="auto"
        loop={videos.length === 1}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: slotVisible.a ? 1 : 0,
          transition: 'opacity 800ms ease-in-out',
          zIndex: slotVisible.a ? 2 : 1,
        }}
      />

      {/* Slot B — preloaded and ready */}
      <video
        ref={videoB}
        src={slotSrc.b}
        onEnded={activeSlot === 'b' ? handleEnded : undefined}
        muted
        playsInline
        preload="auto"
        loop={videos.length === 1}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: slotVisible.b ? 1 : 0,
          transition: 'opacity 800ms ease-in-out',
          zIndex: slotVisible.b ? 2 : 1,
        }}
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
