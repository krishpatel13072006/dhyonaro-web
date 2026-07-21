'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, ArrowUpRight, CheckCircle,
  Building2, Factory, ShoppingCart, Package,
  Mail, Phone, Clock,
  Focus, Layers, Globe, TrendingUp
} from 'lucide-react';

import Hero from '@/sections/Hero';
import ApartSection from '@/sections/ApartSection';
import SEO from '@/components/SEO';
import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal';
import SectionTag from '@/components/SectionTag';
import FooterCTA from '@/components/FooterCTA';
import BouncingCircles from '@/components/BouncingCircles';
import MovingImageGrid from '@/components/MovingImageGrid';
import LogoGrid from '@/components/LogoGrid';

// Note: Images in Next.js should ideally be in /public or handled by next/image
// For now, I'll keep the relative imports which should work if they are in src/
import pramukhLogo from '@/companies-logo/pramukh-logo.png';
import shreejiLogo from '@/companies-logo/shreeji-logo.png';
import pramukhImportExportHome from '@/images/pramukh-import-export-home.png';
import bricsHomePage from '@/images/brics-home-page.jpg';
import pramukhInfratechMain from '@/images/pramukh-infratech-main.webp';

/* ═══════════════════ DATA ═══════════════════ */

const stats = [
  { value: 4, suffix: '+', label: 'Business Verticals', isNum: true },
  { value: 2022, suffix: '', label: 'Year Founded', isNum: true },
  { value: 'GJ', suffix: '', label: 'Gujarat Headquartered', isNum: false },
  { value: 100, suffix: '%', label: 'Commitment to Quality', isNum: true },
];

const pillars = [
  {
    id: '01', name: 'Pramukh Import Export', sector: 'Metal Scrap Trading',
    icon: Factory, logo: pramukhLogo.src,
    desc: "Gujarat's reliable partner for global metal scrap procurement. We facilitate the seamless flow of ferrous and non-ferrous materials, supporting India's manufacturing and steel industries.",
    path: '/companies/import-export',
    img: pramukhImportExportHome.src,
    accent: '#172451',
  },
  {
    id: '02', name: 'Pramukh Techventures', sector: 'Electronics Retail',
    icon: ShoppingCart, logo: pramukhLogo.src,
    desc: 'Your premium destination for state-of-the-art technology — consumer electronics and home appliances backed by authorised brand partnerships and honest customer service.',
    path: '/companies/tech-venture',
    img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=900',
    accent: '#172451',
  },
  {
    id: '03', name: 'Shreeji Infra', sector: 'Industrial Infrastructure',
    icon: Building2, logo: shreejiLogo.src,
    desc: 'Developing the future of manufacturing through Mahantam Industrial Park — purpose-built industrial sheds, advanced warehousing, and strategic workspace infrastructure.',
    path: '/companies/shreeji-infra',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=900',
    accent: '#172451',
  },
  {
    id: '04', name: 'Pramukh Import Export (Brics Trading)', sector: 'Construction Materials',
    icon: Package, logo: pramukhLogo.src,
    desc: 'Delivering the building blocks of progress — a consistent, high-quality supply of essential construction materials to builders, contractors, and developers across the region.',
    path: '/companies',
    img: bricsHomePage.src,
    accent: '#172451',
  },
];

/* ═══════════════════ HELPERS ═══════════════════ */

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };


/* Animated Counter */
function Counter({ value, suffix, isNum, duration = 1800 }) {
  const [display, setDisplay] = useState(isNum ? 0 : value);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

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
      {inView && isNum ? display : value}{suffix}
    </span>
  );
}

/* ═══════════════════ PAGE ═══════════════════ */

export default function Home() {
  return (
    <>
      <SEO
        title="Dhyanora Group | Industrial Group in Ahmedabad"
        description="Dhyanora Group is a leading industrial group in Ahmedabad, Gujarat. Specialists in metal scrap trading, electronics retail, and industrial infrastructure."
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
                    className="px-4 py-8 md:px-8 md:py-10 text-center group hover:bg-[#f8fafc] transition-colors duration-300 flex flex-col justify-center items-center"
                  >
                    <p className="text-3xl md:text-5xl font-heading font-black text-[#172451] mb-1 leading-none group-hover:text-[#172451] transition-colors duration-500">
                      <Counter value={s.value} suffix={s.suffix} isNum={s.isNum} />
                    </p>
                    <p className="text-gray-400 text-[9px] md:text-xs uppercase tracking-widest font-semibold mt-2 leading-tight">{s.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </ScrollReveal>

        {/* ════ WHO WE ARE ════ */}
        <section className="bg-white py-24 md:py-36 overflow-hidden relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <BouncingCircles />
            <div className="absolute inset-0 opacity-[0.25]">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="home-who-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1.5" fill="#172451" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#home-who-grid)" />
              </svg>
            </div>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">

              {/* Left – Image stack (Slide from Left) */}
              <ScrollReveal x={-60} y={0} duration={1} className="lg:col-span-7">
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-full">
                  {/* Main image */}
                  <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl relative">
                    <Image
                      src={pramukhInfratechMain}
                      alt="Dhyanora Group Industrial Infrastructure and Corporate Office in Ahmedabad"
                      fill
                      priority
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating Vision card - Hidden on very small screens to avoid clutter */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
                    className="absolute top-4 -right-4 md:top-6 md:-right-6 bg-white rounded-xl shadow-xl p-3 md:p-5 min-w-[140px] md:min-w-[170px] border border-gray-100"
                  >
                    <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#172451] mb-1">Vision</p>
                    <p className="text-xs md:text-sm font-heading font-black text-[#172451] leading-tight">Trusted Across<br />Gujarat & Beyond</p>
                    <div className="mt-2 h-0.5 bg-gray-100 w-full" />
                    <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#172451] mb-1 mt-2">Mission</p>
                    <p className="text-xs md:text-sm font-heading font-black text-[#172451] leading-tight">Disciplined Growth,<br />Lasting Impact</p>
                  </motion.div>

                  {/* Bottom badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
                    className="absolute -bottom-4 left-4 md:-bottom-6 md:left-8 bg-[#172451] text-white px-5 py-3 md:px-7 md:py-5 rounded-xl shadow-2xl"
                  >
                    <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-blue-400 mb-1">Founded</p>
                    <p className="text-xl md:text-3xl font-heading font-black leading-none">
                      <Counter value={2022} suffix="" isNum={true} />
                    </p>
                    <p className="text-white/50 text-[10px] md:text-xs mt-1">Ahmedabad, GJ</p>
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
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-[#172451] mb-6 leading-tight">
                      The Essence of Discipline<br />
                      <span className="text-[#172451]">and Growth.</span>
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
                      <div key={k.lbl} className="text-center p-3 sm:p-4 bg-[#f8fafc] rounded-xl border border-gray-100 flex flex-col justify-center min-h-[80px]">
                        <p className="text-xl font-heading font-black text-[#172451]">
                          <Counter value={k.val} suffix={k.suffix} isNum={k.isNum} />
                        </p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mt-1 leading-tight break-words">{k.lbl}</p>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeUp} transition={{ duration: 0.65, delay: 0.22 }}>
                    <Link href="/about" className="btn-blue group">
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
              ['Pramukh Import Export', 'Pramukh Techventures', 'Shreeji Infra', 'Pramukh Import Export (Brics Trading)', 'Dhyanora Group'].map((item, i) => (
                <span
                  key={`${r}-${i}`}
                  className="mx-12 text-[#172451]/10 text-2xl md:text-5xl font-heading font-black uppercase italic hover:text-[#172451] transition-colors duration-500 cursor-pointer"
                >
                  {item}
                </span>
              ))
            )}
          </div>
        </div>

        {/* ════ FOUR PILLARS / COMPANIES ════ */}
        <section className="bg-[#050b14] py-24 md:py-36 relative overflow-hidden">
          {/* Moving Images Background */}
          <MovingImageGrid />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <ScrollReveal y={32}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
                <ScrollReveal x={-40} y={0}>
                  <SectionTag color="#fad77e">Our Strategic Portfolio</SectionTag>
                  <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-[1.1]">
                    Diversified Expertise.<br />
                    <span className="text-[#fad77e]">Unified Vision.</span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal x={40} y={0} delay={0.2}>
                  <Link href="/companies" className="inline-flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors group">
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
                      <Image 
                        src={p.img} 
                        alt={`Strategic industrial operations of ${p.name} in the ${p.sector} sector - A Dhyanora Group vertical.`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#172451]/70 to-transparent group-hover:from-[#172451]/40 transition-colors duration-500" />
                      <span className="absolute top-4 right-4 text-white/20 text-6xl font-heading font-black select-none">{p.id}</span>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#172451] border-[1.5px] border-[#172451]">
                          <Icon size={14} className="text-white" />
                        </div>
                        <span className="text-white/80 text-[10px] font-black uppercase tracking-widest">{p.sector}</span>
                      </div>
                    </div>

                    {/* Body — background changes on hover */}
                    <div className="p-6 md:p-7 transition-colors duration-500 group-hover:bg-[#172451] relative">
                      {/* Logo positioned at bottom-right of content area */}
                      <div className="absolute bottom-6 right-6 h-8 md:h-10 w-24 md:w-32 opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-500 pointer-events-none">
                        <Image src={p.logo} alt={`${p.name} Logo`} fill className="object-contain" />
                      </div>

                      <h3 className="text-lg md:text-xl font-heading font-black text-[#172451] mb-2 md:mb-3 group-hover:text-white transition-colors duration-500">{p.name}</h3>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 group-hover:text-white/60 transition-colors duration-500">{p.desc}</p>
                      <Link href={p.path}
                        className="inline-flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-colors group/link text-[#172451] group-hover:text-[#fad77e]"
                      >
                        Discover More
                        <ArrowRight size={11} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-[#172451]" />
                  </div>
                );
              })}
            </ScrollRevealGroup>
          </div>
        </section>

        {/* ════ LOGO GRID ════ */}
        <LogoGrid />


        <FooterCTA />
      </main>
    </>
  );
}
