'use client';
import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';
import PageLoader from './PageLoader';
import { usePathname } from 'next/navigation';

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const lenisRef = useRef(null);
  // Show loader only on first visit of the session
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('dhyanora_loaded');
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('dhyanora_loaded', '1');
    setShowLoader(false);
  };

  const isImmersivePage = false;

  return (
    <div className="relative min-h-screen">
      {showLoader && <PageLoader onComplete={handleLoaderComplete} />}
      <div className="grain-overlay" />
      {!isImmersivePage && <Navbar />}
      <SocialSidebar />
      {children}
      {!isImmersivePage && <Footer />}
    </div>
  );
}

