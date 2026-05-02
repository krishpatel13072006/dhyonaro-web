import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Float, Text, MeshReflectorMaterial, Environment, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import SEO from '../components/SEO';
import { X, ArrowLeft, Move, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const exhibitionData = [
  { url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837", name: "Industrial Sheds", sideImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd" },
  { url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec", name: "Ferrous Scrap", sideImg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" },
  { url: "https://images.unsplash.com/photo-1498049794561-7780e7231661", name: "Home Appliances", sideImg: "https://images.unsplash.com/photo-1550009158-9ebf69173e03" },
  { url: "https://images.unsplash.com/photo-1590069230002-70cc3027aa21", name: "AAC Blocks", sideImg: "https://images.unsplash.com/photo-1581094288338-2314dddb7ec4" },
  { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d", name: "Metal Trading", sideImg: "https://images.unsplash.com/photo-1578575437130-527eed3abbec" },
  { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf", name: "Corporate Hub", sideImg: "https://images.unsplash.com/photo-1497366216548-37526070297c" },
  { url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902", name: "Global Supply", sideImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa" },
  { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab", name: "Mahantam Park", sideImg: "https://images.unsplash.com/photo-1581092160562-40aa08e78837" },
];

function ArtifactBox({ item, angle, radius, isMobile }) {
  const [textures, setTextures] = useState({ front: null, side: null });
  const [error, setError] = useState(false);
  const meshRef = useRef();
  
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const load = (url) => new Promise((resolve) => loader.load(url, resolve, undefined, () => resolve(null)));
    
    Promise.all([
      load(item.url + "?auto=format&fit=crop&q=80&w=800"),
      load(item.sideImg + "?auto=format&fit=crop&q=80&w=600")
    ]).then(([front, side]) => {
      if (!front || !side) setError(true);
      setTextures({ front, side });
    });
  }, [item.url, item.sideImg]);

  useFrame((state) => {
    if (meshRef.current) {
      const currentAngle = angle + state.clock.elapsedTime * 0.15;
      meshRef.current.position.x = Math.cos(currentAngle) * radius;
      meshRef.current.position.y = Math.sin(currentAngle) * radius - radius + 2.5;
      meshRef.current.position.z = Math.sin(currentAngle * 0.5) * 4;
      meshRef.current.lookAt(0, 0, 25);
    }
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <boxGeometry args={[isMobile ? 4.5 : 5.5, isMobile ? 6 : 7.5, 0.8]} />
        <meshStandardMaterial attach="material-0" map={textures.side} color={error ? "#1a2a4a" : "white"} />
        <meshStandardMaterial attach="material-1" map={textures.side} color={error ? "#1a2a4a" : "white"} />
        <meshStandardMaterial attach="material-2" map={textures.side} color={error ? "#1a2a4a" : "white"} />
        <meshStandardMaterial attach="material-3" map={textures.side} color={error ? "#1a2a4a" : "white"} />
        <meshStandardMaterial attach="material-4" map={textures.front} color={error ? "#1a2a4a" : "white"} />
        <meshStandardMaterial attach="material-5" map={textures.front} color={error ? "#1a2a4a" : "white"} />
      </mesh>
      
      <mesh position={[0, 0, -0.41]}>
        <boxGeometry args={[isMobile ? 4.7 : 5.7, isMobile ? 6.2 : 7.7, 0.1]} />
        <meshStandardMaterial color="#F2C94C" emissive="#F2C94C" emissiveIntensity={0.5} />
      </mesh>

      <Text position={[0, isMobile ? -3.5 : -4.2, 0.5]} fontSize={0.3} color="white" anchorY="middle">
        {item.name.toUpperCase()}
      </Text>
    </group>
  );
}

function StaticArtifact({ item, position, isMobile }) {
  const [textures, setTextures] = useState({ front: null, side: null });
  const [error, setError] = useState(false);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const load = (url) => new Promise((resolve) => loader.load(url, resolve, undefined, () => resolve(null)));
    
    Promise.all([
      load(item.url + "?auto=format&fit=crop&q=80&w=800"),
      load(item.sideImg + "?auto=format&fit=crop&q=80&w=600")
    ]).then(([front, side]) => {
      if (!front || !side) setError(true);
      setTextures({ front, side });
    });
  }, [item.url, item.sideImg]);

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh>
           <boxGeometry args={[isMobile ? 4 : 5, isMobile ? 5.5 : 7, 0.8]} />
           <meshStandardMaterial attach="material-0" map={textures.side} color={error ? "#1a2a4a" : "white"} />
           <meshStandardMaterial attach="material-1" map={textures.side} color={error ? "#1a2a4a" : "white"} />
           <meshStandardMaterial attach="material-2" map={textures.side} color={error ? "#1a2a4a" : "white"} />
           <meshStandardMaterial attach="material-3" map={textures.side} color={error ? "#1a2a4a" : "white"} />
           <meshStandardMaterial attach="material-4" map={textures.front} color={error ? "#1a2a4a" : "white"} />
           <meshStandardMaterial attach="material-5" map={textures.front} color={error ? "#1a2a4a" : "white"} />
           
           <mesh position={[0, 0, -0.41]}>
              <boxGeometry args={[isMobile ? 4.2 : 5.2, isMobile ? 5.7 : 7.2, 0.1]} />
              <meshStandardMaterial color="#F2C94C" emissive="#F2C94C" emissiveIntensity={0.5} />
           </mesh>

           <Text position={[0, isMobile ? -3.2 : -4, 0.6]} fontSize={isMobile ? 0.25 : 0.35} color="white" anchorY="middle">
             {item.name.toUpperCase()}
           </Text>
        </mesh>
      </Float>
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-black/90 backdrop-blur-3xl p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] border border-white/5 shadow-2xl min-w-[280px] md:min-w-[300px]">
         <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mb-6" />
         <p className="text-gold font-black uppercase tracking-[0.5em] text-[10px]">Materializing Horizon...</p>
      </div>
    </Html>
  );
}

export default function Exhibition() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const radius = 20;

  return (
    <div className="fixed inset-0 w-full h-screen h-[100dvh] bg-black text-white z-[9999]">
      <SEO title="Dhyanora Spatial Horizon | 3D Artifact Exhibition" description="Step into the Dhyanora Artifact Archive. A cinematic 3D exhibition of industrial assets and corporate milestones." />
      
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 md:p-10 z-20">
        <div className="flex justify-between items-start pointer-events-auto">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-navy font-black text-2xl shadow-2xl">D</div>
             <span className="font-heading font-black text-2xl uppercase tracking-widest text-cream hidden sm:inline">Dhyanora Spatial Horizon</span>
          </div>
          <Link to="/hub" className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-navy transition-all flex items-center gap-2">
             <ArrowLeft size={16} /> Back
          </Link>
        </div>

        <div className="flex flex-col items-start pointer-events-auto">
          <h2 className="text-3xl sm:text-4xl md:text-8xl font-heading font-black text-cream uppercase leading-none mb-4 italic">THE <span className="text-gold tracking-widest text-cream">HORIZON.</span></h2>
          <p className="text-gray-light/40 text-[10px] md:text-sm max-w-[200px] md:max-w-xs uppercase tracking-widest leading-relaxed">
            {isMobile ? "Responsive Spatial Grid." : "Cinematic 3D Scrolling Carousel."}
          </p>
        </div>
      </div>

      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 28], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 65]} />
        
        <Suspense fallback={<Loader />}>
          <group>
            {isMobile ? (
               exhibitionData.map((item, i) => {
                  const cols = 2;
                  const x = (i % cols - 0.5) * 10;
                  const y = (Math.floor(i / cols) - 1.5) * -12;
                  return <StaticArtifact key={i} item={item} position={[x, y, 0]} isMobile={true} />;
               })
            ) : (
               exhibitionData.map((item, i) => {
                  const angleOffset = (i / exhibitionData.length) * Math.PI * 2;
                  return <ArtifactBox key={i} item={item} angle={angleOffset} radius={radius} isMobile={false} />;
               })
            )}
          </group>

          <ambientLight intensity={2.5} />
          <pointLight position={[0, 20, 15]} intensity={20} color="#F2C94C" />
          <pointLight position={[-20, -10, 10]} intensity={8} color="#3B82F6" />
          
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -18, 0]}>
            <planeGeometry args={[150, 150]} />
            <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.6}
            />
          </mesh>

          <Environment preset="night" />
        </Suspense>

        <OrbitControls enablePan={true} enableZoom={true} />
      </Canvas>
    </div>
  );
}
