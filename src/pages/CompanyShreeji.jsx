import React, { useRef, useState } from 'react';
import SEO from '../components/SEO';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Building2, Ruler, ShieldCheck, ArrowRight, ArrowUpRight, Star, Quote, ChevronRight, MapPin, Mail, Phone, HardHat, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterCTA from '../components/FooterCTA';
import BrandScroll from '../components/BrandScroll';

// --- Sub-components ---

const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ParallaxImage = ({ src, alt, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} style={{ y }} className="w-full h-full object-cover scale-110" />
    </div>
  );
};

const StatCard = ({ value, label, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="border-l-2 border-gold pl-6"
    >
      <div className="text-3xl md:text-4xl font-heading font-black text-white leading-none mb-1">{value}</div>
      <div className="text-[10px] font-black uppercase tracking-widest text-white/40">{label}</div>
    </motion.div>
  );
};

// --- Main Page ---

const ShreejiInfra = () => {
  const heroRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);

  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroBgY = useTransform(heroScroll, [0, 1], ['0%', '30%']);
  const heroTextY = useTransform(heroScroll, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  const services = [
    { id: 0, title: 'Industrial Parks', tag: 'Flagship Development', desc: 'Professionally managed ecosystems built for modern manufacturers — Mahantam Industrial Park sets the benchmark.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200', icon: <Building2 size={20} /> },
    { id: 1, title: 'Civil Engineering', tag: 'Structural Precision', desc: 'High-tolerance structural work including foundations, frameworks, and civil works for complex industrial projects.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200', icon: <Ruler size={20} /> },
    { id: 2, title: 'Warehousing', tag: 'Large-Span Spaces', desc: 'Modern, scalable storage and logistics facilities designed for operational efficiency and 24/7 throughput.', img: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1200', icon: <Layers size={20} /> },
    { id: 3, title: 'Project Management', tag: 'End-to-End Oversight', desc: 'From site selection to final handover — we manage timelines, budgets, and quality with surgical precision.', img: 'https://images.unsplash.com/photo-1503387762-592be5a525b7?auto=format&fit=crop&q=80&w=1200', icon: <HardHat size={20} /> },
  ];

  const process = [
    { n: '01', title: 'Site Consultation', desc: 'On-site evaluation, feasibility assessment, and project scoping.' },
    { n: '02', title: 'Design & Engineering', desc: 'Structural blueprints and precision engineering documentation.' },
    { n: '03', title: 'Construction', desc: 'Quality material procurement and safety-first on-site execution.' },
    { n: '04', title: 'Final Handover', desc: 'Comprehensive quality audit, documentation, and sign-off.' },
  ];

  const portfolio = [
    { img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200', label: 'Mahantam Industrial Park', tag: 'Phase I Complete' },
    { img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800', label: 'Road Network', tag: 'Civic Infrastructure' },
    { img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', label: 'Logistics Hub', tag: 'Warehousing' },
    { img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800', label: 'Industrial Sheds', tag: 'Custom Build' },
    { img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800', label: 'Utility Grid', tag: 'Power & Water' },
  ];

  const testimonials = [
    { name: 'Rajesh Patel', role: 'Director, Gujarat Metals', text: 'Shreeji Infra delivered our industrial shed six weeks early. The structural quality is unmatched in the region.', stars: 5 },
    { name: 'Kiran Mehta', role: 'CEO, LogiX Warehousing', text: 'Their project management approach is world-class. Every deadline was met, every promise was kept.', stars: 5 },
    { name: 'Aarav Shah', role: 'MD, ShahBuild Corp', text: 'Transparent documentation and clear titles made our investment decision simple. Highly professional team.', stars: 5 },
  ];

  return (
    <>
      <SEO title="Shreeji Infra | Industrial Infrastructure Experts" description="Premium industrial sheds, warehousing and civil engineering by Shreeji Infra — a Dhyanora Group company." />
      <main className="bg-white overflow-x-hidden">

        {/* ── HERO ── */}
        <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center bg-[#0a0a0a] overflow-hidden">
          <motion.div className="absolute inset-0 z-0" style={{ y: heroBgY }}>
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1800" className="w-full h-full object-cover opacity-40" alt="Hero" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          </motion.div>

          <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="overflow-hidden mb-4">
                <motion.h1 initial={{ y: 120 }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22,1,0.36,1] }} className="text-6xl md:text-8xl lg:text-[7rem] font-heading font-black text-white uppercase italic leading-[0.85] tracking-tighter">
                  Building
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-4">
                <motion.h1 initial={{ y: 120 }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: [0.22,1,0.36,1] }} className="text-6xl md:text-8xl lg:text-[7rem] font-heading font-black text-gold uppercase italic leading-[0.85] tracking-tighter">
                  Industrial
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-12">
                <motion.h1 initial={{ y: 120 }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.5, ease: [0.22,1,0.36,1] }} className="text-6xl md:text-8xl lg:text-[7rem] font-heading font-black text-white/20 uppercase italic leading-[0.85] tracking-tighter">
                  Future.
                </motion.h1>
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:items-center">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-white/40 text-sm font-bold leading-relaxed max-w-xs">
                  Gujarat's trusted industrial infrastructure partner — building the spaces where industry grows.
                </motion.p>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}>
                  <Link to="/contact" className="flex items-center gap-3 bg-gold px-8 py-4 text-navy font-black uppercase italic tracking-widest text-xs hover:bg-white transition-all group whitespace-nowrap">
                    Start a Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 right-8 z-10">
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="flex flex-col items-center gap-2">
              <span className="text-white/20 text-[9px] font-black uppercase tracking-widest [writing-mode:vertical-rl]">Scroll Down</span>
              <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
            </motion.div>
          </motion.div>
        </section>



        {/* ── ABOUT / PHILOSOPHY ── */}
        <section className="py-28 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <ParallaxImage src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200" alt="About" className="w-full aspect-[4/5] rounded-2xl" />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-2xl shadow-2xl"
              >
                <div className="text-4xl font-heading font-black text-navy leading-none">15+</div>
                <div className="text-[10px] font-black uppercase text-navy/60 tracking-widest mt-1">Years Building<br />Gujarat's Future</div>
              </motion.div>
            </div>
            <div>
              <FadeUp>
                <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Our Philosophy</span>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic leading-tight mb-8">
                  We Build With<br />Discipline &amp; Pride.
                </h2>
                <p className="text-navy/50 text-base font-bold leading-relaxed mb-6">
                  Shreeji Infra is the infrastructure arm of Dhyanora Group, founded with one mandate: build industrial assets that stand for decades. We don't cut corners. We don't over-promise.
                </p>
                <p className="text-navy/50 text-base font-bold leading-relaxed mb-10">
                  Our flagship project — Mahantam Industrial Park — is a 500,000 sq ft professionally managed ecosystem for manufacturers in Ahmedabad, Gujarat.
                </p>
                <div className="space-y-4">
                  {['100% transparent documentation & clear titles', 'Integrated power, water & waste utilities', 'Strategic location near Ahmedabad transport corridors'].map((pt, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <ChevronRight size={12} className="text-navy" />
                      </div>
                      <span className="text-sm font-bold text-navy/70">{pt}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── interactive hover panel */}
        <section className="py-28 px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="mb-16">
              <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Services</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase italic">Our Core Capabilities.</h2>
            </FadeUp>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/5">
              {/* Left: list */}
              <div className="border-r border-white/5">
                {services.map((s) => (
                  <div
                    key={s.id}
                    onMouseEnter={() => setHoveredService(s.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`group flex items-center justify-between p-8 border-b border-white/5 cursor-pointer transition-all duration-300 ${hoveredService === s.id ? 'bg-white/5' : 'bg-transparent hover:bg-white/5'}`}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${hoveredService === s.id ? 'bg-gold text-navy' : 'bg-white/10 text-white/40'}`}>
                        {s.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">{s.tag}</div>
                        <h3 className={`text-xl font-heading font-black uppercase italic transition-colors duration-300 ${hoveredService === s.id ? 'text-gold' : 'text-white'}`}>{s.title}</h3>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${hoveredService === s.id ? 'border-gold text-gold' : 'border-white/10 text-white/20'}`}>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                ))}
              </div>
              {/* Right: image preview */}
              <div className="relative min-h-[400px] bg-white/5 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={hoveredService ?? 'default'} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                    <img
                      src={hoveredService !== null ? services[hoveredService].img : 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200'}
                      className="w-full h-full object-cover"
                      alt="Service"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-8 left-8 right-8">
                      {hoveredService !== null ? (
                        <>
                          <h4 className="text-2xl font-heading font-black text-white uppercase italic mb-2">{services[hoveredService].title}</h4>
                          <p className="text-sm text-white/60 font-bold leading-relaxed">{services[hoveredService].desc}</p>
                        </>
                      ) : (
                        <>
                          <h4 className="text-2xl font-heading font-black text-white/40 uppercase italic mb-2">Our Capabilities</h4>
                          <p className="text-xs text-white/20 font-bold uppercase tracking-widest">Hover a service to explore</p>
                        </>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS — Horizontal Step Cards ── */}
        <section className="py-28 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div>
                <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] block mb-4">How We Work</span>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic leading-tight">From Blueprint<br />To Handover.</h2>
              </div>
              <p className="text-navy/40 text-sm font-bold leading-relaxed">Every project follows a structured, four-stage process that keeps clients informed and in control from day one to sign-off.</p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-navy/5">
              {process.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative p-8 border-r border-navy/5 last:border-r-0 group hover:bg-navy transition-all duration-500 cursor-default"
                >
                  {/* Step number — large background */}
                  <div className="text-[80px] font-heading font-black text-navy/5 group-hover:text-white/5 leading-none mb-6 transition-colors select-none">{p.n}</div>
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-black text-[10px] mb-6">{p.n}</div>
                  <h4 className="text-base font-heading font-black uppercase text-navy group-hover:text-white transition-colors mb-3">{p.title}</h4>
                  <p className="text-xs text-navy/40 group-hover:text-white/40 font-bold leading-relaxed transition-colors">{p.desc}</p>
                  {i < process.length - 1 && (
                    <div className="absolute top-1/2 -right-3 w-6 h-6 bg-gold rounded-full flex items-center justify-center z-10 hidden md:flex">
                      <ChevronRight size={12} className="text-navy" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO MOSAIC ── */}
        <section className="py-28 px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="mb-16 flex justify-between items-end">
              <div>
                <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Portfolio</span>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase italic">Our Work<br />Speaks For Itself.</h2>
              </div>
              <button className="text-gold font-black uppercase italic tracking-widest text-xs border-b border-gold pb-1 hover:text-white transition-colors">View All</button>
            </FadeUp>

            {/* Top row — 4 cells sliding in from alternating directions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
              {portfolio.slice(1).map((item, i) => {
                const dirs = [{ x: -60, y: 0 }, { x: 0, y: -60 }, { x: 0, y: 60 }, { x: 60, y: 0 }];
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: dirs[i].x, y: dirs[i].y }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22,1,0.36,1] }}
                    className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
                  >
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={item.label} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-[9px] font-black text-gold uppercase tracking-widest mb-1">{item.tag}</div>
                      <div className="text-xs font-heading font-black text-white uppercase italic">{item.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Large center image — slides up */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22,1,0.36,1] }}
              className="relative h-[420px] overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img src={portfolio[0].img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1500" alt={portfolio[0].label} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end p-10">
                <div>
                  <div className="text-[10px] font-black text-gold uppercase tracking-widest mb-3">{portfolio[0].tag}</div>
                  <h3 className="text-3xl font-heading font-black text-white uppercase italic mb-4">{portfolio[0].label}</h3>
                  <div className="flex items-center gap-2 text-white/40 font-black uppercase text-[10px] tracking-widest">
                    Flagship Development <ChevronRight size={12} className="text-gold" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="text-center mb-16">
              <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic">Client Voices.</h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="p-8 border border-navy/5 rounded-2xl hover:border-gold hover:shadow-lg transition-all duration-500 group h-full flex flex-col">
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.stars)].map((_, j) => <Star key={j} size={12} className="text-gold fill-gold" />)}
                    </div>
                    <Quote size={32} className="text-navy/5 mb-4" />
                    <p className="text-navy/70 text-sm font-bold leading-relaxed flex-1 mb-8">"{t.text}"</p>
                    <div className="flex items-center gap-4 border-t border-navy/5 pt-6">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-black text-xs">{t.name[0]}</div>
                      <div>
                        <div className="text-xs font-black uppercase text-navy">{t.name}</div>
                        <div className="text-[10px] font-bold uppercase text-navy/40">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 px-6 bg-navy overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1800" className="w-full h-full object-cover grayscale" alt="CTA bg" />
          </div>
          <FadeUp className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Ready to Build?</span>
            <h2 className="text-3xl md:text-6xl font-heading font-black text-white uppercase italic leading-tight mb-10">
              Let's Build Something That Lasts.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="flex items-center gap-3 bg-gold px-8 py-4 text-navy font-black uppercase italic tracking-widest text-xs hover:bg-white transition-all group">
                Start Your Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+919099000000" className="flex items-center gap-3 border border-white/20 px-8 py-4 text-white font-black uppercase italic tracking-widest text-xs hover:border-gold hover:text-gold transition-all">
                <Phone size={14} /> Call Us Now
              </a>
            </div>
          </FadeUp>
        </section>

        <BrandScroll />
        <FooterCTA />
      </main>
    </>
  );
};

export default ShreejiInfra;


