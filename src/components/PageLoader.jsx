'use client';
import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

/* ─── Global Loader Styles ─── */
const loaderStyles = `
  @keyframes loaderLetterIn {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes loaderSpin {
    to { transform: rotate(360deg); }
  }
  @keyframes loaderFadeSlide {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes quickProgress {
    from { width: 0%; }
    to   { width: 100%; }
  }
  @keyframes barWave {
    0%, 100% { transform: scaleY(0.15); }
    50% { transform: scaleY(1); }
  }
`;

/* ─── Dhyanora Logo Mark — brand favicon image ─── */
const LogoMark = () => {
  return (
    <img
      src="/icon.png"
      alt="Dhyanora Logo"
      style={{
        width: '110px',
        height: '110px',
        objectFit: 'contain',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    />
  );
};

/* ─── Animated letter-by-letter text ─── */
const AnimatedText = ({ text, delay = 0, className = '' }) => (
  <span className={className} aria-label={text} style={{ display: 'inline-flex', gap: '0.04em' }}>
    {text.split('').map((char, i) => (
      <span
        key={i}
        style={{
          display: 'inline-block',
          // Explicitly using longhand animation properties to prevent React fatal errors
          animationName: 'loaderLetterIn',
          animationDuration: '0.5s',
          animationTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
          animationFillMode: 'both',
          animationDelay: `${delay + i * 0.045}s`,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);

/* ─── Quick Page Transition ─── */
const QuickTransition = ({ onComplete }) => {
  const [phase, setPhase] = useState('in');

  useEffect(() => {
    const t = setTimeout(() => {
      setPhase('out');
      setTimeout(() => onComplete?.(), 500);
    }, 600);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: '#050b14',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity: phase === 'in' ? 1 : 0,
      transition: 'opacity 500ms cubic-bezier(0.4,0,0.2,1)',
      pointerEvents: phase === 'out' ? 'none' : 'all',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(23,36,81,0.8) 0%, transparent 80%)',
      }} />
      
      {/* Explicitly sized wrapper to guarantee perfect centering */}
      <div style={{ position: 'relative', width: 200, height: 200 }}>
        <div style={{
          position: 'absolute', inset: 0, // Locks strictly to all edges of the 200x200 box
          borderRadius: '50%',
          border: '1px solid rgba(250,215,126,0.1)',
          animation: 'loaderSpin 6s linear infinite',
        }}>
          <div style={{
            position: 'absolute', top: -3, left: '50%', transform: 'translateX(-50%)',
            width: 6, height: 6, borderRadius: '50%',
            background: '#FAD77E', boxShadow: '0 0 8px 2px rgba(250,215,126,0.5)',
          }} />
        </div>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          filter: 'drop-shadow(0 0 16px rgba(250,215,126,0.2))'
        }}>
          <LogoMark animate={true} />
        </div>
      </div>
      
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 2,
        background: 'rgba(255,255,255,0.04)',
      }}>
        <div style={{
          height: '100%', width: '100%',
          background: 'linear-gradient(90deg, #172451, #FAD77E)',
          animation: 'quickProgress 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
          boxShadow: '0 0 8px rgba(250,215,126,0.4)',
        }} />
      </div>
    </div>
  );
};

/* ─── Main PageLoader ─── */
const PageLoader = ({ onComplete, mode = 'full' }) => {
  const pathname = usePathname();
  const hasVideo = !pathname || pathname === '/' || pathname.startsWith('/companies');

  if (mode === 'quick') {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: loaderStyles }} />
        <QuickTransition onComplete={onComplete} />
      </>
    );
  }

  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const videoReadyRef = useRef(!hasVideo);
  const minTimeRef = useRef(false);

  // Safely memoize tryComplete to prevent exhaustive-deps warnings if requested by linter
  const tryComplete = () => {
    // Require BOTH: video readiness + minimum animation time.
    if (!videoReadyRef.current || !minTimeRef.current) return;

    setProgressWidth(100);
    setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        setDone(true);
        onComplete?.();
      }, 700);
    }, 300);
  };


  useEffect(() => {
    const t1 = setTimeout(() => setLogoVisible(true), 100);
    const t2 = setTimeout(() => setTextVisible(true), 500);
    const t3 = setTimeout(() => setProgressWidth(30), 300);
    const t4 = setTimeout(() => setProgressWidth(65), 900);
    const t5 = setTimeout(() => setProgressWidth(85), 1500);

    const onVideoReady = () => {
      videoReadyRef.current = true;
      minTimeRef.current = true; // Bypass minimum timer immediately when video is ready
      tryComplete();
    };
    window.addEventListener('heroVideoReady', onVideoReady);

    // Keep the loader animation for a minimum time, but DO NOT complete early.
    const minTimer = setTimeout(() => {
      minTimeRef.current = true;
      tryComplete();
    }, 1600);

    // Hard safety: if videoReady is still not fired (rare), keep loader up to 3.5s.
    // If it still hasn't fired by then, we still complete to prevent infinite lock.
    const hardTimeout = setTimeout(() => {
      videoReadyRef.current = true;
      minTimeRef.current = true;
      tryComplete();
    }, 3500);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearTimeout(t4); clearTimeout(t5);
      clearTimeout(minTimer); clearTimeout(hardTimeout);
      window.removeEventListener('heroVideoReady', onVideoReady);
    };
  }, []);


  if (done) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: loaderStyles }} />

      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99999,
          background: '#050b14',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: exiting ? 0 : 1,
          transform: exiting ? 'scale(1.02)' : 'scale(1)',
          transition: 'opacity 700ms cubic-bezier(0.4,0,0.2,1), transform 700ms cubic-bezier(0.4,0,0.2,1)',
          pointerEvents: exiting ? 'none' : 'all',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(23,36,81,0.7) 0%, transparent 80%)',
        }} />

        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28,
        }}>
          {/* Rings & Logo Wrapper - explicitly sized with absolute insets for mathematically perfect centering */}
          <div style={{
            position: 'relative',
            width: 210, height: 210,
          }}>
            {/* Outer Ring (210x210) locked to the edges */}
            <div style={{
              position: 'absolute',
              inset: 0, 
              borderRadius: '50%',
              border: '1px solid rgba(250,215,126,0.05)',
              animation: 'loaderSpin 14s linear infinite reverse',
              opacity: logoVisible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.4s',
            }}>
              <div style={{
                position: 'absolute', bottom: -3, left: '50%', transform: 'translateX(-50%)',
                width: 4, height: 4, borderRadius: '50%',
                background: 'rgba(250,215,126,0.5)',
              }} />
            </div>

            {/* Inner Ring (160x160) mathematically padded by exactly 25px on all sides */}
            <div style={{
              position: 'absolute',
              top: 25, left: 25, right: 25, bottom: 25, 
              borderRadius: '50%',
              border: '1px solid rgba(250,215,126,0.12)',
              animation: 'loaderSpin 8s linear infinite',
              opacity: logoVisible ? 1 : 0,
              transition: 'opacity 0.6s ease 0.2s',
            }}>
              <div style={{
                position: 'absolute', top: -3, left: '50%', transform: 'translateX(-50%)',
                width: 6, height: 6, borderRadius: '50%',
                background: '#FAD77E',
                boxShadow: '0 0 8px 2px rgba(250,215,126,0.6)',
              }} />
            </div>

            {/* Logo Mark perfectly centered in the middle of the 210x210 container */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 10,
              opacity: logoVisible ? 1 : 0,
              transform: logoVisible ? 'scale(1)' : 'scale(0.85)',
              transition: 'opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)',
              filter: logoVisible ? 'drop-shadow(0 0 20px rgba(250,215,126,0.25))' : 'none',
            }}>
              <LogoMark animate={logoVisible} />
            </div>
          </div>

          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            opacity: textVisible ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}>
            <div style={{
              fontFamily: 'var(--font-heading, "Plus Jakarta Sans", sans-serif)',
              fontSize: '1.35rem',
              fontWeight: 900,
              letterSpacing: '0.28em',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}>
              {textVisible && <AnimatedText text="DHYANORA" delay={0} />}
            </div>
            <div style={{
              fontFamily: 'var(--font-sans, Inter, sans-serif)',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.32em',
              color: 'rgba(250,215,126,0.7)',
              textTransform: 'uppercase',
              animation: textVisible ? 'loaderFadeSlide 0.6s 0.5s both' : 'none',
            }}>
              GROUP
            </div>
          </div>

          <div style={{
            width: textVisible ? 48 : 0,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(250,215,126,0.5), transparent)',
            transition: 'width 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s',
          }} />

          <div style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '0.58rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            animation: textVisible ? 'loaderFadeSlide 0.6s 0.8s both' : 'none',
          }}>
            Loading Experience
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: 2,
          background: 'rgba(255,255,255,0.04)',
        }}>
          <div style={{
            height: '100%',
            width: `${progressWidth}%`,
            background: 'linear-gradient(90deg, #172451, #FAD77E)',
            transition: 'width 0.8s cubic-bezier(0.22,1,0.36,1)',
            boxShadow: '0 0 8px rgba(250,215,126,0.5)',
          }} />
        </div>

        <div style={{
          position: 'absolute', bottom: 32, left: 0, right: 0,
          textAlign: 'center',
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontSize: '0.6rem',
          fontWeight: 500,
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.12)',
          textTransform: 'uppercase',
          animation: textVisible ? 'loaderFadeSlide 0.6s 1s both' : 'none',
        }}>
          Ahmedabad, Gujarat · Est. 2022
        </div>
      </div>
    </>
  );
};

export default PageLoader;
