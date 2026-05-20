'use client';
import React, { useEffect, useState, useRef } from 'react';

/* ─── Dhyanora Logo Mark — 5 Rising Gold Bars inside a D shape ─── */
const LogoMark = ({ animate }) => {
  const bars = [
    { delay: 0,    height: 42 },
    { delay: 0.12, height: 56 },
    { delay: 0.24, height: 70 },
    { delay: 0.36, height: 58 },
    { delay: 0.48, height: 44 },
  ];

  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* D outer shape */}
      <path
        d="M8 8 H38 Q82 8 82 45 Q82 82 38 82 H8 Z"
        fill="#172451"
        style={{
          opacity: animate ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* 5 animated rising bars */}
      {bars.map((bar, i) => (
        <rect
          key={i}
          x={18 + i * 13}
          y={animate ? 45 - bar.height / 2 : 45}
          width={8}
          height={animate ? bar.height : 0}
          rx={2}
          fill="#FAD77E"
          style={{
            transition: animate
              ? `y 0.5s cubic-bezier(0.22,1,0.36,1) ${bar.delay}s, height 0.5s cubic-bezier(0.22,1,0.36,1) ${bar.delay}s, opacity 0.3s ease ${bar.delay}s`
              : 'none',
            opacity: animate ? 1 : 0,
          }}
        />
      ))}
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
          animation: `loaderLetterIn 0.5s cubic-bezier(0.22,1,0.36,1) both`,
          animationDelay: `${delay + i * 0.045}s`,
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);

/* ─── Main PageLoader ─── */
const PageLoader = ({ onComplete }) => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);
  const videoReadyRef = useRef(false);
  const minTimeRef = useRef(false);

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
    // Phase 1: Show logo bars
    const t1 = setTimeout(() => setLogoVisible(true), 100);
    // Phase 2: Show text
    const t2 = setTimeout(() => setTextVisible(true), 500);
    // Phase 3: Animate progress bar
    const t3 = setTimeout(() => setProgressWidth(30), 300);
    const t4 = setTimeout(() => setProgressWidth(65), 900);
    const t5 = setTimeout(() => setProgressWidth(85), 1500);

    // Listen for hero video ready signal from ModernVideoBackground
    const onVideoReady = () => {
      videoReadyRef.current = true;
      tryComplete();
    };
    window.addEventListener('heroVideoReady', onVideoReady);

    // Minimum display: 2 seconds
    const minTimer = setTimeout(() => {
      minTimeRef.current = true;
      tryComplete();
    }, 2000);

    // Absolute max: 4s (in case video never fires event e.g. no video)
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
  }, []); // eslint-disable-line

  if (done) return null;

  return (
    <>
      <style>{`
        @keyframes loaderLetterIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes loaderBarPulse {
          0%, 100% { transform: scaleY(1); }
          50%       { transform: scaleY(1.12); }
        }
        @keyframes loaderGlow {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        @keyframes loaderSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes loaderFadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

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
        {/* Background subtle radial glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(23,36,81,0.7) 0%, transparent 80%)',
        }} />

        {/* Orbiting ring */}
        <div style={{
          position: 'absolute',
          width: 160, height: 160,
          borderRadius: '50%',
          border: '1px solid rgba(250,215,126,0.12)',
          animation: 'loaderSpin 8s linear infinite',
          opacity: logoVisible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.2s',
        }}>
          {/* Small gold dot on ring */}
          <div style={{
            position: 'absolute', top: -3, left: '50%', transform: 'translateX(-50%)',
            width: 6, height: 6, borderRadius: '50%',
            background: '#FAD77E',
            boxShadow: '0 0 8px 2px rgba(250,215,126,0.6)',
          }} />
        </div>

        {/* Outer ring (slower) */}
        <div style={{
          position: 'absolute',
          width: 210, height: 210,
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

        {/* Logo container */}
        <div style={{
          position: 'relative', zIndex: 2,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28,
        }}>
          {/* D Logo Mark with animated bars */}
          <div style={{
            opacity: logoVisible ? 1 : 0,
            transform: logoVisible ? 'scale(1)' : 'scale(0.85)',
            transition: 'opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)',
            filter: logoVisible ? 'drop-shadow(0 0 20px rgba(250,215,126,0.25))' : 'none',
          }}>
            <LogoMark animate={logoVisible} />
          </div>

          {/* Brand text */}
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

          {/* Thin divider line */}
          <div style={{
            width: textVisible ? 48 : 0,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(250,215,126,0.5), transparent)',
            transition: 'width 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s',
          }} />

          {/* Loading label */}
          <div style={{
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
            fontSize: '0.58rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            animation: textVisible ? 'loaderFadeSlide 0.6s 0.8s both' : 'none',
            animationFillMode: 'both',
          }}>
            Loading Experience
          </div>
        </div>

        {/* Progress bar at bottom */}
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

        {/* Bottom tagline */}
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
