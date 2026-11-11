import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Floating gold monoliths reacting smoothly to cursor
const GoldMonoliths = () => {
  const groupRef = useRef<THREE.Group>(null);
  const monolithsRef = useRef<THREE.Mesh[]>([]);

  // Generate 7 distinct architectural gold monoliths
  const monolithData = useMemo(() => [
    { pos: [0, 0, 0] as [number, number, number], scale: [0.9, 3.4, 0.4] as [number, number, number], rotSpeed: 0.15 },
    { pos: [-2.2, 0.6, -1.2] as [number, number, number], scale: [0.65, 2.8, 0.35] as [number, number, number], rotSpeed: -0.2 },
    { pos: [2.3, -0.4, -1] as [number, number, number], scale: [0.7, 3.1, 0.4] as [number, number, number], rotSpeed: 0.18 },
    { pos: [-1.4, -1.5, 0.8] as [number, number, number], scale: [0.55, 2.2, 0.3] as [number, number, number], rotSpeed: 0.12 },
    { pos: [1.6, 1.4, 0.6] as [number, number, number], scale: [0.5, 2.4, 0.3] as [number, number, number], rotSpeed: -0.16 },
    { pos: [-3.4, -0.8, -2] as [number, number, number], scale: [0.45, 1.9, 0.25] as [number, number, number], rotSpeed: 0.1 },
    { pos: [3.2, 0.9, -1.8] as [number, number, number], scale: [0.5, 2.0, 0.3] as [number, number, number], rotSpeed: -0.14 }
  ], []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle responsive camera/scene parallax with lerp
      const targetRotY = state.pointer.x * 0.45;
      const targetRotX = -state.pointer.y * 0.35;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    }

    // Individual subtle rotation for each monolith
    monolithsRef.current.forEach((mesh, idx) => {
      if (mesh) {
        const speed = monolithData[idx]?.rotSpeed || 0.1;
        mesh.rotation.y += delta * speed;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {monolithData.map((data, index) => (
        <Float
          key={index}
          speed={1.5}
          rotationIntensity={0.4}
          floatIntensity={0.6}
        >
          <mesh
            ref={(el) => {
              if (el) monolithsRef.current[index] = el;
            }}
            position={data.pos}
            scale={data.scale}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color="#d4af37"
              metalness={0.92}
              roughness={0.18}
              envMapIntensity={1.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// Floating shattered crystal facets in aubergine/gold space
const CrystalFacets = () => {
  const facetsRef = useRef<THREE.Group>(null);
  const count = 28;

  const shards = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.sin(i * 1.3) * 6.5) + (Math.random() - 0.5) * 2,
        (Math.cos(i * 0.9) * 4.5) + (Math.random() - 0.5) * 2,
        (Math.sin(i * 2.1) * 3.5) - 2
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: 0.2 + Math.random() * 0.5,
      speed: 0.1 + Math.random() * 0.2
    }));
  }, [count]);

  useFrame((_, delta) => {
    if (facetsRef.current) {
      facetsRef.current.rotation.y += delta * 0.04;
      facetsRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group ref={facetsRef}>
      {shards.map((shard, i) => (
        <Float key={i} speed={shard.speed * 2} floatIntensity={0.8}>
          <mesh position={shard.position} rotation={shard.rotation} scale={shard.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#eed98d' : '#3e1b6c'}
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.65}
              wireframe={i % 3 === 0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// Subtle ambient golden stardust particles
const GoldenStardust = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 180;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#e5c158"
        transparent
        opacity={0.45}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export const MonolithHeroCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Warm luxurious royal lighting */}
          <ambientLight intensity={0.6} color="#2d144e" />
          <pointLight position={[6, 8, 8]} intensity={2.2} color="#f8eed0" />
          <pointLight position={[-8, -5, 5]} intensity={1.5} color="#e5c158" />
          <pointLight position={[0, -6, -4]} intensity={1.8} color="#9d4edd" />
          <directionalLight position={[0, 10, 5]} intensity={1.2} color="#fcf8e8" />

          {/* 3D Geometric Formations */}
          <GoldMonoliths />
          <CrystalFacets />
          <GoldenStardust />
        </Suspense>
      </Canvas>
      {/* Bottom fade blending into deep aubergine void */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07020d] via-[#07020d]/70 to-transparent pointer-events-none" />
    </div>
  );
};
