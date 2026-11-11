import React, { useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Global mouse coordinates for fluid non-blocking cursor reaction
const mousePos = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0
};

if (typeof window !== 'undefined') {
  window.addEventListener(
    'pointermove',
    (e) => {
      mousePos.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    { passive: true }
  );
}

// 1. Smooth Liquid-like Topographic Porcelain Waves
const LiquidPorcelainWaves = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geomRef = useRef<THREE.PlaneGeometry>(null);

  const gridSize = 52;
  const segments = 48;

  const baseElevation = useMemo(() => {
    const arr = new Float32Array((segments + 1) * (segments + 1));
    for (let i = 0; i < arr.length; i++) {
      const x = (i % (segments + 1)) - segments / 2;
      const y = Math.floor(i / (segments + 1)) - segments / 2;
      arr[i] = Math.sin(x * 0.2) * Math.cos(y * 0.2) * 1.8;
    }
    return arr;
  }, [segments]);

  useFrame((state) => {
    mousePos.x = THREE.MathUtils.lerp(mousePos.x, mousePos.targetX, 0.06);
    mousePos.y = THREE.MathUtils.lerp(mousePos.y, mousePos.targetY, 0.06);

    const t = state.clock.getElapsedTime();
    const mx = mousePos.x * 6;
    const my = mousePos.y * 6;

    if (meshRef.current) {
      meshRef.current.rotation.x = -Math.PI / 2.65 + mousePos.y * 0.1;
      meshRef.current.rotation.z = Math.sin(t * 0.08) * 0.04 + mousePos.x * 0.06;
      meshRef.current.position.y = -2.8 + mousePos.y * 0.15;
    }

    if (geomRef.current) {
      const posAttr = geomRef.current.attributes.position as THREE.BufferAttribute;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);

        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Gentle liquid ripple wave
        let wave = Math.sin(t * 1.4 + (x * 0.25 + y * 0.25)) * 0.5;
        wave += Math.cos(t * 1.1 + x * 0.3) * 0.25;

        // Fluid ripple on cursor hover
        if (dist < 8.0) {
          wave += (8.0 - dist) * 0.28;
        }

        const b = baseElevation[i] || 0;
        posAttr.setZ(i, b + wave);
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2.8, -1]}>
      <planeGeometry
        ref={geomRef}
        args={[gridSize, gridSize, segments, segments]}
      />
      <meshStandardMaterial
        color="#0d3b3b"
        emissive="#042f2e"
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.7}
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

// 2. Floating Porcelain Geometric Monoliths
const FloatingPorcelainMonoliths = () => {
  const groupRef = useRef<THREE.Group>(null);
  const count = 14;

  const monoliths = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12 + 1,
        (Math.random() - 0.5) * 10 - 2
      ] as [number, number, number],
      scale: [0.35 + Math.random() * 0.3, 0.7 + Math.random() * 0.8, 0.35 + Math.random() * 0.3] as [number, number, number],
      rotSpeed: [
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.3
      ],
      isPyramid: i % 3 === 0
    }));
  }, [count]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mousePos.x * 0.2,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mousePos.y * 0.15,
        0.05
      );

      groupRef.current.children.forEach((child, idx) => {
        const item = monoliths[idx];
        if (item) {
          child.rotation.x += delta * item.rotSpeed[0];
          child.rotation.y += delta * item.rotSpeed[1];
          child.rotation.z += delta * item.rotSpeed[2];
          child.position.y += Math.sin(state.clock.elapsedTime * 1.2 + idx) * 0.003;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {monoliths.map((item, idx) => (
        <mesh key={idx} position={item.position} scale={item.scale}>
          {item.isPyramid ? (
            <coneGeometry args={[1, 2, 4]} />
          ) : (
            <boxGeometry args={[1, 2.2, 0.8]} />
          )}
          <meshPhysicalMaterial
            color="#f8fafc"
            emissive="#134e4a"
            emissiveIntensity={0.25}
            roughness={0.12}
            metalness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.06}
            transparent
            opacity={0.88}
          />
        </mesh>
      ))}
    </group>
  );
};

// 3. Porcelain & Aquamarine Stardust Field
const PorcelainStardust = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollYRef = useRef(0);
  const count = 500;

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const white = new THREE.Color('#ffffff');
    const teal = new THREE.Color('#2dd4bf');
    const aquamarine = new THREE.Color('#5eead4');
    const temp = new THREE.Color();

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 32;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 18;

      const r = Math.random();
      if (r < 0.55) temp.copy(white);
      else if (r < 0.85) temp.copy(teal);
      else temp.copy(aquamarine);

      cols[i * 3] = temp.r;
      cols[i * 3 + 1] = temp.g;
      cols[i * 3 + 2] = temp.b;
    }

    return [pos, cols];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.012;
      pointsRef.current.rotation.x += delta * 0.007;

      const targetY = scrollYRef.current * 0.0008;
      pointsRef.current.position.y = THREE.MathUtils.lerp(
        pointsRef.current.position.y,
        targetY,
        0.05
      );

      pointsRef.current.rotation.z = mousePos.x * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export const GlobalTealPorcelainCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none overflow-hidden select-none">
      {/* Deep Teal Background with Layered Porcelain Radiance */}
      <div className="absolute inset-0 bg-[#011414]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(20,184,166,0.22)_0%,rgba(13,78,77,0.16)_45%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(45,212,191,0.12)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(94,234,212,0.14)_0%,transparent_55%)] pointer-events-none" />

      {/* 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.65} color="#042f2e" />
          <pointLight position={[6, 6, 6]} intensity={3.8} color="#ffffff" />
          <pointLight position={[-6, -4, 4]} intensity={2.6} color="#2dd4bf" />
          <pointLight position={[0, 4, 7]} intensity={2.2} color="#5eead4" />

          {/* Liquid Topographic Waves */}
          <LiquidPorcelainWaves />

          {/* Floating Porcelain Monoliths */}
          <FloatingPorcelainMonoliths />

          {/* Stardust Field */}
          <PorcelainStardust />
        </Suspense>
      </Canvas>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#011414]/40 via-transparent to-[#011414]/70 pointer-events-none" />
    </div>
  );
};

export default GlobalTealPorcelainCanvas;
