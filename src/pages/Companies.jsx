import React, { useState, useRef, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, ChevronRight, Building2, Globe2, ShieldCheck, Truck, Cpu, HeadphonesIcon, Settings2, Zap, MapPin, HardHat, CheckCircle2, Calendar, Factory } from 'lucide-react';
import IndustrialOrbit from '../components/IndustrialOrbit';
import ScrollReveal, { ScrollRevealGroup } from '../components/ScrollReveal';
import ModernVideoBackground from '../components/ModernVideoBackground';
import BouncingCircles from '../components/BouncingCircles';


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

/* ─── Redesigned Stat Tile — matching the reference image layout precisely ─── */
const StatTile = ({ num, suffix = '', label, desc, Icon, active }) => {
  const count = useCountUp(parseInt(num), 2000, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group flex flex-col items-center text-center px-2"
    >
      <div className="relative z-10 w-[110px] h-[110px] rounded-full bg-white border-[8px] border-white flex items-center justify-center mb-4 transition-shadow duration-500 group-hover:shadow-[0_0_30px_rgba(250,215,126,0.5)]">
        <div className="w-full h-full rounded-full border-[2px] border-[#172451] flex items-center justify-center group-hover:bg-[#172451] transition-all duration-500">
          <Icon size={36} className="text-[#172451] group-hover:text-white transition-colors duration-500" />
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-[#172451] font-bold text-xl md:text-2xl leading-tight">
          <span className="text-2xl md:text-3xl font-black">{count}{suffix}</span><br/>
          {label}
        </h3>
        <p className="text-[#172451]/60 text-sm leading-relaxed max-w-[220px] mx-auto pt-2">{desc}</p>
      </div>
    </motion.div>
  );
};



/* ─── Feature card — matches reference: clean image, accent label, bold title, CTA ─── */
const FeatureCard = ({ img, icon: Icon, accent, title, desc, dark = false, sector, to }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
    whileHover={{ y: -6, boxShadow: dark ? '0 20px 48px rgba(0,0,0,0.45)' : '0 20px 48px rgba(0,0,0,0.10)' }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
    className={`group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 ${dark
      ? 'bg-[#0f2040] border border-white/8 hover:border-[#172451]/40'
      : 'bg-white border border-gray-100 shadow-sm hover:shadow-2xl'
      }`}
  >
    <div className="relative overflow-hidden rounded-xl m-3 mb-0" style={{ height: '210px' }}>
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-xl" />
    </div>
    <div className="flex flex-col flex-grow px-5 pt-4 pb-5">
      <p className="text-[11px] font-semibold mb-2" style={{ color: accent }}>{sector}</p>
      <h4 className={`font-heading font-black text-[1.05rem] leading-snug mb-2 ${dark ? 'text-white' : 'text-[#111827]'}`}>
        {title.toUpperCase()}
      </h4>
      <p className={`text-sm leading-relaxed flex-grow ${dark ? 'text-white/45' : 'text-gray-500'}`}>{desc}</p>
    </div>
  </motion.div>
);



const Companies = () => {
  const overviewRef = useRef(null);
  const overviewInView = useInView(overviewRef, { once: true, margin: '-80px' });
  

  return (
    <>
      <SEO title="Our Companies | Dhyanora Group" description="Explore Dhyanora Group's strategic portfolio spanning metal scrap trading, electronics retail, and industrial infrastructure in Gujarat." />
      <main className="bg-white text-[#172451] overflow-x-hidden">

         {/* ════ HERO ════ */}
         <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#172451]">
           <ModernVideoBackground 
             videos={['/videos/Company-1.mp4', '/videos/company-2.mp4', '/videos/company-3.mp4']} 
             overlayOpacity={0.15} 
           />
          <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#172451]/80 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
              <Building2 size={14} /> Our Strategic Portfolio
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-white uppercase leading-[1.1] md:leading-none mb-6">
              DIVERSIFIED EXPERTISE.<br />
              <span className="text-[#fad77e]">UNIFIED VISION.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-white/60 text-base md:text-lg font-light max-w-2xl mx-auto">
              Three core verticals. One focused vision. Building high-quality businesses that create tangible value for Gujarat's economy.
            </motion.p>
          </div>
        </section>

        {/* ════ OVERVIEW ════ */}
        <section className="bg-white relative mt-0" ref={overviewRef}>
          <div className="relative w-full pt-16 pb-24 md:pt-20 md:pb-28 overflow-hidden flex flex-col items-center justify-center">
            <img src={sectorDiversityImg} alt="Strategic Growth" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#172451]/90 backdrop-blur-[1px]" />
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="overview-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#overview-grid)" />
              </svg>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pb-12 md:pb-16">
              <ScrollReveal y={20}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4 uppercase">
                  EACH BUSINESS <span className="text-[#fad77e] drop-shadow-[0_0_20px_rgba(250,215,126,0.3)]">ONE STANDARD</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8">
                  Every entity within Dhyanora Group operates with independence but shares a unified commitment to quality and integrity.
                </p>
              </ScrollReveal>
            </div>
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 pb-24 md:pb-32">
            <div className="mt-[-55px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16">
              <StatTile active={overviewInView} Icon={Building2} num={4} suffix="+" label="Business Verticals" desc="Spanning core industrial sectors" />
              <StatTile active={overviewInView} Icon={Calendar} num={2022} suffix="" label="Year Founded" desc="Built on discipline from day one" />
              <StatTile active={overviewInView} Icon={ShieldCheck} num={100} suffix="%" label="Quality Promise" desc="Non-negotiable promise" />
              <StatTile active={overviewInView} Icon={Globe2} num={50} suffix="+" label="Strategic Partners" desc="Trusted across India" />
            </div>
          </div>
        </section>

        <IndustrialOrbit />

        {/* ════ SECTOR 1 — PRAMUKH IMPORT EXPORT ════ */}
        <section className="bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <BouncingCircles />
            <div className="absolute inset-0 opacity-[0.25]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="sector1-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#172451" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#sector1-grid)" />
              </svg>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
              <ScrollReveal x={-50} y={0}>
                <div className="flex items-center gap-3 text-[#172451] font-black tracking-widest uppercase text-[10px] mb-3 md:mb-4">
                  <span className="w-8 h-px bg-[#172451]" /> Sector 01
                </div>
                <h3 className="text-3xl md:text-5xl font-heading font-black text-[#172451] mb-6">PRAMUKH IMPORT EXPORT</h3>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.05} y={40} x={0}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-[45vh] md:h-[60vh] min-h-[300px] md:min-h-[420px] mb-10 md:mb-12 group">
                <img src={pramukhImportExportMainImg} alt="Pramukh Import Export" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.4s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-[9px] md:text-xs text-[#172451] shadow-lg flex items-center gap-2">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#172451] animate-pulse" /> Global Sourcing Network
                </div>
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 max-w-2xl">
                  <motion.blockquote initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg md:text-2xl font-heading font-black text-white leading-snug italic">
                    "Facilitating the procurement and distribution of high-grade ferrous and non-ferrous metal scrap for India's leading manufacturers."
                  </motion.blockquote>
                </div>
              </div>
            </ScrollReveal>
            <ScrollRevealGroup staggerDelay={0.15} y={50} x={0} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Settings2, title: 'KEY MATERIALS', sector: 'TRADING', img: keyMaterialsImg, desc: 'MS Scrap, Cast Iron, Melting Scrap, Copper, Aluminium, Brass, and Stainless Steel — sourced to exacting grade standards.' },
                { icon: Globe2, title: 'GLOBAL SOURCING', sector: 'SOURCING', img: globalSourcingImg, desc: 'Leveraging a vast international and domestic supplier network for steady, reliable procurement across geographies.' },
                { icon: ShieldCheck, title: 'QUALITY ASSURANCE', sector: 'QUALITY', img: qualityAssuranceImg, desc: 'Every batch meticulously graded and verified for purity and strict industrial compliance before delivery.' },
              ].map((f) => (
                <FeatureCard key={f.title} icon={f.icon} accent="#172451" img={f.img} title={f.title} desc={f.desc} sector={f.sector} to="/companies/import-export" />
              ))}
            </ScrollRevealGroup>
            <ScrollReveal delay={0.4} className="mt-12 flex justify-center">
               <Link to="/companies/import-export" className="btn-blue inline-flex items-center gap-3">
                 Explore Pramukh Import Export <ArrowRight size={16} />
               </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ════ SECTOR 2 — PRAMUKH TECHVENTURES ════ */}
        <section className="bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <BouncingCircles />
            <div className="absolute inset-0 opacity-[0.25]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="sector2-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#172451" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#sector2-grid)" />
              </svg>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
              <ScrollReveal x={-50} y={0}>
                <div className="flex items-center gap-3 text-[#172451] font-black tracking-widest uppercase text-[10px] mb-3 md:mb-4">
                  <span className="w-8 h-px bg-[#172451]" /> Sector 02
                </div>
                <h3 className="text-3xl md:text-5xl font-heading font-black text-[#172451] mb-6">PRAMUKH TECHVENTURES</h3>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.05} y={40} x={0}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-[45vh] md:h-[60vh] min-h-[300px] md:min-h-[420px] mb-10 md:mb-12 group">
                <img src={techVentureMainImg} alt="Pramukh Techventures" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.4s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-[9px] md:text-xs text-[#172451] shadow-lg flex items-center gap-2">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#172451] animate-pulse" /> Authorized Retailer
                </div>
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 max-w-2xl">
                  <motion.blockquote initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg md:text-2xl font-heading font-black text-white leading-snug italic">
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
                <FeatureCard key={f.title} icon={f.icon} accent="#172451" img={f.img} title={f.title} desc={f.desc} sector={f.sector} to="/companies/tech-venture" />
              ))}
            </ScrollRevealGroup>
            <ScrollReveal delay={0.4} className="mt-12 flex justify-center">
               <Link to="/companies/tech-venture" className="btn-blue inline-flex items-center gap-3">
                 Explore Pramukh Techventures <ArrowRight size={16} />
               </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ════ SECTOR 3 — SHREEJI INFRA ════ */}
        <section id="shreeji-infra" className="bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <BouncingCircles />
            <div className="absolute inset-0 opacity-[0.25]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="sector3-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#172451" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#sector3-grid)" />
              </svg>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
              <ScrollReveal x={-50} y={0}>
                <div className="flex items-center gap-3 text-[#172451] font-black tracking-widest uppercase text-[10px] mb-3 md:mb-4">
                  <span className="w-8 h-px bg-[#172451]" /> Sector 03
                </div>
                <h3 className="text-3xl md:text-5xl font-heading font-black text-[#172451] mb-6">SHREEJI INFRA</h3>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.05} y={40} x={0}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-[45vh] md:h-[60vh] min-h-[300px] md:min-h-[420px] mb-10 md:mb-12 group">
                <img src={shreejiMainImg} alt="Shreeji Infra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.4s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-[9px] md:text-xs text-[#172451] shadow-lg flex items-center gap-2">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#172451] animate-pulse" /> Flagship Asset
                </div>
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 max-w-2xl">
                  <motion.blockquote initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg md:text-2xl font-heading font-black text-white leading-snug italic">
                    "Architecting the future of industry by developing state-of-the-art ecosystems built for modern manufacturing."
                  </motion.blockquote>
                </div>
              </div>
            </ScrollReveal>
            <ScrollRevealGroup staggerDelay={0.15} y={50} x={0} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Factory, title: 'Industrial Sheds', sector: 'INFRA', img: industrialShedImg, desc: 'Custom-built manufacturing spaces with optimized clear heights and reinforced flooring.' },
                { icon: MapPin, title: 'Strategic Connectivity', sector: 'LOCATION', img: shreejiInfraTechImg, desc: 'Located within the golden industrial corridor of Sanand, providing instant access to major logistics hubs.' },
                { icon: ShieldCheck, title: 'Secure Titles', sector: 'LEGAL', img: secureTilesImg, desc: '100% legal transparency and verified documentation for peace of mind.' },
              ].map((f) => (
                <FeatureCard key={f.title} icon={f.icon} accent="#172451" img={f.img} title={f.title} desc={f.desc} sector={f.sector} to="/companies/shreeji-infra" />
              ))}
            </ScrollRevealGroup>
            <ScrollReveal delay={0.4} className="mt-12 flex justify-center">
               <Link to="/companies/shreeji-infra" className="btn-blue inline-flex items-center gap-3">
                 Explore Shreeji Infra <ArrowRight size={16} />
               </Link>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
};

export default Companies;
