import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ImportExport from './pages/ImportExport';
import ShreejiInfra from './pages/ShreejiInfra';
import TechVenture from './pages/TechVenture';
import Brics from './pages/Brics';
import Hub from './pages/Hub';
import Vision360 from './pages/Vision360';
import Exhibition from './pages/Exhibition';
import VisionMission from './pages/VisionMission';
import Companies from './pages/Companies';
import Team from './pages/Team';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="grain-overlay" />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          
          {/* Company Routes */}
          <Route path="/companies/import-export" element={<PageTransition><ImportExport /></PageTransition>} />
          <Route path="/companies/shreeji-infra" element={<PageTransition><ShreejiInfra /></PageTransition>} />
          <Route path="/companies/tech-venture" element={<PageTransition><TechVenture /></PageTransition>} />
          <Route path="/companies/brics" element={<PageTransition><Brics /></PageTransition>} />
          
          <Route path="/vision-mission" element={<PageTransition><VisionMission /></PageTransition>} />
          <Route path="/our-companies" element={<PageTransition><Companies /></PageTransition>} />
          <Route path="/team" element={<PageTransition><Team /></PageTransition>} />

          <Route path="/hub" element={<PageTransition><Hub /></PageTransition>} />
          <Route path="/nexus-helix" element={<PageTransition><Vision360 /></PageTransition>} />
          <Route path="/spatial-horizon" element={<PageTransition><Exhibition /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
