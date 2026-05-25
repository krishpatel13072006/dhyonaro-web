'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';
import SectionTag from '@/components/SectionTag';
import ScrollReveal from '@/components/ScrollReveal';
import { useInView } from 'framer-motion';

export default function AboutVideoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  
  const isNearView = useInView(sectionRef, { margin: "800px 0px 800px 0px", once: true });
  const isInView = useInView(sectionRef, { amount: 0.3 });
  
  const [videoSrc, setVideoSrc] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const userPausedRef = useRef(false);

  useEffect(() => {
    if (isNearView) {
      setVideoSrc("/videos/main-video.mp4");
    }
  }, [isNearView]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      if (!userPausedRef.current && video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => console.warn("Scroll autoplay blocked:", err));
        }
      }
    } else {
      if (!video.paused) {
        video.pause();
      }
    }
  }, [isInView, videoSrc]);

  const handleVideoClick = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          userPausedRef.current = false;
          setIsPlaying(true);
        }).catch(err => console.warn("Play failed:", err));
      } else {
        userPausedRef.current = false;
        setIsPlaying(true);
      }
    } else {
      video.pause();
      userPausedRef.current = true;
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full aspect-video md:aspect-auto md:h-[85vh] bg-[#050b14] overflow-hidden flex flex-col justify-end"
    >
      {/* ── Background Video ── */}
      {videoSrc && (
        <video
          ref={videoRef}
          src={videoSrc}
          muted={isMuted}
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* ── Fallback Preloader ── */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050b14] z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-t-white border-white/20 rounded-full animate-spin" />
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Loading Showcase...</p>
          </div>
        </div>
      )}

      {/* ── No Gradients or Overlays ── */}

      {/* ── Clickable Play/Pause Overlay ── */}
      <div 
        onClick={handleVideoClick}
        className="absolute inset-0 z-[25] cursor-pointer flex items-center justify-center"
        aria-label="Toggle Play/Pause"
      >
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 hover:border-[#fad77e] hover:bg-white/15 transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.5)] group relative"
            >
              <span className="absolute inset-0 rounded-full border border-white/10 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700 pointer-events-none" />
              <span className="absolute -inset-1 rounded-full border border-dashed border-[#fad77e]/30 group-hover:rotate-45 transition-transform duration-700 pointer-events-none" />
              <Play size={32} className="text-white fill-white group-hover:text-[#fad77e] group-hover:fill-[#fad77e] ml-[2px] transition-colors pointer-events-none" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>



      {/* ── Absolute Right Bottom Corner: Audio Toggle Control ── */}
      {videoLoaded && (
        <ScrollReveal 
          y={24} 
          duration={0.8} 
          delay={0.2} 
          className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-30 pointer-events-none"
        >
          <button
            onClick={toggleMute}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/15 hover:border-[#fad77e] hover:bg-white/15 transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.4)] group cursor-pointer pointer-events-auto"
            aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          >
            {isMuted ? (
              <VolumeX size={20} className="text-white/75 group-hover:text-[#fad77e] transition-colors" />
            ) : (
              <Volume2 size={20} className="text-[#fad77e] transition-colors animate-pulse" />
            )}
          </button>
        </ScrollReveal>
      )}
    </section>
  );
}
