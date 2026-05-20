'use client';
import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html, Float, Stars, PerspectiveCamera, useTexture } from '@react-three/drei';
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
  const groupRef = useRef();
  const iconRef = useRef();

  const pos = useMemo(() => latLngToVector3(avatar.lat, avatar.lng, 2.3), [avatar.lat, avatar.lng]);

  useFrame((state) => {
    if (!groupRef.current || !iconRef.current) return;

    // Get world position of this avatar point
    const worldPos = new THREE.Vector3();
    groupRef.current.getWorldPosition(worldPos);

    // Get camera position
    const cameraPos = state.camera.position;

    // Get Earth mesh center in world space
    const earthCenter = new THREE.Vector3();
    if (earthMeshRef.current) {
      earthMeshRef.current.getWorldPosition(earthCenter);
    } else {
      earthCenter.set(0, -0.2, 0);
    }

    // Direction vector from Earth center to this point
    const toPoint = new THREE.Vector3().subVectors(worldPos, earthCenter).normalize();

    // Direction vector from Earth center to camera
    const toCamera = new THREE.Vector3().subVectors(cameraPos, earthCenter).normalize();

    // Dot product determines how much the point is facing the camera
    const dotProduct = toPoint.dot(toCamera);

    let targetOpacity = 0;
    let targetScale = 0.5;

    if (dotProduct > 0) {
      // 1. SCALING LOGIC:
      // At the center (dotProduct = 1.0), scale is 1.1 (larger legibility)
      // At the horizon edges (dotProduct = 0.0), scale is 0.7 (medium-small)
      targetScale = 0.7 + dotProduct * 0.4;

      // 2. OPACITY LOGIC:
      // Smoothly fade out close to the horizon edges (dotProduct < 0.15)
      if (dotProduct < 0.15) {
        targetOpacity = dotProduct / 0.15; // fade from 0 to 1
      } else {
        targetOpacity = 1.0;
      }
    } else {
      // Back side of the Earth
      targetOpacity = 0;
      targetScale = 0.5;
    }

    // Apply to DOM directly for optimal UI performance
    iconRef.current.style.transform = `scale(${targetScale})`;
    iconRef.current.style.opacity = targetOpacity;
    iconRef.current.style.pointerEvents = targetOpacity < 0.2 ? 'none' : 'auto';
  });

  return (
    <group ref={groupRef} position={pos}>
      <Html
        distanceFactor={10}
        center
      >
        <div
          ref={iconRef}
          className="relative group pointer-events-none transition-transform duration-100 ease-out"
        >
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

  // Load realistic Earth textures
  const [colorMap, bumpMap, cloudsMap] = useTexture([
    '/textures/earth-blue-marble.jpg',
    '/textures/earth-topology.png',
    '/textures/earth_clouds_1024.png'
  ]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (earthGroupRef.current) earthGroupRef.current.rotation.y = elapsed * 0.16;
    if (cloudsRef.current) cloudsRef.current.rotation.y = elapsed * 0.20;
  });

  return (
    <group>
      {/* Atmosphere Glow (Outer Rim) */}
      <mesh scale={[1.05, 1.05, 1.05]}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <shaderMaterial
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            void main() {
              float intensity = pow(max(0.0, 0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
              gl_FragColor = vec4(0.3, 0.65, 1.0, 1.0) * intensity;
            }
          `}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
        />
      </mesh>

      <group ref={earthGroupRef}>
        <mesh ref={earthMeshRef} receiveShadow castShadow>
          <sphereGeometry args={[2.2, 64, 64]} />
          <meshStandardMaterial
            map={colorMap}
            bumpMap={bumpMap}
            bumpScale={0.03}
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>
        {avatars.map((avatar) => (
          <AvatarPoint key={avatar.id} avatar={avatar} earthMeshRef={earthMeshRef} />
        ))}
      </group>

      {/* Clouds Layer */}
      <mesh ref={cloudsRef} scale={[1.015, 1.015, 1.015]}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={0.35}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <pointLight color="#4ca9ff" intensity={1.5} distance={10} />
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

      {/* Cinematic space lighting */}
      <ambientLight intensity={1.1} />
      <directionalLight position={[5, 5, 5]} intensity={2.0} castShadow />
      <pointLight position={[0, 0, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -5, -5]} intensity={1.5} color="#4ca9ff" />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <Suspense fallback={<mesh><sphereGeometry args={[2.2, 32, 32]} /><meshStandardMaterial color="#0c1d36" /></mesh>}>
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
