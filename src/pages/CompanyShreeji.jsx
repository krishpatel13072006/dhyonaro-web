import React from 'react';
import SEO from '../components/SEO';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Building2, ShieldCheck, MapPin,
  HardHat, CheckCircle2, Home, ChevronRight,
  Settings2, Globe2, Truck, Cpu, Zap
} from 'lucide-react';
import CrossfadeVideo from '../components/CrossfadeVideo';
import ScrollReveal, { ScrollRevealGroup } from '../components/ScrollReveal';
import FooterCTA from '../components/FooterCTA';

// Images
import shreejiMainImg from '../images/pramukh infratech main.avif';
import industrialShedImg from '../images/industrial shed companies page.avif';
import secureTilesImg from '../images/secure tiles.avif';
import shreejiInfraTechImg from '../images/shreeji infra tech.avif';

// Mahantam Gallery Images
import mahantam01 from '../images/shreeji/mahantam fv cam01.jpg.jpeg';
import mahantam02 from '../images/shreeji/mahantam fv cam02.jpg.jpeg';
import mahantam03 from '../images/shreeji/mahantam fv cam03.jpg.jpeg';
import mahantam04 from '../images/shreeji/mahantam fv cam04.jpg.jpeg';
import mahantam07 from '../images/shreeji/mahantam fv cam07.jpg.jpeg';

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

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-default overflow-hidden"
  >
    {/* Corner-fill Golden Overlay */}
    <div className="absolute inset-0 bg-[#fad77e] translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-slate-50 group-hover:bg-[#172451]/10 transition-colors duration-500">
        <Icon size={28} className="text-[#172451]" />
      </div>
      <h4 className="text-2xl font-heading font-black text-[#172451] mb-4 transition-colors duration-500">{title}</h4>
      <p className="text-slate-500 group-hover:text-[#172451]/80 text-sm leading-relaxed font-medium transition-colors duration-500">{desc}</p>
    </div>
  </motion.div>
);

import hero1 from '../assets/videos/hero1.mp4';
import company2 from '../assets/videos/company2.mp4';

const CompanyShreeji = () => {
  return (
    <>
      <SEO
        title="Shreeji Infra | Industrial Infrastructure & Real Estate | Dhyanora Group"
        description="Shreeji Infra develops state-of-the-art industrial ecosystems, including Mahantam Industrial Park, purpose-built sheds, and warehousing in Gujarat."
      />

      <main className="bg-white overflow-x-hidden">
        {/* ════ HERO SECTION ════ */}
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#172451]">
          <CrossfadeVideo
            videos={[hero1, company2]}
            overlayOpacity={0.4}
          />

          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.25] pointer-events-none z-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="shreeji-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fad77e" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#shreeji-grid)" />
            </svg>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#172451] via-transparent to-[#172451] pointer-events-none z-20" />

          <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
            <ScrollReveal y={-20} x={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/80 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8">
                <Building2 size={14} /> Real Estate & Infrastructure
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} y={40} x={0}>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-heading font-black text-white uppercase leading-[1.1] md:leading-none mb-6">
                ARCHITECTING THE<br />
                <span className="text-[#fad77e]">
                  FUTURE OF INDUSTRY.
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.4} y={20} x={0}>
              <p className="text-white/60 text-base md:text-xl font-light max-w-2xl mx-auto mb-10">
                Developing state-of-the-art industrial ecosystems built for modern manufacturing, logistics, and operational scale.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6} y={20} x={0}>
              <Link to="/contact" className="btn-blue inline-flex items-center gap-3">
                Enquire for Space <ArrowRight size={16} />
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
              <span className="font-bold text-[#172451]">Shreeji Infra</span>
            </div>
          </div>
        </div>

        {/* ════ OVERVIEW SECTION ════ */}
        <section className="py-24 md:py-36 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ScrollReveal x={-60} y={0}>
                <div className="flex items-center gap-3 text-[#172451] font-black tracking-widest uppercase text-[10px] mb-6">
                  <span className="w-8 h-px bg-[#172451]" /> Sector 03
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-[#172451] leading-tight mb-8">
                  Purpose-Built<br />
                  <span className="text-[#fad77e]">Infrastructure.</span>
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Shreeji Infra is the infrastructure arm of Dhyanora Group, specialized in developing manufacturing plants and warehousing facilities that meet the rigorous standards of modern logistics. We provide the physical foundation where businesses scale.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-heading font-black text-[#172451] mb-1">
                      <StatNumber value="500" suffix="k+" />
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#172451]/60">Square Feet</p>
                  </div>
                  <div>
                    <p className="text-3xl font-heading font-black text-[#172451] mb-1">
                      <StatNumber value="100" suffix="%" />
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#172451]/60">Legal Transparency</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal x={60} y={0} delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square">
                  <img src={shreejiMainImg} alt="Industrial Infrastructure" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ════ FLAGSHIP ASSET SECTION ════ */}
        <section className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src={shreejiInfraTechImg} className="w-full h-full object-cover" alt="Background" />
            <div className="absolute inset-0 bg-[#172451]/80" />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <ScrollReveal y={30} x={0}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                  Flagship Development
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6">
                  Mahantam Industrial Park
                </h2>
                <p className="text-white/50 text-lg">
                  A state-of-the-art industrial ecosystem designed for operational efficiency, safety, and long-term business performance.
                </p>
              </ScrollReveal>
            </div>

            <ScrollRevealGroup staggerDelay={0.15} y={50} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={MapPin}
                title="Strategic Location"
                desc="Located in Sanand, the golden corridor of Gujarat, offering instant access to major highway networks and logistics hubs."
              />
              <FeatureCard
                icon={Zap}
                title="Utility Infrastructure"
                desc="Integrated utility grids with reliable industrial-grade power, water supply, and waste management systems built-in."
              />
              <FeatureCard
                icon={ShieldCheck}
                title="Secure Titles"
                desc="100% legal transparency and verified documentation, ensuring a hassle-free setup and peace of mind for business owners."
              />
            </ScrollRevealGroup>

            {/* --- Image Gallery --- */}
            <div className="mt-24 md:mt-32">
              <ScrollReveal y={30} x={0}>
                <div className="text-center mb-12 md:mb-16">
                  <h3 className="text-2xl md:text-4xl font-heading font-black text-white mb-4">Project Gallery</h3>
                  <div className="h-1 w-12 bg-blue-500 mx-auto rounded-full" />
                </div>
              </ScrollReveal>

              <ScrollRevealGroup staggerDelay={0.1} y={40} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {[
                  { img: mahantam01 },
                  { img: mahantam02 },
                  { img: mahantam03 },
                  { img: mahantam04 },
                  { img: mahantam07 },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-3xl overflow-hidden group shadow-2xl aspect-[16/10] bg-slate-800 border border-white/5"
                  >
                    <img
                      src={item.img}
                      alt={`Mahantam Park ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white font-heading font-black text-sm uppercase tracking-widest">Mahantam Industrial Park</p>
                    </div>
                  </div>
                ))}
              </ScrollRevealGroup>
            </div>
          </div>
        </section>

        {/* ════ BENTO CAPABILITIES ════ */}
        <section className="py-24 md:py-36 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal x={-40} y={0} className="mb-16">
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-[#172451]/5 text-[#172451] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  <HardHat size={14} /> Our Core Capabilities
                </div>
                <h3 className="text-3xl md:text-5xl font-heading font-black text-[#172451] leading-tight">
                  State-of-the-art foundations<br /><span className="text-[#fad77e]">built for industrial scale.</span>
                </h3>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[300px]">
              {/* Box 1: Industrial Sheds */}
              <ScrollReveal delay={0.1} x={-50} y={0}>
                <div className="bg-slate-50 rounded-3xl p-8 h-full flex flex-col justify-center border border-slate-100 group hover:bg-blue-500 transition-all duration-1000">
                  <h3 className="text-2xl md:text-3xl font-heading font-black text-slate-900 group-hover:text-white mb-4 leading-tight transition-colors duration-1000">
                    Industrial<br />Sheds
                  </h3>
                  <p className="text-slate-500 group-hover:text-white/70 text-sm leading-relaxed font-medium transition-colors duration-1000">
                    Custom-built manufacturing spaces with optimized clear heights and reinforced flooring for heavy machinery.
                  </p>
                </div>
              </ScrollReveal>

              {/* Box 2: Image */}
              <ScrollReveal delay={0.2} y={50} x={0}>
                <div className="rounded-3xl overflow-hidden h-48 md:h-full relative group">
                  <img
                    src={industrialShedImg}
                    alt="Industrial Sheds"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </ScrollReveal>

              {/* Box 3: Warehousing (Large) */}
              <ScrollReveal delay={0.3} x={60} y={0} className="lg:col-span-2 lg:row-span-2 relative group rounded-3xl overflow-hidden shadow-lg h-[400px] md:h-[500px] lg:h-full">
                <img
                  src={shreejiInfraTechImg}
                  alt="Warehousing Solutions"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-500" />

                <div className="absolute top-6 left-6 right-6 lg:right-auto lg:w-3/5 bg-white rounded-2xl p-8 shadow-2xl border border-white/20 transition-all duration-500 group-hover:-translate-y-1">
                  <h3 className="text-2xl md:text-3xl font-heading font-black text-slate-900 mb-4 leading-tight">
                    Advanced<br />Warehousing
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    Scalable storage facilities designed for modern logistics, 24/7 throughput, and maximum volume efficiency.
                  </p>
                </div>
              </ScrollReveal>

              {/* Box 4: Image */}
              <ScrollReveal delay={0.4} y={-50} x={0}>
                <div className="rounded-3xl overflow-hidden h-48 md:h-full relative group">
                  <img
                    src={secureTilesImg}
                    alt="Manufacturing Plants"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </ScrollReveal>

              {/* Box 5: Legal Verification */}
              <ScrollReveal delay={0.5} x={-60} y={0}>
                <div className="bg-[#fad77e] rounded-3xl p-8 h-full flex flex-col justify-center text-[#172451] shadow-xl group hover:bg-amber-400 transition-all duration-1000">
                  <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 leading-tight transition-colors duration-1000">
                    Legal<br />Verification
                  </h3>
                  <p className="text-[#172451]/80 group-hover:text-[#172451] text-sm leading-relaxed font-medium transition-colors duration-1000">
                    100% legal transparency and verified documentation for peace of mind.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>


        <FooterCTA />
      </main>
    </>
  );
};

export default CompanyShreeji;
