import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    float t = uTime * 0.2;
    
    // Create multiple organic moving points
    float n1 = sin(uv.x * 3.0 + t) * cos(uv.y * 2.0 - t * 1.5);
    float n2 = cos(uv.y * 4.0 - t * 0.8) * sin(uv.x * 2.5 + t * 1.2);
    float n3 = sin(length(uv - 0.5) * 5.0 - t * 2.0);
    
    float mixFactor = (n1 + n2 + n3 + 3.0) / 6.0;
    
    vec3 color = mix(uColor1, uColor2, mixFactor);
    color = mix(color, uColor3, n3 * 0.5 + 0.5);
    
    // Add subtle vignetting
    float dist = distance(uv, vec2(0.5));
    color *= 1.0 - dist * 0.4;
    
    gl_FragColor = vec4(color, 1.0);
}
`;

const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const MeshBackground = () => {
    const meshRef = useRef();
    
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color("#0A0D1A") }, // Deep Navy
        uColor2: { value: new THREE.Color("#1A2B5C") }, // Steel Blue
        uColor3: { value: new THREE.Color("#1E1600") }  // Dark Gold Hint
    }), []);

    useFrame((state) => {
        meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[10, 10]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />
        </mesh>
    );
};

const MovingMesh = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <MeshBackground />
            </Canvas>
            <div className="absolute inset-0 bg-navy/60 backdrop-blur-[40px]" />
        </div>
    );
};

export default MovingMesh;
