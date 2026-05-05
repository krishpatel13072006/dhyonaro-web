import React, { useState, useEffect } from 'react';
import { motion, useAnimationFrame, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Globe, 
  Zap, 
  Factory, 
  Smartphone, 
  Truck, 
  Building2,
  TrendingUp,
  X
} from 'lucide-react';
import DhyanoraLogo from '../companies-logo/dhyanora-logo-1.png';

// Import newly provided images
import metalScrapImg from '../images/pramukh import export home.avif';
import techVentureImg from '../images/pramukh tech venture.avif';
import infrastructureImg from '../images/shreeji infra tech.avif';
import supplyChainImg from '../images/global sourcing pramukh import export.jpg';
import globalReachImg from '../images/gujarat routes.avif';
import qualityAssuranceImg from '../images/quality assurance pramukh import export.avif';
import growthImg from '../images/long term thinking.avif';
import expertiseImg from '../images/focused vision.jpg';

const ECOSYSTEM_FEATURES = [
  { title: "Metal Scrap Trading", desc: "Global procurement of ferrous and non-ferrous scrap.", icon: Factory, img: metalScrapImg },
  { title: "Tech Ventures", desc: "Premium electronics retail and smart technology distribution.", icon: Smartphone, img: techVentureImg },
  { title: "Infrastructure", desc: "Developing world-class industrial parks and workspaces.", icon: Building2, img: infrastructureImg },
  { title: "Supply Chain", desc: "End-to-end logistics and raw material management.", icon: Truck, img: supplyChainImg },
  { title: "Global Reach", desc: "Operating across international borders with precision.", icon: Globe, img: globalReachImg },
  { title: "Quality Assurance", desc: "100% genuine inventory and strict quality protocols.", icon: ShieldCheck, img: qualityAssuranceImg },
  { title: "Disciplined Growth", desc: "Sustainable expansion driven by focused values.", icon: TrendingUp, img: growthImg },
  { title: "Sector Expertise", desc: "Deep understanding of every industry we enter.", icon: Zap, img: expertiseImg },
];

const IndustrialOrbit = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [angle, setAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!isPaused) {
      setAngle(prev => (prev + delta * 0.008) % 360);
    }
  });

  const count = ECOSYSTEM_FEATURES.length;
  const radius = isMobile ? 140 : 320;
  const cardSize = isMobile ? 100 : 160;

  return (
    <>
    <section className="py-24 md:py-48 px-6 relative overflow-hidden bg-[#fafbfc] border-y border-slate-100">
      <div className="max-w-[1400px] mx-auto relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 relative z-20"
        >
          <span className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Synergy &amp; Scale</span>
          <h2 className="text-4xl md:text-7xl font-heading font-black text-slate-900 uppercase leading-tight">
            The Industrial <br /> <span className="text-blue-600">Ecosystem.</span>
          </h2>
        </motion.div>

        {/* Circular Carousel Container */}
        <div
          className="relative mx-auto flex items-center justify-center"
          style={{ width: isMobile ? 320 : 800, height: isMobile ? 320 : 800 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); }}
        >
          {/* Orbital Connection Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[100%] h-[100%] rounded-full border border-slate-200/40" />
            <div className="absolute w-[80%] h-[80%] rounded-full border border-slate-200/20" />
            <div className="absolute w-[60%] h-[60%] rounded-full border border-slate-200/10" />
          </div>

          {/* Feature Cards in Circle */}
          {ECOSYSTEM_FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            const itemAngle = (360 / count) * idx + angle;
            const rad = (itemAngle * Math.PI) / 180;
            const centerX = (isMobile ? 320 : 800) / 2;
            const centerY = (isMobile ? 320 : 800) / 2;
            const x = centerX + Math.cos(rad) * radius - cardSize / 2;
            const y = centerY + Math.sin(rad) * radius - cardSize / 2;

            return (
              <motion.div
                key={idx}
                className="absolute cursor-pointer z-20"
                style={{
                  left: x,
                  top: y,
                  width: cardSize,
                  height: cardSize,
                }}
                onClick={() => {
                  setSelectedFeature(feature);
                  setIsPaused(true);
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-white shadow-xl border border-slate-100 relative group">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                  <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between">
                    <p className="text-[9px] md:text-[10px] font-bold text-white/90 uppercase tracking-wider leading-tight">
                      {feature.title}
                    </p>
                    <div className="w-7 h-7 md:w-9 md:h-9 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Icon size={isMobile ? 14 : 18} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Center Branding Core - Energy Ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative flex items-center justify-center">

              {/* Energy Ring Container */}
              <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] flex items-center justify-center">

                {/* Rotating conic-gradient ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #2563eb, #ec4899, #dc251c, #2563eb)",
                    WebkitMaskImage: "radial-gradient(circle, transparent 56%, black 59%)",
                    maskImage: "radial-gradient(circle, transparent 56%, black 59%)",
                    filter: "blur(8px)"
                  }}
                />

                {/* Sharp thin crisp ring on top */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[4%] rounded-full"
                  style={{
                    background: "conic-gradient(from 90deg, #60a5fa, #f472b6, #f87171, #60a5fa)",
                    WebkitMaskImage: "radial-gradient(circle, transparent 60%, black 61.5%)",
                    maskImage: "radial-gradient(circle, transparent 60%, black 61.5%)",
                    filter: "blur(2px)"
                  }}
                />

                {/* Core Logo in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-150 animate-pulse" />
                    <img 
                      src={DhyanoraLogo} 
                      alt="Dhyanora" 
                      className="relative h-24 w-24 object-contain z-10 drop-shadow-2xl"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* MODAL POPUP */}
    <AnimatePresence>
      {selectedFeature && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            onClick={() => { setSelectedFeature(null); setIsPaused(false); }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100"
          >
            <div className="p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100">
                    {React.createElement(selectedFeature.icon, { size: 32 })}
                  </div>
                  <h3 className="text-3xl font-heading font-black text-slate-900 uppercase tracking-tight">{selectedFeature.title}</h3>
                </div>
                <button
                  onClick={() => { setSelectedFeature(null); setIsPaused(false); }}
                  className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-slate-500 text-xl font-medium mb-10 leading-relaxed">{selectedFeature.desc}</p>
              <div className="aspect-video w-full rounded-3xl overflow-hidden border border-slate-100">
                <img src={selectedFeature.img} alt={selectedFeature.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </>
  );
};

export default IndustrialOrbit;


