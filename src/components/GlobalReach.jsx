import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Html, Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// --- DATA ---
const avatars = [
  { id: 1, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", lat: 20, lng: 70 },
  { id: 2, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", lat: -10, lng: -40 },
  { id: 3, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", lat: 45, lng: 120 },
  { id: 4, img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200", lat: 35, lng: -100 },
  { id: 5, img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200", lat: -30, lng: 20 },
  { id: 6, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200", lat: 50, lng: 10 },
  { id: 7, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", lat: 15, lng: -150 },
  { id: 8, img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200", lat: -20, lng: 160 },
];

// Helper to convert Lat/Lng to 3D Vector
const latLngToVector3 = (lat, lng, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

// --- COMPONENTS ---

const Earth = () => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  
  // Load high-fidelity realistic textures
  const [map, bumpMap, cloudMap] = useLoader(THREE.TextureLoader, [
    'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    'https://unpkg.com/three-globe/example/img/earth-topology.png',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
  ]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (earthRef.current) earthRef.current.rotation.y = elapsed * 0.05;
    if (cloudsRef.current) cloudsRef.current.rotation.y = elapsed * 0.07;
  });

  return (
    <group>
      {/* Main Globe - Realistic 'Blue Marble' Textures */}
      <mesh ref={earthRef} receiveShadow castShadow>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial 
          map={map}
          bumpMap={bumpMap}
          bumpScale={0.05}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Cloud Layer - Adds realistic atmosphere */}
      <mesh ref={cloudsRef} scale={[1.01, 1.01, 1.01]}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial 
          map={cloudMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Atmospheric Glow Layer 1 (Tight Aura) */}
      <mesh scale={[1.05, 1.05, 1.05]}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial 
          color="#4ca9ff"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Atmospheric Glow Layer 2 (Soft Outer Halo) */}
      <mesh scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial 
          color="#4ca9ff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Internal Radial Glow */}
      <pointLight color="#4ca9ff" intensity={2} distance={10} />

      {/* Avatar Points */}
      {avatars.map((avatar) => {
        const pos = latLngToVector3(avatar.lat, avatar.lng, 2.22);
        return (
          <group key={avatar.id} position={pos}>
            <Html 
              distanceFactor={10} 
              occlude={[earthRef]} 
              style={{
                transition: 'all 0.5s',
                opacity: 1,
              }}
            >
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.2 }}
                className="relative cursor-pointer group"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-2xl overflow-hidden bg-white">
                  <img src={avatar.img} className="w-full h-full object-cover" alt="User" />
                </div>
              </motion.div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8.5]} />
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      
      <ambientLight intensity={1.5} />
      {/* Powerful Key Light from Front-Top */}
      <directionalLight position={[5, 5, 5]} intensity={2.5} />
      <pointLight position={[0, 0, 10]} intensity={3} color="#ffffff" />
      <pointLight position={[-10, -5, -5]} intensity={1.5} color="#4ca9ff" />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Suspense fallback={<mesh><sphereGeometry args={[2.2, 32, 32]} /><meshStandardMaterial color="#2233ff" /></mesh>}>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <group position={[0, -0.2, 0]}>
            <Earth />
          </group>
        </Float>
      </Suspense>
    </>
  );
};

const GlobalReach = () => {
  return (
    <section className="relative h-[120vh] min-h-[900px] w-full bg-black overflow-hidden flex flex-col items-center pt-32 md:pt-48">
      
      {/* SECTION HEADING */}
      <div className="absolute top-16 md:top-24 w-full text-center z-30 px-6 pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-heading font-black text-white uppercase italic tracking-tighter"
        >
          OUR GLOBAL <span className="text-[#C1B09C]">PRESENCE</span>
        </motion.h2>
      </div>

      {/* 3D CANVAS */}
      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas dpr={[1, 2]} shadows>
          <Scene />
        </Canvas>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

    </section>
  );
};

export default GlobalReach;
