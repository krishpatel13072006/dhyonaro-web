'use client';
import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Html, Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// --- DATA ---
const avatars = [
  { id: 1, name: "India", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", lat: 19.0760, lng: 72.8777 }, 
  { id: 2, name: "USA", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", lat: 40.7128, lng: -74.0060 }, 
  { id: 3, name: "UK", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", lat: 51.5074, lng: -0.1278 }, 
  { id: 4, name: "Japan", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200", lat: 35.6762, lng: 139.6503 }, 
  { id: 5, name: "Australia", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200", lat: -33.8688, lng: 151.2093 }, 
  { id: 6, name: "UAE", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200", lat: 25.2048, lng: 55.2708 }, 
  { id: 7, name: "Brazil", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", lat: -23.5505, lng: -46.6333 }, 
  { id: 8, name: "South Africa", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200", lat: -26.2041, lng: 28.0473 }, 
  { id: 9, name: "Canada", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200", lat: 43.6532, lng: -79.3832 }, 
  { id: 10, name: "Singapore", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=200", lat: 1.3521, lng: 103.8198 }, 
  { id: 11, name: "Germany", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=200", lat: 52.5200, lng: 13.4050 }, 
  { id: 12, name: "Egypt", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", lat: 30.0444, lng: 31.2357 }, 
  { id: 13, name: "Russia", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200", lat: 55.7558, lng: 37.6173 }, 
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

const AvatarPoint = ({ avatar, earthMeshRef }) => {
  const pos = useMemo(() => latLngToVector3(avatar.lat, avatar.lng, 2.3), [avatar.lat, avatar.lng]);

  return (
    <group position={pos}>
      <Html 
        occlude={[earthMeshRef]} 
        distanceFactor={10}
        center
      >
        <div className="relative group pointer-events-none">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#fad77e] shadow-[0_0_15px_rgba(250,215,126,0.3)] overflow-hidden bg-white pointer-events-auto cursor-pointer">
            <img 
              src={avatar.img} 
              className="w-full h-full object-cover" 
              alt={avatar.name} 
            />
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-black/80 text-white text-[8px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest">
            {avatar.name}
          </div>
        </div>
      </Html>
    </group>
  );
};

const Earth = () => {
  const earthGroupRef = useRef();
  const earthMeshRef = useRef();
  const cloudsRef = useRef();
  
  const [map, bumpMap, cloudMap] = useLoader(THREE.TextureLoader, [
    'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    'https://unpkg.com/three-globe/example/img/earth-topology.png',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
  ]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (earthGroupRef.current) earthGroupRef.current.rotation.y = elapsed * 0.45;
    if (cloudsRef.current) cloudsRef.current.rotation.y = elapsed * 0.52;
  });

  return (
    <group>
      <group ref={earthGroupRef}>
        <mesh ref={earthMeshRef} receiveShadow castShadow>
          <sphereGeometry args={[2.2, 64, 64]} />
          <meshStandardMaterial 
            map={map}
            bumpMap={bumpMap}
            bumpScale={0.05}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
        {avatars.map((avatar) => (
          <AvatarPoint key={avatar.id} avatar={avatar} earthMeshRef={earthMeshRef} />
        ))}
      </group>

      <mesh ref={cloudsRef} scale={[1.03, 1.03, 1.03]}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial 
          map={cloudMap}
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>

      <pointLight color="#4ca9ff" intensity={2} distance={10} />
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
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2.5} />
      <pointLight position={[0, 0, 10]} intensity={3} color="#ffffff" />
      <pointLight position={[-10, -5, -5]} intensity={1.5} color="#4ca9ff" />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <Suspense fallback={<mesh><sphereGeometry args={[2.2, 32, 32]} /><meshStandardMaterial color="#2233ff" /></mesh>}>
        <group position={[0, -0.2, 0]}>
          <Earth />
        </group>
      </Suspense>
    </>
  );
};

const GlobalReach = () => {
  return (
    <section className="relative h-[80vh] md:h-[120vh] min-h-[600px] md:min-h-[900px] w-full bg-black overflow-hidden flex flex-col items-center pt-24 md:pt-48">
      <div className="absolute top-12 md:top-24 w-full text-center z-30 px-6 pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-7xl font-heading font-black text-white uppercase italic"
        >
          OUR GLOBAL <span className="text-[#C1B09C]">PRESENCE</span>
        </motion.h2>
      </div>

      <div className="w-full h-full cursor-grab active:cursor-grabbing relative z-0">
        <Canvas dpr={[1, 2]} shadows>
          <Scene />
        </Canvas>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default GlobalReach;
