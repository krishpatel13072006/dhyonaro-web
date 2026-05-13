import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, Home,
  Target, Compass, ShieldCheck, TrendingUp, Eye
} from 'lucide-react';
import GlobalReach from '../components/GlobalReach';
import FooterCTA from '../components/FooterCTA';
import aboutHeroImg from '../images/about hero.png';
import focusedVision from '../images/focused vision.jpg';
import sectorDiversity from '../images/sector diversity.avif';
import gujaratRoutes from '../images/gujarat routes.avif';
import longTermThinking from '../images/long term thinking.avif';
import homeVision from '../images/home vision.avif';
import shreejiInfraTechImg from '../images/shreeji infra tech.avif';
import ScrollReveal, { ScrollRevealGroup } from '../components/ScrollReveal';
import SectionTag from '../components/SectionTag';
import LogoGrid from '../components/LogoGrid';
import BouncingCircles from '../components/BouncingCircles';





const About = () => (
  <>
    <SEO
      title="About Dhyanora Group | Leading Multi-Industry Parent Company"
      description="Learn about Dhyanora Group, a premier multi-industry parent company in Gujarat, driving excellence in import-export, real estate, and consumer electronics."
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' }
      ]}
    />
    <main className="bg-white">

      {/* ════ 1. HERO ════ */}
      <section className="relative h-[80vh] md:h-[100vh] w-full overflow-hidden flex items-end pb-12 md:pb-16 px-6 md:px-12">
        <div className="absolute inset-0">
          <img src={aboutHeroImg} className="w-full h-full object-cover" alt="Dhyanora Group Corporate Office and Strategic Leadership Hub" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#172451]/80 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Ahmedabad, Gujarat · Est. 2022
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white uppercase leading-[1.05] md:leading-[1.02] mb-6 max-w-4xl">
              The Foundation of<br className="hidden md:block" />
              <span className="text-[#60a5fa]"> Diverse Excellence.</span>
            </h1>
            <p className="text-white/80 text-sm md:text-xl mb-8 max-w-2xl leading-relaxed">
              Building a stronger tomorrow through dynamic ventures in global trade, commercial infrastructure, and premium retail.
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between text-white/70 border-t border-white/10 pt-6">
              <p className="max-w-xs text-[10px] md:text-sm font-semibold uppercase tracking-widest">A Diversified Industrial Portfolio · Gujarat &amp; Beyond</p>
              <Link to="/companies" className="inline-flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest group">
                Explore Our Companies
                <div className="w-8 h-8 border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#0d1b2e] transition-all duration-300">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════ 2. ORIGIN ════ */}
      <section className="py-20 md:py-32 px-6 bg-white border-t border-gray-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <BouncingCircles />
          <div className="absolute inset-0 opacity-[0.25]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="about-origin-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1.5" fill="#172451" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-origin-grid)" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-12">
            <Link to="/" className="hover:text-[#0d1b2e] transition-colors"><Home size={15} /></Link>
            <ChevronRight size={13} />
            <span className="font-bold text-[#0d1b2e]">About Us</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal x={-60} y={0} duration={1}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#172451]/10 rounded-3xl translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=900"
                  alt="Strategic Business Growth and Focus - Dhyanora Group Philosophy"
                  className="relative rounded-3xl shadow-2xl w-full h-[320px] md:h-[480px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-[#172451] text-white px-5 py-4 md:px-7 md:py-5 rounded-2xl shadow-2xl">
                  <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-blue-400 mb-1">Founded</p>
                  <p className="text-2xl md:text-3xl font-heading font-black leading-none">2022</p>
                  <p className="text-white/50 text-[10px] md:text-xs mt-1">Ahmedabad, GJ</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal x={60} y={0} delay={0.1} duration={1}>
              <SectionTag>Who We Are</SectionTag>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-[#172451] mb-6 md:mb-8 leading-tight">
                About Dhyanora Group
              </h2>
              <div className="space-y-4 md:space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>Headquartered in Gujarat, India, <strong className="text-[#0d1b2e]">Dhyanora Group</strong> stands as a visionary parent company with a diversified portfolio spanning multiple high-growth industries. We are the driving force behind a network of specialized businesses, each excelling in its respective domain—from international trade and heavy building materials to commercial real estate development and modern consumer electronics.</p>
                <p>As a central holding group, Dhyanora provides the strategic direction, financial stability, and unified vision that empowers our child companies to innovate and dominate their markets. We bridge the gap between global opportunities and local execution.</p>
              </div>
              <div className="mt-8 md:mt-10">
                <Link to="/companies" className="btn-blue group w-full sm:w-auto justify-center sm:justify-start">
                  Explore Our Companies
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════ 2.5 E-E-A-T SIGNALS: LEADERSHIP & EXPERTISE ════ */}
      <section className="py-20 md:py-32 px-6 bg-[#050b14] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionTag color="#fad77e">Expertise & Leadership</SectionTag>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white mt-4 leading-tight">
              Guided by <span className="text-[#fad77e]">Experience.</span>
            </h2>
            <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
              Dhyanora Group is led by industry veterans with deep-rooted expertise in industrial procurement, retail, and large-scale infrastructure development. Our leadership ensures strict adherence to corporate governance, legal compliance, and quality benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Experience",
                desc: "Decades of collective experience in navigating global supply chains, industrial construction, and premium consumer markets."
              },
              {
                title: "Certified Excellence",
                desc: "All our subsidiary operations adhere strictly to industry-specific quality certifications and regulatory compliance frameworks."
              },
              {
                title: "Authorised Partnerships",
                desc: "Trusted by top-tier global brands and regional industrial leaders for procurement and exclusive retail distribution."
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15} y={30}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#fad77e]/50 transition-colors">
                  <ShieldCheck size={32} className="text-[#fad77e] mb-6" />
                  <h3 className="text-xl font-heading font-black text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 3. WHAT SETS Dhyanora APART — BENTO GRID ════ */}
      <section className="py-24 md:py-36 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <ScrollReveal y={-40} x={0}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-3xl">
                <SectionTag>Our Promise</SectionTag>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-[#172451] leading-[1.1]">
                  What Sets <span className="text-[#172451]">Dhyanora</span> Apart?
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mt-6 max-w-2xl font-medium">
                  Four principles that guide every decision, every company, and every relationship within the Dhyanora Group.
                </p>
              </div>
              
              <Link 
                to="/companies"
                className="group bg-[#172451] hover:bg-blue-900 text-white px-5 py-3 md:px-7 md:py-3.5 text-sm rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-950/20 whitespace-nowrap self-start md:self-auto flex items-center gap-2"
              >
                Explore Our Companies
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[320px]">
            
            {/* Principle 1: Focused Vision */}
            <ScrollReveal delay={0.1} x={-50} y={0}>
              <div className="bg-white rounded-[2rem] p-6 md:p-10 h-full flex flex-col justify-center border border-slate-100 shadow-sm group hover:shadow-md transition-all duration-500">
                <h3 className="text-3xl lg:text-4xl font-heading font-black text-[#172451] mb-6 leading-tight">
                  Focused<br/>Vision
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  Every business venture we enter is chosen with intent and guided by a clear strategic purpose. We grow where we can lead.
                </p>
              </div>
            </ScrollReveal>

            {/* Decorative Image */}
            <ScrollReveal delay={0.2} y={50} x={0}>
              <div className="rounded-[2rem] overflow-hidden h-[250px] md:h-full relative group shadow-sm">
                <img 
                  src={focusedVision} 
                  alt="Strategic Vision" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
            </ScrollReveal>

            {/* Principle 2: Sector Diversity (Large) */}
            <ScrollReveal delay={0.3} x={60} y={0} className="lg:col-span-2 lg:row-span-2 relative group rounded-[2rem] overflow-hidden shadow-lg h-[400px] md:h-[500px] lg:h-full">
              <img 
                src={sectorDiversity} 
                alt="Sector Diversity" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-[#172451]/5 group-hover:bg-transparent transition-colors duration-500" />

              <div className="absolute top-4 left-4 right-4 lg:right-auto lg:w-1/2 bg-white rounded-[1.8rem] p-6 md:p-10 shadow-2xl border border-white/20 transition-all duration-500 group-hover:-translate-y-1">
                <h3 className="text-3xl lg:text-4xl font-heading font-black text-[#172451] mb-6 leading-tight">
                  Sector<br/>Diversity
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  Our portfolio spans the fundamental industries that drive the Indian economy — from supply chains to infrastructure.
                </p>
              </div>
            </ScrollReveal>

            {/* Principle 3: Gujarat Roots */}
            <ScrollReveal delay={0.4} y={-50} x={0}>
              <div className="bg-[#fad77e] rounded-[2rem] p-6 md:p-10 h-full flex flex-col justify-center text-[#172451] shadow-xl group transition-all duration-500 hover:shadow-amber-200/50">
                <h3 className="text-2xl lg:text-3xl font-heading font-black mb-6 leading-tight">
                  Gujarat Roots,<br/>Global Standards
                </h3>
              </div>
            </ScrollReveal>

            {/* Principle 4: Long-Term Thinking */}
            <ScrollReveal delay={0.5} x={-60} y={0}>
              <div className="bg-white rounded-[2rem] p-6 md:p-10 h-full flex flex-col justify-center border border-slate-100 shadow-sm group hover:shadow-md transition-all duration-500">
                <h3 className="text-3xl lg:text-4xl font-heading font-black text-[#172451] mb-6 leading-tight">
                  Long-Term<br/>Thinking
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  We are not here for short-term gains. Every decision is viewed through the lens of permanence and stability.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ════ 4. VISION · MISSION · PURPOSE ════ */}
      <section className="py-24 md:py-36 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <BouncingCircles />
          <div className="absolute inset-0 opacity-[0.25]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="about-vision-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1.5" fill="#172451" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-vision-grid)" />
            </svg>
          </div>
        </div>

        {/* Subtle background accent */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#f0f4ff] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal y={40} x={0}>
            <div className="text-center mb-20">
              <SectionTag>Our Strategic Core</SectionTag>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-[#172451] leading-tight">
                Our Vision & Mission
              </h2>
            </div>
          </ScrollReveal>

          {/* Vision — image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center mb-16 md:mb-24">
            <ScrollReveal x={-60} y={0}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[420px] group">
                <img src={focusedVision} alt="Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

              </div>
            </ScrollReveal>
            <ScrollReveal x={60} y={0} delay={0.15}>
              <div className="pl-0 lg:pl-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#172451] text-[10px] md:text-xs font-black uppercase tracking-widest mb-6">
                  <Eye size={12} /> Vision Statement
                </div>
                <blockquote className="text-xl md:text-3xl font-heading font-black text-[#172451] leading-snug mb-6 md:mb-8 relative">
                  To be a globally recognized corporate group that creates sustainable value across diverse industries by fostering innovation, ensuring operational excellence, and delivering uncompromising quality.
                </blockquote>
                <div className="h-0.5 w-16 bg-[#172451] mb-6 md:mb-8 rounded-full" />
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Trust is the most valuable currency in business — earned through years of consistency and unwavering discipline. Every stakeholder should feel immediate confidence when they see the Dhyanora signature.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Mission — text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center mb-16 md:mb-24">
            <ScrollReveal x={-60} y={0} delay={0.1} className="order-2 lg:order-1">
              <div className="pr-0 lg:pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#172451] text-[10px] md:text-xs font-black uppercase tracking-widest mb-6">
                  <Target size={12} /> Our Mission
                </div>
                <div className="space-y-4">
                  {[
                    "To empower our individual businesses—Pramukh Import Export, Shreeji Infra, and Pramukh Techventure—with the resources they need to lead their sectors.",
                    "To build landmark commercial real estate that shapes the future of business.",
                    "To maintain seamless international supply chains in the scrap and trading markets.",
                    "To enhance consumer lifestyles through premium electronic retail experiences."
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#172451] shrink-0" />
                      <p className="text-gray-600 text-sm md:text-base font-semibold leading-snug">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="h-0.5 w-16 bg-[#172451] mb-6 md:mb-8 rounded-full" />
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  We drive progress through clarity of thought, integrity of action, and a relentless focus on long-term sustainability across every industrial and consumer sector we touch.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal x={60} y={0} delay={0.15} className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[420px] group">
                <img src={longTermThinking} alt="Mission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

              </div>
            </ScrollReveal>
          </div>

          {/* Purpose — full width centered dark card */}
          <ScrollReveal delay={0.1} y={60} x={0}>
            <div className="relative rounded-3xl overflow-hidden bg-[#172451] p-6 md:p-16">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#172451]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#172451]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-0 left-0 w-60 h-60 bg-[#172451]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-12">
                  <SectionTag color="#fad77e">The Pillars of Our Group</SectionTag>
                  <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight mb-6">
                    Our Expanding Ecosystem
                  </h2>
                  <p className="text-white/60 text-base md:text-lg max-w-3xl leading-relaxed">
                    Dhyanora’s strength lies in the specialization of its distinct divisions. Together, they create a robust and self-sustaining business ecosystem:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {[
                    { title: "Pramukh Import Export", text: "Our global trading arm, leading the way in large-scale scrap import and export operations with an unyielding commitment to international standards." },
                    { title: "Brics Trading", text: "Operating as a specialized division under Pramukh, delivering high-grade bricks and essential materials to fuel large-scale construction projects." },
                    { title: "Shreeji Infra", text: "Our real estate powerhouse, dedicated to designing and constructing state-of-the-art commercial buildings and industrial estates that redefine urban infrastructure." },
                    { title: "Pramukh Techventure", text: "Our consumer-facing retail venture, functioning as an authorized agency to bring top-brand home appliances and electronics directly to modern homes." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-[#fad77e] font-heading font-black text-lg mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-12">
                  <SectionTag color="#fad77e">What Drives Us</SectionTag>
                  <h3 className="text-2xl md:text-4xl font-heading font-black text-white mb-8">Our Core Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { title: "Integrity", text: "We conduct all our global and domestic operations with absolute transparency." },
                      { title: "Excellence", text: "From the foundations laid by Shreeji Infra to the premium appliances sold at Pramukh Techventure, quality is our hallmark." },
                      { title: "Adaptability", text: "Operating across diverse sectors requires agility, and we pride ourselves on evolving with global market trends." },
                      { title: "Collaboration", text: "A unified approach where every child company strengthens the broader Dhyanora Group." }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <h5 className="text-white font-heading font-black text-sm uppercase tracking-wider">{item.title}</h5>
                        <p className="text-white/40 text-xs leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════ 5. LOGO GRID ════ */}
      <LogoGrid />

      {/* ════ 6. GLOBAL REACH — blob preserved ════ */}
      <GlobalReach />
      <FooterCTA 
        title="Be a Part of Our Journey"
        description="Whether you are looking for strategic partnerships, global trading solutions, commercial real estate spaces, or retail franchises, the Dhyanora Group is equipped to collaborate and deliver."
        buttonText="Contact Our Team"
        tag="Collaborate"
      />
    </main>
  </>
);

export default About;


