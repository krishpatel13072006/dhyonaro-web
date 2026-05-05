import React, { useState, useRef, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, ChevronRight, Building2, Globe2, ShieldCheck, Truck, Cpu, HeadphonesIcon, Settings2, Zap, MapPin, HardHat, CheckCircle2 } from 'lucide-react';
import { CompanyNameTicker } from '../components/ParallaxShowcase';
import IndustrialOrbit from '../components/IndustrialOrbit';
import ScrollReveal, { ScrollRevealGroup } from '../components/ScrollReveal';

import heroVideo from '../images/hero section home.webm';
import keyMaterialsImg from '../images/keymaterial pramukh import export.webp';
import globalSourcingImg from '../images/global sourcing pramukh import export.jpg';
import qualityAssuranceImg from '../images/quality assurance pramukh import export.avif';
import shreejiMainImg from '../images/pramukh infratech main.avif';
import focusedVisionImg from '../images/focused vision.jpg';
import sectorDiversityImg from '../images/sector diversity.avif';
import gujaratRoutesImg from '../images/gujarat routes.avif';
import longTermThinkingImg from '../images/long term thinking.avif';
import industrialShedImg from '../images/industrial shed companies page.avif';
import secureTilesImg from '../images/secure tiles.avif';
import techVentureMainImg from '../images/pramukh tech venture.avif';
import pramukhImportExportMainImg from '../images/pramukh import export home.avif';
import shreejiInfraTechImg from '../images/shreeji infra tech.avif';

const videos = [heroVideo];

/* ─── Count-up hook ─── */
const useCountUp = (target, duration = 1800, active = false) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
};

/* ─── Animated stat tile with count-up ─── */
const StatTile = ({ num, suffix = '', label, desc, active, noCount }) => {
  const count = useCountUp(noCount ? 0 : parseInt(num), 1800, active);
  const displayed = noCount ? num : count;
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
      whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(26,86,219,0.18)' }}
      className="relative p-7 rounded-2xl bg-white/8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 cursor-default overflow-hidden group backdrop-blur-sm"
    >
      {/* Animated corner glow */}
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#1a56db]/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {/* Shine sweep */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      {/* Left accent bar */}
      <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-gradient-to-b from-blue-400 to-blue-400/20" />
      <p className="text-5xl font-heading font-black text-white mb-1 tabular-nums pl-2">
        {displayed}{suffix}
      </p>
      <p className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-2 pl-2">{label}</p>
      <p className="text-white/40 text-xs leading-relaxed pl-2">{desc}</p>
    </motion.div>
  );
};



/* ─── Staggered container ─── */
const Stagger = ({ children, className = '' }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-40px' }}
    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
  >
    {children}
  </motion.div>
);

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Feature card — matches reference: clean image, accent label, bold title, CTA ─── */
const FeatureCard = ({ img, icon: Icon, accent, title, desc, dark = false, sector }) => (
  <motion.div
    variants={cardVariant}
    whileHover={{ y: -6, boxShadow: dark ? '0 20px 48px rgba(0,0,0,0.45)' : '0 20px 48px rgba(0,0,0,0.10)' }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
    className={`group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 ${dark
      ? 'bg-[#0f2040] border border-white/8 hover:border-blue-400/40'
      : 'bg-white border border-gray-100 shadow-sm hover:shadow-2xl'
      }`}
  >
    {/* ── Image ── */}
    <div className="relative overflow-hidden rounded-xl m-3 mb-0" style={{ height: '210px' }}>
      <img
        src={img} alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-xl"
      />
    </div>

    {/* ── Body ── */}
    <div className="flex flex-col flex-grow px-5 pt-4 pb-5">
      {/* Small accent label (like date in reference) */}
      <p className="text-[11px] font-semibold mb-2" style={{ color: accent }}>{sector}</p>

      <h4 className={`font-heading font-black text-[1.05rem] leading-snug mb-2 ${dark ? 'text-white' : 'text-[#111827]'
        }`}>
        {title}
      </h4>

      <p className={`text-sm leading-relaxed flex-grow ${dark ? 'text-white/45' : 'text-gray-500'
        }`}>{desc}</p>

      {/* CTA — yellow-style pill from reference */}
      <div className="mt-4">
        <button
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all duration-200 hover:brightness-95 active:scale-95"
          style={{ background: accent, color: '#fff' }}
        >
          Read More
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  </motion.div>
);

const Companies = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const handleVideoEnd = () => setCurrentVideoIndex(prev => (prev + 1) % videos.length);

  /* refs for overview counter-style number reveal */
  const overviewRef = useRef(null);
  const overviewInView = useInView(overviewRef, { once: true, margin: '-80px' });

  return (
    <>
      <SEO title="Our Companies | Dhyanora Group" description="Explore Dhyanora Group's strategic portfolio spanning metal scrap trading, electronics retail, and industrial infrastructure in Gujarat." />
      <main className="bg-white overflow-x-hidden">

        {/* ════ VIDEO HERO ════ */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0d1b2e]">
          <div className="absolute inset-0">
            <video key={videos[currentVideoIndex]} autoPlay muted playsInline onEnded={handleVideoEnd}
              className="absolute inset-0 w-full h-full object-cover opacity-55">
              <source src={videos[currentVideoIndex]} type="video/webm" />
            </video>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 z-10" />

          <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a56db]/80 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Building2 size={14} /> Our Strategic Portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-8xl font-heading font-black text-white uppercase leading-none mb-6"
            >
              Diversified Expertise.<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}>
                Unified Vision.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white/60 text-lg font-light max-w-2xl mx-auto"
            >
              Three core verticals. One focused vision. Building high-quality businesses that create tangible value for Gujarat's economy.
            </motion.p>
          </div>
        </section>

        <CompanyNameTicker names={["Dhyanora Group", "Industrial Excellence", "Strategic Portfolio", "Global Vision"]} />

        {/* ════ OVERVIEW — animated bg + counters ════ */}
        <section ref={overviewRef} className="py-24 md:py-36 bg-[#0a1628] border-t border-white/5 relative overflow-hidden">

          {/* Animated SVG grid */}
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#60a5fa" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Glowing orbs */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1a56db] rounded-full blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px] pointer-events-none"
          />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/30 text-sm mb-16">
              <Link to="/" className="hover:text-white transition-colors"><Home size={15} /></Link>
              <ChevronRight size={13} />
              <span className="font-bold text-white/60">Our Companies</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left — headline */}
              <div>
                <ScrollReveal x={-60} y={0}>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-7 h-0.5 bg-blue-400" />
                    <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.22em]">A Diversified Collective</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-heading font-black text-white leading-[0.95] mb-8">
                    Each<br />
                    Business.<br />
                    <motion.span
                      initial={{ color: '#ffffff' }}
                      animate={overviewInView ? { color: '#60a5fa' } : {}}
                      transition={{ duration: 1.2, delay: 0.6 }}
                    >
                      One Standard.
                    </motion.span>
                  </h2>
                </ScrollReveal>

                <ScrollReveal x={-40} y={0} delay={0.15}>
                  <p className="text-white/50 text-lg leading-relaxed max-w-md">
                    Every entity within Dhyanora Group operates with independence but shares a unified commitment to quality and integrity. Each vertical is built on deep sector expertise and disciplined operations.
                  </p>
                </ScrollReveal>

                <ScrollReveal x={-40} y={0} delay={0.25}>
                  <Link to="/companies" className="mt-8 inline-flex items-center gap-2 px-7 py-3 bg-[#1a56db] hover:bg-blue-500 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 group shadow-lg shadow-blue-900/40">
                    View All Sectors <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </ScrollReveal>
              </div>

              <ScrollRevealGroup staggerDelay={0.15} x={40} y={0} className="grid grid-cols-2 gap-5">
                <StatTile active={overviewInView} num={4} suffix="+" label="Business Verticals" desc="Spanning core industrial sectors of Gujarat" />
                <StatTile active={overviewInView} num={2026} suffix="" label="Year Founded" desc="Built on discipline from day one" />
                <StatTile active={overviewInView} num={100} suffix="%" label="Quality Promise" desc="Non-negotiable across every division" />
                <StatTile active={overviewInView} num={50} suffix="+" label="Strategic Partners" desc="Trusted suppliers & clients across India" />
              </ScrollRevealGroup>
            </div>
          </div>
        </section>

        {/* ════ ORBIT ════ */}
        <IndustrialOrbit />

        {/* ════ SECTOR 1 — PRAMUKH IMPORT EXPORT ════ */}
          <ScrollReveal y={50} x={0}>
            <div className="relative w-full h-[55vh] min-h-[380px] overflow-hidden group">
              <img
                src={pramukhImportExportMainImg}
                alt="Metal Scrap Trading"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.4s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/75" />

              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex items-center gap-3 text-blue-300 font-black tracking-widest uppercase text-xs mb-3"
                  >
                    <span className="w-8 h-px bg-blue-300" /> Sector 01
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-4xl md:text-6xl font-heading font-black text-white leading-tight"
                  >
                    Pramukh Import Export
                  </motion.h3>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl flex items-center gap-3 text-white shrink-0"
                >
                  <HardHat size={20} className="text-blue-300" />
                  <div>
                    <p className="font-bold text-sm">Industrial Trading</p>
                    <p className="text-blue-200 text-xs">Ferrous &amp; Non-Ferrous Specialists</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
            <ScrollReveal delay={0.05} y={30} x={0}>
              <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mb-12">
                Facilitating the procurement and distribution of high-grade ferrous and non-ferrous metal scrap for India's leading manufacturers — with a global sourcing network and uncompromising quality standards.
              </p>
            </ScrollReveal>

            <ScrollRevealGroup staggerDelay={0.15} y={50} x={0} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Settings2, title: 'Key Materials', sector: 'Trading', img: keyMaterialsImg, desc: 'MS Scrap, Cast Iron, Melting Scrap, Copper, Aluminium, Brass, and Stainless Steel — sourced to exacting grade standards.' },
                { icon: Globe2, title: 'Global Sourcing', sector: 'Sourcing', img: globalSourcingImg, desc: 'Leveraging a vast international and domestic supplier network for steady, reliable procurement across geographies.' },
                { icon: ShieldCheck, title: 'Quality Assurance', sector: 'Quality', img: qualityAssuranceImg, desc: 'Every batch meticulously graded and verified for purity and strict industrial compliance before delivery.' },
              ].map((f) => (
                <FeatureCard key={f.title} icon={f.icon} accent="#1a56db" img={f.img} title={f.title} desc={f.desc} sector={f.sector} />
              ))}
            </ScrollRevealGroup>

            <ScrollReveal delay={0.1} y={30} x={0}>
              <Link to="/companies/import-export" className="btn-blue group inline-flex">
                Learn More <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

        {/* ════ SECTOR 2 — PRAMUKH TECHVENTURES ════ */}
        <section className="bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">

            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <ScrollReveal x={-50} y={0}>
                <div className="flex items-center gap-3 text-red-600 font-black tracking-widest uppercase text-xs mb-4">
                  <span className="w-8 h-px bg-red-600" /> Sector 02
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-black text-[#0d1b2e]">Pramukh Techventures</h3>
              </ScrollReveal>
              <ScrollReveal x={50} y={0} delay={0.1}>
                <Link to="/companies/tech-venture" className="inline-flex items-center gap-2 px-7 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all duration-300 group shadow-lg shadow-red-600/30 shrink-0">
                  Visit Store <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Big image — tall and full-column */}
            <ScrollReveal delay={0.05} y={40} x={0}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-[60vh] min-h-[420px] mb-12 group">
                <img
                  src={techVentureMainImg}
                  alt="Pramukh Techventures"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.4s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Authorized badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-xs text-red-600 shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" /> Authorized Retailer
                </div>

                {/* Bottom quote */}
                <div className="absolute bottom-8 left-8 right-8 max-w-2xl">
                  <motion.blockquote
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-xl md:text-2xl font-heading font-black text-white leading-snug italic"
                  >
                    "Bringing the world's most reliable technology to the households of Gujarat through an experience of trust."
                  </motion.blockquote>
                </div>
              </div>
            </ScrollReveal>

            <ScrollRevealGroup staggerDelay={0.15} y={50} x={0} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Cpu, title: 'Product Categories', sector: 'Electronics', img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800', desc: '4K Entertainment Systems, Smart Home Appliances, Connected Mobility, Professional Audio.' },
                { icon: CheckCircle2, title: 'Absolute Authenticity', sector: 'Genuine', img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=800', desc: '100% genuine premium products backed with full manufacturer warranties and after-sales care.' },
                { icon: HeadphonesIcon, title: 'Expert Guidance', sector: 'Support', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', desc: 'Staff trained to match customers with technology that solves real needs, not just trends.' },
              ].map((f) => (
                <FeatureCard key={f.title} icon={f.icon} accent="#dc2626" img={f.img} title={f.title} desc={f.desc} sector={f.sector} />
              ))}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ════ SECTOR 3 — SHREEJI INFRA (REDESIGNED) ════ */}
        <section id="shreeji-infra" className="relative overflow-hidden">

          {/* --- FULL BLEED HERO SECTION --- */}
          <div className="relative w-full min-h-[85vh] lg:min-h-[800px] flex items-end pb-12 lg:pb-20">
            {/* Massive Edge-to-Edge Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={shreejiMainImg}
                alt="Large scale industrial park development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
            </div>

            {/* Hero Content */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col lg:flex-row gap-12 lg:items-end justify-between">
                {/* Left side: Main Intro (Slide from Left) */}
                <ScrollReveal x={-60} y={0} className="max-w-3xl text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[2px] w-12 bg-blue-500"></div>
                    <span className="text-blue-400 font-bold tracking-[0.25em] uppercase text-sm">
                      Shreeji Infra
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black mb-6 leading-[1.1] tracking-tight text-blue-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                    Architecting the future of industry.
                  </h2>
                  <p className="text-xl sm:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                    Developing state-of-the-art industrial ecosystems built to meet the rigorous standards of modern manufacturing and logistics.
                  </p>
                </ScrollReveal>

                {/* Right side: Floating Flagship Card (Slide from Right) */}
                <ScrollReveal delay={0.3} x={60} y={0} className="w-full lg:w-[400px] shrink-0">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] -mr-10 -mt-10 pointer-events-none"></div>

                    <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                      Flagship Asset
                    </span>

                    <h3 className="text-3xl font-heading font-black text-white mb-2">
                      Mahantam Industrial Park
                    </h3>

                    <div className="flex items-center gap-2 text-slate-300 font-medium mb-8">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <span>Sanand, Gujarat</span>
                    </div>

                    <Link to="/contact" className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg group-hover:shadow-blue-500/25">
                      Enquire Industrial Space
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </ScrollReveal>
            </div>
          </div>

          {/* --- BENTO GRID FEATURE BOXES --- */}
          <div className="bg-[#f8fafc] py-24 lg:py-32 relative overflow-hidden">
            {/* Industrial Texture / Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0d1b2e 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#fafbfc] to-transparent" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

              <ScrollReveal x={-40} y={0} className="mb-20">
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" /> Ecosystem Advantages
                  </div>
                  <h3 className="text-4xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight leading-none">
                    A foundation built<br /><span className="text-blue-600">for industrial scale.</span>
                  </h3>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[320px]">
                
                {/* Box 1: Industrial Sheds */}
                <ScrollReveal delay={0.1} x={-50} y={0}>
                  <div className="bg-white rounded-[2rem] p-10 h-full flex flex-col justify-center border border-slate-100 shadow-sm group hover:shadow-md transition-all duration-500">
                    <h3 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight leading-tight">
                      Industrial<br/>Sheds
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">
                      Custom-built manufacturing spaces with optimized clear heights and reinforced flooring systems.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Box 2: Image */}
                <ScrollReveal delay={0.2} y={50} x={0}>
                  <div className="rounded-[2rem] overflow-hidden h-full relative group shadow-sm">
                    <img 
                      src={industrialShedImg} 
                      alt="Industrial Sheds" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                  </div>
                </ScrollReveal>

                {/* Box 3: Strategic Connectivity (Large) */}
                <ScrollReveal delay={0.3} x={60} y={0} className="lg:col-span-2 lg:row-span-2 relative group rounded-[2rem] overflow-hidden shadow-lg h-[500px] lg:h-full">
                  <img 
                    src={shreejiInfraTechImg} 
                    alt="Shreeji Industrial Infrastructure" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />

                  {/* Floating White Card */}
                  <div className="absolute top-4 left-4 right-4 lg:right-auto lg:w-3/5 bg-white rounded-[1.8rem] p-10 shadow-2xl border border-white/20 transition-all duration-500 group-hover:-translate-y-1">
                    <h3 className="text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-6 tracking-tight leading-tight">
                      Strategic<br/>Connectivity
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">
                      Located within the golden industrial corridor of Sanand, providing instant access to major logistics hubs.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Box 4: Image */}
                <ScrollReveal delay={0.4} y={-50} x={0}>
                  <div className="rounded-[2rem] overflow-hidden h-full relative group shadow-sm">
                    <img 
                      src={secureTilesImg} 
                      alt="Secure Titles" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                  </div>
                </ScrollReveal>

                {/* Box 5: Secure Titles */}
                <ScrollReveal delay={0.5} x={-60} y={0}>
                  <div className="bg-[#da251c] rounded-[2rem] p-10 h-full flex flex-col justify-center text-white shadow-xl group transition-all duration-500 hover:shadow-red-600/30">
                    <h3 className="text-3xl lg:text-4xl font-heading font-black mb-6 tracking-tight leading-tight">
                      Secure<br/>Titles
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed font-medium">
                      100% legal transparency and verified documentation for peace of mind.
                    </p>
                  </div>
                </ScrollReveal>

              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Companies;


