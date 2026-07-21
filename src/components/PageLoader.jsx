'use client';
import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

/* ─── Global Loader Styles ─── */
const loaderStyles = `
  @keyframes loaderLetterIn {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes loaderTypewriter {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes loaderSpin {
    from { transform: rotate(0deg); }
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
  @keyframes loaderDropBounce {
    0% { transform: translateY(-100vh) scale(1); opacity: 1; }
    60% { transform: translateY(0) scale(1.05); opacity: 1; }
    75% { transform: translateY(-15px) scale(0.98); opacity: 1; }
    85% { transform: translateY(0) scale(1.02); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 1; }
  }
  @keyframes dotPulse {
    0%, 100% { box-shadow: 0 0 6px 2px rgba(250,215,126,0.5); transform: scale(1); }
    50% { box-shadow: 0 0 12px 4px rgba(250,215,126,0.8); transform: scale(1.15); }
  }

  /* Responsive Preloading Animation (Home Page) */
  .home-loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .home-loader-text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    opacity: 0;
    max-height: 0;
    padding-top: 0;
    transition: max-height 1.2s cubic-bezier(0.25, 1, 0.5, 1), padding-top 1.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease;
  }
  .home-loader-text-wrapper.show {
    opacity: 1;
    max-height: 120px;
    padding-top: 16px;
  }

  @media (min-width: 768px) {
    .home-loader-container {
      flex-direction: row;
    }
    .home-loader-text-wrapper {
      align-items: flex-start;
      text-align: left;
      max-height: none;
      width: 0;
      padding-left: 0;
      padding-top: 0;
      overflow: hidden;
      transition: width 1.2s cubic-bezier(0.25, 1, 0.5, 1), padding-left 1.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease;
    }
    .home-loader-text-wrapper.show {
      max-height: none;
      width: 360px;
      padding-left: 16px;
      padding-top: 0;
      overflow: visible;
    }
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
        transform: 'translateX(4px)', // Shift to the right slightly for visual balance
      }}
    />
  );
};

/* ─── Animated letter-by-letter text ─── */
const AnimatedText = ({ text, delay = 0, className = '', animation = 'slide' }) => {
  const isTypewriter = animation === 'typewriter';
  return (
    <span className={className} aria-label={text} style={{ display: 'inline-flex', gap: '0.04em' }}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            // Explicitly using longhand animation properties to prevent React fatal errors
            animationName: isTypewriter ? 'loaderTypewriter' : 'loaderLetterIn',
            animationDuration: isTypewriter ? '0.05s' : '0.5s',
            animationTimingFunction: isTypewriter ? 'step-end' : 'cubic-bezier(0.22,1,0.36,1)',
            animationFillMode: 'both',
            animationDelay: `${delay + i * (isTypewriter ? 0.08 : 0.045)}s`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

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
      <div style={{ position: 'relative', width: 240, height: 240 }}>
        {/* Outermost Ring */}
        <div style={{
          position: 'absolute', inset: 0, 
          borderRadius: '50%',
          border: '1px dashed rgba(250,215,126,0.2)',
          animation: 'loaderSpin 10s linear infinite reverse',
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: -3, transform: 'translateY(-50%)',
            width: 6, height: 6, borderRadius: '50%',
            background: '#FAD77E', boxShadow: '0 0 10px 2px rgba(250,215,126,0.8)',
          }} />
        </div>
        {/* Inner Ring */}
        <div style={{
          position: 'absolute', top: 20, left: 20, right: 20, bottom: 20,
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

/* ─── Default PageLoader (For other pages) ─── */
const DefaultPageLoader = ({ onComplete, mode = 'full' }) => {
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
    const t3 = setTimeout(() => setProgressWidth(30), 500);
    const t4 = setTimeout(() => setProgressWidth(65), 1200);
    const t5 = setTimeout(() => setProgressWidth(85), 2000);

    const onVideoReady = () => {
      videoReadyRef.current = true;
      // Removed the minTime bypass so the animation is always shown for at least the minTimer duration
      tryComplete();
    };
    window.addEventListener('heroVideoReady', onVideoReady);

    // Keep the loader animation for a STRICT minimum time (4.5s) to allow users to appreciate it
    const minTimer = setTimeout(() => {
      minTimeRef.current = true;
      tryComplete();
    }, 4500);

    // Hard safety: if videoReady is still not fired, keep loader up to 8.0s.
    // If it still hasn't fired by then, we complete to prevent infinite lock.
    const hardTimeout = setTimeout(() => {
      videoReadyRef.current = true;
      minTimeRef.current = true;
      tryComplete();
    }, 8000);

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
            width: 260, height: 260,
          }}>
            {/* Rings Wrapper: Handles the fade-in so the Spin animation on the children works flawlessly */}
            <div style={{
              position: 'absolute', inset: 0,
              opacity: logoVisible ? 1 : 0, transition: 'opacity 0.8s ease 0.4s',
            }}>
              {/* Outermost New Ring */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px dashed rgba(250,215,126,0.2)', animation: 'loaderSpin 20s linear infinite', transformOrigin: 'center center' }}>
                <div style={{ position: 'absolute', top: '50%', right: -4, transform: 'translateY(-50%)', width: 8, height: 8, borderRadius: '50%', background: '#FAD77E', boxShadow: '0 0 16px 4px rgba(250,215,126,0.9)' }} />
              </div>
              {/* Middle Ring */}
              <div style={{ position: 'absolute', top: 25, left: 25, right: 25, bottom: 25, borderRadius: '50%', border: '1px dashed rgba(250,215,126,0.15)', animation: 'loaderSpin 14s linear infinite reverse', transformOrigin: 'center center' }}>
                <div style={{ position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', background: '#FAD77E', boxShadow: '0 0 12px 3px rgba(250,215,126,0.7)' }} />
              </div>
              {/* Inner Ring */}
              <div style={{ position: 'absolute', top: 50, left: 50, right: 50, bottom: 50, borderRadius: '50%', border: '1px dashed rgba(250,215,126,0.2)', animation: 'loaderSpin 8s linear infinite', transformOrigin: 'center center' }}>
                <div style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', background: '#FAD77E', boxShadow: '0 0 16px 4px rgba(250,215,126,0.9)' }} />
              </div>
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

/* ─── Home Page Loader (Drop -> Type -> Rings) ─── */
const HomePageLoader = ({ onComplete }) => {
  const [phase, setPhase] = useState('drop'); // 'drop', 'type', 'rings', 'exit', 'done'
  const [progressWidth, setProgressWidth] = useState(0);
  const videoReadyRef = useRef(false);
  const minTimeRef = useRef(false);

  const tryComplete = () => {
    if (!videoReadyRef.current || !minTimeRef.current) return;
    setPhase('exit');
    setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 700);
  };

  useEffect(() => {
    // 1. Logo drops in perfectly centered (takes 1.2s to land gracefully)
    // 2. Rings appear at 1200ms
    const t1 = setTimeout(() => setPhase('rings'), 1200);
    // 3. Shift left & Typing starts at 2400ms (after rings are fully visible)
    const t2 = setTimeout(() => setPhase('type'), 2400);
    
    // Progress bar milestones
    const t3 = setTimeout(() => setProgressWidth(30), 1200);
    const t4 = setTimeout(() => setProgressWidth(65), 3000);
    const t5 = setTimeout(() => setProgressWidth(85), 4000);

    const onVideoReady = () => {
      videoReadyRef.current = true;
      tryComplete();
    };
    window.addEventListener('heroVideoReady', onVideoReady);

    // Keep the loader animation for a STRICT minimum time (7.0s) for home page sequence
    const minTimer = setTimeout(() => {
      minTimeRef.current = true;
      tryComplete();
    }, 7000);

    const hardTimeout = setTimeout(() => {
      videoReadyRef.current = true;
      minTimeRef.current = true;
      tryComplete();
    }, 10000);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      clearTimeout(t4); clearTimeout(t5);
      clearTimeout(minTimer); clearTimeout(hardTimeout);
      window.removeEventListener('heroVideoReady', onVideoReady);
    };
  }, []);

  if (phase === 'done') return null;

  const showText = phase === 'type' || phase === 'exit';
  const showRings = phase === 'rings' || phase === 'type' || phase === 'exit';
  const isExiting = phase === 'exit';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: loaderStyles }} />
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 99999,
          background: '#050b14', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          opacity: isExiting ? 0 : 1, transform: isExiting ? 'scale(1.02)' : 'scale(1)',
          transition: 'opacity 700ms cubic-bezier(0.4,0,0.2,1), transform 700ms cubic-bezier(0.4,0,0.2,1)',
          pointerEvents: isExiting ? 'none' : 'all',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(23,36,81,0.7) 0%, transparent 80%)' }} />

        {/* The main logo/text/rings block */}
        <div className="home-loader-container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Logo & Rings Wrapper */}
          <div style={{
            position: 'relative', width: 260, height: 260, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            {/* The Logo Drops In */}
            <div style={{
              animation: 'loaderDropBounce 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards'
            }}>
              <LogoMark />
            </div>

            {/* Rings Fade In Later */}
            <div style={{
              position: 'absolute', inset: 0,
              opacity: showRings ? 1 : 0, transition: 'opacity 1s ease'
            }}>
              {/* Outermost Ring */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px dashed rgba(250,215,126,0.2)', animation: 'loaderSpin 20s linear infinite', transformOrigin: 'center center' }}>
                <div style={{ position: 'absolute', top: '50%', right: -4, transform: 'translateY(-50%)', width: 8, height: 8, borderRadius: '50%', background: '#FAD77E', animation: 'dotPulse 2s ease-in-out infinite' }} />
                <div style={{ position: 'absolute', top: '50%', left: -3, transform: 'translateY(-50%)', width: 5, height: 5, borderRadius: '50%', background: 'rgba(250,215,126,0.6)', animation: 'dotPulse 2s ease-in-out infinite 1s' }} />
              </div>
              {/* Middle Ring */}
              <div style={{ position: 'absolute', top: 25, left: 25, right: 25, bottom: 25, borderRadius: '50%', border: '1px dashed rgba(250,215,126,0.15)', animation: 'loaderSpin 14s linear infinite reverse', transformOrigin: 'center center' }}>
                <div style={{ position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', background: '#FAD77E', animation: 'dotPulse 2.5s ease-in-out infinite 0.3s' }} />
                <div style={{ position: 'absolute', top: -3, left: '50%', transform: 'translateX(-50%)', width: 5, height: 5, borderRadius: '50%', background: 'rgba(250,215,126,0.6)', animation: 'dotPulse 2.5s ease-in-out infinite 1.3s' }} />
              </div>
              {/* Inner Ring */}
              <div style={{ position: 'absolute', top: 50, left: 50, right: 50, bottom: 50, borderRadius: '50%', border: '1px dashed rgba(250,215,126,0.2)', animation: 'loaderSpin 8s linear infinite', transformOrigin: 'center center' }}>
                <div style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', width: 8, height: 8, borderRadius: '50%', background: '#FAD77E', animation: 'dotPulse 1.8s ease-in-out infinite 0.6s' }} />
                <div style={{ position: 'absolute', bottom: -3, left: '50%', transform: 'translateX(-50%)', width: 5, height: 5, borderRadius: '50%', background: 'rgba(250,215,126,0.6)', animation: 'dotPulse 1.8s ease-in-out infinite 1.6s' }} />
              </div>
            </div>
          </div>

          {/* DHYANORA TEXT to the Right/Below */}
          <div className={`home-loader-text-wrapper ${showText ? 'show' : ''}`}>
             <div style={{
               fontFamily: 'var(--font-heading, "Plus Jakarta Sans", sans-serif)',
               fontSize: '1.7rem', fontWeight: 900, letterSpacing: '0.24em', color: '#ffffff',
               textTransform: 'uppercase', whiteSpace: 'nowrap'
             }}>
               {showText && <AnimatedText text="DHYANORA" delay={0} animation="typewriter" />}
             </div>
             <div style={{
               fontFamily: 'var(--font-sans, Inter, sans-serif)',
               fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.32em', color: 'rgba(250,215,126,0.7)',
               textTransform: 'uppercase',
               animation: showText ? 'loaderFadeSlide 0.6s 0.8s both' : 'none',
             }}>
               GROUP
             </div>
          </div>
        </div>
        
        {/* Progress bar at bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.04)' }}>
          <div style={{ height: '100%', width: `${progressWidth}%`, background: 'linear-gradient(90deg, #172451, #FAD77E)', transition: 'width 0.8s cubic-bezier(0.22,1,0.36,1)', boxShadow: '0 0 8px rgba(250,215,126,0.5)' }} />
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
          animation: showText ? 'loaderFadeSlide 0.6s 1s both' : 'none',
        }}>
          Ahmedabad, Gujarat · Est. 2022
        </div>
      </div>
    </>
  );
};

/* ─── Router Component ─── */
const PageLoaderRouter = ({ onComplete, mode = 'full' }) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  if (isHomePage) {
    return <HomePageLoader onComplete={onComplete} mode={mode} />;
  }
  
  return <DefaultPageLoader onComplete={onComplete} mode={mode} />;
};

export default PageLoaderRouter;
