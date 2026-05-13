import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Float, Text, OrbitControls, Environment, Html } from '@react-three/drei';
import * as THREE from 'three';
import SEO from '../components/SEO';
import { ArrowLeft, X, Move, ZoomIn, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const helixData = [
  { id: 1, name: "IMPORT EXPORT", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec", desc: "Gujarat's reliable partner for metal scrap procurement, trading, and export services.", tagline: "Metal Scrap Trading" },
  { id: 2, name: "TECHVENTURES", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661", desc: "Your trusted destination for quality electronics — from home appliances to the latest technology.", tagline: "Electronics Retail" },
  { id: 3, name: "SHREEJI INFRA", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd", desc: "Premium industrial sheds and workspace solutions under the Mahantam Industrial Park brand.", tagline: "Industrial Infrastructure" },
  { id: 4, name: "BRICKS TRADING", img: "https://images.unsplash.com/photo-1590069230002-70cc3027aa21", desc: "Supplying quality bricks and construction materials to builders and contractors across the region.", tagline: "Construction Materials" },
];

// Robust texture loader component
function HelixNode({ item, index, onSelect }) {
  const [texture, setTexture] = useState(null);
  const [loadError, setLoadError] = useState(false);
  
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      item.img + "?auto=format&fit=crop&q=80&w=800",
      (tex) => setTexture(tex),
      undefined,
      () => setLoadError(true)
    );
  }, [item.img]);

  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const { viewport } = useThree();
  const isMobile = viewport.width < 8;

  const angle = index * (Math.PI * 0.45); 
  const y = index * (isMobile ? 3.5 : 4.5) - 10; 
  const radius = isMobile ? 5 : 8;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.05;
    }
  });

  return (
    <group position={[x, y, z]} rotation={[0, -angle + Math.PI / 2, 0]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh 
          ref={meshRef}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(item);
          }}
        >
           <planeGeometry args={[isMobile ? 4.5 : 6, isMobile ? 3 : 4]} />
           <meshStandardMaterial 
             map={texture} 
             color={loadError ? "#1a2a4a" : "#ffffff"}
             side={THREE.DoubleSide} 
             transparent 
             opacity={0.95}
             emissive={new THREE.Color("#F2C94C")}
             emissiveIntensity={hovered ? 0.4 : 0.1}
           />
        </mesh>
        
        <mesh position={[0, 0, -0.05]}>
           <planeGeometry args={[isMobile ? 4.7 : 6.2, isMobile ? 3.2 : 4.2]} />
           <meshStandardMaterial color="#F2C94C" emissive="#F2C94C" emissiveIntensity={hovered ? 3 : 0.8} transparent opacity={0.5} />
        </mesh>

        {/* Text facing the camera correctly */}
        <Text
          position={[0, isMobile ? -2.2 : -2.8, 0.2]}
          fontSize={isMobile ? 0.3 : 0.4}
          color="white"
          anchorX="center"
          maxWidth={isMobile ? 4 : 6}
          textAlign="center"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {item.name}
        </Text>
      </Float>
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-navy/90 backdrop-blur-3xl p-10 rounded-[2rem] border border-white/10 shadow-2xl min-w-[200px]">
         <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mb-4" />
         <p className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Initializing Helix...</p>
      </div>
    </Html>
  );
}

export default function Vision360() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showHints, setShowHints] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHints(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen h-[100dvh] overflow-hidden bg-black text-white z-[9999]">
      <SEO title="Nexus Helix | Interactive 3D Business Vision | Dhyanora Group" description="Experience the future of Dhyanora Group through an interactive 3D Nexus Helix, showcasing our core industrial and retail divisions." />
      
      <AnimatePresence>
        {showHints && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-[60]"
          >
             <div className="bg-navy/80 backdrop-blur-3xl border border-gold/30 p-10 rounded-[3.5rem] flex flex-col items-center gap-8 shadow-2xl">
                <div className="flex gap-10">
                   <div className="flex flex-col items-center gap-2">
                      <Move className="text-gold animate-bounce" size={32} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-gold/60">Rotate</span>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <ZoomIn className="text-gold animate-pulse" size={32} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-gold/60">Zoom</span>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                      <MousePointer2 className="text-gold" size={32} />
                      <span className="text-[10px] font-black uppercase tracking-widest text-gold/60">Select</span>
                   </div>
                </div>
                <p className="text-cream/50 text-xs font-bold uppercase tracking-[0.3em]">Explore the Visionary Helix</p>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 md:p-10 z-20">
        <div className="flex justify-between items-start pointer-events-auto">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-navy font-black text-2xl">D</div>
             <span className="font-heading font-black text-2xl uppercase tracking-widest text-cream hidden sm:inline">Dhyanora Nexus Helix</span>
          </div>
          <Link to="/hub" className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-navy transition-all flex items-center gap-2">
             <ArrowLeft size={16} /> Back
          </Link>
        </div>
        <div className="flex flex-col items-start md:items-end md:text-right pointer-events-auto">
          <h2 className="text-4xl md:text-7xl font-heading font-black text-gold uppercase leading-none italic mb-4">THE <span className="tracking-widest text-cream">HELIX.</span></h2>
          <p className="text-gray-light/40 text-xs md:text-sm max-w-xs uppercase tracking-widest">Traverse the conglomerate visionary archive.</p>
        </div>
      </div>

      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 22], fov: 50 }}>
        <color attach="background" args={['#020202']} />
        <Suspense fallback={<Loader />}>
          <group>
             {helixData.map((item, i) => (
                <HelixNode key={i} item={item} index={i} onSelect={setSelectedItem} />
             ))}
          </group>
          <mesh position={[0, 0, 0]}>
             <cylinderGeometry args={[0.1, 0.1, 100, 12]} />
             <meshStandardMaterial color="#F2C94C" emissive="#F2C94C" emissiveIntensity={5} />
          </mesh>
          <ambientLight intensity={2.5} />
          <pointLight position={[15, 5, 15]} intensity={15} color="#F2C94C" />
          <Environment preset="night" />
        </Suspense>
        <OrbitControls enablePan={false} minDistance={10} maxDistance={40} />
      </Canvas>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-3xl cursor-pointer"
            onClick={() => setSelectedItem(null)}
          >
             <motion.div 
               initial={{ scale: 0.9, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               className="relative bg-navy border border-white/10 max-w-5xl w-full p-6 md:p-12 rounded-[3rem] md:rounded-[4rem] flex flex-col lg:flex-row gap-10 md:gap-16 cursor-default shadow-2xl"
               onClick={e => e.stopPropagation()}
             >
                <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto">
                   <img src={selectedItem.img} className="w-full h-full object-cover rounded-[2rem] md:rounded-[3rem] border border-white/5" alt={selectedItem.name} />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                   <h3 className="text-4xl md:text-6xl font-heading font-black text-cream uppercase mb-2 leading-none">{selectedItem.name}</h3>
                   <p className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-8">{selectedItem.tagline}</p>
                   <p className="text-xl text-gray-light/40 leading-relaxed mb-12 font-medium">{selectedItem.desc}</p>
                   <button className="btn-primary py-5 px-10 text-sm md:text-lg font-black uppercase tracking-widest shadow-[0_0_50px_rgba(242,201,76,0.3)]">
                      Explore Division
                   </button>
                </div>
                <button onClick={() => setSelectedItem(null)} className="absolute top-8 right-8 text-cream/20 hover:text-gold transition-colors">
                   <X size={32} />
                </button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


