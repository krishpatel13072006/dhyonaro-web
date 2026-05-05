import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Tv,
  Smartphone,
  Headphones,
  ShieldCheck,
  Tag,
  Headset,
  Star,
  Quote,
  ArrowUpRight,
  ChevronRight,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterCTA from '../components/FooterCTA';
import BrandScroll from '../components/BrandScroll';

/* ── Scroll-triggered bottom-to-top reveal ── */
const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const TechVenture = () => {
  const stats = [
    { label: "Products Sold", value: "15k+" },
    { label: "Authorized Brands", value: "25+" },
    { label: "Service Points", value: "12+" },
    { label: "Satisfaction", value: "100%" }
  ];

  const categories = [
    {
      title: "Home Entertainment",
      desc: "Immersive 4K visuals and cinematic sound systems for the modern home.",
      icon: <Tv size={32} />,
      bgColor: "bg-white",
      textColor: "text-navy",
      bgImg: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Smart Mobility",
      desc: "The latest flagship smartphones and tablets from global tech giants.",
      icon: <Smartphone size={32} />,
      bgColor: "bg-[#121212]",
      textColor: "text-white",
      bgImg: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Home Appliances",
      desc: "Energy-efficient refrigerators, washing units, and kitchen tech.",
      icon: <Star size={32} />,
      bgColor: "bg-gold",
      textColor: "text-navy",
      bgImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const latestTech = [
    { title: "Quantum LED TVs", brand: "Sony Premium", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800" },
    { title: "Smart Soundbars", brand: "Bose Systems", img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=800" },
    { title: "Connected Home", brand: "Apple Ecosystem", img: "https://images.unsplash.com/photo-1558002038-103792e17724?auto=format&fit=crop&q=80&w=800" },
    { title: "Flagship Mobile", brand: "Samsung Ultra", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800" },
    { title: "Modern Fridge", brand: "LG Signature", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
    { title: "Professional Computing", brand: "MacBook Pro", img: "https://images.unsplash.com/photo-1517336712461-701df3d3efdf?auto=format&fit=crop&q=80&w=800" },
    { title: "Hi-Fi Audio", brand: "JBL Premium", img: "https://images.unsplash.com/photo-1558444458-5c455962cb63?auto=format&fit=crop&q=80&w=800" },
    { title: "Smart Living", brand: "Dyson Tech", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <>
      <SEO title="Pramukh Techventures | Gujarat's Technology Hub" description="Authorized retail and distribution of premium global electronics brands." />

      <main className="bg-white">

        {/* 1. HERO SECTION - MATCHING COMPANIES PAGE */}
        <section className="relative h-screen w-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=1600"
              className="w-full h-full object-cover opacity-60"
              alt="Technology"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          <div className="relative z-20 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase italic leading-none mb-10">
                Pramukh <br />
                <span className="text-gold">Techventures.</span>
              </h1>
              <div className="max-w-xl mx-auto">
                <p className="text-white/60 text-lg md:text-xl font-bold mb-12 leading-relaxed">
                  We bring the world's most reliable technology to the households of Gujarat. From flagship smartphones to cinematic home setups.
                </p>
                <button className="group flex items-center gap-4 bg-gold px-12 py-5 text-navy font-black uppercase italic tracking-widest hover:bg-white transition-all duration-500 mx-auto">
                  Explore Collection <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. SERVICES/CATEGORIES SECTION */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="mb-16">
              <span className="text-navy/20 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">What We Offer</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-navy uppercase italic leading-tight">
                A Comprehensive Set <br /> Of Tech Solutions.
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-navy/5">
              {categories.map((cat, i) => (
                <div key={i} className={`relative p-12 md:p-16 ${cat.bgColor} ${cat.textColor} group transition-all duration-700 overflow-hidden`}>
                  {/* Background Image on Hover */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <img src={cat.bgImg} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]" alt={cat.title} />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  <div className="relative z-10 transition-all duration-700 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <div className="mb-10 opacity-60">
                      {cat.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-black uppercase italic mb-6 leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-sm md:text-base font-bold opacity-60 leading-relaxed mb-10">
                      {cat.desc}
                    </p>
                    <div className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest cursor-pointer group-hover:gap-5 transition-all">
                      Learn More <ChevronRight size={14} className="text-gold" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MIDDLE SHOWCASE SECTION - REFINED SIZES */}
        <section className="py-24 md:py-40 px-6 bg-[#f9f9f9] border-y border-navy/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <FadeUp delay={0}>
                  <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Our Philosophy</span>
                  <h2 className="text-2xl md:text-4xl font-heading font-black text-navy uppercase italic leading-tight mb-8">
                    Sustainable And Innovative <br /> Retail Infrastructure.
                  </h2>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <div className="aspect-video overflow-hidden mb-12 border border-navy/5">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                      className="w-full h-full object-cover"
                      alt="Retail Excellence"
                    />
                  </div>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl font-heading font-black text-navy mb-1">{stat.value}</div>
                        <div className="text-[10px] font-black uppercase text-navy/40 tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </div>
              <FadeUp delay={0.1} className="order-1 lg:order-2 space-y-10">
                <p className="text-navy/60 text-lg font-bold leading-relaxed">
                  Dhyanora Group's tech division is built on the belief that genuine technology, paired with honest pricing and expert guidance, creates lifelong customer relationships.
                </p>
                <p className="text-navy/60 text-lg font-bold leading-relaxed">
                  We don't just sell gadgets; we provide digital solutions that enhance the modern lifestyle of our customers across Gujarat.
                </p>
                <div className="h-[50vh] md:h-[60vh] overflow-hidden border border-navy/5">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200"
                    className="w-full h-full object-cover shadow-2xl"
                    alt="Modern Tech"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* 4. LATEST PROJECTS (PRODUCT SHOWCASE) - REFINED GRID */}
        <section className="py-24 md:py-40 px-6 bg-navy">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
              <div>
                <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Collections</span>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase italic leading-none">
                  Take A Look At <br /> Our Latest Inventory.
                </h2>
              </div>
              <div className="h-px flex-grow bg-white/10 hidden md:block mx-12" />
              <Link to="/contact" className="text-white font-black text-[10px] uppercase tracking-widest border-b border-gold pb-2 hover:text-gold transition-colors">
                View All Products
              </Link>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestTech.map((item, i) => (
                <FadeUp key={i} delay={i * 0.08}>
                  <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
                    <div className="aspect-square overflow-hidden mb-6 relative bg-white/5 border border-white/5">
                      <img
                        src={item.img}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        alt={item.title}
                      />
                      <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-8 h-8 bg-gold flex items-center justify-center">
                          <ArrowUpRight size={16} className="text-navy" />
                        </div>
                      </div>
                    </div>
                    <div className="text-[10px] font-black text-gold uppercase tracking-widest mb-1">{item.brand}</div>
                    <h4 className="text-lg font-heading font-black text-white uppercase italic mb-3 group-hover:text-gold transition-colors leading-tight">{item.title}</h4>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest border-b border-white/10 pb-1">Details</span>
                  </motion.div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS SECTION */}
        <section className="py-24 md:py-40 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="mb-20">
              <span className="text-navy/20 font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Community</span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-navy uppercase italic">What Our Customers <br /> Say About Us.</h2>
            </FadeUp>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                  className="w-full aspect-[4/5] object-cover grayscale shadow-2xl"
                  alt="Customer"
                />
              </div>
              <div className="lg:col-span-7 space-y-12">
                <div className="bg-gold p-12 md:p-16 relative">
                  <Quote className="absolute top-8 right-8 text-navy/20" size={64} />
                  <p className="text-navy text-xl md:text-2xl font-bold leading-relaxed mb-8">
                    "The expert guidance at Pramukh Techventures helped me choose the perfect home theater setup. Their pricing was honest, and the installation was handled with absolute professionalism."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="User" />
                    </div>
                    <div>
                      <div className="font-black uppercase text-xs">Rajesh Mehra</div>
                      <div className="text-[10px] uppercase opacity-60">Verified Buyer</div>
                    </div>
                  </div>
                </div>
                <div className="border border-navy/5 p-12 md:p-16">
                  <p className="text-navy/60 text-lg font-bold leading-relaxed mb-8">
                    "Found genuine Apple products with full manufacturer warranty. The after-sales support team is knowledgeable and responsive."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="User" />
                    </div>
                    <div>
                      <div className="font-black uppercase text-xs">Ananya Shah</div>
                      <div className="text-[10px] uppercase opacity-60">Corporate Client</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. NEWS & ARTICLES */}
        <section className="py-24 md:py-40 px-6 bg-off-white">
          <div className="max-w-7xl mx-auto">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-navy uppercase italic mb-16">Latest Tech News <br /> &amp; Insights.</h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { date: "May 10, 2026", title: "The Future of 8K Entertainment in Gujarat", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=800" },
                { date: "May 05, 2026", title: "Top 5 Energy Efficient Home Appliances", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" },
                { date: "April 28, 2026", title: "Mobile Security: Safeguarding Your Data", img: "https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&q=80&w=800" }
              ].map((news, i) => (
                <FadeUp key={i} delay={i * 0.12}>
                  <div className="group cursor-pointer">
                    <div className="aspect-video overflow-hidden mb-6">
                      <img src={news.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="News" />
                    </div>
                    <div className="text-[10px] font-black text-gold uppercase tracking-widest mb-3">{news.date}</div>
                    <h4 className="text-xl font-heading font-black text-navy uppercase italic leading-tight group-hover:text-gold transition-colors">{news.title}</h4>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>



        <BrandScroll />
        <FooterCTA />

      </main>
    </>
  );
};

export default TechVenture;


