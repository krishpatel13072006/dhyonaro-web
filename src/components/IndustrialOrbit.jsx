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
  CheckCircle2,
  Briefcase,
  Users2,
  X
} from 'lucide-react';
import dhyanoraLogo from '../companies-logo/Dhyanora logo.png';

const ECOSYSTEM_FEATURES = [
  { title: "Metal Scrap Trading", desc: "Global procurement of ferrous and non-ferrous scrap.", icon: Factory, img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=400&fit=crop&q=80" },
  { title: "Tech Ventures", desc: "Premium electronics retail and smart technology distribution.", icon: Smartphone, img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop&q=80" },
  { title: "Infrastructure", desc: "Developing world-class industrial parks and workspaces.", icon: Building2, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop&q=80" },
  { title: "Supply Chain", desc: "End-to-end logistics and raw material management.", icon: Truck, img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=400&fit=crop&q=80" },
  { title: "Global Reach", desc: "Operating across international borders with precision.", icon: Globe, img: "https://images.unsplash.com/photo-1521295121683-bc9947669123?w=400&h=400&fit=crop&q=80" },
  { title: "Quality Assurance", desc: "100% genuine inventory and strict quality protocols.", icon: ShieldCheck, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&q=80" },
  { title: "Disciplined Growth", desc: "Sustainable expansion driven by focused values.", icon: TrendingUp, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=80" },
  { title: "Sector Expertise", desc: "Deep understanding of every industry we enter.", icon: Briefcase, img: "https://images.unsplash.com/photo-1504384308090-c89e12076d22?w=400&h=400&fit=crop&q=80" },
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
  const radius = isMobile ? 120 : 280;
  const cardSize = isMobile ? 80 : 140;

  return (
    <>
    <section className="py-24 md:py-48 px-6 relative overflow-hidden bg-white border-y border-navy/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-navy/20 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Synergy & Scale</span>
          <h2 className="text-4xl md:text-7xl font-heading font-black text-navy uppercase italic mb-8 leading-tight">
            The Industrial <br /> Ecosystem.
          </h2>
        </motion.div>

        {/* Circular Carousel */}
        <div
          className="relative mx-auto"
          style={{ width: isMobile ? 300 : 700, height: isMobile ? 300 : 700 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); }}
        >
          {/* Orbit rings - Multi-layered for depth */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[100%] h-[100%] rounded-full border border-navy/[0.03]" />
            <div className="absolute w-[70%] h-[70%] rounded-full border border-navy/[0.02]" />
            <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-navy/[0.02] blur-[80px]" />
          </div>

          {/* Feature cards in circle */}
          {ECOSYSTEM_FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            const itemAngle = (360 / count) * idx + angle;
            const rad = (itemAngle * Math.PI) / 180;
            const centerX = (isMobile ? 300 : 700) / 2;
            const centerY = (isMobile ? 300 : 700) / 2;
            const x = centerX + Math.cos(rad) * radius - cardSize / 2;
            const y = centerY + Math.sin(rad) * radius - cardSize / 2;

            return (
              <motion.div
                key={idx}
                className="absolute cursor-pointer group"
                style={{
                  left: x,
                  top: y,
                  width: cardSize,
                  height: cardSize,
                  zIndex: 10,
                }}
                onClick={() => {
                  setSelectedFeature(feature);
                  setIsPaused(true);
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden border border-navy/10 bg-white relative">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <Icon size={isMobile ? 16 : 24} className="text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div
                className="w-24 h-12 md:w-40 md:h-20 flex items-center justify-center mx-auto"
              >
                <img 
                  src={dhyanoraLogo} 
                  alt="Dhyanora Group" 
                  className="w-full h-full object-contain" 
                />
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
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => {
              setSelectedFeature(null);
              setIsPaused(false);
            }}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#121212] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                    {React.createElement(selectedFeature.icon, { size: 28, className: "text-white" })}
                  </div>
                  <h3 className="text-2xl font-heading font-black text-white uppercase italic">{selectedFeature.title}</h3>
                </div>
                <button 
                  onClick={() => {
                    setSelectedFeature(null);
                    setIsPaused(false);
                  }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <p className="text-white/60 text-lg font-bold mb-8 leading-relaxed">
                {selectedFeature.desc}
              </p>

              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src={selectedFeature.img} 
                  alt={selectedFeature.title} 
                  className="w-full h-full object-cover" 
                />
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
