import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import MovingMesh from '../components/MovingMesh';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Compass, Users } from 'lucide-react';

const About = () => {
  return (
    <>
      <SEO title="Our Story | Dhyanora Group" description="Learn about the origins of Dhyanora Group, an Ahmedabad-based diversified conglomerate built on clarity of purpose and focused growth." />
      <main className="relative">
        
        {/* ABOUT HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-navy pt-20">
          <MovingMesh />
          
          <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span className="text-gold font-black uppercase tracking-[0.5em] text-xs mb-8 block">Clarity. Direction. Growth.</motion.span>
              <h1 className="font-heading font-black uppercase leading-[1] text-cream mb-10 italic" style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}>
                Our <span className="text-gold">Story.</span>
              </h1>
              <p className="text-xl md:text-3xl text-gray-light/60 leading-relaxed max-w-4xl mx-auto font-medium">
                A narrative of focus, discipline, and building for the future of Gujarat.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-navy to-transparent z-10" />
        </section>

        {/* OUR STORY SECTION */}
        <section className="px-6 py-32 bg-navy border-t border-white/5">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
              <div className="flex-1">
                 <span className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">The Beginning</span>
                 <h2 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase italic leading-tight mb-12">How Dhyanora <span className="text-gold">Began.</span></h2>
                 
                 <div className="space-y-8 text-xl text-gray-light/40 leading-relaxed font-medium">
                    <p>
                      Dhyanora Group was founded in 2026 in Ahmedabad, Gujarat, with a single belief: that focused businesses, run with discipline and values, create outcomes that last. What began as a vision to bring structure and identity to a growing portfolio of businesses became the foundation of a diversified group.
                    </p>
                    <p>
                      The name Dhyanora reflects who we are. <strong className="text-gold">"Dhyan"</strong> — the Sanskrit word for focus and awareness — sits at the heart of everything we do. We do not believe in building businesses carelessly. We believe in understanding a sector deeply, entering it with intention, and growing within it with patience.
                    </p>
                    <p>
                      Today, Dhyanora Group operates across four distinct business verticals — metal scrap trading, electronics retail, industrial infrastructure, and construction materials — each led by dedicated teams, each contributing to the collective strength of the group.
                    </p>
                 </div>
              </div>
              
              <div className="w-full lg:w-1/3 grid grid-cols-1 gap-6">
                 {[
                   { label: "Active Verticals", value: "4+" },
                   { label: "Headquarters", value: "Ahmedabad" },
                   { label: "Founded", value: "2026" },
                   { label: "Reach", value: "Pan-Gujarat" }
                 ].map((stat, i) => (
                   <div key={i} className="glass-card p-10 border-white/5 flex flex-col justify-center">
                      <div className="text-gold font-heading font-black text-5xl mb-2">{stat.value}</div>
                      <div className="text-gray-light/20 uppercase tracking-widest text-xs font-black">{stat.label}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* GATEWAY SECTION */}
        <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
           <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { title: "Vision & Mission", path: "/vision-mission", icon: <Target className="text-gold" size={32} />, desc: "Explore our core purpose and the mission that drives us." },
                   { title: "Our Companies", path: "/our-companies", icon: <Compass className="text-gold" size={32} />, desc: "See our diverse portfolio of industrial and retail businesses." },
                   { title: "Our Team", path: "/team", icon: <Users className="text-gold" size={32} />, desc: "Meet the leadership and principles behind the group." }
                 ].map((link, i) => (
                   <Link key={i} to={link.path} className="glass-card p-12 border-white/5 hover:border-gold/30 group transition-all">
                      <div className="mb-8 group-hover:scale-110 transition-transform">{link.icon}</div>
                      <h3 className="text-2xl font-heading font-bold text-cream uppercase mb-4">{link.title}</h3>
                      <p className="text-sm text-gray-light/40 leading-relaxed mb-8">{link.desc}</p>
                      <div className="flex items-center gap-2 text-gold font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                         Learn More <ArrowRight size={16} />
                      </div>
                   </Link>
                 ))}
              </div>
           </div>
        </section>

        {/* APPROACH SECTION */}
        <section className="px-6 py-32 bg-navy">
           <div className="max-w-3xl mx-auto text-center">
              <span className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our Approach</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-cream uppercase italic mb-10">How We Build <span className="text-gold">Businesses.</span></h2>
              <div className="space-y-6 text-lg text-gray-light/40 leading-relaxed font-medium">
                 <p>
                   At Dhyanora, we approach every business with the same framework: understand the market, build the right team, establish quality systems, and then grow. We do not rush. We do not compromise on fundamentals.
                 </p>
                 <p>
                   This consistency is what allows us to operate across such diverse sectors without losing focus. The Dhyanora name is our commitment — to our clients, our partners, and the communities we work in.
                 </p>
              </div>
           </div>
        </section>

        <div className="h-32 bg-navy" />
      </main>
    </>
  );
};

export default About;
