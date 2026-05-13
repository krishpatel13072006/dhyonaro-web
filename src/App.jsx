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
// Lazy-loaded Pages
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const ShreejiInfra = React.lazy(() => import('./pages/CompanyShreeji.jsx'));
const TechVenture = React.lazy(() => import('./pages/CompanyTech.jsx'));
const ImportExport = React.lazy(() => import('./pages/CompanyImportExport.jsx'));
const Vision360 = React.lazy(() => import('./pages/Vision360'));
const Exhibition = React.lazy(() => import('./pages/Exhibition'));
const Companies = React.lazy(() => import('./pages/Companies'));


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

  const immersivePaths = ['/nexus-helix', '/spatial-horizon'];
  const isImmersivePage = immersivePaths.includes(location.pathname);

  const lenisRef = React.useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <div className="relative min-h-screen">
      <div className="grain-overlay" />
      {!isImmersivePage && <Navbar />}
      <SocialSidebar />

      <React.Suspense fallback={<div className="h-screen w-full bg-[#050b14] flex items-center justify-center"><div className="w-8 h-8 rounded-full bg-white/20 animate-pulse"></div></div>}>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

            {/* Company Routes */}
            <Route path="/companies/shreeji-infra" element={<PageTransition><ShreejiInfra /></PageTransition>} />
            <Route path="/companies/tech-venture" element={<PageTransition><TechVenture /></PageTransition>} />
            <Route path="/companies/import-export" element={<PageTransition><ImportExport /></PageTransition>} />

            <Route path="/companies" element={<PageTransition><Companies /></PageTransition>} />

            {/* Pages with custom transitions or no layout */}
            <Route path="/nexus-helix" element={<Vision360 />} />
            <Route path="/spatial-horizon" element={<Exhibition />} />
          </Routes>
        </AnimatePresence>
      </React.Suspense>

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
