import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Radiant high-contrast antique gold monoliths reacting to cursor
const GoldMonoliths = () => {
  const groupRef = useRef<THREE.Group>(null);
  const monolithsRef = useRef<THREE.Mesh[]>([]);

  // 7 distinct architectural monoliths with high-sheen proportions
  const monolithData = useMemo(() => [
    { pos: [0, 0, 0] as [number, number, number], scale: [0.95, 3.6, 0.45] as [number, number, number], rotSpeed: 0.16 },
    { pos: [-2.2, 0.7, -1.2] as [number, number, number], scale: [0.7, 3.0, 0.38] as [number, number, number], rotSpeed: -0.22 },
    { pos: [2.3, -0.4, -1] as [number, number, number], scale: [0.75, 3.3, 0.42] as [number, number, number], rotSpeed: 0.2 },
    { pos: [-1.4, -1.6, 0.8] as [number, number, number], scale: [0.6, 2.4, 0.35] as [number, number, number], rotSpeed: 0.14 },
    { pos: [1.6, 1.5, 0.6] as [number, number, number], scale: [0.55, 2.5, 0.35] as [number, number, number], rotSpeed: -0.18 },
    { pos: [-3.5, -0.8, -2] as [number, number, number], scale: [0.5, 2.1, 0.3] as [number, number, number], rotSpeed: 0.12 },
    { pos: [3.3, 1.0, -1.8] as [number, number, number], scale: [0.55, 2.2, 0.32] as [number, number, number], rotSpeed: -0.15 }
  ], []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Responsive camera/scene parallax with lerp
      const targetRotY = state.pointer.x * 0.5;
      const targetRotX = -state.pointer.y * 0.4;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    }

    // Individual rotation for each gleaming monolith
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
          speed={1.6}
          rotationIntensity={0.35}
          floatIntensity={0.65}
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
            {/* Ultra-high metalness and clearcoat for gleaming high contrast */}
            <meshPhysicalMaterial
              color="#ffd700"
              emissive="#4a3b0a"
              emissiveIntensity={0.4}
              metalness={0.98}
              roughness={0.08}
              clearcoat={1.0}
              clearcoatRoughness={0.05}
              reflectivity={1.0}
              envMapIntensity={2.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// Floating shattered crystal facets with luminous highlights
const CrystalFacets = () => {
  const facetsRef = useRef<THREE.Group>(null);
  const count = 32;

  const shards = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.sin(i * 1.3) * 6.8) + (Math.random() - 0.5) * 2,
        (Math.cos(i * 0.9) * 4.8) + (Math.random() - 0.5) * 2,
        (Math.sin(i * 2.1) * 3.8) - 1.8
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: 0.22 + Math.random() * 0.55,
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
        <Float key={i} speed={shard.speed * 2} floatIntensity={0.85}>
          <mesh position={shard.position} rotation={shard.rotation} scale={shard.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshPhysicalMaterial
              color={i % 2 === 0 ? '#ffdf78' : '#7c3aed'}
              emissive={i % 2 === 0 ? '#382b05' : '#1e093e'}
              emissiveIntensity={0.3}
              metalness={0.85}
              roughness={0.12}
              transparent
              opacity={0.8}
              wireframe={i % 3 === 0}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// Radiant ambient golden stardust particles
const GoldenStardust = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 220;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.025;
      pointsRef.current.rotation.x -= delta * 0.012;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.075}
        color="#ffe28a"
        transparent
        opacity={0.65}
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
          {/* Enhanced bright luxury lighting to make gold monoliths pop */}
          <ambientLight intensity={1.1} color="#4c1d95" />
          <pointLight position={[6, 9, 8]} intensity={4.8} color="#fff6d6" />
          <pointLight position={[-8, -5, 6]} intensity={3.8} color="#ffd700" />
          <pointLight position={[0, -6, -3]} intensity={2.6} color="#c084fc" />
          <pointLight position={[0, 6, 2]} intensity={2.2} color="#fef08a" />
          <directionalLight position={[0, 10, 6]} intensity={2.8} color="#ffffff" />

          {/* High-Contrast 3D Formations */}
          <GoldMonoliths />
          <CrystalFacets />
          <GoldenStardust />
        </Suspense>
      </Canvas>
      {/* Soft gradient allowing global stars to shine through */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
