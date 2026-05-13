import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTag from './SectionTag';

// Scroll animation helper (Matches user's request)
const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px' }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const FooterCTA = ({ 
  title = "Ready to Work With Dhyanora?", 
  description = "Whether you are a business partner, investor, or client — we are based in Ahmedabad and always open to conversations. Our team is ready to assist.",
  buttonText = "Get In Touch",
  tag = "Get Started"
}) => {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="relative rounded-[2.5rem] overflow-hidden min-h-[550px] flex items-center justify-center md:justify-end p-4 sm:p-8 md:p-12 lg:p-16 shadow-lg group">
          
          {/* Background Image (Industrial/Logistics theme to match Dhyanora) */}
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop" 
            alt="Logistics team looking forward" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Dark overlay to ensure the image isn't too distracting */}
          <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent"></div>

          {/* Floating White Content Card */}
          <div className="relative z-10 bg-white rounded-3xl p-6 sm:p-10 md:p-12 lg:p-14 max-w-xl w-full shadow-2xl">
            <SectionTag>{tag}</SectionTag>
            
            <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 leading-[1.1] mb-5 md:mb-6">
              {title}
            </h2>
            
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium mb-8 md:mb-10">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link 
                to="/contact" 
                className="btn-blue justify-center"
              >
                {buttonText}
              </Link>
              <Link 
                to="/companies" 
                className="bg-white border-2 border-slate-100 hover:border-[#172451]/20 hover:bg-slate-50 text-slate-900 px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold transition-all duration-300 text-center text-sm"
              >
                Our Companies
              </Link>
            </div>
          </div>

        </RevealOnScroll>
      </div>
    </section>
  );
};

export default FooterCTA;


