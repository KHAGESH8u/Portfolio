import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Stardust field flowing globally across the entire page
const Starfield = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollYRef = useRef(0);
  const starCount = 420;

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate 3D coordinates and golden/violet palette
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(starCount * 3);
    const cols = new Float32Array(starCount * 3);

    const goldColor = new THREE.Color('#eed98d');
    const champagneColor = new THREE.Color('#fcf8e8');
    const aubergineColor = new THREE.Color('#9d4edd');
    const tempCol = new THREE.Color();

    for (let i = 0; i < starCount; i++) {
      // Wide distribution in X, Y, and deep Z
      pos[i * 3] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 22;

      // Color variation (70% warm antique gold/champagne, 30% soft royal violet)
      const rand = Math.random();
      if (rand < 0.5) {
        tempCol.copy(goldColor);
      } else if (rand < 0.8) {
        tempCol.copy(champagneColor);
      } else {
        tempCol.copy(aubergineColor);
      }

      cols[i * 3] = tempCol.r;
      cols[i * 3 + 1] = tempCol.g;
      cols[i * 3 + 2] = tempCol.b;
    }

    return [pos, cols];
  }, [starCount]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Gentle cosmic drift
      pointsRef.current.rotation.y += delta * 0.015;
      pointsRef.current.rotation.x += delta * 0.008;

      // Smooth vertical parallax linked to window scroll
      const targetY = (scrollYRef.current * 0.0012);
      pointsRef.current.position.y = THREE.MathUtils.lerp(
        pointsRef.current.position.y,
        targetY,
        0.05
      );

      // Subtle mouse responsiveness
      const targetRotZ = state.pointer.x * 0.05;
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(
        pointsRef.current.rotation.z,
        targetRotZ,
        0.05
      );
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.42}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export const GlobalStardustCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Background ambient aubergine gradient layers */}
      <div className="absolute inset-0 bg-[#07020d]" />
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[#d4af37]/5 rounded-full blur-[180px]" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#38165e]/20 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] bg-[#d4af37]/6 rounded-full blur-[180px]" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#1f0d38]/30 rounded-full blur-[160px]" />

      {/* Global Canvas */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        dpr={[1, 1.5]}
      >
        <Starfield />
      </Canvas>
    </div>
  );
};
