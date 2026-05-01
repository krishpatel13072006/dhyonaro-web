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
              <h1 className="font-heading font-black uppercase leading-[0.9] text-white mb-10 italic" style={{ fontSize: "clamp(3.5rem, 12vw, 8rem)" }}>
                Our <span className="text-gold-dark">Story.</span>
              </h1>
              <p className="text-xl md:text-3xl text-white/40 leading-relaxed max-w-4xl mx-auto font-bold">
                A narrative of focus, discipline, and building for the future of Gujarat.
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent z-10" />
        </section>

        {/* OUR STORY SECTION */}
        <section className="px-6 py-40 bg-white border-y border-navy/5">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
            <div className="flex-1">
              <span className="text-navy font-black uppercase text-[10px] mb-8 block opacity-40">The Beginning</span>
              <h2 className="text-4xl md:text-7xl font-heading font-black text-navy uppercase italic leading-tight mb-12">How Dhyanora <span className="text-gold-dark">Began.</span></h2>

              <div className="space-y-10 text-xl md:text-2xl text-navy/60 leading-relaxed font-bold">
                <p>
                  Dhyanora Group was founded in 2026 in Ahmedabad, Gujarat, with a single belief: that focused businesses, run with discipline and values, create outcomes that last. What began as a vision to bring structure and identity to a growing portfolio of businesses became the foundation of a diversified group.
                </p>
                <p>
                  The name Dhyanora reflects who we are. <strong className="text-navy font-black">"Dhyan"</strong> — the Sanskrit word for focus and awareness — sits at the heart of everything we do. We do not believe in building businesses carelessly. We believe in understanding a sector deeply, entering it with intention, and growing within it with patience.
                </p>
                <p>
                  Today, Dhyanora Group operates across four distinct business verticals — metal scrap trading, electronics retail, industrial infrastructure, and construction materials — each led by dedicated teams, each contributing to the collective strength of the group.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/3 grid grid-cols-1 gap-8">
              {[
                { label: "Active Verticals", value: "4+" },
                { label: "Headquarters", value: "Ahmedabad" },
                { label: "Founded", value: "2026" },
                { label: "Reach", value: "Pan-Gujarat" }
              ].map((stat, i) => (
                <div key={i} className="p-16 bg-off-white border border-navy/5 flex flex-col justify-center group hover:bg-navy transition-all duration-500 rounded-[3rem] shadow-sm">
                  <div className="text-navy group-hover:text-gold font-heading font-black text-6xl mb-4 transition-colors">{stat.value}</div>
                  <div className="text-navy/20 group-hover:text-white/40 uppercase text-[10px] font-black transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GATEWAY SECTION */}
        <section className="py-40 px-6 bg-white border-y border-navy/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:text-left md:grid-cols-3 gap-10">
              {[
                { title: "Vision & Mission", path: "/vision-mission", icon: <Target className="text-navy group-hover:text-gold" size={32} />, desc: "Explore our core purpose and the mission that drives us." },
                { title: "Our Companies", path: "/our-companies", icon: <Compass className="text-navy group-hover:text-gold" size={32} />, desc: "See our diverse portfolio of industrial and retail businesses." },
                { title: "Our Team", path: "/team", icon: <Users className="text-navy group-hover:text-gold" size={32} />, desc: "Meet the leadership and principles behind the group." }
              ].map((link, i) => (
                <Link key={i} to={link.path} className="group p-12 bg-off-white border border-navy/5 hover:bg-navy transition-all duration-500 shadow-xl rounded-[3rem]">
                  <div className="mb-10 group-hover:scale-110 transition-transform duration-500">{link.icon}</div>
                  <h3 className="text-2xl font-heading font-black text-navy group-hover:text-white uppercase mb-6 transition-colors">{link.title}</h3>
                  <p className="text-base text-navy/40 group-hover:text-white/40 leading-relaxed mb-10 font-bold transition-colors">{link.desc}</p>
                  <div className="flex items-center gap-3 text-gold-dark font-black uppercase text-[10px] group-hover:text-gold group-hover:gap-5 transition-all">
                    Learn More <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section className="px-6 py-48 bg-off-white">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-navy font-black uppercase text-[10px] mb-8 block opacity-30">Our Approach</span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-navy uppercase italic mb-12 leading-tight">How We Build <br /><span className="text-gold-dark">Businesses.</span></h2>
            <div className="space-y-8 text-xl md:text-2xl text-navy/40 leading-relaxed font-bold">
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
