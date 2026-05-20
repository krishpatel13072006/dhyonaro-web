'use client';
import React, { useEffect, useState, useRef } from 'react';

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

/* ─── Dhyanora Logo Mark — mathematically proper lining & perfect clipping ─── */
const LogoMark = ({ animate }) => {
  // Outer boundary of the proper 'D' (Flat horizontal top/bottom, not circular)
  const outerD = "M 15 15 H 60 C 110 15, 110 105, 60 105 H 15 Z";
  
  // Inner boundary of the 'D' (The "hole" where the bars live, with proper DIAGONAL top)
  const innerD = "M 35 90 H 60 C 90 90, 90 60, 75 50 L 35 25 Z";
  
  // Composite path creates the solid blue shape with a transparent hole cutout inside
  const compositeD = `${outerD} ${innerD}`;

  // 5 bars perfectly distributed inside the width of the inner hole (x: 35 to 80)
  const bars = [
    { x: 37, delay: '0s' },
    { x: 46, delay: '0.1s' },
    { x: 55, delay: '0.2s' },
    { x: 64, delay: '0.3s' },
    { x: 73, delay: '0.4s' },
  ];

  return (
    <svg
      width="150"
      height="150"
      viewBox="-6 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* The clip path strictly enforces that the bars can NEVER overflow the inner D boundary */}
        <clipPath id="innerHoleClip">
          <path d={innerD} clipRule="evenodd" />
        </clipPath>
      </defs>

      {/* The main solid blue D with the inner hole mathematically cut out (fillRule="evenodd") */}
      <path d={compositeD} fill="#172451" fillRule="evenodd" />

      {/* The animated bars, placed precisely inside the clip path */}
      <g clipPath="url(#innerHoleClip)">
        {bars.map((bar, i) => {
          return (
            <rect
              key={i}
              x={bar.x}
              y={10} // Starts high above the hole to ensure full coverage when scaling
              width={7} // Exact fit for the inner width with 2px gaps
              height={80} // Reaches exactly down to y=90 (the bottom flat baseline of the inner hole)
              fill="#FAD77E"
              style={{
                // Anchor the animation precisely to the bottom baseline of the inner 'D' (y=90)
                transformOrigin: `${bar.x + 3.5}px 90px`,
                opacity: animate ? 1 : 0,
                transition: 'opacity 0.4s ease',
                
                // Continuous wave pulse using explicit longhand animation properties to prevent React conflicts
                animationName: animate ? 'barWave' : 'none',
                animationDuration: '1.2s',
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: bar.delay,
                animationFillMode: 'both',
              }}
            />
          );
        })}
      </g>
    </svg>
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
  const videoReadyRef = useRef(false);
  const minTimeRef = useRef(false);

  // Safely memoize tryComplete to prevent exhaustive-deps warnings if requested by linter
  const tryComplete = () => {
    if (videoReadyRef.current && minTimeRef.current) {
      setProgressWidth(100);
      setTimeout(() => {
        setExiting(true);
        setTimeout(() => {
          setDone(true);
          onComplete?.();
        }, 700);
      }, 300);
    }
  };

  useEffect(() => {
    const t1 = setTimeout(() => setLogoVisible(true), 100);
    const t2 = setTimeout(() => setTextVisible(true), 500);
    const t3 = setTimeout(() => setProgressWidth(30), 300);
    const t4 = setTimeout(() => setProgressWidth(65), 900);
    const t5 = setTimeout(() => setProgressWidth(85), 1500);

    const onVideoReady = () => {
      videoReadyRef.current = true;
      tryComplete();
    };
    window.addEventListener('heroVideoReady', onVideoReady);

    const minTimer = setTimeout(() => {
      minTimeRef.current = true;
      tryComplete();
    }, 2000);

    const maxTimer = setTimeout(() => {
      videoReadyRef.current = true;
      minTimeRef.current = true;
      tryComplete();
    }, 4000);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearTimeout(t4); clearTimeout(t5);
      clearTimeout(minTimer); clearTimeout(maxTimer);
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
