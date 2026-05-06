import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

import focusedVision from '../images/focused vision.jpg';
import sectorDiversity from '../images/sector diversity.avif';
import gujaratRoutes from '../images/gujarat routes.avif';
import longTermThinking from '../images/long term thinking.avif';
import industrialShedImg from '../images/industrial shed companies page.avif';
import secureTilesImg from '../images/secure tiles.avif';
import shreejiInfraTechImg from '../images/shreeji infra tech.avif';

export default function ApartSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#f8f9fa] overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER SECTION --- */}
        <ScrollReveal y={-40} x={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="max-w-3xl">
              <p className="text-[#da251c] font-bold tracking-widest uppercase text-[10px] md:text-sm mb-3 md:mb-4">
                What Sets Dhyanora Apart?
              </p>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 tracking-tight leading-[1.1]">
                Discipline & purpose behind <br className="hidden md:block"/> every business decision.
              </h2>
              
              <p className="text-base md:text-lg text-slate-500 leading-relaxed mt-4 md:mt-6 max-w-2xl font-medium">
                Every company we build, every sector we enter is a deliberate act — guided by research, purpose, and unwavering ethics.
              </p>
            </div>
            
            <Link 
              to="/about"
              className="group bg-[#da251c] hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-red-600/20 whitespace-nowrap self-start md:self-auto flex items-center justify-center gap-2 w-full md:w-auto"
            >
              Read Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* --- EXACT 4-COLUMN BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[320px]">
          
          {/* Slot (1,1): Focused Vision */}
          <ScrollReveal delay={0.1} x={-50} y={0}>
            <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 h-full flex flex-col justify-center border border-slate-100 shadow-sm group hover:shadow-md transition-all duration-500">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-4 md:mb-6 tracking-tight leading-tight">
                Focused<br/>Vision
              </h3>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                Every business venture we enter is chosen with intent and guided by a clear strategic purpose.
              </p>
            </div>
          </ScrollReveal>

          {/* Slot (1,2): Image */}
          <ScrollReveal delay={0.2} y={50} x={0}>
            <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-48 md:h-full relative group shadow-sm">
              <img 
                src={focusedVision} 
                alt="Focused Vision" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
            </div>
          </ScrollReveal>

          {/* Slot (1,3 & 2,4): Sector Diversity (LARGE IMAGE AREA) */}
          <ScrollReveal delay={0.3} x={60} y={0} className="lg:col-span-2 lg:row-span-2 relative group rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg h-[400px] md:h-[500px] lg:h-full">
            <img 
              src={shreejiInfraTechImg} 
              alt="Industrial Ecosystem" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />

            {/* Floating White Card inside Large Image */}
            <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 lg:right-auto lg:w-1/2 bg-white rounded-[1.2rem] md:rounded-[1.8rem] p-6 md:p-10 shadow-2xl border border-white/20 transition-all duration-500 group-hover:-translate-y-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-slate-900 mb-4 md:mb-6 tracking-tight leading-tight">
                Sector<br/>Diversity
              </h3>
              <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium">
                Our portfolio spans the fundamental industries that drive the Indian economy — from supply chains to infrastructure.
              </p>
            </div>
          </ScrollReveal>

          {/* Slot (2,1): Image */}
          <ScrollReveal delay={0.4} y={-50} x={0}>
            <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-48 md:h-full relative group shadow-sm">
              <img 
                src={gujaratRoutes} 
                alt="Gujarat Roots" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
            </div>
          </ScrollReveal>

          {/* Slot (2,2): Gujarat Roots (Red box) */}
          <ScrollReveal delay={0.5} x={-60} y={0}>
            <div className="bg-[#da251c] rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 h-full flex flex-col justify-center text-white shadow-xl group transition-all duration-500 hover:shadow-red-600/30">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black mb-4 md:mb-6 tracking-tight leading-tight">
                Gujarat Roots,<br/>Global Standards
              </h3>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}


