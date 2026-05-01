import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import MovingMesh from '../components/MovingMesh';

const CompanyGateway = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingTarget, setLoadingTarget] = useState(null);

  const handleEnter = (path, name) => {
    setLoadingTarget(name);
    setIsLoading(true);
    
    // Simulate 2-second loading animation before redirect
    setTimeout(() => {
      navigate(path);
    }, 2000);
  };

  return (
    <>
      <SEO title="Company Gateway | Dhyanora Group" description="Select a division to enter." />
      
      {/* 2-Second Fullscreen Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 border-4 border-navy/20 border-t-navy rounded-full animate-spin mb-8" />
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-heading font-black text-navy uppercase tracking-widest"
            >
              Loading {loadingTarget}...
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 min-h-screen bg-white flex flex-col items-center justify-center py-20 px-6 overflow-hidden">
        {/* Themed Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <MovingMesh />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Top Logo */}
          <div className="mb-16 text-center">
             <div className="w-20 h-20 bg-gold rounded-2xl flex items-center justify-center font-black text-navy text-4xl shadow-xl mx-auto">D</div>
          </div>

          {/* Two Square Boxes Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            
            {/* Metal Box */}
            <div className="flex flex-col items-center group">
              <div className="w-full aspect-square overflow-hidden bg-white shadow-2xl mb-8 relative rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                  alt="Metal Division" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h2 className="text-3xl font-heading font-black text-[#d67a33] uppercase tracking-[0.2em] mb-6 text-center">
                Metal
              </h2>
              <button 
                onClick={() => handleEnter('/pramukh', 'Metal Division')}
                className="px-12 py-3 bg-[#e0e0e0] hover:bg-gold hover:text-navy text-gray-700 font-bold uppercase tracking-widest transition-all duration-300 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                Enter
              </button>
            </div>

            {/* Bricks Box */}
            <div className="flex flex-col items-center group">
              <div className="w-full aspect-square overflow-hidden bg-white shadow-2xl mb-8 relative rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800" 
                  alt="Bricks Division" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h2 className="text-3xl font-heading font-black text-[#d67a33] uppercase tracking-[0.2em] mb-6 text-center">
                Bricks
              </h2>
              <button 
                onClick={() => handleEnter('/brics', 'Bricks Division')}
                className="px-12 py-3 bg-[#e0e0e0] hover:bg-gold hover:text-navy text-gray-700 font-bold uppercase tracking-widest transition-all duration-300 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                Enter
              </button>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default CompanyGateway;
