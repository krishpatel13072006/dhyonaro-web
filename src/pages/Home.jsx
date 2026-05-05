import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, CheckCircle,
  Building2, Factory, ShoppingCart, Package,
  Mail, Phone, Clock,
  Focus, Layers, Globe, TrendingUp
} from 'lucide-react';

import Hero from '../sections/Hero';
import ApartSection from '../sections/ApartSection';
import SEO from '../components/SEO';
import ScrollReveal, { ScrollRevealGroup } from '../components/ScrollReveal';
import FooterCTA from '../components/FooterCTA';
import pramukhLogo from '../companies-logo/pramukh-logo.png';
import shreejiLogo from '../companies-logo/shreeji-logo.png';
import pramukhImportExportHome from '../images/pramukh import export home.avif';
import bricsHomePage from '../images/brics home page.avif';
import homeVision from '../images/home vision.avif';
import pramukhInfratechMain from '../images/pramukh infratech main.avif';

/* ═══════════════════ DATA ═══════════════════ */

const stats = [
  { value: 4, suffix: '+', label: 'Business Verticals', isNum: true },
  { value: 2026, suffix: '', label: 'Year Founded', isNum: true },
  { value: 'GJ', suffix: '', label: 'Gujarat Headquartered', isNum: false },
  { value: 100, suffix: '%', label: 'Commitment to Quality', isNum: true },
];

const pillars = [
  {
    id: '01', name: 'Pramukh Import Export', sector: 'Metal Scrap Trading',
    icon: Factory, logo: pramukhLogo,
    desc: "Gujarat's reliable partner for global metal scrap procurement. We facilitate the seamless flow of ferrous and non-ferrous materials, supporting India's manufacturing and steel industries.",
    path: '/companies/import-export',
    img: pramukhImportExportHome,
    accent: '#1a56db',
  },
  {
    id: '02', name: 'Pramukh Techventures', sector: 'Electronics Retail',
    icon: ShoppingCart, logo: pramukhLogo,
    desc: 'Your premium destination for state-of-the-art technology — consumer electronics and home appliances backed by authorised brand partnerships and honest customer service.',
    path: '/companies/tech-venture',
    img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=900',
    accent: '#0ea5e9',
  },
  {
    id: '03', name: 'Shreeji Infra', sector: 'Industrial Infrastructure',
    icon: Building2, logo: shreejiLogo,
    desc: 'Developing the future of manufacturing through Mahantam Industrial Park — purpose-built industrial sheds, advanced warehousing, and strategic workspace infrastructure.',
    path: '/companies/shreeji-infra',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=900',
    accent: '#7c3aed',
  },
  {
    id: '04', name: 'Bricks Trading Division', sector: 'Construction Materials',
    icon: Package, logo: pramukhLogo,
    desc: 'Delivering the building blocks of progress — a consistent, high-quality supply of essential construction materials to builders, contractors, and developers across the region.',
    path: '/companies',
    img: bricsHomePage,
    accent: '#f59e0b',
  },
];

/* ═══════════════════ HELPERS ═══════════════════ */

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const SectionTag = ({ children, light }) => (
  <div className="inline-flex items-center gap-2.5 mb-4">
    <div className={`w-7 h-0.5 ${light ? 'bg-blue-400' : 'bg-[#1a56db]'}`} />
    <span className={`text-[10px] font-heading font-black uppercase tracking-[0.22em] ${light ? 'text-blue-400' : 'text-[#1a56db]'}`}>{children}</span>
  </div>
);

/* Animated Counter */
function Counter({ value, suffix, isNum, duration = 1800 }) {
  const [display, setDisplay] = useState(isNum ? 0 : value);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView || !isNum) return;
    const start = Date.now();
    const end = value;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, isNum, duration]);

  return (
    <span ref={ref}>
      {isNum ? display : value}{suffix}
    </span>
  );
}

/* ═══════════════════ PAGE ═══════════════════ */

export default function Home() {
  return (
    <>
      <SEO
        title="Dhyanora Group | Building Businesses That Last | Ahmedabad, Gujarat"
        description="Dhyanora Group is a diversified business conglomerate based in Ahmedabad, Gujarat — spanning metal scrap trading, electronics retail, industrial infrastructure, and construction materials."
      />

      <main>
        {/* ════ HERO ════ */}
        <Hero />

        {/* ════ STATS STRIP ════ */}
        <ScrollReveal duration={1} y={30}>
          <section className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <motion.div
                variants={stagger} initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100"
              >
                {stats.map((s) => (
                  <motion.div
                    key={s.label} variants={fadeUp} transition={{ duration: 0.55 }}
                    className="px-8 py-10 text-center group hover:bg-[#f8fafc] transition-colors duration-300"
                  >
                    <p className="text-4xl md:text-5xl font-heading font-black text-[#0d1b2e] mb-1 leading-none group-hover:text-[#1a56db] transition-colors duration-500">
                      <Counter value={s.value} suffix={s.suffix} isNum={s.isNum} />
                    </p>
                    <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mt-2">{s.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </ScrollReveal>

        {/* ════ WHO WE ARE ════ */}
        <section className="bg-white py-24 md:py-36 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">

              {/* Left – Image stack (Slide from Left) */}
              <ScrollReveal x={-60} y={0} duration={1} className="lg:col-span-7 h-full">
                <div className="relative h-full">
                  {/* Main image */}
                  <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={pramukhInfratechMain}
                      alt="Dhyanora Group Headquarters"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating Vision card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
                    className="absolute top-6 -right-6 bg-white rounded-xl shadow-xl p-5 min-w-[170px] border border-gray-100"
                  >
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#1a56db] mb-1">Vision</p>
                    <p className="text-sm font-heading font-black text-[#0d1b2e] leading-tight">Trusted Across<br />Gujarat & Beyond</p>
                    <div className="mt-2 h-0.5 bg-gray-100 w-full" />
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#1a56db] mb-1 mt-2">Mission</p>
                    <p className="text-sm font-heading font-black text-[#0d1b2e] leading-tight">Disciplined Growth,<br />Lasting Impact</p>
                  </motion.div>

                  {/* Bottom badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute -bottom-6 left-8 bg-[#0d1b2e] text-white px-7 py-5 rounded-xl shadow-2xl"
                  >
                    <p className="text-[9px] font-black uppercase tracking-widest text-blue-400 mb-1">Founded</p>
                    <p className="text-3xl font-heading font-black leading-none">
                      <Counter value={2026} suffix="" isNum={true} />
                    </p>
                    <p className="text-white/50 text-xs mt-1">Ahmedabad, GJ</p>
                  </motion.div>
                </div>
              </ScrollReveal>

              {/* Right – Text (Slide from Right) */}
              <ScrollReveal x={60} y={0} duration={1} className="lg:col-span-5">
                <motion.div
                  variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                  <motion.div variants={fadeUp} transition={{ duration: 0.65 }}>
                    <SectionTag>One Group. Multiple Strengths.</SectionTag>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-[#0d1b2e] mb-6 leading-tight">
                      The Essence of Discipline<br />
                      <span className="text-[#1a56db]">and Growth.</span>
                    </h2>
                  </motion.div>

                  <motion.p variants={fadeUp} transition={{ duration: 0.65, delay: 0.08 }}
                    className="text-gray-600 text-base leading-relaxed mb-5">
                    Dhyanora is more than just a holding company; it is a strategic platform built
                    for focused expansion. We operate on the fundamental belief that disciplined
                    businesses, when guided by a clear sense of purpose and unyielding core values,
                    create a lasting impact on the economy and the community.
                  </motion.p>

                  <motion.p variants={fadeUp} transition={{ duration: 0.65, delay: 0.14 }}
                    className="text-gray-500 text-sm leading-relaxed mb-8">
                    From the procurement of raw materials to the development of world-class industrial
                    infrastructure, every company under the Dhyanora umbrella operates with the same
                    unwavering commitment: uncompromising quality, lifelong trust, and sustainable
                    growth through collective effort.
                  </motion.p>

                  {/* Mini KPIs */}
                  <motion.div variants={fadeUp} transition={{ duration: 0.65, delay: 0.18 }}
                    className="grid grid-cols-3 gap-4 mb-10">
                    {[
                      { val: 4, suffix: '+', lbl: 'Businesses', isNum: true },
                      { val: 100, suffix: '%', lbl: 'Quality', isNum: true },
                      { val: 'GJ', suffix: '', lbl: 'Headquartered', isNum: false },
                    ].map((k) => (
                      <div key={k.lbl} className="text-center p-4 bg-[#f8fafc] rounded-xl border border-gray-100">
                        <p className="text-xl font-heading font-black text-[#1a56db]">
                          <Counter value={k.val} suffix={k.suffix} isNum={k.isNum} />
                        </p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mt-1">{k.lbl}</p>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeUp} transition={{ duration: 0.65, delay: 0.22 }}>
                    <Link to="/about" className="btn-blue group">
                      Learn About Us
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ════ MARQUEE TICKER ════ */}
        <div className="overflow-hidden bg-[#f8fafc] border-y border-gray-100 py-8 select-none">
          <div className="flex items-center w-max animate-marquee">
            {[...Array(2)].map((_, r) =>
              ['Pramukh Import Export', 'Pramukh Techventures', 'Shreeji Infra', 'Bricks Trading', 'Dhyanora Group'].map((item, i) => (
                <span
                  key={`${r}-${i}`}
                  className="mx-12 text-[#0d1b2e]/10 text-2xl md:text-5xl font-heading font-black uppercase italic tracking-tighter hover:text-[#1a56db] transition-colors duration-500 cursor-pointer"
                >
                  {item}
                </span>
              ))
            )}
          </div>
        </div>

        {/* ════ FOUR PILLARS / COMPANIES ════ */}
        <section className="bg-white py-24 md:py-36 relative overflow-hidden">
          {/* Animated floating orbs (unchanged) */}
          {[
            { size: 420, top: '-10%', left: '-8%', dur: 18, delay: 0, color: 'rgba(26,86,219,0.07)' },
            { size: 280, top: '55%', left: '80%', dur: 14, delay: 3, color: 'rgba(14,165,233,0.07)' },
            { size: 340, top: '70%', left: '-5%', dur: 20, delay: 6, color: 'rgba(124,58,237,0.06)' },
            { size: 200, top: '15%', left: '72%', dur: 12, delay: 1.5, color: 'rgba(245,158,11,0.06)' },
            { size: 160, top: '40%', left: '45%', dur: 16, delay: 4, color: 'rgba(26,86,219,0.05)' },
          ].map((orb, i) => (
            <div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: orb.size,
                height: orb.size,
                top: orb.top,
                left: orb.left,
                background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
                filter: 'blur(40px)',
                animation: `floatOrb ${orb.dur}s ease-in-out ${orb.delay}s infinite alternate`,
              }}
            />
          ))}
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <ScrollReveal y={32}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <ScrollReveal x={-40} y={0}>
                  <SectionTag>Our Strategic Portfolio</SectionTag>
                  <h2 className="text-4xl md:text-5xl font-heading font-black text-[#0d1b2e] leading-tight">
                    Diversified Expertise.<br />
                    <span className="text-[#1a56db]">Unified Vision.</span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal x={40} y={0} delay={0.2}>
                  <Link to="/companies" className="inline-flex items-center gap-2 text-[#0d1b2e] text-xs font-bold uppercase tracking-widest hover:text-[#1a56db] transition-colors group">
                    View All Companies
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            <ScrollRevealGroup staggerDelay={0.15} y={48} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.id}
                    className="group relative rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img src={p.img} alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/70 to-transparent group-hover:from-[#0d1b2e]/40 transition-colors duration-500" />
                      <span className="absolute top-4 right-4 text-white/20 text-6xl font-heading font-black select-none">{p.id}</span>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: p.accent + '33', border: `1.5px solid ${p.accent}` }}>
                          <Icon size={14} style={{ color: p.accent }} />
                        </div>
                        <span className="text-white/80 text-[10px] font-black uppercase tracking-widest">{p.sector}</span>
                      </div>
                    </div>

                    {/* Body — background changes on hover */}
                    <div className="p-7 transition-colors duration-500 group-hover:bg-[#0d1b2e]">
                      <h3 className="text-xl font-heading font-black text-[#0d1b2e] mb-3 group-hover:text-white transition-colors duration-500">{p.name}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-white/60 transition-colors duration-500">{p.desc}</p>
                      <Link to={p.path}
                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors group/link"
                        style={{ color: p.accent }}
                      >
                        Discover More
                        <ArrowRight size={11} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: p.accent }} />
                  </div>
                );
              })}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ════ WHAT SETS Dhyanora APART — BENTO GRID LAYOUT ════ */}
        <ApartSection />

        {/* ════ VISION QUOTE BAND ════ */}
        <ScrollReveal y={40}>
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${homeVision})`,
                filter: 'grayscale(100%) brightness(0.9) contrast(1.1)'
              }}
            />

            <div className="absolute top-0 right-0 w-96 h-96 border border-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute top-0 right-0 w-60 h-60 border border-white/5 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 border border-white/5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <ScrollReveal x={-50} y={0} className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-0.5 bg-blue-400" />
                    <p className="text-blue-300 text-[10px] font-black uppercase tracking-[0.28em]">Our Vision</p>
                  </div>
                  <blockquote className="text-2xl md:text-4xl font-heading font-black text-white leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                    "To be recognised as Gujarat's most trusted and diversified business conglomerate — a name synonymous with quality, reliability, and responsible growth."
                  </blockquote>
                </ScrollReveal>

                <ScrollReveal x={50} y={0} delay={0.25} className="flex-shrink-0 flex flex-col items-center gap-5">
                  <Link to="/companies" className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a56db] text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-blue-500 transition-all duration-300 group shadow-2xl shadow-blue-900/60">
                    Explore Our Companies
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold">Ahmedabad · Gujarat · India</p>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <FooterCTA />
      </main>
    </>
  );
}


