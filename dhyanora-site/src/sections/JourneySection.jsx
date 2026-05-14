'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from '@/lib/gsap';
import { motion } from 'framer-motion';

const journeySteps = [
  {
    year: "2010",
    title: "The Genesis",
    text: "Pramukh Group was founded with a vision to revolutionize local trade with integrity.",
    alt: "Dhyanora Group Founding and Early Trading Business in 2010",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2014",
    title: "Infrastructure Boom",
    text: "Launch of Shreeji Infra marked our entry into visionary construction.",
    alt: "Shreeji Infra Establishment and Industrial Infrastructure Growth in Gujarat",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2018",
    title: "Going Global",
    text: "Connecting borders through quality with Pramukh Import Export.",
    alt: "Pramukh Import Export Global Expansion and Metal Trading Logistics",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2022",
    title: "Tech Innovation",
    text: "Scaling next-gen solutions with Pramukh Tech Venture.",
    alt: "Pramukh Techventures Electronics Retail and Technology Innovation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2022",
    title: "Future Horizons",
    text: "Leading the industry with sustainable and diversified growth.",
    alt: "Dhyanora Group Future Strategic Vision and Sustainable Industrial Growth",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

const JourneySection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = containerRef.current.scrollWidth;
      const amountToScroll = scrollWidth - window.innerWidth;

      gsap.to(containerRef.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      // Animate background years
      gsap.from(".journey-year-bg", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen bg-[#050b14] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#fad77e]/10 z-0" />
      
      <div className="h-full flex items-center px-20">
        <div ref={containerRef} className="flex gap-20 items-center relative z-10">
          
          {/* Header Card */}
          <div className="min-w-[450px] pr-20 flex flex-col justify-center h-full">
             <div className="space-y-2 mb-10">
               <span className="text-[#fad77e] text-xs font-bold uppercase tracking-[0.4em] block">The Timeline</span>
               <div className="h-1 w-12 bg-[#fad77e]" />
             </div>
             
             <h2 className="text-6xl md:text-8xl font-heading font-black text-white leading-[0.9] flex flex-col">
               <span className="block">OUR</span>
               <span className="text-[#fad77e] block">JOURNEY</span>
             </h2>
             
             <p className="mt-12 text-white/40 text-lg leading-relaxed max-w-sm">
               A decade of excellence, innovation, and unwavering commitment to global growth across diverse sectors.
             </p>
          </div>

          {/* Timeline Steps */}
          {journeySteps.map((step, index) => (
            <div key={index} className="relative min-w-[500px] group">
              {/* Giant Year BG */}
              <div className="journey-year-bg absolute -top-40 left-0 text-[15rem] font-heading font-black text-white/[0.03] pointer-events-none select-none">
                {step.year}
              </div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 group-hover:border-[#fad77e]/40 transition-all duration-700 relative z-10 rounded-3xl">
                <div className="aspect-video rounded-2xl overflow-hidden mb-8 border border-white/10">
                   <img 
                    src={step.image} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                    alt={step.alt} 
                   />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                   <span className="text-[#fad77e] font-heading font-bold text-2xl">{step.year}</span>
                   <div className="h-px w-8 bg-[#fad77e]/30" />
                </div>
                
                <h3 className="text-3xl font-heading font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {step.text}
                </p>

                {/* Connection Line */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-[1px] bg-[#fad77e]/20" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-50">
         <span className="text-[10px] uppercase tracking-widest text-[#fad77e] font-bold">Scroll to Explore</span>
         <div className="w-12 h-px bg-[#fad77e]/30" />
         <motion.div 
           animate={{ x: [0, 10, 0] }}
           transition={{ duration: 1.5, repeat: Infinity }}
           className="w-2 h-2 rounded-full bg-[#fad77e]"
         />
      </div>
    </section>
  );
};

export default JourneySection;
