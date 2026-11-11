import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Interactive dynamic neon-violet wireframe cyber terrain & data mesh
const WireframeTerrain = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);

  const gridSize = 36;
  const segments = 48;

  // Initial vertex elevations
  const initialZ = useMemo(() => {
    const arr = new Float32Array((segments + 1) * (segments + 1));
    for (let i = 0; i < arr.length; i++) {
      const x = (i % (segments + 1)) - segments / 2;
      const y = Math.floor(i / (segments + 1)) - segments / 2;
      arr[i] = Math.sin(x * 0.35) * Math.cos(y * 0.35) * 1.2;
    }
    return arr;
  }, [segments]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.pointer.x * 6;
    const mouseY = state.pointer.y * 6;

    if (meshRef.current) {
      // Slow rotation for dynamic cyber mesh
      meshRef.current.rotation.z += delta * 0.05;
      meshRef.current.rotation.x = -Math.PI / 3 + state.pointer.y * 0.15;
      meshRef.current.rotation.y = state.pointer.x * 0.15;
    }

    if (geomRef.current) {
      const posAttr = geomRef.current.attributes.position as THREE.BufferAttribute;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);

        // Distance from cursor in projected space
        const dx = x - mouseX;
        const dy = y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Ripple disturbance wave
        let ripple = Math.sin(t * 2.5 + dist * 0.8) * 0.45;
        if (dist < 4.5) {
          ripple += (4.5 - dist) * 0.35; // Sharp displacement towards cursor
        }

        const baseZ = initialZ[i] || 0;
        posAttr.setZ(i, baseZ + ripple);
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.5, 0]}>
      <planeGeometry
        ref={geomRef}
        args={[gridSize, gridSize, segments, segments]}
      />
      <meshStandardMaterial
        color="#a855f7"
        emissive="#581c87"
        emissiveIntensity={0.6}
        wireframe
        transparent
        opacity={0.75}
      />
    </mesh>
  );
};

// Floating interconnected neon violet cyber nodes
const FloatingDataNodes = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 160;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#c084fc"
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export const CyberGridCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      <Canvas
        camera={{ position: [0, -3, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} color="#3b0764" />
          <pointLight position={[5, 5, 6]} intensity={3.5} color="#c084fc" />
          <pointLight position={[-5, -4, 4]} intensity={2.8} color="#d946ef" />
          <pointLight position={[0, 0, 5]} intensity={1.8} color="#a855f7" />

          <WireframeTerrain />
          <FloatingDataNodes />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
    </div>
  );
};
