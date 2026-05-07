import React from 'react';
import SEO from '../components/SEO';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Tv, Smartphone, Headphones, 
  ShieldCheck, Zap, Home, ChevronRight,
  Monitor, Speaker, Watch, Lightbulb,
  CheckCircle2, Star, Quote
} from 'lucide-react';
import CrossfadeVideo from '../components/CrossfadeVideo';
import ScrollReveal, { ScrollRevealGroup } from '../components/ScrollReveal';
import FooterCTA from '../components/FooterCTA';

// Images
import techVentureMainImg from '../images/pramukh tech venture.avif';
import entertainmentImg from '../images/Entairnment.avif';
import audioImg from '../images/audio image.avif';

/* ─── Count-up hook ─── */
const useCountUp = (target, duration = 2000, active = false) => {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
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

const StatNumber = ({ value, suffix = "" }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(parseInt(value), 2000, inView);
  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const CategoryCard = ({ icon: Icon, title, desc, img, delay }) => (
  <ScrollReveal delay={delay} y={40} x={0}>
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full border border-slate-100"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute bottom-4 left-6">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
            <Icon size={20} />
          </div>
        </div>
      </div>
      <div className="p-8">
        <h4 className="text-2xl font-heading font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
      </div>
    </motion.div>
  </ScrollReveal>
);

/* ─── Bouncing Circles Component ─── */
const BouncingCircles = () => {
  const [circles, setCircles] = React.useState([
    { id: 1, x: 15, y: 20, vx: 0.1, vy: 0.12, size: 256 },
    { id: 2, x: 85, y: 30, vx: -0.12, vy: 0.08, size: 256 },
    { id: 3, x: 25, y: 75, vx: 0.08, vy: -0.1, size: 256 },
    { id: 4, x: 75, y: 80, vx: -0.1, vy: -0.12, size: 256 },
  ]);

  React.useEffect(() => {
    let animationFrame;
    const update = () => {
      setCircles(prev => {
        const next = prev.map(c => ({
          ...c,
          x: c.x + c.vx,
          y: c.y + c.vy
        }));

        const padding = 10; 
        next.forEach(c => {
          if (c.x < padding || c.x > 100 - padding) c.vx *= -1;
          if (c.y < padding || c.y > 100 - padding) c.vy *= -1;
          c.x = Math.max(padding, Math.min(100 - padding, c.x));
          c.y = Math.max(padding, Math.min(100 - padding, c.y));
        });

        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            const dx = next[i].x - next[j].x;
            const dy = next[i].y - next[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = 20;

            if (distance < minDistance) {
              const tvx = next[i].vx;
              const tvy = next[i].vy;
              next[i].vx = next[j].vx;
              next[i].vy = next[j].vy;
              next[j].vx = tvx;
              next[j].vy = tvy;

              const overlap = minDistance - distance;
              const nx = dx / (distance || 1);
              const ny = dy / (distance || 1);
              next[i].x += nx * overlap / 2;
              next[i].y += ny * overlap / 2;
              next[j].x -= nx * overlap / 2;
              next[j].y -= ny * overlap / 2;
            }
          }
        }
        return next;
      });
      animationFrame = requestAnimationFrame(update);
    };
    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="absolute inset-0">
      {circles.map(c => (
        <div
          key={c.id}
          className="absolute w-48 h-48 md:w-64 md:h-64 border-2 border-slate-400/20 bg-slate-200/10 rounded-full -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px] shadow-inner transition-transform duration-[16ms] ease-linear"
          style={{ 
            left: `${c.x}%`, 
            top: `${c.y}%`,
            willChange: 'left, top'
          }}
        />
      ))}
    </div>
  );
};

import hero2 from '../assets/videos/hero2.mp4';
import company1 from '../assets/videos/company1.mp4';

const CompanyTech = () => {
  const categories = [
    { 
      icon: Monitor, 
      title: "4K Entertainment", 
      desc: "Immersive visuals and cinematic sound systems bringing the world's most reliable technology home.",
      img: entertainmentImg
    },
    { 
      icon: Lightbulb, 
      title: "Smart Appliances", 
      desc: "Energy-efficient refrigerators, washing units, and connected kitchen tech for modern Gujarat.",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    },
    { 
      icon: Smartphone, 
      title: "Connected Mobility", 
      desc: "The latest flagship smartphones and wearable technology from authorized global brand partners.",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    },
    { 
      icon: Speaker, 
      title: "Professional Audio", 
      desc: "Hi-Fi audio solutions and professional sound systems designed for the audiophile and professional.",
      img: audioImg
    }
  ];

  return (
    <>
      <SEO 
        title="Pramukh Techventures | Premium Electronics & Tech Retail | Dhyanora Group" 
        description="Pramukh Techventures brings authorized global electronics brands to Gujarat, featuring 4K entertainment, smart appliances, and mobile technology." 
      />
      
      <main className="bg-white overflow-x-hidden">
        {/* ════ HERO SECTION ════ */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#172451]">
          <CrossfadeVideo 
            videos={[hero2, company1]} 
            overlayOpacity={0.4}
          />

          {/* Red Tech Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.25] pointer-events-none z-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="tech-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#fad77e" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tech-grid)" />
            </svg>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#172451] via-transparent to-[#172451] pointer-events-none z-20" />

          <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
            <ScrollReveal y={-20} x={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8">
                <Smartphone size={14} /> Retail & Technology Division
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} y={40} x={0}>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-white uppercase leading-[1.1] md:leading-none mb-6">
                Redefining the<br />
                <span className="text-[#fad77e]">
                  Digital Lifestyle.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.4} y={20} x={0}>
              <p className="text-white/60 text-base md:text-xl font-light max-w-2xl mx-auto mb-10">
                Bringing the world's most reliable technology to the households of Gujarat through an experience of absolute trust and expert guidance.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6} y={20} x={0}>
              <Link to="/contact" className="bg-[#fad77e] hover:bg-amber-400 text-[#172451] font-heading font-black uppercase tracking-widest text-[11px] py-4 px-8 rounded-xl transition-all inline-flex items-center gap-3 shadow-xl shadow-amber-500/20">
                Explore Collection <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ════ BREADCRUMB ════ */}
        <div className="bg-slate-50 py-4 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 text-slate-400 text-xs md:text-sm">
              <Link to="/" className="hover:text-[#172451] transition-colors"><Home size={14} /></Link>
              <ChevronRight size={12} />
              <Link to="/companies" className="hover:text-[#172451] transition-colors">Our Companies</Link>
              <ChevronRight size={12} />
              <span className="font-bold text-[#172451]">Pramukh Techventures</span>
            </div>
          </div>
        </div>

        {/* ════ OVERVIEW SECTION ════ */}
        <section className="py-24 md:py-36 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal x={-60} y={0}>
                <div className="flex items-center gap-3 text-[#172451] font-black tracking-widest uppercase text-[10px] mb-6">
                  <span className="w-8 h-px bg-[#172451]" /> Sector 02
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-[#172451] leading-tight mb-8">
                  Trust in<br />
                  <span className="text-[#fad77e]">Innovation.</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Pramukh Techventures is Gujarat's premium destination for state-of-the-art technology. We bridge the gap between global innovation and local households, backed by authorized brand partnerships and a legacy of honest customer service.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-heading font-black text-[#172451] mb-1">
                      <StatNumber value="25" suffix="+" />
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#172451]/60">Authorized Brands</p>
                  </div>
                  <div>
                    <p className="text-3xl font-heading font-black text-[#172451] mb-1">
                      <StatNumber value="15" suffix="k+" />
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#172451]/60">Products Sold</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal x={60} y={0} delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                  <img src={techVentureMainImg} alt="Technology Retail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-[#172451]" size={24} />
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-[#172451]">Authorized</p>
                        <p className="text-[10px] font-bold text-[#172451]/60">Retail Partner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ════ REFINED EDITORIAL CATEGORIES SECTION ════ */}
        <section className="py-24 md:py-36 bg-slate-50 overflow-hidden relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <BouncingCircles />
            <div className="absolute inset-0 opacity-[0.25]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="category-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#172451" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#category-grid)" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-20 md:mb-28 text-center">
            <ScrollReveal y={30} x={0}>
              <span className="text-[#172451] font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Our Ecosystem</span>
              <h2 className="text-4xl md:text-7xl font-heading font-black text-[#172451] uppercase leading-tight">
                Core Categories.
              </h2>
            </ScrollReveal>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 md:space-y-32">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 lg:gap-40 group`}
              >
                {/* Image Side - Forced Square */}
                <div className="w-full md:w-1/2">
                  <ScrollReveal x={i % 2 === 0 ? -60 : 60} y={0}>
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/50 bg-white">
                      <img 
                        src={cat.img} 
                        alt={cat.title} 
                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-1000" />
                      
                      {/* Floating Icon Badge */}
                      <div className={`absolute bottom-6 ${i % 2 === 0 ? 'right-6' : 'left-6'} w-16 h-16 bg-[#fad77e] rounded-2xl flex items-center justify-center text-[#172451] shadow-2xl transition-all duration-700 group-hover:scale-110`}>
                        <cat.icon size={28} strokeWidth={1.5} />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Content Side - Properly Formatted */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <ScrollReveal x={i % 2 === 0 ? 60 : -60} y={0} delay={0.2}>
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="text-4xl md:text-6xl font-heading font-black text-blue-600/20">
                        0{i + 1}
                      </span>
                      <div className="h-px flex-grow bg-slate-200" />
                    </div>
                    
                    <h3 className="text-2xl md:text-4xl font-heading font-black text-[#172451] uppercase mb-8 tracking-tight">
                      {cat.title}
                    </h3>
                    
                    <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-lg">
                      {cat.desc}
                    </p>
                    
                    <div className="flex items-center gap-6">
                      <div className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">
                        <ArrowRight size={20} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                        View Specification
                      </span>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════ RETAIL PROMISE SECTION ════ */}
        <section className="py-24 md:py-48 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Section Header */}
            <div className="text-center mb-24 md:mb-32">
              <ScrollReveal y={30}>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-[#172451] mb-6">
                  The Dhyanora Standard
                </h2>
                <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                  The Retail Promise of Absolute Authenticity.
                </p>
              </ScrollReveal>
            </div>

            {/* Promise Items */}
            <div className="space-y-32 md:space-y-48">
              {/* Item 1: Guaranteed Authenticity */}
              <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                <div className="w-full md:w-1/2">
                  <ScrollReveal x={-50}>
                    <div className="relative">
                      {/* Decorative Background Shape */}
                      <div className="absolute -inset-10 bg-blue-50/50 rounded-[4rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
                      
                      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[3rem] p-4 md:p-8 flex items-center justify-start overflow-hidden">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                          <img 
                            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800" 
                            alt="Guaranteed Authenticity" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Soft Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400/10 blur-[100px] rounded-full" />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
                <div className="w-full md:w-1/2">
                  <ScrollReveal x={50} delay={0.2}>
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-[#172451] mb-6">
                      Guaranteed Authenticity
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                      Every product in our inventory is 100% genuine, sourced directly from global brand partners and backed by full manufacturer warranties. We ensure that every piece of technology you take home is original and high-performing.
                    </p>
                    <Link to="/contact" className="btn-blue inline-flex items-center">
                      Learn More
                    </Link>
                  </ScrollReveal>
                </div>
              </div>

              {/* Item 2: Expert Guidance */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
                <div className="w-full md:w-1/2">
                  <ScrollReveal x={50}>
                    <div className="relative">
                      {/* Decorative Background Shape */}
                      <div className="absolute -inset-10 bg-indigo-50/50 rounded-[4rem] rotate-3 transition-transform group-hover:rotate-0 duration-700" />
                      
                      <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-[3rem] p-4 md:p-8 flex items-center justify-end overflow-hidden">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                          <img 
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                            alt="Expert Guidance" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Soft Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-400/10 blur-[100px] rounded-full" />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
                <div className="w-full md:w-1/2">
                  <ScrollReveal x={-50} delay={0.2}>
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-[#172451] mb-6">
                      Expert Guidance
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                      Our staff is not here to sell; they are here to guide. We help you choose technology that solves your real needs, not just the latest trend. Experience personalized consultations that prioritize your satisfaction over transactions.
                    </p>
                    <Link to="/contact" className="btn-blue inline-flex items-center">
                      Learn More
                    </Link>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>



        <FooterCTA />
      </main>
    </>
  );
};

export default CompanyTech;


