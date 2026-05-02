import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import MovingMesh from '../components/MovingMesh';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Compass, Users, Linkedin, Instagram, Facebook, Globe, Building2, Zap } from 'lucide-react';

import dhyanoraLogo from '../companies-logo/Dhyanora logo.png';

const About = () => {
  return (
    <>
      <SEO title="Our Story | Dhyanora Group" description="Learn about the origins of Dhyanora Group, an Ahmedabad-based diversified conglomerate built on clarity of purpose and focused growth." />
      <main className="bg-white">

        {/* ABOUT HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white pt-24">
          <MovingMesh />

          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span className="text-white font-black uppercase text-[10px] mb-8 block opacity-60">Clarity. Direction. Growth.</motion.span>
              <h1 className="font-heading font-black uppercase leading-[0.9] text-white mb-10 italic" style={{ fontSize: "clamp(2.5rem, 10vw, 8rem)" }}>
                Our <span className="text-gold-dark">Story.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl text-white/40 leading-relaxed max-w-4xl mx-auto font-bold">
                A narrative of focus, discipline, and building for the future of Gujarat.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent z-10" />
        </section>

        {/* OUR STORY SECTION */}
        <section className="px-6 py-20 md:py-40 bg-white border-y border-navy/5 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 md:mb-40">
              <div className="flex-1">
                <span className="text-navy font-black uppercase text-[10px] mb-8 block opacity-40">The Beginning</span>
                <h2 className="text-2xl sm:text-3xl md:text-6xl font-heading font-black text-navy uppercase italic leading-tight mb-8 md:mb-10">How Dhyanora <span className="text-gold-dark">Began.</span></h2>
   
                <div className="space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl text-navy/60 leading-relaxed font-bold">
                  <p>
                    Dhyanora Group was founded in 2026 in Ahmedabad, Gujarat, with a single belief: that focused businesses, run with discipline and values, create outcomes that last. What began as a vision to bring structure and identity to a growing portfolio of businesses became the foundation of a diversified group.
                  </p>
                  <p>
                    The name Dhyanora reflects who we are. <strong className="text-navy font-black">"Dhyan"</strong> — the Sanskrit word for focus and awareness — sits at the heart of everything we do. We believe in understanding a sector deeply, entering it with intention, and growing within it with patience.
                  </p>
                  <p>
                    Today, Dhyanora Group operates across four distinct business verticals — each led by dedicated teams, each contributing to the collective strength of the group.
                  </p>
                </div>
              </div>
              <div className="flex-1 relative hidden lg:block h-[600px]">
                 <div className="absolute inset-0 flex items-center justify-center scale-110">
                    {/* Concentric Circles (Darkened for visibility) */}
                    <div className="absolute w-56 h-56 border border-navy/20 rounded-full" />
                    <div className="absolute w-[400px] h-[400px] border border-navy/20 rounded-full" />
                    <div className="absolute w-[550px] h-[550px] border border-navy/20 rounded-full" />
                    
                    {/* Central Logo/Icon */}
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl z-10 border-4 border-navy/5 overflow-hidden p-2">
                       <img src={dhyanoraLogo} alt="Dhyanora" className="w-full h-auto object-contain" />
                    </div>

                    {/* Orbit 1: People (Real-world Icons - Expanded) */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute w-56 h-56"
                    >
                       <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-white shadow-xl overflow-hidden bg-off-white">
                          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Team Member" />
                       </div>
                       <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-white shadow-xl overflow-hidden bg-off-white">
                          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Team Member" />
                       </div>
                       <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white shadow-xl overflow-hidden bg-off-white">
                          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Team Member" />
                       </div>
                       <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white shadow-xl overflow-hidden bg-off-white">
                          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Team Member" />
                       </div>
                    </motion.div>

                    {/* Orbit 2: Socials & Platforms */}
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[400px] h-[400px]"
                    >
                       <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-navy/5 rounded-full shadow-lg flex items-center justify-center text-[#0077B5]">
                          <Linkedin size={18} />
                       </div>
                       <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-navy/5 rounded-full shadow-lg flex items-center justify-center text-[#E4405F]">
                          <Instagram size={18} />
                       </div>
                       <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-navy/5 rounded-full shadow-lg flex items-center justify-center text-[#1877F2]">
                          <Facebook size={18} />
                       </div>
                       <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-navy/5 rounded-full shadow-lg flex items-center justify-center text-[#25D366]">
                          <Zap size={18} className="fill-[#25D366]/20" /> {/* WhatsApp Placeholder */}
                       </div>
                    </motion.div>

                    {/* Orbit 3: Reach & Diversity */}
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[550px] h-[550px]"
                    >
                       <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 bg-white border border-navy/5 rounded-full shadow-lg flex items-center justify-center text-navy">
                          <Globe size={18} />
                       </div>
                       <div className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 bg-white border border-navy/5 rounded-full shadow-lg flex items-center justify-center text-navy">
                          <Compass size={18} />
                       </div>
                       <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-navy/5 rounded-full shadow-lg flex items-center justify-center text-navy">
                          <Target size={18} />
                       </div>
                       <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-navy/5 rounded-full shadow-lg flex items-center justify-center text-navy">
                          <Users size={18} />
                       </div>
                    </motion.div>

                    {/* Faint Glow */}
                    <div className="absolute w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -z-10" />
                 </div>
              </div>
            </div>

            {/* REFINED: Connected Data Line Section */}
            <div className="relative mt-32 md:mt-48">
               {/* Horizontal Connection Line (Desktop) */}
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                 className="absolute top-4 left-0 h-[1px] bg-navy/10 hidden lg:block" 
               />
               
               {/* Vertical Connection Line (Mobile) */}
               <motion.div 
                 initial={{ height: 0 }}
                 whileInView={{ height: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                 className="absolute left-4 top-0 w-[1px] bg-navy/10 lg:hidden" 
               />

               <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                 {[
                   { label: "Active Verticals", value: "4+" },
                   { label: "Headquarters", value: "Ahmedabad" },
                   { label: "Founded", value: "2026" },
                   { label: "Reach", value: "Pan-Gujarat" }
                 ].map((stat, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.15, duration: 0.8 }}
                     className="flex flex-row lg:flex-col items-start gap-8 lg:gap-16 group"
                   >
                     {/* The Dot (Refined) */}
                     <div className="relative flex-shrink-0">
                        <div className="w-8 h-8 rounded-full border border-navy/5 bg-white flex items-center justify-center relative z-20 shadow-sm group-hover:border-gold-dark/50 transition-colors duration-500">
                           <div className="w-2 h-2 rounded-full bg-navy group-hover:bg-gold-dark transition-colors duration-500" />
                        </div>
                        {/* Pulse effect on hover */}
                        <div className="absolute inset-0 rounded-full bg-gold/20 scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
                     </div>
                     
                     {/* The Box (Minimalist & Premium) */}
                     <div className="flex-1 w-full p-8 bg-white border border-navy/5 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.02)] group-hover:shadow-[0_20px_60px_rgba(23,36,81,0.08)] transition-all duration-700 group-hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gold-dark/0 group-hover:bg-gold-dark transition-all duration-500" />
                        <div className="text-3xl md:text-4xl text-navy font-heading font-black mb-2 tracking-tight">{stat.value}</div>
                        <div className="text-navy/30 uppercase text-[9px] font-black tracking-[0.2em]">{stat.label}</div>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>
        </section>

        {/* GATEWAY SECTION */}
        <section className="py-20 md:py-40 px-6 bg-white border-y border-navy/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:text-left md:grid-cols-3 gap-6 md:gap-10">
              {[
                { title: "Vision & Mission", path: "/vision-mission", icon: <Target className="text-navy group-hover:text-gold" size={32} />, desc: "Explore our core purpose and the mission that drives us." },
                { title: "Our Companies", path: "/our-companies", icon: <Compass className="text-navy group-hover:text-gold" size={32} />, desc: "See our diverse portfolio of industrial and retail businesses." },
                { title: "Our Team", path: "/team", icon: <Users className="text-navy group-hover:text-gold" size={32} />, desc: "Meet the leadership and principles behind the group." }
              ].map((link, i) => (
                <Link key={i} to={link.path} className="group p-8 md:p-12 bg-off-white border border-navy/5 hover:bg-navy transition-all duration-500 shadow-xl rounded-[2rem] md:rounded-[3rem]">
                  <div className="mb-6 md:mb-10 group-hover:scale-110 transition-transform duration-500">{link.icon}</div>
                  <h3 className="text-xl md:text-2xl font-heading font-black text-navy group-hover:text-white uppercase mb-4 md:mb-6 transition-colors">{link.title}</h3>
                  <p className="text-sm md:text-base text-navy/40 group-hover:text-white/40 leading-relaxed mb-8 md:mb-10 font-bold transition-colors">{link.desc}</p>
                  <div className="flex items-center gap-3 text-gold-dark font-black uppercase text-[10px] group-hover:text-gold group-hover:gap-5 transition-all">
                    Learn More <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section className="px-6 py-24 md:py-48 bg-off-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-navy font-black uppercase text-[10px] mb-8 block opacity-30">Our Approach</span>
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-heading font-black text-navy uppercase italic mb-8 md:mb-12 leading-tight">How We Build <br /><span className="text-gold-dark">Businesses.</span></h2>
            <div className="space-y-6 md:space-y-8 text-lg sm:text-xl md:text-2xl text-navy/40 leading-relaxed font-bold">
              <p>
                At Dhyanora, we approach every business with the same framework: understand the market, build the right team, establish quality systems, and then grow. We do not rush. We do not compromise on fundamentals.
              </p>
              <p>
                This consistency is what allows us to operate across such diverse sectors without losing focus. The Dhyanora name is our commitment — to our clients, our partners, and the communities we work in.
              </p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default About;
