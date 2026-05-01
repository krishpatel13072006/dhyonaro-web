import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SocialSidebar from './components/SocialSidebar';

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
import CompanyGateway from './pages/CompanyGateway';

// Pramukh Subcompany Pages
import PramukhLayout from './pages/pramukh/PramukhLayout';
import PramukhHome from './pages/pramukh/PramukhHome';
import PramukhAbout from './pages/pramukh/PramukhAbout';
import PramukhServices from './pages/pramukh/PramukhServices';
import PramukhContact from './pages/pramukh/PramukhContact';
import PramukhMetals from './pages/pramukh/PramukhMetals';
import PramukhProcurement from './pages/pramukh/PramukhProcurement';
import PramukhExport from './pages/pramukh/PramukhExport';
import PramukhLogistics from './pages/pramukh/PramukhLogistics';

// Brics Subcompany Pages
import BricsLayout from './pages/brics/BricsLayout';
import BricsHome from './pages/brics/BricsHome';
import BricsAbout from './pages/brics/BricsAbout';
import BricsProducts from './pages/brics/BricsProducts';
import BricsContact from './pages/brics/BricsContact';
import BricsFirstClass from './pages/brics/BricsFirstClass';
import BricsSecondClass from './pages/brics/BricsSecondClass';
import BricsAACBlocks from './pages/brics/BricsAACBlocks';
import BricsMaterials from './pages/brics/BricsMaterials';

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

  const immersivePaths = ['/nexus-helix', '/spatial-horizon', '/gateway'];
  const isImmersivePage = immersivePaths.includes(location.pathname) || location.pathname.startsWith('/pramukh') || location.pathname.startsWith('/brics');

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
      {!isImmersivePage && <Navbar />}
      <SocialSidebar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/gateway" element={<PageTransition><CompanyGateway /></PageTransition>} />

          {/* Company Routes */}
          <Route path="/companies/shreeji-infra" element={<PageTransition><ShreejiInfra /></PageTransition>} />
          <Route path="/companies/tech-venture" element={<PageTransition><TechVenture /></PageTransition>} />
          <Route path="/companies/brics" element={<PageTransition><Brics /></PageTransition>} />

          <Route path="/vision-mission" element={<PageTransition><VisionMission /></PageTransition>} />
          <Route path="/our-companies" element={<PageTransition><Companies /></PageTransition>} />
          <Route path="/team" element={<PageTransition><Team /></PageTransition>} />

          {/* Pages with custom transitions or no layout */}
          <Route path="/hub" element={<Hub />} />
          <Route path="/nexus-helix" element={<Vision360 />} />
          <Route path="/spatial-horizon" element={<Exhibition />} />

          {/* Pramukh Subcompany Nested Routes */}
          <Route path="/pramukh" element={<PramukhLayout />}>
            <Route index element={<PageTransition><PramukhHome /></PageTransition>} />
            <Route path="about" element={<PageTransition><PramukhAbout /></PageTransition>} />
            <Route path="services" element={<PageTransition><PramukhServices /></PageTransition>} />
            <Route path="services/metals" element={<PageTransition><PramukhMetals /></PageTransition>} />
            <Route path="services/procurement" element={<PageTransition><PramukhProcurement /></PageTransition>} />
            <Route path="services/export" element={<PageTransition><PramukhExport /></PageTransition>} />
            <Route path="services/logistics" element={<PageTransition><PramukhLogistics /></PageTransition>} />
            <Route path="contact" element={<PageTransition><PramukhContact /></PageTransition>} />
          </Route>

          {/* Brics Subcompany Nested Routes */}
          <Route path="/brics" element={<BricsLayout />}>
            <Route index element={<PageTransition><BricsHome /></PageTransition>} />
            <Route path="about" element={<PageTransition><BricsAbout /></PageTransition>} />
            <Route path="products" element={<PageTransition><BricsProducts /></PageTransition>} />
            <Route path="products/first-class" element={<PageTransition><BricsFirstClass /></PageTransition>} />
            <Route path="products/second-class" element={<PageTransition><BricsSecondClass /></PageTransition>} />
            <Route path="products/aac-blocks" element={<PageTransition><BricsAACBlocks /></PageTransition>} />
            <Route path="products/materials" element={<PageTransition><BricsMaterials /></PageTransition>} />
            <Route path="contact" element={<PageTransition><BricsContact /></PageTransition>} />
          </Route>
        </Routes>
      </AnimatePresence>

      {!isImmersivePage && <Footer />}
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
